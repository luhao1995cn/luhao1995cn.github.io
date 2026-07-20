import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const failures = [];

const publicationsSource = await readFile(path.join(root, "src/data/publications.ts"), "utf8");
const articleSource = publicationsSource.split("export const patents")[0];
const insightSource = await readFile(path.join(root, "src/data/insights.ts"), "utf8");
const insightFiles = (await readdir(path.join(root, "content/insights"))).filter((file) => file.endsWith(".md"));

const publicationCount = [...articleSource.matchAll(/\bid:\s*"[^"]+"/g)].length;
const publicationKinds = [...articleSource.matchAll(/\bkind:\s*"(journal-article|meeting-abstract|unverified-record)"/g)];

if (publicationKinds.length !== publicationCount) {
  failures.push(`Publication classification mismatch: ${publicationKinds.length} kinds for ${publicationCount} records`);
}

const doiUrls = [...articleSource.matchAll(/doi:\s*"(https:\/\/doi\.org\/[^"]+)"/g)].map((match) => match[1].toLowerCase());
const duplicateDois = doiUrls.filter((doi, index) => doiUrls.indexOf(doi) !== index);
if (duplicateDois.length) failures.push(`Duplicate publication DOI: ${[...new Set(duplicateDois)].join(", ")}`);

const insightCount = [...insightSource.matchAll(/\bsourceFile:\s*"/g)].length;
const referenceCount = [...insightSource.matchAll(/\bcitation:\s*"/g)].length;

if (insightCount !== insightFiles.length) {
  failures.push(`Insight metadata mismatch: ${insightCount} entries for ${insightFiles.length} Markdown files`);
}

if (referenceCount < insightCount) {
  failures.push(`Every insight needs a reference: ${referenceCount} references for ${insightCount} entries`);
}

const publicSourceFiles = await readdir(path.join(root, "src/app"), { recursive: true, withFileTypes: true });
const auditPhrases = /owner-supplied|source-checked|previous site|source repository|privacy by design/i;

for (const entry of publicSourceFiles) {
  if (!entry.isFile() || !/\.(?:tsx|ts)$/.test(entry.name)) continue;
  const file = path.join(entry.parentPath, entry.name);
  const source = await readFile(file, "utf8");
  if (auditPhrases.test(source)) failures.push(`Public audit language remains in ${path.relative(root, file)}`);
}

if (failures.length) {
  console.error(`Content check failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Content check passed: ${publicationCount} publication records and ${insightCount} referenced insights.`);
}

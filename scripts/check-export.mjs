import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "out");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const absolute = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(absolute) : [absolute];
    })
  );
  return nested.flat();
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

function candidatesFor(reference, htmlFile) {
  const clean = decodeURIComponent(reference.split("#")[0].split("?")[0]);
  const relative = clean.startsWith("/")
    ? clean.slice(1)
    : path.relative(output, path.resolve(path.dirname(htmlFile), clean));
  const normalized = relative.replace(/^\.\//, "");
  const base = path.join(output, normalized);

  if (normalized.endsWith("/")) return [path.join(base, "index.html")];
  if (path.extname(normalized)) return [base];
  return [base, `${base}.html`, path.join(base, "index.html")];
}

const files = await walk(output);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const failures = [];
let checked = 0;

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const relativeHtml = path.relative(output, htmlFile);
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);

  if (html.includes('/assets/assets/') || html.includes('/assets/img/')) {
    failures.push(`${relativeHtml} still contains a legacy asset path`);
  }

  if (!relativeHtml.startsWith("posts/") && relativeHtml !== "404.html") {
    if (!/<link rel="canonical" href="https:\/\/[^" ]+"/.test(html)) {
      failures.push(`${relativeHtml} is missing an absolute canonical URL`);
    }
    for (const property of ["og:title", "og:description", "og:url"]) {
      if (!html.includes(`property="${property}"`)) failures.push(`${relativeHtml} is missing ${property}`);
    }
  }

  for (const reference of references) {
    if (
      !reference ||
      reference.startsWith("#") ||
      reference.startsWith("mailto:") ||
      reference.startsWith("tel:") ||
      reference.startsWith("data:") ||
      reference.startsWith("http://") ||
      reference.startsWith("https://")
    ) {
      continue;
    }

    checked += 1;
    const candidates = candidatesFor(reference, htmlFile);
    const results = await Promise.all(candidates.map(exists));
    if (!results.some(Boolean)) {
      failures.push(`${path.relative(output, htmlFile)} -> ${reference}`);
    }
  }
}

const expected = [
  "index.html",
  "about/index.html",
  "research/index.html",
  "publications/index.html",
  "experience/index.html",
  "insights/index.html",
  "cv/index.html",
  "contact/index.html",
  "sitemap.xml",
  "robots.txt",
  "404.html"
];

for (const removedRoute of ["tabs/research/index.html", "tabs/publications/index.html", "tabs/contact/index.html"]) {
  if (await exists(path.join(output, removedRoute))) failures.push(`Duplicate route still exported: ${removedRoute}`);
}

for (const expectedFile of expected) {
  if (!(await exists(path.join(output, expectedFile)))) failures.push(`Missing ${expectedFile}`);
}

if (failures.length) {
  console.error(`Export check failed with ${failures.length} issue(s):`);
  for (const failure of failures.slice(0, 40)) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Export check passed: ${htmlFiles.length} HTML files and ${checked} internal references checked.`);
}

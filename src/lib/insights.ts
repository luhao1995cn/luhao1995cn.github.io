import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { cache } from "react";
import matter from "gray-matter";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { insights } from "@/data/insights";
import { siteConfig } from "@/data/site";
import type { InsightMeta } from "@/types/content";
import { withBasePath } from "@/lib/paths";

type LegacyFrontMatter = {
  layout?: unknown;
  title?: unknown;
  math?: unknown;
};

export type InsightDocument = InsightMeta & {
  contentHtml: string;
  math: boolean;
  sourceTitle: string;
};

const postsDirectory = path.join(process.cwd(), "content", "insights");

const legacyAssetMap = new Map<string, string>([
  [
    "/assets/img/posts/consciousness_hypothesis.png",
    "/assets/posts/consciousness-hypothesis.webp"
  ],
  ["/assets/img/why-enhance-tcr.png", "/assets/posts/why-enhance-tcr.webp"],
  ...["PhD1", "PhD2", "PhD3", "PhD5"].map(
    (stem) =>
      [
        `/assets/img/phd/${stem}.jpg`,
        `/assets/posts/phd/${stem.toLowerCase()}.webp`
      ] as const
  ),
  ...["1", "2", "3"].map(
    (stem) =>
      [
        `/assets/img/posts/2026-06-16-donghu-vo2-symposium/${stem}.jpeg`,
        `/assets/posts/workshop/workshop-${stem}.webp`
      ] as const
  ),
  ...Array.from({ length: 12 }, (_, index) => String(244441 + index).padStart(7, "0")).map(
    (stem) =>
      [
        `/assets/assets/${stem}.jpg`,
        `/assets/posts/laser/laser-${stem}.webp`
      ] as const
  ),
  ...["20260501135232_34_29", "20260501135235_35_29"].map(
    (stem) =>
      [
        `/assets/assets/${stem}.jpg`,
        `/assets/posts/laser/laser-${stem}.webp`
      ] as const
  )
]);

function rewriteLegacyAssets(source: string) {
  let rewritten = source;

  for (const [legacyPath, optimizedPath] of legacyAssetMap) {
    rewritten = rewritten.replaceAll(legacyPath, withBasePath(optimizedPath));
  }

  return rewritten;
}

/**
 * Marked treats several TeX backslash sequences as Markdown escapes. Protecting
 * complete expressions before parsing keeps the source equations byte-for-byte
 * intact for KaTeX auto-render, while fenced code remains normal Markdown.
 */
function protectMath(source: string) {
  const fragments: string[] = [];
  const fencedCodePattern = /(```[\s\S]*?```|~~~[\s\S]*?~~~)/g;

  const protect = (value: string) => {
    const token = `INSIGHTMATHTOKEN${fragments.length}END`;
    fragments.push(value);
    return token;
  };

  const protectTextSegment = (segment: string) =>
    segment
      .replace(/\$\$[\s\S]*?\$\$/g, protect)
      .replace(/\\\[[\s\S]*?\\\]/g, protect)
      .replace(/\\\([\s\S]*?\\\)/g, protect)
      .replace(/\$(?!\s)(?:\\.|[^$\r\n])+(?<!\s)\$/g, protect);

  const protectedSource = source
    .split(fencedCodePattern)
    .map((segment, index) => (index % 2 === 1 ? segment : protectTextSegment(segment)))
    .join("");

  return {
    source: protectedSource,
    restore(html: string) {
      return fragments.reduce(
        (restored, fragment, index) =>
          restored.replaceAll(`INSIGHTMATHTOKEN${index}END`, fragment),
        html
      );
    }
  };
}

function addProgressiveImageAttributes(html: string) {
  return html.replace(
    /<img\b(?![^>]*\bloading=)([^>]*)>/gi,
    '<img loading="lazy" decoding="async"$1>'
  );
}

function secureNewWindowLinks(html: string) {
  return html.replaceAll(
    'target="_blank"',
    'target="_blank" rel="noopener noreferrer"'
  );
}

async function renderMarkdown(source: string) {
  const protectedMath = protectMath(rewriteLegacyAssets(source));
  const parsed = await marked.parse(protectedMath.source, {
    async: false,
    gfm: true,
    breaks: false
  });

  const enhanced = secureNewWindowLinks(
    addProgressiveImageAttributes(protectedMath.restore(parsed))
  );

  return sanitizeHtml(enhanced, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img"],
    allowedAttributes: {
      "*": ["class", "style"],
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading", "decoding"]
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelative: false,
    allowedStyles: {
      "*": {
        display: [/^(?:grid|flex|block|inline|inline-block)$/],
        position: [/^(?:relative|absolute|static)$/],
        inset: [/^[\d.% -]+$/],
        width: [/^[\d.%a-z -]+$/],
        height: [/^[\d.%a-z -]+$/],
        "max-width": [/^[\d.%a-z -]+$/],
        margin: [/^[\d.%a-z -]+$/],
        "margin-top": [/^[\d.%a-z -]+$/],
        "margin-bottom": [/^[\d.%a-z -]+$/],
        padding: [/^[\d.%a-z -]+$/],
        gap: [/^[\d.%a-z -]+$/],
        "grid-template-columns": [/^[\d.%a-z(), -]+$/],
        "flex-direction": [/^(?:row|column)$/],
        "justify-content": [/^(?:start|center|end|space-between)$/],
        overflow: [/^(?:hidden|auto|visible)$/],
        "object-fit": [/^(?:cover|contain)$/],
        opacity: [/^(?:0(?:\.\d+)?|1(?:\.0+)?)$/],
        color: [/^(?:#[\da-fA-F]{3,8}|[a-zA-Z]+)$/],
        background: [/^[\d.%#(),a-zA-Z -]+$/],
        "border-radius": [/^[\d.%a-z -]+$/],
        "box-shadow": [/^[\d.%#(),a-zA-Z -]+$/],
        "font-size": [/^[\d.%a-z -]+$/],
        "font-style": [/^(?:normal|italic)$/],
        "font-weight": [/^[1-9]00$/],
        "line-height": [/^[\d.]+$/],
        "text-align": [/^(?:left|center|right)$/]
      }
    }
  });
}

export function getInsightMeta(slug: string) {
  return insights.find((insight) => insight.slug === slug) ?? null;
}

export function getInsightStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export const getInsightBySlug = cache(async (slug: string): Promise<InsightDocument | null> => {
  const meta = getInsightMeta(slug);

  if (!meta) return null;

  const sourcePath = path.join(postsDirectory, meta.sourceFile);
  const source = await readFile(sourcePath, "utf8");
  const parsed = matter(source);
  const frontMatter = parsed.data as LegacyFrontMatter;

  if (typeof frontMatter.title !== "string" || !frontMatter.title.trim()) {
    throw new Error(`Missing title in legacy post front matter: ${meta.sourceFile}`);
  }

  return {
    ...meta,
    contentHtml: await renderMarkdown(parsed.content),
    math: frontMatter.math === true || frontMatter.math === "true",
    sourceTitle: frontMatter.title.trim()
  };
});

export function getAdjacentInsights(slug: string) {
  const index = insights.findIndex((insight) => insight.slug === slug);

  if (index < 0) return { newer: null, older: null };

  return {
    newer: insights[index - 1] ?? null,
    older: insights[index + 1] ?? null
  };
}

export function getInsightCanonicalPath(slug: string) {
  return withBasePath(`/insights/${slug}/`);
}

export function getInsightAbsoluteUrl(slug: string) {
  return new URL(getInsightCanonicalPath(slug), `${siteConfig.url.replace(/\/$/, "")}/`).toString();
}

export function createInsightMetadata(meta: InsightMeta): Metadata {
  const canonical = getInsightCanonicalPath(meta.slug);
  const image = withBasePath(meta.image ?? "/og-image.png");
  const imageAlt = meta.imageAlt ?? `${meta.title} — ${siteConfig.fullName}`;

  return {
    title: meta.title,
    description: meta.excerpt,
    authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: canonical,
      siteName: siteConfig.fullName,
      title: meta.title,
      description: meta.excerpt,
      publishedTime: `${meta.date}T00:00:00.000Z`,
      authors: [siteConfig.fullName],
      section: meta.category,
      images: [{ url: image, alt: imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.excerpt,
      images: [image]
    }
  };
}

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MathContent } from "@/components/content/math-content";
import { siteConfig } from "@/data/site";
import {
  getAdjacentInsights,
  getInsightAbsoluteUrl,
  type InsightDocument
} from "@/lib/insights";
import { withBasePath } from "@/lib/paths";

type InsightArticleProps = {
  insight: InsightDocument;
};

function absoluteAssetUrl(pathname: string) {
  return new URL(withBasePath(pathname), `${siteConfig.url.replace(/\/$/, "")}/`).toString();
}

export function InsightArticle({ insight }: InsightArticleProps) {
  const { newer, older } = getAdjacentInsights(insight.slug);
  const canonicalUrl = getInsightAbsoluteUrl(insight.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.date,
    inLanguage: "en",
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteConfig.url
    },
    articleSection: insight.category,
    citation: insight.references.map((reference) => reference.href),
    ...(insight.image ? { image: absoluteAssetUrl(insight.image) } : {})
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
        }}
      />

      <header className="shell pt-[clamp(4.5rem,10vw,9rem)] pb-[clamp(4rem,8vw,7.5rem)]">
        <Link
          href="/insights/"
          className="print-hidden mb-[clamp(3rem,7vw,6rem)] inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.045em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All research notes
        </Link>

        <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="eyebrow !m-0">{insight.category}</span>
          <span className="h-px w-8 bg-[var(--line-strong)]" aria-hidden="true" />
          <time
            dateTime={insight.date}
            className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--faint)]"
          >
            {insight.displayDate}
          </time>
        </div>

        <h1 className="m-0 max-w-[1120px] text-[clamp(2.7rem,7vw,6.7rem)] leading-[0.96] font-medium tracking-[-0.067em] text-[var(--ink)] text-balance">
          {insight.title}
        </h1>
        <p className="mt-9 mb-0 max-w-[760px] text-[clamp(1rem,1.55vw,1.3rem)] leading-[1.7] text-[var(--muted)]">
          {insight.excerpt}
        </p>
      </header>

      <div className="border-t border-[var(--line)]">
        <div className="shell grid gap-12 py-[clamp(4rem,8vw,7.5rem)] lg:grid-cols-[minmax(180px,0.28fr)_minmax(0,0.72fr)] lg:gap-20 xl:gap-28">
          <aside className="print-hidden" aria-label="Article details">
            <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--line)] pt-5 lg:sticky lg:top-28 lg:grid-cols-1">
              <div>
                <dt className="mono mb-2 text-[9px] uppercase tracking-[0.16em] text-[var(--faint)]">
                  Author
                </dt>
                <dd className="m-0 text-[13px] text-[var(--ink)]">{siteConfig.fullName}</dd>
              </div>
              <div>
                <dt className="mono mb-2 text-[9px] uppercase tracking-[0.16em] text-[var(--faint)]">
                  Published
                </dt>
                <dd className="m-0 text-[13px] text-[var(--ink)]">
                  <time dateTime={insight.date}>{insight.displayDate}</time>
                </dd>
              </div>
              <div>
                <dt className="mono mb-2 text-[9px] uppercase tracking-[0.16em] text-[var(--faint)]">
                  Topic
                </dt>
                <dd className="m-0 text-[13px] leading-6 text-[var(--ink)]">
                  {insight.category}
                </dd>
              </div>
            </dl>
          </aside>

          <div className="min-w-0 max-w-[820px]">
            <MathContent
              html={insight.contentHtml}
              renderMath={insight.math}
              className="prose article-prose min-w-0 break-words [&_.formula-block]:my-8 [&_.formula-block]:overflow-x-auto [&_.formula-block]:py-2 [&_.post-date]:mb-7 [&_.post-date]:font-mono [&_.post-date]:text-[10px] [&_.post-date]:tracking-[0.15em] [&_.post-date]:text-[var(--faint)] [&_a]:break-words [&_li]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6"
            />

            <section className="mt-16 border-t border-[var(--line)] pt-8" aria-labelledby="references-heading">
              <p className="eyebrow">Sources</p>
              <h2 id="references-heading" className="mt-3 mb-6 text-2xl font-medium tracking-[-0.035em] text-[var(--ink)]">
                References
              </h2>
              <ol className="m-0 grid list-decimal gap-4 pl-5 text-[13px] leading-6 text-[var(--muted)]">
                {insight.references.map((reference) => (
                  <li key={reference.href}>
                    <a className="text-[var(--ink)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--accent)]" href={reference.href} target="_blank" rel="noreferrer">
                      {reference.citation}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>

      {(newer || older) && (
        <nav
          className="print-hidden shell grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--line)] mb-[clamp(5rem,10vw,9rem)] sm:grid-cols-2"
          aria-label="Research note navigation"
        >
          {newer ? (
            <Link
              href={`/insights/${newer.slug}/`}
              className="group flex min-h-40 flex-col justify-between gap-8 bg-[var(--surface)] p-6 transition-colors hover:bg-[var(--surface-raised)] sm:p-8"
            >
              <span className="mono inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[var(--faint)]">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Newer note
              </span>
              <strong className="max-w-md text-[15px] leading-6 font-medium text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                {newer.title}
              </strong>
            </Link>
          ) : (
            <span className="hidden bg-[var(--surface)] sm:block" aria-hidden="true" />
          )}
          {older ? (
            <Link
              href={`/insights/${older.slug}/`}
              className="group flex min-h-40 flex-col items-end justify-between gap-8 bg-[var(--surface)] p-6 text-right transition-colors hover:bg-[var(--surface-raised)] sm:p-8"
            >
              <span className="mono inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[var(--faint)]">
                Older note
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <strong className="max-w-md text-[15px] leading-6 font-medium text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                {older.title}
              </strong>
            </Link>
          ) : (
            <span className="hidden bg-[var(--surface)] sm:block" aria-hidden="true" />
          )}
        </nav>
      )}
    </article>
  );
}

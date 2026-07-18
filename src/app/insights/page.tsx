import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { insights } from "@/data/insights";
import { withBasePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Research notes",
  description:
    "Research notes by Lu Hao on functional oxide thin films, phase transitions, infrared sensing and microfabrication.",
  alternates: { canonical: "/insights/" },
  openGraph: {
    title: "Research notes — Lu Hao",
    description:
      "Research notes on functional oxide thin films, phase transitions, infrared sensing and microfabrication.",
    url: "/insights/",
    type: "website"
  }
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Notes · methods · perspectives"
        title="Research notes"
        intro="Working explanations, practical methods and device-oriented perspectives from research in functional materials."
      />

      <section className="section section-rule" aria-labelledby="insights-list-heading">
        <div className="shell">
          <div className="mb-10 flex items-end justify-between gap-8 border-b border-[var(--line)] pb-5 sm:mb-14">
            <h2
              id="insights-list-heading"
              className="m-0 text-[clamp(1.5rem,3vw,2.4rem)] font-medium tracking-[-0.045em]"
            >
              All notes
            </h2>
            <p className="mono m-0 text-[10px] uppercase tracking-[0.16em] text-[var(--faint)]">
              {String(insights.length).padStart(2, "0")} entries
            </p>
          </div>

          <ol className="insights-grid m-0 grid list-none gap-5 p-0 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((insight, index) => {
              const headingId = `insight-${index + 1}`;

              return (
                <li key={insight.slug}>
                  <article className="group h-full overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface-soft)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[rgba(113,225,196,0.34)] hover:bg-[var(--surface-raised)]">
                    <Link
                      href={`/insights/${insight.slug}/`}
                      className="flex h-full flex-col"
                      aria-labelledby={headingId}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[linear-gradient(135deg,rgba(113,225,196,0.12),rgba(128,169,255,0.08),rgba(255,255,255,0.02))]">
                        {insight.image ? (
                          <Image
                            src={withBasePath(insight.image)}
                            alt={insight.imageAlt ?? ""}
                            fill
                            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                          />
                        ) : (
                          <div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(113,225,196,0.18),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.035),transparent)]"
                            aria-hidden="true"
                          >
                            <span className="mono absolute right-5 bottom-4 text-[42px] font-medium tracking-[-0.08em] text-white/10">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        )}
                        <span className="mono absolute top-4 left-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[9px] uppercase tracking-[0.13em] text-white/80 backdrop-blur-md">
                          {insight.category}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <div className="mb-5 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.12em] text-[var(--faint)]">
                          <time dateTime={insight.date} className="mono">
                            {insight.displayDate}
                          </time>
                          <span className="mono">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <h3
                          id={headingId}
                          className="m-0 text-[clamp(1.25rem,2vw,1.65rem)] leading-[1.15] font-medium tracking-[-0.04em] text-[var(--ink)] text-balance"
                        >
                          {insight.title}
                        </h3>
                        <p className="mt-4 mb-7 text-[14px] leading-7 text-[var(--muted)]">
                          {insight.excerpt}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.04em] text-[var(--accent)]">
                          Read note
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}

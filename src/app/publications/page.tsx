import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PublicationEntry } from "@/components/publications/publication-entry";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { conferences } from "@/data/experience";
import { journalArticles, patents } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Journal articles, patents and conference contributions by Dr. Lu Hao in functional oxides, VO₂ thin films and related materials physics.",
  alternates: { canonical: "/publications/" }
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Research outputs, organized and source-checked."
        intro="Journal metadata and DOI links have been reconciled against publisher records where available. Patent and conference entries remain faithful to the original site and are clearly separated."
      />

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow={`${journalArticles.length} journal records`}
            title="Journal articles"
            description="Hao Lu is highlighted in each author line. One legacy record remains visible without its invalid DOI while full bibliographic details are confirmed."
          />
        </Reveal>
        <div className="publication-list">
          {journalArticles.map((article, index) => (
            <Reveal key={article.id} delay={Math.min(index * 0.035, 0.2)}>
              <PublicationEntry article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section patent-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={`${patents.length} repository records`}
              title="Patents"
              description="These identifiers and author lists are preserved verbatim in substance from the previous site. Official patent documents were not present in the repository and should be supplied for a final legal-record check."
            />
          </Reveal>
          <div className="patent-grid">
            {patents.map((patent, index) => (
              <Reveal key={patent.id} delay={index * 0.05}>
                <article className="patent-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p className="patent-id">{patent.identifier}</p>
                  <h3>{patent.title}</h3>
                  <p>{patent.authors}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Academic exchange"
            title="Conference contributions"
            description="The supplied CV lists ten oral/poster contributions. Its two DPG entries labeled 2024 are reproduced as supplied, without inferring missing presentation titles."
          />
        </Reveal>
        <div className="conference-list">
          {conferences.map((conference) => (
            <div key={`${conference.year}-${conference.title}-${conference.location}`} className="conference-row">
              <span>{conference.year}</span>
              <h3>{conference.title}</h3>
              <p>{conference.location}</p>
              <p>{conference.contribution}</p>
              <ExternalLink aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

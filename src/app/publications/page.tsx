import { ExternalLink } from "lucide-react";
import { PublicationEntry } from "@/components/publications/publication-entry";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { conferences } from "@/data/experience";
import {
  meetingAbstracts,
  patents,
  peerReviewedArticles,
  unverifiedPublicationRecords
} from "@/data/publications";
import { PublicationsJsonLd } from "@/components/seo/publications-json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Publications",
  description: "Journal articles, meeting abstracts, patents and conference contributions by Dr. Lu Hao in functional oxides, thin-film battery anodes and related materials physics.",
  path: "/publications/"
});

export default function PublicationsPage() {
  return (
    <>
      <PublicationsJsonLd />
      <PageHeader
        eyebrow="Publications"
        title="Research outputs across materials physics and thin-film devices."
        intro="Peer-reviewed journal articles, meeting abstracts, patents and conference contributions are presented in separate sections for clarity."
      />

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow={`${peerReviewedArticles.length} journal articles`}
            title="Peer-reviewed journal articles"
            description="Work spanning phase-transition oxides, epitaxial thin films, smart-window coatings and related functional materials."
          />
        </Reveal>
        <div className="publication-list">
          {peerReviewedArticles.map((article, index) => (
            <Reveal key={article.id} delay={Math.min(index * 0.035, 0.2)}>
              <PublicationEntry article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow={`${meetingAbstracts.length} meeting abstract`}
            title="Meeting abstracts"
            description="Conference abstracts are listed separately from peer-reviewed journal articles."
          />
        </Reveal>
        <div className="publication-list">
          {meetingAbstracts.map((article, index) => (
            <Reveal key={article.id} delay={Math.min(index * 0.035, 0.2)}>
              <PublicationEntry article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      {unverifiedPublicationRecords.length ? (
        <section className="section section-rule shell">
          <Reveal>
            <SectionHeading
              eyebrow="Bibliographic follow-up"
              title="Additional record"
              description="This item is retained outside the formal publication list until complete journal metadata can be confirmed."
            />
          </Reveal>
          <div className="publication-list">
            {unverifiedPublicationRecords.map((article) => (
              <PublicationEntry key={article.id} article={article} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="section patent-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={`${patents.length} records`}
              title="Patents"
              description="Patent and application records related to functional films, smart glass, spectroscopy and infrared detector structures."
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
            description="Selected oral and poster contributions at international materials, optics and physics meetings."
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

import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { PrintButton } from "@/components/cv/print-button";
import { education, experience } from "@/data/experience";
import { journalArticles, patents } from "@/data/publications";
import { capabilities, researchKeywords, siteConfig, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description:
    "A privacy-aware web CV for Dr. Lu Hao, covering education, postdoctoral and doctoral research, MEMS engineering, publications and experimental methods.",
  alternates: { canonical: "/cv/" }
};

function CompactTimeline({ items }: { items: typeof experience }) {
  return (
    <div className="cv-timeline">
      {items.map((item) => (
        <article key={`${item.period}-${item.title}`}>
          <span>{item.period}</span>
          <div>
            <h3>{item.title}</h3>
            {item.organization ? <h4>{item.organization}</h4> : null}
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CVPage() {
  return (
    <section className="cv-page shell">
      <div className="cv-toolbar print-hidden">
        <p>Owner-supplied academic CV · privacy-filtered for the public web</p>
        <PrintButton />
      </div>

      <header className="cv-header">
        <div>
          <p className="eyebrow">Curriculum vitae</p>
          <h1>{siteConfig.fullName}</h1>
          <p>{siteConfig.role}</p>
        </div>
        <address>
          <a href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" /> {siteConfig.email}</a>
          <span><MapPin aria-hidden="true" /> {siteConfig.location}</span>
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <ExternalLink aria-hidden="true" /> {link.label}
            </a>
          ))}
        </address>
      </header>

      <div className="cv-note">
        This web CV uses the owner-supplied source document but intentionally omits date and place of birth, gender, nationality, street address, telephone number, private email and third-party email addresses. Academic and technical records are retained.
      </div>

      <div className="cv-layout">
        <aside>
          <section className="cv-section">
            <h2>Research focus</h2>
            <ul>{researchKeywords.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="cv-section">
            <h2>Methods</h2>
            {capabilities.map((group) => (
              <div key={group.label} className="cv-method-group">
                <h3>{group.label}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </section>
          <section className="cv-section">
            <h2>Patents</h2>
            <p>{patents.length} patent/application records are listed on the Publications page with the identifiers supplied in the source CV.</p>
          </section>
        </aside>

        <div>
          <section className="cv-section">
            <h2>Profile</h2>
            <p className="cv-profile">{siteConfig.shortBio}</p>
          </section>
          <section className="cv-section">
            <h2>Research & industry experience</h2>
            <CompactTimeline items={experience} />
          </section>
          <section className="cv-section">
            <h2>Education</h2>
            <CompactTimeline items={education} />
          </section>
          <section className="cv-section">
            <h2>Peer-reviewed publications</h2>
            <ol className="cv-publications">
              {journalArticles.map((article) => (
                <li key={article.id}>
                  <p>{article.authors}</p>
                  <h3>{article.title}</h3>
                  <p><em>{article.journal}</em>{article.details ? `, ${article.details}` : ""} ({article.year})</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </section>
  );
}

import { ExternalLink, Mail, MapPin } from "lucide-react";
import { education, experience } from "@/data/experience";
import { meetingAbstracts, patents, peerReviewedArticles } from "@/data/publications";
import { capabilities, researchKeywords, siteConfig, socialLinks } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CV",
  description:
    "Academic CV for Dr. Lu Hao, covering education, postdoctoral and doctoral research, MEMS engineering, publications and experimental methods.",
  path: "/cv/"
});

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

function Authors({ value }: { value: string }) {
  return value.split(/(Hao Lu)/g).map((part, index) =>
    part === "Hao Lu" ? <strong key={index}>{part}</strong> : part
  );
}

function PublicationList({ articles }: { articles: typeof peerReviewedArticles }) {
  return (
    <ol className="cv-publications">
      {articles.map((article) => (
        <li key={article.id}>
          <p><Authors value={article.authors} /></p>
          <h3>{article.title}</h3>
          <p>
            {article.journal ? <em>{article.journal}</em> : null}
            {article.details ? `, ${article.details}` : ""} ({article.year})
            {article.doi ? (
              <> · <a href={article.doi}>DOI</a></>
            ) : null}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function CVPage() {
  return (
    <section className="cv-page shell">
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

      <div className="cv-note print-hidden">
        This public version presents academic and professional information only. Personal contact details are intentionally limited.
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
            <p>{patents.length} patent and application records are listed on the Publications page.</p>
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
          <section className="cv-section cv-section-publications">
            <h2>Peer-reviewed publications</h2>
            <PublicationList articles={peerReviewedArticles} />
          </section>
          <section className="cv-section cv-section-abstracts">
            <h2>Meeting abstracts</h2>
            <PublicationList articles={meetingAbstracts} />
          </section>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { ResearchSignal } from "@/components/home/research-signal";
import { PublicationEntry } from "@/components/publications/publication-entry";
import { ResearchCard } from "@/components/research/research-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PersonJsonLd } from "@/components/seo/person-json-ld";
import { experience } from "@/data/experience";
import { featuredArticles } from "@/data/publications";
import { currentFocus, researchThemes } from "@/data/research";
import { researchKeywords, siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <section className="hero shell">
        <div className="hero-copy">
          <div>
            <p className="eyebrow">Functional oxides · Thin films · Device physics</p>
            <h1>
              Phase transitions.
              <span>Engineered in thin films.</span>
            </h1>
            <p className="hero-intro">{siteConfig.shortBio}</p>
            <div className="button-row">
              <Link className="button-primary" href="/research/">
                Explore research <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="button-secondary" href="/publications/">
                View publications
              </Link>
            </div>
          </div>
          <div className="hero-keywords">
            <span className="hero-keyword-label">Research spectrum</span>
            <ul>
              {researchKeywords.slice(0, 5).map((keyword) => <li key={keyword}>{keyword}</li>)}
            </ul>
          </div>
        </div>
        <div className="hero-visual-wrap">
          <ResearchSignal />
        </div>
      </section>

      <section className="section section-rule shell" id="research">
        <Reveal>
          <SectionHeading
            eyebrow="Selected research"
            title="From atomic arrangement to device response."
            description="A research practice built around structure–property relationships: tune a thin-film system, resolve what changes across the transition, then test what that behavior can enable."
          />
        </Reveal>
        <div className="research-grid">
          {researchThemes.map((theme, index) => (
            <Reveal key={theme.id} delay={index * 0.06}>
              <ResearchCard theme={theme} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section publication-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Selected publications"
              title="Peer-reviewed work across phase-transition materials."
              description="Selected articles on VO₂ strain, alloying, Raman response and smart-window buffer layers. Full bibliographic records are available on the publications page."
            />
          </Reveal>
          <div className="publication-list">
            {featuredArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.05}>
                <PublicationEntry article={article} ordinal={index + 1} />
              </Reveal>
            ))}
          </div>
          <div className="section-link-row">
            <Link className="text-link" href="/publications/">
              All publications and patents <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Research milestones, from thin films to devices."
            description="Postdoctoral and doctoral research, industrial MEMS engineering and international materials work across functional thin films and device fabrication."
          />
        </Reveal>
        <Reveal>
          <ExperienceTimeline items={experience.slice(0, 3)} />
        </Reveal>
        <div className="section-link-row">
          <Link className="text-link" href="/experience/">
            Full experience record <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section focus-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
            eyebrow="Current focus"
            title="Three active lines of thought."
            description="Current questions connecting functional materials, microscale structures and device-relevant performance."
            />
          </Reveal>
          <div className="focus-grid">
            {currentFocus.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="focus-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p className="eyebrow">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <Reveal>
          <div className="contact-banner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s connect materials physics with the next useful device question.</h2>
            </div>
            <div className="contact-banner-action">
              <a className="button-primary" href={`mailto:${siteConfig.email}`}>
                <Mail aria-hidden="true" /> Email Dr. Lu Hao
              </a>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

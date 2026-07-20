import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { ResearchSignal } from "@/components/home/research-signal";
import { PublicationEntry } from "@/components/publications/publication-entry";
import { ResearchCard } from "@/components/research/research-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PersonJsonLd } from "@/components/seo/person-json-ld";
import { experience } from "@/data/experience";
import { featuredArticles } from "@/data/publications";
import { currentFocus, researchThemes } from "@/data/research";
import { researchWorkflow, siteConfig } from "@/data/site";

const featuredThemeIds = new Set(["strain-engineering", "smart-windows", "laser-writing"]);
const featuredThemes = researchThemes.filter((theme) => featuredThemeIds.has(theme.id));
const secondaryThemes = researchThemes.filter((theme) => !featuredThemeIds.has(theme.id));
const currentRole = experience[0];

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <section className="hero shell">
        <div className="hero-copy">
          <div>
            <p className="eyebrow">Thin-film growth · Characterization · Device integration</p>
            <h1>
              Thin films, understood.
              <span>Devices, enabled.</span>
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
            <span className="hero-keyword-label">Research workflow</span>
            <ul>
              {researchWorkflow.map((stage) => <li key={stage}>{stage}</li>)}
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
            eyebrow="Featured case studies"
            title="Three projects across the materials-to-device workflow."
            description="Detailed cases show how controlled thin-film systems, physical characterization and fabrication connect to evidence and device-facing questions."
          />
        </Reveal>
        <div className="featured-research-grid">
          {featuredThemes.map((theme, index) => (
            <Reveal key={theme.id} delay={index * 0.06}>
              <ResearchCard theme={theme} />
            </Reveal>
          ))}
        </div>
        <Reveal className="secondary-research-block">
          <div className="secondary-research-heading">
            <div>
              <p className="eyebrow">Additional domains</p>
              <h2>Related device and energy-storage directions.</h2>
            </div>
            <p>These themes extend the same processing–characterization logic without competing with the three principal case studies.</p>
          </div>
          <div className="secondary-research-grid">
            {secondaryThemes.map((theme) => (
              <Link key={theme.id} href={theme.href}>
                <span>{theme.index}</span>
                <div>
                  <h3>{theme.title}</h3>
                  <p>{theme.description}</p>
                  <ul aria-label={`${theme.title} topics`}>
                    {theme.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section publication-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Selected publications"
              title="Evidence across thin films and functional materials."
              description="Selected articles on epitaxy, strain, alloying, spectroscopy and interface design. Full bibliographic records are available on the publications page."
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

      <section className="section section-rule home-current-section">
        <div className="shell home-current-grid">
          <Reveal className="home-current-role">
            <p className="eyebrow">Current position</p>
            <span>{currentRole.period}</span>
            <h2>{currentRole.title}</h2>
            <h3>{currentRole.organization}</h3>
            <p>{currentRole.description}</p>
            <Link className="text-link" href="/experience/">
              Full experience record <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="home-current-focus" delay={0.08}>
            <p className="eyebrow">Current focus</p>
            <h2>Questions in progress.</h2>
            <div>
              {currentFocus.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{item.label}</small>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section shell">
        <Reveal>
          <div className="contact-banner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s connect a materials question with a useful device direction.</h2>
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

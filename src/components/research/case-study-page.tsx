import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { researchCases } from "@/data/research-cases";
import { withBasePath } from "@/lib/paths";
import type { ResearchCaseStudy } from "@/types/content";

function EvidenceLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <Link href={href}>{children}</Link>;
}

export function CaseStudyPage({ study }: { study: ResearchCaseStudy }) {
  const otherStudies = researchCases.filter((item) => item.slug !== study.slug);

  return (
    <article className="case-study">
      <header className="case-hero shell">
        <Reveal>
          <Link className="case-back-link" href="/research/">
            <ArrowLeft aria-hidden="true" /> All research
          </Link>
          <p className="eyebrow">Case study {study.index} · {study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="case-hero-summary">{study.summary}</p>
          <div className="case-meta">
            <div>
              <span>Period</span>
              <strong>{study.period}</strong>
            </div>
            <div>
              <span>Context</span>
              <strong>{study.organization}</strong>
            </div>
            <div>
              <span>Evidence status</span>
              <strong>{study.status}</strong>
            </div>
          </div>
        </Reveal>

        <Reveal className={`case-hero-media case-hero-media-${study.slug}`} delay={0.08}>
          <Image
            src={withBasePath(study.image)}
            alt={study.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 82vw"
          />
          <ul aria-label="Research topics">
            {study.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </Reveal>
      </header>

      <section className="section section-rule shell case-question">
        <Reveal>
          <p className="eyebrow">Research question</p>
          <h2>{study.question}</h2>
        </Reveal>
      </section>

      <section className="section case-workflow-section">
        <div className="shell">
          <Reveal>
            <div className="case-section-heading">
              <div>
                <p className="eyebrow">Experimental logic</p>
                <h2>From controlled input to interpretable outcome.</h2>
              </div>
              <p>The workflow is stated at the level supported by the public project and publication record.</p>
            </div>
          </Reveal>
          <div className="case-workflow-grid">
            {study.workflow.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.07}>
                <article>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule shell case-contribution-grid">
        <Reveal>
          <p className="eyebrow">Contribution</p>
          <h2>Work represented by this case.</h2>
          <ul className="case-check-list">
            {study.contributions.map((item) => (
              <li key={item}><Check aria-hidden="true" /> <span>{item}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="case-significance" delay={0.08}>
          <p className="eyebrow">Why it matters</p>
          <p>{study.significance}</p>
        </Reveal>
      </section>

      {study.gallery ? (
        <section className="section case-gallery-section">
          <div className="shell">
            <Reveal>
              <div className="case-section-heading">
                <div>
                  <p className="eyebrow">Original research images</p>
                  <h2>Designed structure, observed outcome.</h2>
                </div>
              </div>
            </Reveal>
            <div className="case-gallery">
              {study.gallery.map((item, index) => (
                <Reveal key={item.image} delay={index * 0.07}>
                  <figure>
                    <div>
                      <Image
                        src={withBasePath(item.image)}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                      />
                    </div>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section case-evidence-section">
        <div className="shell">
          <Reveal>
            <div className="case-section-heading">
              <div>
                <p className="eyebrow">Evidence</p>
                <h2>Public records behind the narrative.</h2>
              </div>
              <p>Publication, thesis and research-note links are separated from the explanatory project text.</p>
            </div>
          </Reveal>
          <div className="case-evidence-list">
            {study.evidence.map((item, index) => {
              const content = (
                <>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{item.label}</p>
                    <h3>{item.title}</h3>
                    <small>{item.detail}</small>
                  </div>
                  {item.href ? <ArrowUpRight aria-hidden="true" /> : null}
                </>
              );

              return (
                <Reveal key={`${item.label}-${item.title}`} delay={index * 0.05}>
                  {item.href ? (
                    <EvidenceLink href={item.href}>{content}</EvidenceLink>
                  ) : (
                    <div className="case-evidence-item">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-rule shell case-more">
        <Reveal>
          <p className="eyebrow">More case studies</p>
          <h2>Continue across the workflow.</h2>
        </Reveal>
        <div>
          {otherStudies.map((item) => (
            <Link key={item.slug} href={`/research/${item.slug}/`}>
              <span>{item.index}</span>
              <strong>{item.title}</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

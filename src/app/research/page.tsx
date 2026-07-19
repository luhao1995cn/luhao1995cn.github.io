import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { ResearchCard } from "@/components/research/research-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { broaderInterests, researchApproach, researchThemes } from "@/data/research";
import { capabilities } from "@/data/site";

export const metadata: Metadata = {
  title: "Research",
  description: "Research themes spanning VO₂ thin films, functional oxides, thin-film battery anodes, all-solid-state batteries, MEMS, infrared detectors and laser microfabrication.",
  alternates: { canonical: "/research/" }
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Functional thin films, resolved from structure to application."
        intro="The research program connects VO₂ and related functional oxides with complementary thin-film energy-storage systems: how deposition, composition and interfaces govern material response—and how that behavior carries into optical, electrical, battery and microscale device concepts."
      />

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Research architecture"
            title="Grow. Resolve. Translate."
            description="A compact way to understand how the projects connect, from controlled thin-film structures to practical materials questions."
          />
        </Reveal>
        <div className="approach-grid">
          {researchApproach.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <article className="approach-card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section research-page-themes">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Core themes"
              title="Research stories with a direct evidence trail."
              description="Each theme links to a publication or project note already present in the source repository."
            />
          </Reveal>
          <div className="research-grid">
            {researchThemes.map((theme, index) => (
              <Reveal key={theme.id} delay={index * 0.05}>
                <ResearchCard theme={theme} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experimental landscape"
            title="Methods live in context."
            description="The previous site records sustained work with PLD, ion-beam sputtering and sputtering, alongside structural, spectroscopic and electrical analysis."
          />
        </Reveal>
        <div className="methods-table">
          {capabilities.map((group) => (
            <div key={group.label} className="methods-row">
              <h3>{group.label}</h3>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="research-interest-note">
          <p className="eyebrow">Listed interests</p>
          <p>{broaderInterests.join(" · ")}</p>
        </div>
      </section>
    </>
  );
}

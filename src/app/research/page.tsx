import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { ResearchCard } from "@/components/research/research-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { broaderInterests, researchApproach, researchThemes } from "@/data/research";
import { capabilities } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Research",
  description: "Research connecting thin-film growth, structure–property characterization and micro/nanofabrication with coatings, batteries, sensing and device-oriented materials.",
  path: "/research/"
});

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Thin-film materials, connected from growth to device performance."
        intro="The research programme follows a complete experimental workflow: control thin-film composition and interfaces, resolve structural and physical response, then evaluate how that behavior carries into coatings, batteries, sensors and microscale devices."
      />

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Research architecture"
            title="Grow. Resolve. Integrate."
            description="A compact view of how the projects connect, from controlled material synthesis and measurement to device-oriented evaluation."
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
            eyebrow="Application domains"
            title="Different systems, one connected experimental workflow."
            description="Each theme shows how thin-film design, physical characterization and fabrication connect to a publication, research note or device-facing question."
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
            title="Capabilities across the complete research cycle."
            description="Thin-film deposition and microfabrication are paired with structural, spectroscopic, optical, electrical and electrochemical analysis."
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

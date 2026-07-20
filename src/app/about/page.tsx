import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, siteConfig } from "@/data/site";
import { broaderInterests } from "@/data/research";
import { withBasePath } from "@/lib/paths";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: "About Dr. Lu Hao, a materials physicist working across thin-film growth, structure–property characterization, micro/nanofabrication and device-oriented research.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A materials physicist working across the thin-film-to-device workflow."
        intro="I am a postdoctoral researcher connecting thin-film growth, physical-property characterization and micro/nanofabrication with device-oriented materials questions."
      />

      <section className="section section-rule shell about-profile">
        <Reveal className="about-portrait">
          <Image
            src={withBasePath(siteConfig.profileImage)}
            alt={siteConfig.profileImageAlt}
            width={768}
            height={980}
            priority
            sizes="(max-width: 800px) 100vw, 38vw"
          />
          <div className="portrait-caption">
            <span>{siteConfig.fullName}</span>
            <span>{siteConfig.location}</span>
          </div>
        </Reveal>
        <Reveal className="about-narrative" delay={0.08}>
          <p className="eyebrow">Research perspective</p>
          <h2>Grow, measure, understand, integrate.</h2>
          <p className="about-lead">
            The central question is how processing, composition, interfaces and structure determine material response—and how that understanding can guide a useful device or architecture.
          </p>
          <p>
            My work connects thin-film growth with structural, optical, electrical and electrochemical characterization. VO₂ and related oxides provide a strong foundation, alongside smart-window coatings, Raman analysis, MEMS and uncooled infrared detector concepts, and controlled thin-film anodes for lithium-ion and all-solid-state batteries.
          </p>
          <p>
            Recent work extends this workflow into programmable laser direct writing and microscale functional structures. Across these systems, the emphasis remains the same: establish a controlled process, resolve the resulting material behavior and test how it carries into a real structure or device.
          </p>
          <p>
            My academic path spans chemistry and materials science at Hubei Engineering University, graduate thin-film research at Hubei University, and doctoral and postdoctoral work at Justus Liebig University Giessen. Earlier industrial experience in MEMS R&amp;D adds a fabrication and manufacturability perspective to my materials research.
          </p>
          <a className="text-link" href="https://doi.org/10.22029/jlupub-20608" target="_blank" rel="noreferrer">
            Doctoral thesis record <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <section className="section capability-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Research practice"
              title="An experimental toolkit spanning growth, analysis and translation."
              description="Core methods used to grow, resolve and translate functional thin films, complemented by broader experience across deposition and microfabrication platforms."
            />
          </Reveal>
          <div className="capability-grid">
            {capabilities.map((group, index) => (
              <Reveal key={group.label} delay={index * 0.08}>
                <article className="capability-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.label}</h3>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Broader interests"
            title="Adjacent systems and emerging questions."
            description="Related materials systems and device questions that extend the central thin-film research programme."
          />
        </Reveal>
        <div className="interest-list">
          {broaderInterests.map((interest, index) => (
            <Reveal key={interest} delay={index * 0.04}>
              <div className="interest-item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{interest}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

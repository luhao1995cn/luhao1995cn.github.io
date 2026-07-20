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
  description: "About Dr. Lu Hao, a condensed-matter physicist working on VO₂, functional oxide thin films and device-facing phase-transition research.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A materials physicist focused on transitions that can do useful work."
        intro="I am a postdoctoral researcher working across condensed-matter physics, functional oxide thin films and device-oriented materials questions, with VO₂ as a central research system."
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
          <h2>Structure, transition, function.</h2>
          <p className="about-lead">
            The central question is how a material&apos;s structure—and the strain, interfaces and composition around it—reshapes a phase transition.
          </p>
          <p>
            My work connects thin-film growth and characterization with optical, electrical and electrochemical response. It spans VO₂/TiO₂ epitaxy, alloyed and buffered VO₂ systems, smart-window coatings, Raman analysis, MEMS, uncooled infrared detector concepts and controlled thin-film anodes for lithium-ion and all-solid-state batteries.
          </p>
          <p>
            Recent work also reaches into programmable laser direct writing, microscale functional structures and transition-enabled thermal management. Across these topics, my emphasis remains the same: connect material-level physics with the behavior that matters in a real structure or device.
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

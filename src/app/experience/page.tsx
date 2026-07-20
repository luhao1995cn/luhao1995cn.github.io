import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { conferences, education, experience, researchProjects } from "@/data/experience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Experience",
  description:
    "Education, postdoctoral and doctoral research, MEMS industry experience, research projects and conference contributions for Dr. Lu Hao.",
  path: "/experience/"
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Materials research across universities, laboratories and devices."
        intro="A public academic record covering postdoctoral and doctoral research, industrial MEMS development, thin-film materials work and international scientific exchange."
      />

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Career"
            title="Research and engineering appointments"
            description="Academic and industrial appointments spanning functional materials, thin-film processes, MEMS and device-oriented research."
          />
        </Reveal>
        <Reveal>
          <ExperienceTimeline items={experience} />
        </Reveal>
      </section>

      <section className="section education-section">
        <div className="shell">
          <Reveal>
            <SectionHeading
            eyebrow="Education"
            title="From chemistry and materials science to condensed-matter physics."
            description="Degree history and thesis topics across chemistry, materials science and experimental condensed-matter physics."
            />
          </Reveal>
          <Reveal>
            <ExperienceTimeline items={education} />
          </Reveal>
        </div>
      </section>

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Research programmes"
            title="The project record behind the timeline."
            description="Academic and technical work organized by the scientific question, experimental contribution and device context."
          />
        </Reveal>
        <div className="project-evidence-grid">
          {researchProjects.map((project, index) => (
            <Reveal key={`${project.period}-${project.title}`} delay={Math.min(index * 0.05, 0.2)}>
              <article className="project-evidence-card">
                <div className="project-evidence-meta">
                  <span>{project.period}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-evidence-organization">{project.organization}</p>
                <p>{project.summary}</p>
                <ul>
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="project-evidence-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section experience-practice">
        <div className="shell experience-practice-grid">
          <Reveal>
            <div>
              <p className="eyebrow">Experimental practice</p>
              <h2>Growth, characterization and microfabrication.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="experience-prose">
              <p>
                My hands-on work includes RF sputtering, pulsed laser deposition, ion-beam sputtering and industrial PVD/CVD process integration, together with photolithography, lift-off, MEMS fabrication and direct laser writing.
              </p>
              <p>
                The characterization toolkit includes XRD, Raman, XPS, optical transmittance, AFM, SEM, spectroscopic ellipsometry and Hall measurements—used to connect composition and structure with optical, electrical and device-level behavior.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-rule shell">
        <Reveal>
          <SectionHeading
            eyebrow="Presentations"
            title="Academic exchange across China and Germany."
            description="Oral and poster contributions at materials, optics and physics meetings in China and Germany."
          />
        </Reveal>
        <div className="conference-list conference-list-compact">
          {conferences.map((conference) => (
            <div key={`${conference.year}-${conference.title}-${conference.location}`} className="conference-row">
              <span>{conference.year}</span>
              <h3>{conference.title}</h3>
              <p>{conference.location}</p>
              <p>{conference.contribution}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

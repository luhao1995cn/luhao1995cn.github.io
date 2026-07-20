import { ArrowUpRight, Copy, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, socialLinks } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Dr. Lu Hao about functional oxide thin films, battery anodes, phase-transition materials, MEMS and infrared sensing research.",
  path: "/contact/"
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start with a precise research question."
        intro="For research conversations around functional oxides, VO₂ thin films, thin-film battery anodes, phase-transition devices, MEMS, infrared sensing or laser microfabrication, email is the most direct route."
      />

      <section className="section section-rule shell contact-grid">
        <Reveal className="contact-primary">
          <p className="eyebrow">Primary email</p>
          <a href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <p>For research collaboration, scientific exchange and professional enquiries.</p>
        </Reveal>
        <Reveal className="contact-details" delay={0.08}>
          <div className="contact-detail-row">
            <MapPin aria-hidden="true" />
            <div>
              <span>Research location</span>
              <p>{siteConfig.location}</p>
            </div>
          </div>
          <div className="contact-detail-row">
            <Copy aria-hidden="true" />
            <div>
              <span>Profiles</span>
              <nav aria-label="Research profiles">
                {socialLinks.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <ArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section contact-note-section">
        <div className="shell">
          <Reveal>
            <div className="contact-note">
              <span>01</span>
              <p>
                Only professional contact information is published on this website.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

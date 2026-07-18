import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">Open to research conversations</p>
          <h2>Materials questions become useful when they meet real devices.</h2>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Lu Hao</p>
        <p>Functional oxides · Thin films · Device physics</p>
        <Link href="/contact/">Contact</Link>
      </div>
    </footer>
  );
}

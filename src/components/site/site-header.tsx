import Link from "next/link";
import { navigation } from "@/data/site";
import { MobileNav } from "@/components/site/mobile-nav";
import { SiteMark } from "@/components/site/site-mark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <SiteMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={item.label === "Contact" ? "nav-contact" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

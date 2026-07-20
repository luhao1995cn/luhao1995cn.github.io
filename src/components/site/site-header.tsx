import { DesktopNav } from "@/components/site/desktop-nav";
import { MobileNav } from "@/components/site/mobile-nav";
import { SiteMark } from "@/components/site/site-mark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <SiteMark />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

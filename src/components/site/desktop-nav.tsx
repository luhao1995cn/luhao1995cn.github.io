"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="desktop-nav" aria-label="Primary navigation">
      {navigation.map((item) => {
        const current = isCurrentPath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={item.label === "Contact" ? "nav-contact" : ""}
            aria-current={current ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

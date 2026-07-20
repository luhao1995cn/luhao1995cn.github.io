"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "@/data/site";

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef(false);

  useEffect(() => {
    if (!open) return;

    const background = [document.querySelector("main"), document.querySelector("footer")]
      .filter((element): element is HTMLElement => element instanceof HTMLElement);
    const trigger = triggerRef.current;

    document.body.style.overflow = "hidden";
    background.forEach((element) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });

    requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    return () => {
      document.body.style.overflow = "";
      background.forEach((element) => {
        element.inert = false;
        element.removeAttribute("aria-hidden");
      });
      if (restoreFocus.current) trigger?.focus();
      restoreFocus.current = false;
    };
  }, [open]);

  function closeMenu(shouldRestoreFocus: boolean) {
    restoreFocus.current = shouldRestoreFocus;
    setOpen(false);
  }

  function handlePanelKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    if (event.key !== "Tab" || !panelRef.current) return;

    const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector));
    const first = focusable[0];
    const last = focusable.at(-1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <div className="mobile-nav">
      <button
        ref={triggerRef}
        className="mobile-nav-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => {
          if (open) closeMenu(true);
          else setOpen(true);
        }}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open ? (
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            onKeyDown={handlePanelKeyDown}
          >
            <nav aria-label="Mobile navigation">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href || pathname.startsWith(item.href) ? "page" : undefined}
                  onClick={() => closeMenu(false)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
            <a className="mobile-email" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>
        ) : null}
    </div>
  );
}

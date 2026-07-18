"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";

export function ResearchSignal() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="research-signal" aria-label="Research visual: microstructure and phase-transition signal">
      <Image
        src={withBasePath("/assets/site/hero-sem-microstructure.webp")}
        alt="Scanning electron microscope view of a radial laser-written microstructure"
        fill
        priority
        sizes="(max-width: 900px) 100vw, 48vw"
      />
      <div className="research-signal-shade" />
      <div className="signal-topline">
        <span>MICRO / STRUCTURE</span>
        <span className="signal-live"><i /> Research field</span>
      </div>
      <div className="signal-plot" aria-hidden="true">
        <div className="signal-plot-axis">
          <span>R(T)</span>
          <span>T</span>
        </div>
        <svg viewBox="0 0 440 160" role="presentation">
          <path className="plot-grid" d="M0 30H440M0 80H440M0 130H440M80 0V160M180 0V160M280 0V160M380 0V160" />
          <motion.path
            className="plot-line plot-line-primary"
            d="M0 130 C85 128 125 122 168 109 C206 98 220 45 257 32 C310 14 361 25 440 20"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.35, ease: "easeInOut" }}
          />
          <motion.path
            className="plot-line plot-line-secondary"
            d="M0 138 C112 135 150 129 196 112 C235 98 246 59 280 45 C327 26 377 35 440 29"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.72 }}
            transition={{ duration: 1.8, delay: 0.65, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <div className="signal-label">
        <span>Phase transition</span>
        <strong>M1 ↔ R</strong>
      </div>
      <div className="signal-profile">
        <Image
          src={withBasePath("/assets/site/profile-lu-hao.webp")}
          width={60}
          height={76}
          alt="Portrait of Dr. Lu Hao"
        />
        <div>
          <small>Researcher</small>
          <strong>Dr. Lu Hao</strong>
          <span>Condensed-matter physics</span>
        </div>
      </div>
    </div>
  );
}

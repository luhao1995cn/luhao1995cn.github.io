import Image from "next/image";
import { withBasePath } from "@/lib/paths";

export function ResearchSignal() {
  return (
    <div className="research-signal" aria-label="Research visual: microstructure and material-response signal">
      <Image
        src={withBasePath("/assets/site/hero-sem-microstructure-720.webp")}
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
          <path
            className="plot-line plot-line-primary"
            d="M0 130 C85 128 125 122 168 109 C206 98 220 45 257 32 C310 14 361 25 440 20"
            pathLength="1"
          />
          <path
            className="plot-line plot-line-secondary"
            d="M0 138 C112 135 150 129 196 112 C235 98 246 59 280 45 C327 26 377 35 440 29"
            pathLength="1"
          />
        </svg>
      </div>
      <div className="signal-label">
        <span>Material response</span>
        <strong>Structure ↔ function</strong>
      </div>
      <div className="signal-profile">
        <Image
          src={withBasePath("/assets/site/profile-lu-hao-thumb.webp")}
          width={60}
          height={76}
          alt="Portrait of Dr. Lu Hao"
        />
        <div>
          <small>Researcher</small>
          <strong>Dr. Lu Hao</strong>
          <span>Materials physics · Devices</span>
        </div>
      </div>
    </div>
  );
}

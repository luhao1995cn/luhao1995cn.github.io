import type { InsightMeta } from "@/types/content";

export const insights: InsightMeta[] = [
  {
    sourceFile: "2026-06-06-Sino-German Workshop on VO₂-Based Energy-Saving Coatings and Smart Sensing Materials.md",
    slug: "Sino-German-Workshop-on-VO-Based-Energy-Saving-Coatings-and-Smart-Sensing-Materials",
    title: "Sino-German Workshop on VO₂-Based Energy-Saving Coatings and Smart Sensing Materials",
    date: "2026-06-06",
    displayDate: "06 Jun 2026",
    category: "Academic exchange",
    excerpt:
      "A workshop connecting VO₂ functional coatings, phase-transition physics, thin-film technologies and infrared sensing.",
    image: "/assets/posts/workshop/workshop-2.webp",
    imageAlt: "Lu Hao presenting research on uncooled infrared detectors at a workshop"
  },
  {
    sourceFile: "2026-05-01-laser-direct-writing-with-nanoscript.md",
    slug: "laser-direct-writing-with-nanoscript",
    title: "Laser Direct Writing with NanoScript: From Programmed Trajectory to Material Response",
    date: "2026-05-01",
    displayDate: "01 May 2026",
    category: "Microfabrication",
    excerpt:
      "How designed geometry, scan trajectories and exposure parameters govern laser–material interaction.",
    image: "/assets/site/hero-sem-microstructure.webp",
    imageAlt: "Scanning electron microscope image of a laser-written radial microstructure"
  },
  {
    sourceFile: "2026-03-23-Practical Lessons from Working with Vacuum Deposition Systems.md",
    slug: "Practical-Lessons-from-Working-with-Vacuum-Deposition-Systems",
    title: "Practical Lessons from Working with Vacuum Deposition Systems",
    date: "2026-03-23",
    displayDate: "23 Mar 2026",
    category: "Thin-film growth",
    excerpt:
      "Field notes on PLD, ion-beam sputtering, reactive processes, chamber history and process drift."
  },
  {
    sourceFile: "2026-03-09-vo2-reversible-thermal-buffer.md",
    slug: "vo2-reversible-thermal-buffer",
    title: "Can VO₂ Work as a Reversible Thermal Buffer for Microscale Hotspots?",
    date: "2026-03-09",
    displayDate: "09 Mar 2026",
    category: "Phase transitions",
    excerpt:
      "A device-oriented look at VO₂ as a localized, transient and reversible thermal buffer."
  },
  {
    sourceFile: "2026-02-23-why-enhance-tcr.md",
    slug: "why-enhance-tcr",
    title: "Why Enhance TCR?",
    date: "2026-02-23",
    displayDate: "23 Feb 2026",
    category: "Infrared sensing",
    excerpt:
      "Why increasing temperature coefficient of resistance matters at the microbolometer system level.",
    image: "/assets/posts/why-enhance-tcr.webp",
    imageAlt: "Diagram relating higher TCR to infrared detector performance"
  },
  {
    sourceFile: "2026-02-23-vo2-thermal-hysteresis-landau-view.md",
    slug: "vo2-thermal-hysteresis-landau-view",
    title: "Why VO₂ Shows Thermal Hysteresis: A Landau Free-Energy View",
    date: "2026-02-23",
    displayDate: "23 Feb 2026",
    category: "Phase-transition physics",
    excerpt:
      "A compact free-energy explanation of thermal hysteresis and its suppression through metallic doping."
  },
  {
    sourceFile: "2026-02-18-microbolometers-101.md",
    slug: "microbolometers-101",
    title: "Microbolometers 101: MEMS Parameters, TCR/NETD and VO₂ Hysteresis",
    date: "2026-02-18",
    displayDate: "18 Feb 2026",
    category: "Infrared sensing",
    excerpt:
      "A derivation-led introduction to microbolometer response and the implications of a hysteretic thermistor."
  },
  {
    sourceFile: "2026-01-20-phd-thesis-defense.md",
    slug: "phd-thesis-defense",
    title: "PhD Thesis Defense",
    date: "2026-01-20",
    displayDate: "20 Jan 2026",
    category: "Milestone",
    excerpt:
      "Completion of a thesis on strain engineering and buffer-layer design in VO₂ thin-film structures.",
    image: "/assets/posts/phd/phd1.webp",
    imageAlt: "Photograph from Lu Hao's PhD thesis defense"
  },
  {
    sourceFile: "2026-01-15-emergent-machine-consciousness-hypothesis.md",
    slug: "emergent-machine-consciousness-hypothesis",
    title: "Emergent Machine Consciousness via Hardware-Level Stochastic Perturbations",
    date: "2026-01-15",
    displayDate: "15 Jan 2026",
    category: "Hypothesis",
    excerpt:
      "A speculative hardware-level hypothesis exploring stochastic perturbations and emergent machine behavior.",
    image: "/assets/posts/consciousness-hypothesis.webp",
    imageAlt: "Abstract visualization accompanying the machine consciousness hypothesis"
  },
  {
    sourceFile: "2026-01-10-Scripts developed during my PhD: automated Raman measurements and XRR data fitting.md",
    slug: "Scripts-developed-during-my-PhD-automated-Raman-measurements-and-XRR-data-fitting",
    title: "Scripts Developed during My PhD: Automated Measurements and XRR Fitting",
    date: "2026-01-10",
    displayDate: "10 Jan 2026",
    category: "Research software",
    excerpt:
      "Practical Python workflows for temperature-synchronized measurements and Parratt-type XRR fitting."
  },
  {
    sourceFile: "2026-01-05-se-modeling-vo2-thin-films.md",
    slug: "se-modeling-vo2-thin-films",
    title: "Spectroscopic Ellipsometry Modeling of VO₂ Thin Films",
    date: "2026-01-05",
    displayDate: "05 Jan 2026",
    category: "Optical characterization",
    excerpt:
      "A practical overview of optical models for insulating and metallic phases of VO₂."
  }
];

export const featuredInsights = insights.slice(0, 3);

import type { FocusItem, ResearchTheme } from "@/types/content";

export const researchThemes: ResearchTheme[] = [
  {
    id: "strain-engineering",
    index: "01",
    title: "Strain-engineered phase transitions",
    description:
      "Examining how epitaxy and strain state correlate with the metal–insulator transition in VO₂ thin films on rutile TiO₂ substrates.",
    image: "/assets/research/vo2-tio2-strain.webp",
    imageAlt: "Diagram of strain engineering in VO2 thin-film structures",
    tags: ["VO₂", "Epitaxy", "Metal–insulator transition"],
    href: "/publications/#apl-2023-strain"
  },
  {
    id: "smart-windows",
    index: "02",
    title: "Interfaces for smart-window coatings",
    description:
      "Developing and evaluating buffer-layer strategies that connect VO₂ phase-transition performance with scalable smart-window structures.",
    image: "/assets/research/smart-windows.webp",
    imageAlt: "Scientific diagram of a VO2 smart-window thin-film stack",
    tags: ["Smart windows", "Buffer layers", "Functional coatings"],
    href: "/publications/#semsc-2026-buffer"
  },
  {
    id: "infrared-sensing",
    index: "03",
    title: "Phase-transition materials for infrared sensing",
    description:
      "Connecting VO₂ and Ti–V–O thin-film physics with thermistor response, MEMS architectures and uncooled infrared detector concepts.",
    image: "/assets/research/infrared-workshop.webp",
    imageAlt: "Lu Hao presenting research on uncooled infrared detectors and Ti-V-O thermistor layers",
    tags: ["MEMS", "TCR", "Infrared detectors"],
    href: "/insights/why-enhance-tcr/"
  },
  {
    id: "laser-writing",
    index: "04",
    title: "Programmable laser microfabrication",
    description:
      "Using NanoScript-defined trajectories and process parameters to study controlled laser–material interaction and microscale structure formation.",
    image: "/assets/research/laser-microstructure.webp",
    imageAlt: "Laser-written microscale structure viewed through a microscope",
    tags: ["Laser direct writing", "NanoScript", "Microstructures"],
    href: "/insights/laser-direct-writing-with-nanoscript/"
  }
];

export const currentFocus: FocusItem[] = [
  {
    label: "Materials → devices",
    title: "Thermistor layers for uncooled infrared detection",
    description:
      "Exploring how transition steepness, hysteresis and material integration affect detector-level behavior."
  },
  {
    label: "Process → structure",
    title: "Laser-written functional microstructures",
    description:
      "Linking programmed scan paths and exposure conditions to reproducible microscale material response."
  },
  {
    label: "Interface → cycling",
    title: "Thin-film and silicon-nitride anodes for solid-state batteries",
    description:
      "Connecting controlled model films and SiNₓ-based anode concepts with interphase formation, capacity retention and cycling stability."
  }
];

export const broaderInterests = [
  "Phase transitions in VO₂, ZnO, Ga₂O₃ and related functional oxides",
  "Two-dimensional materials and heterostructures",
  "Electronic correlations and metal–insulator transitions",
  "Bandgap engineering and optical/electronic property tuning",
  "Thin-film and silicon-nitride anodes for lithium-ion and all-solid-state batteries",
  "Brain–computer interface concepts"
];

export const researchApproach = [
  {
    step: "01",
    title: "Grow",
    body: "Control composition, interfaces and strain through thin-film deposition and buffer-layer design."
  },
  {
    step: "02",
    title: "Resolve",
    body: "Connect structure, optical response and electrical behavior across the phase transition."
  },
  {
    step: "03",
    title: "Translate",
    body: "Evaluate how material-level behavior carries into coatings, thermistors, battery anodes and microscale devices."
  }
];

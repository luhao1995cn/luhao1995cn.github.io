import type { Conference, ExperienceItem, ResearchProject } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    period: "2026.01–Present",
    type: "Research",
    title: "Postdoctoral Researcher",
    organization: "Institute of Experimental Physics I · Justus Liebig University Giessen",
    description:
      "Developing optical microstructures and functional photoresponsive devices through direct laser writing, 3D micro-/nanoprinting, photolithography, thin-film deposition and lift-off."
  },
  {
    period: "2021.09–2025.12",
    type: "Research",
    title: "Doctoral Researcher",
    organization:
      "Institute of Experimental Physics I · Center for Materials Research (ZfM/LaMa) · Justus Liebig University Giessen",
    description:
      "Investigated strain, interfaces and buffer-layer design in VO₂ thin-film systems, connecting phase-transition mechanisms with thermochromic smart-window performance.",
    href: "https://doi.org/10.22029/jlupub-20608"
  },
  {
    period: "2020.10–2021.07",
    type: "Industry",
    title: "MEMS R&D Engineer",
    organization: "Wuhan Guide Infrared Co., Ltd",
    description:
      "Worked on uncooled infrared-detector simulation, thermosensitive materials, MEMS process integration and manufacturability in an industrial 8-inch wafer environment."
  },
  {
    period: "2018.08–2018.11",
    type: "Research",
    title: "Visiting Research Student",
    organization: "Institute of Experimental Physics I · Justus Liebig University Giessen",
    description:
      "Studied Sr- and Mg-co-doped VO₂ thin films prepared by reactive magnetron sputtering and used Raman spectroscopy to investigate structural-symmetry evolution."
  },
  {
    period: "2017.09–2020.06",
    type: "Research",
    title: "Graduate Researcher",
    organization:
      "Ministry of Education Key Laboratory of Green Preparation and Application for Functional Materials · Hubei University",
    description:
      "Studied epitaxial and alloyed VO₂ thin films, relating composition, crystal and electronic structure to metal–insulator-transition, optical and transport behavior."
  }
];

export const education: ExperienceItem[] = [
  {
    period: "2021.09–2025.12",
    type: "Education",
    title: "Doctorate in Natural Sciences (Physics)",
    organization: "Justus Liebig University Giessen · Germany",
    description:
      "Thesis: “Strain Engineering and Buffer Layer Design in VO₂ Thin Film Structures: From Phase Transition Mechanisms to Smart Window Applications.” Accepted by Faculty 07 on 16 December 2025.",
    href: "https://doi.org/10.22029/jlupub-20608"
  },
  {
    period: "2017.09–2020.06",
    type: "Education",
    title: "M.Sc. · Condensed-matter-related thin-film research",
    organization: "Hubei University · Wuhan, China",
    description:
      "Thesis: “Pulsed Laser Deposition of High-Quality RuₓV₁₋ₓO₂ Thin Films and Their Properties.”"
  },
  {
    period: "2013.09–2017.06",
    type: "Education",
    title: "B.Sc. · Chemistry and Materials Science",
    organization: "Hubei Engineering University · Xiaogan, China",
    description:
      "Undergraduate study in chemistry and materials science."
  }
];

export const researchProjects: ResearchProject[] = [
  {
    period: "2026–Present",
    title: "Laser-written optical microstructures",
    organization: "Justus Liebig University Giessen",
    summary:
      "Fabrication of functional photoresponsive devices through programmable direct laser writing and 3D micro-/nanoprinting.",
    highlights: [
      "Combines photoresist development, photolithography, thin-film deposition and lift-off.",
      "Links programmed geometry and exposure conditions with reproducible microscale device response."
    ],
    tags: ["Direct laser writing", "3D microprinting", "Photolithography"]
  },
  {
    period: "2021–2025",
    title: "Strain and interface engineering for VO₂ smart windows",
    organization: "Justus Liebig University Giessen · Fraunhofer IST collaboration",
    summary:
      "Nanoscale VO₂ multilayer architectures connecting strain state, buffer layers, phase-transition behavior and optical performance.",
    highlights: [
      "Developed structure–property relationships for functional and buffer-layer selection.",
      "Evaluated routes to retain thermochromic performance while reducing deposition temperature and production cost."
    ],
    tags: ["VO₂", "Smart windows", "Interface engineering"]
  },
  {
    period: "2021–2025",
    title: "Charge transport in p-type-doped β-Ga₂O₃",
    organization: "Justus Liebig University Giessen",
    summary:
      "Analysis of how single-crystal structure and crystallographic characteristics influence electronic transport in p-type-doped β-Ga₂O₃.",
    highlights: [
      "Combined structural and electrical characterization.",
      "Assessed the material system in the context of next-generation semiconductor applications."
    ],
    tags: ["β-Ga₂O₃", "Charge transport", "Semiconductors"]
  },
  {
    period: "2021–2025",
    title: "Model thin-film anodes for lithium-ion batteries",
    organization: "Justus Liebig University Giessen · Jürgen Janek research group collaboration",
    summary:
      "Well-controlled thin-film model systems for systematic investigation of novel lithium-ion-battery anode materials.",
    highlights: [
      "Established reproducible fabrication routes.",
      "Investigated composition-, structure- and thickness-dependent behavior."
    ],
    tags: ["Thin-film anodes", "Lithium-ion batteries", "Model systems"]
  },
  {
    period: "2020–2021",
    title: "MEMS and uncooled infrared detectors",
    organization: "Wuhan Guide Infrared Co., Ltd",
    summary:
      "Device and process engineering for uncooled infrared detectors in an industrial wafer-fabrication setting.",
    highlights: [
      "Evaluated how MEMS geometry, thermosensitive materials and fabrication parameters affect detector performance.",
      "Supported PVD/CVD deposition, photolithography, patterning and MEMS process integration.",
      "Led early-stage MEMS feasibility work for a cross-disciplinary brain–computer-interface concept."
    ],
    tags: ["MEMS", "Infrared detectors", "Process integration"]
  },
  {
    period: "2017–2020",
    title: "Electronic structure and phase transitions in VO₂ alloys",
    organization: "Hubei University",
    summary:
      "Epitaxial and alloyed VO₂ thin films studied as correlated-semiconductor model systems.",
    highlights: [
      "Applied Ru and Hf/W alloying, strain control and defect regulation to tune phase-transition behavior.",
      "Combined structural, spectroscopic, electrical and optical characterization.",
      "Extended the materials strategy toward thermochromic windows and infrared-sensitive devices."
    ],
    tags: ["VO₂ alloys", "Metal–insulator transition", "Doping"]
  }
];

export const conferences: Conference[] = [
  {
    year: 2026,
    title:
      "International Symposium on Energy and Information Materials and Nanotechnology and Sino-German Bilateral Workshop on VO₂-Based Energy-Saving Coatings",
    location: "Wuhan, China",
    contribution: "Oral presentation"
  },
  {
    year: 2025,
    title: "Sino-German Workshop",
    location: "Giessen, Germany",
    contribution: "Oral presentation"
  },
  {
    year: 2024,
    title: "DPG Conference",
    location: "Regensburg, Germany",
    contribution: "Oral presentation"
  },
  {
    year: 2024,
    title: "Sino-German Workshop",
    location: "Wuhan, China",
    contribution: "Oral presentation"
  },
  {
    year: 2024,
    title: "DPG Conference",
    location: "Berlin, Germany",
    contribution: "Oral presentation"
  },
  {
    year: 2023,
    title:
      "6th International Conference on Energy Materials and Nanotechnology and Sino-German Bilateral Symposium on Energy-Saving Coatings",
    location: "Wuhan, China",
    contribution: "Oral presentation"
  },
  {
    year: 2023,
    title: "DPG Conference",
    location: "Dresden, Germany",
    contribution: "Oral presentation"
  },
  {
    year: 2022,
    title: "18th International Conference on Plasma Surface Engineering",
    location: "Erfurt, Germany",
    contribution: "Poster"
  },
  {
    year: 2022,
    title: "DPG Conference",
    location: "Regensburg, Germany",
    contribution: "Oral presentation"
  },
  {
    year: 2019,
    title: "22nd National Conference on Semiconductor Physics · 10–11 July",
    location: "Hangzhou, China",
    contribution: "Oral presentation"
  }
];

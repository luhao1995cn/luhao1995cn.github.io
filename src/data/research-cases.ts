import { journalArticles } from "@/data/publications";
import type { ResearchCaseStudy } from "@/types/content";

function articleEvidence(id: string, label: string) {
  const article = journalArticles.find((item) => item.id === id);

  if (!article || !article.journal) {
    throw new Error(`Missing publication evidence for research case: ${id}`);
  }

  return {
    label,
    title: article.title,
    detail: `${article.journal}${article.details ? ` · ${article.details}` : ""} · ${article.year}`,
    href: article.doi
  };
}

export const researchCases: ResearchCaseStudy[] = [
  {
    slug: "strain-engineered-vo2",
    index: "01",
    eyebrow: "Growth → structure → material response",
    title: "Strain engineering in epitaxial VO₂ thin films",
    summary:
      "A structure–property study of how epitaxial boundary conditions and strain state correlate with the metal–insulator transition in VO₂ thin films on rutile TiO₂ substrates.",
    period: "2021–2025",
    organization: "Justus Liebig University Giessen · doctoral and collaborative research",
    status: "Completed doctoral research with peer-reviewed and thesis records.",
    image: "/assets/research/vo2-tio2-strain.webp",
    imageAlt: "Diagram of strained and partially relaxed VO2 layers on a TiO2 substrate",
    tags: ["Epitaxial thin films", "Strain state", "Raman spectroscopy", "Metal–insulator transition"],
    question:
      "How does the strain state of epitaxial VO₂ on rutile TiO₂ relate to its metal–insulator-transition behavior?",
    workflow: [
      {
        step: "01",
        title: "Control the film structure",
        body: "Prepare epitaxial VO₂/TiO₂ thin-film structures and use the film–substrate relationship to establish controlled structural boundary conditions."
      },
      {
        step: "02",
        title: "Resolve structure and response",
        body: "Compare strain state with transition behavior and connect the structural picture with complementary spectroscopic evidence from related Ti–V–O thin-film work."
      },
      {
        step: "03",
        title: "Build a design rule",
        body: "Use the observed structure–transition relationship to inform how epitaxy, interfaces and relaxation should be considered in functional-film design."
      }
    ],
    contributions: [
      "Led the first-author Applied Physics Letters study correlating strain state and metal–insulator-transition behavior.",
      "Investigated strain, interfaces and buffer-layer design as part of the doctoral thin-film research programme.",
      "Connected structural interpretation with optical, electrical and spectroscopic questions across related VO₂ and Ti–V–O systems."
    ],
    significance:
      "The case establishes the growth-to-property part of the research workflow: a functional response is interpreted through the structural state created by the thin-film system, rather than treated as an isolated material parameter.",
    evidence: [
      articleEvidence("apl-2023-strain", "Primary publication"),
      articleEvidence("jrs-2024-raman", "Related spectroscopy"),
      {
        label: "Doctoral thesis",
        title: "Strain Engineering and Buffer Layer Design in VO₂ Thin Film Structures: From Phase Transition Mechanisms to Smart Window Applications",
        detail: "Justus Liebig University Giessen · 2025",
        href: "https://doi.org/10.22029/jlupub-20608"
      }
    ]
  },
  {
    slug: "smart-window-buffer-layers",
    index: "02",
    eyebrow: "Interface design → optical response → scalable coating",
    title: "Buffer-layer design for VO₂ smart-window coatings",
    summary:
      "An interface-engineering case that evaluates CuₓTi₁₋ₓO₂ buffer layers as a practical compromise between VO₂ thermochromic performance and scalable smart-window processing.",
    period: "2021–2025",
    organization: "Justus Liebig University Giessen · Fraunhofer IST collaboration",
    status: "Peer-reviewed article published in 2026; doctoral thesis record available.",
    image: "/assets/research/smart-windows.webp",
    imageAlt: "Scientific illustration of a VO2 smart-window stack with a copper-titanium-oxide buffer layer",
    tags: ["Buffer layers", "Thermochromic coatings", "Optical response", "Process scalability"],
    question:
      "Can buffer-layer design retain useful VO₂ smart-window behavior while moving the coating architecture toward more practical production conditions?",
    workflow: [
      {
        step: "01",
        title: "Design the interface",
        body: "Build nanoscale multilayer structures in which the buffer layer mediates between the substrate architecture and the functional VO₂ film."
      },
      {
        step: "02",
        title: "Evaluate the trade-off",
        body: "Relate buffer-layer selection to phase-transition and optical behavior, with attention to deposition temperature, functional performance and process cost."
      },
      {
        step: "03",
        title: "Translate toward coatings",
        body: "Assess the material stack as a compromise for thermochromic smart-window structures rather than optimizing a single laboratory metric in isolation."
      }
    ],
    contributions: [
      "Led the first-author Solar Energy Materials and Solar Cells publication on CuₓTi₁₋ₓO₂ buffer layers.",
      "Developed structure–property relationships for functional- and buffer-layer selection within the doctoral project.",
      "Evaluated routes to retain thermochromic performance while reducing deposition temperature and production cost."
    ],
    significance:
      "This case demonstrates the transition from material characterization to application-oriented engineering: optical and phase-transition behavior are judged together with the constraints of a manufacturable coating stack.",
    evidence: [
      articleEvidence("semsc-2026-buffer", "Primary publication"),
      {
        label: "Doctoral thesis",
        title: "Strain Engineering and Buffer Layer Design in VO₂ Thin Film Structures: From Phase Transition Mechanisms to Smart Window Applications",
        detail: "Justus Liebig University Giessen · 2025",
        href: "https://doi.org/10.22029/jlupub-20608"
      },
      {
        label: "Research exchange",
        title: "Sino-German Workshop on VO₂-Based Energy-Saving Coatings and Smart Sensing Materials",
        detail: "Research note and workshop record · 2026",
        href: "/insights/Sino-German-Workshop-on-VO-Based-Energy-Saving-Coatings-and-Smart-Sensing-Materials/"
      }
    ]
  },
  {
    slug: "programmable-laser-microstructures",
    index: "03",
    eyebrow: "Programmed geometry → fabrication → microscale structure",
    title: "Programmable laser-written microstructures",
    summary:
      "An ongoing microfabrication direction using NanoScript-defined trajectories and processing parameters to connect designed geometry with laser–material interaction and reproducible microscale structures.",
    period: "2026–Present",
    organization: "Justus Liebig University Giessen · postdoctoral research",
    status: "Ongoing research; public documentation currently consists of a research note and original microstructure images.",
    image: "/assets/research/laser-microstructure.webp",
    imageAlt: "Microscope view of a laser-written microscale structure",
    tags: ["Direct laser writing", "NanoScript", "3D microprinting", "Photolithography"],
    question:
      "How do programmed geometry, scan trajectory and exposure conditions govern the microstructure produced by direct laser writing?",
    workflow: [
      {
        step: "01",
        title: "Program the trajectory",
        body: "Use NanoScript to define geometry together with laser power, scan speed, hatch spacing, exposure dose and writing sequence."
      },
      {
        step: "02",
        title: "Fabricate the structure",
        body: "Combine direct laser writing and 3D micro-/nanoprinting with photoresist development, photolithography, thin-film deposition and lift-off where the device concept requires it."
      },
      {
        step: "03",
        title: "Compare design and outcome",
        body: "Relate programmed paths and exposure conditions to the resulting microscale morphology and use that comparison to improve repeatability."
      }
    ],
    contributions: [
      "Developing the current postdoctoral direction in programmable optical microstructures and photoresponsive-device fabrication.",
      "Connecting script-defined geometry and process parameters with practical laser–material interaction.",
      "Documenting the workflow with original microscope and scanning-electron-microscope images while the research remains in progress."
    ],
    significance:
      "The project extends the research workflow beyond film synthesis and characterization into direct structure fabrication. Its value is currently methodological: turning designed geometry into a controlled, inspectable microscale outcome.",
    evidence: [
      {
        label: "Research note",
        title: "Laser Direct Writing with NanoScript: From Programmed Trajectory to Material Response",
        detail: "Methods and working framework · 2026",
        href: "/insights/laser-direct-writing-with-nanoscript/"
      },
      {
        label: "Current project",
        title: "Laser-written optical microstructures",
        detail: "Postdoctoral research · Justus Liebig University Giessen · 2026–Present"
      }
    ],
    gallery: [
      {
        image: "/assets/posts/laser/laser-0244441.webp",
        alt: "Scanning electron microscope image of a radial laser-written structure",
        caption: "Scanning-electron-microscope view of a radial written structure; 1 mm scale bar."
      },
      {
        image: "/assets/posts/laser/laser-20260501135232_34_29.webp",
        alt: "Packaged laser-written microscale structure shown next to a twenty-cent coin",
        caption: "Packaged structure shown with a twenty-cent coin for physical scale."
      }
    ]
  }
];

export function getResearchCase(slug: string) {
  return researchCases.find((item) => item.slug === slug);
}

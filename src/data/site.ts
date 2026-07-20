import type { LinkItem } from "@/types/content";

export const siteConfig = {
  name: "Lu Hao",
  fullName: "Dr. Lu Hao",
  role: "Postdoctoral researcher · Condensed-matter physicist",
  title: "Dr. Lu Hao — Functional Oxide Thin Films & Devices",
  description:
    "Research on VO₂ and correlated oxides, functional thin films, metal–insulator transitions, thin-film battery anodes, MEMS and infrared sensing concepts.",
  shortBio:
    "I study how interfaces, composition and structure shape functional thin films—and how those relationships can be translated into sensing, energy-storage and microdevice concepts.",
  location: "Giessen, Germany",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://luhao1995cn.github.io",
  lastUpdated: "2026-07-20",
  email: "hao.lu@uni-giessen.de",
  profileImage: "/assets/site/profile-lu-hao.webp",
  profileImageAlt: "Portrait of Dr. Lu Hao"
} as const;

export const navigation: LinkItem[] = [
  { label: "About", href: "/about/" },
  { label: "Research", href: "/research/" },
  { label: "Publications", href: "/publications/" },
  { label: "Experience", href: "/experience/" },
  { label: "Notes", href: "/insights/" },
  { label: "CV", href: "/cv/" },
  { label: "Contact", href: "/contact/" }
];

export const socialLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/LuHao95CN" },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Hao-Lu-67?ev=hdr_xprf"
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=de&user=8IqlctYAAAAJ"
  },
  { label: "ORCID", href: "https://orcid.org/0000-0001-8882-7974" }
];

export const researchKeywords = [
  "VO₂ thin films",
  "Functional oxides",
  "Phase-transition materials",
  "Strain engineering",
  "Thin-film battery anodes",
  "All-solid-state batteries",
  "Thin-film deposition",
  "MEMS",
  "Infrared detectors",
  "Smart windows",
  "Laser micro/nanofabrication"
];

export const capabilities = [
  {
    label: "Growth",
    items: [
      "Pulsed laser deposition",
      "Ion-beam sputtering",
      "RF sputtering",
      "PVD/CVD process integration"
    ]
  },
  {
    label: "Characterization",
    items: [
      "XRD",
      "Raman spectroscopy",
      "XPS",
      "Optical transmittance",
      "AFM",
      "SEM",
      "Spectroscopic ellipsometry",
      "Hall measurements"
    ]
  },
  {
    label: "Microfabrication",
    items: [
      "Photolithography",
      "Direct laser writing",
      "3D micro-/nanoprinting",
      "Lift-off",
      "MEMS fabrication"
    ]
  }
];

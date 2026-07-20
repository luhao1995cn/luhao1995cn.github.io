import type { LinkItem } from "@/types/content";

export const siteConfig = {
  name: "Lu Hao",
  fullName: "Dr. Lu Hao",
  role: "Postdoctoral researcher · Materials physicist",
  title: "Lu Hao | Thin-Film Materials & Device Research",
  description:
    "Research spanning thin-film growth, structure–property characterization, micro/nanofabrication and device-oriented materials, from functional oxides to sensing and energy storage.",
  shortBio:
    "I connect thin-film growth, structural and physical-property characterization, and micro/nanofabrication to understand materials and translate their response into sensing, energy-storage and microscale device concepts.",
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

export const researchWorkflow = [
  "Thin-film growth",
  "Structure–property analysis",
  "Optical & electrical response",
  "Micro/nanofabrication",
  "Device integration"
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

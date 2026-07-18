import type { JournalArticle, Patent } from "@/types/content";

export const journalArticles: JournalArticle[] = [
  {
    id: "semsc-2026-buffer",
    year: 2026,
    authors: "Hao Lu, Martin Becker, Jan Luka Dornseifer, Angelika Polity, Peter J. Klar",
    title:
      "CuₓTi₁₋ₓO₂ buffer layers in VO₂-based smart windows—a viable compromise towards large-scale industrial production",
    journal: "Solar Energy Materials and Solar Cells",
    details: "295, 114016",
    doi: "https://doi.org/10.1016/j.solmat.2025.114016",
    featured: true
  },
  {
    id: "apl-2023-strain",
    year: 2023,
    authors:
      "Hao Lu, Lei Li, Zhiwu Tang, Maji Xu, Yonghui Zheng, Martin Becker, Yinmei Lu, Mingkai Li, Pai Li, Zaoli Zhang, Peter J. Klar, Yunbin He",
    title:
      "Correlation of metal-to-insulator transition and strain state of VO₂ thin films on TiO₂ (110) substrates",
    journal: "Applied Physics Letters",
    details: "123, 042103",
    doi: "https://doi.org/10.1063/5.0152809",
    featured: true
  },
  {
    id: "apl-2020-ruvo2",
    year: 2020,
    authors:
      "Hao Lu, Lufeng Chen, Ruiqi Cao, Xin Tao, Xinru Wang, Mingkai Li, Pai Li, Yinmei Lu, Peter J. Klar, Yunbin He",
    title:
      "RuₓV₁₋ₓO₂ alloy epitaxial films: Lowered insulator-metal transition temperature and retained modulation capacity",
    journal: "Applied Physics Letters",
    details: "116, 192103",
    doi: "https://doi.org/10.1063/5.0005426",
    featured: true
  },
  {
    id: "jrs-2024-raman",
    year: 2024,
    authors:
      "Florian Kuhl, Hao Lu, Martin Becker, Limei Chen, Yonghui Zheng, Angelika Polity, Zaoli Zhang, Yunbin He, Peter J. Klar",
    title:
      "Raman scattering of TiₓV₁₋ₓO₂ thin films on (110) rutile TiO₂ in the low and high temperature phase adjacent to the metal–insulator transition",
    journal: "Journal of Raman Spectroscopy",
    details: "55(8), 923–938",
    doi: "https://doi.org/10.1002/jrs.6684",
    featured: true
  },
  {
    id: "nanoscale-2021-diffusion",
    year: 2021,
    authors: "Yonghui Zheng, Zhuo Chen, Hao Lu, Yan Cheng, Xin Chen, Yunbin He, Zaoli Zhang",
    title: "The formation of TiO₂/VO₂ multilayer structure via directional cationic diffusion",
    journal: "Nanoscale",
    details: "13(16), 7783–7791",
    doi: "https://doi.org/10.1039/d1nr00290b"
  },
  {
    id: "apl-2021-hfw",
    year: 2021,
    authors:
      "Xinru Wang, Lufeng Chen, Hao Lu, Wenyu Fang, Hao Li, Weiling Yin, Mingkai Li, Yinmei Lu, Pai Li, Yunbin He",
    title:
      "Enhancing visible-light transmittance while reducing phase transition temperature of VO₂ by Hf-W co-doping",
    journal: "Applied Physics Letters",
    details: "118(19), 192102",
    doi: "https://doi.org/10.1063/5.0044516"
  },
  {
    id: "ass-2019-zncr2o4",
    year: 2019,
    authors:
      "Qile Wang, Jian Chen, Hao Lu, Pan Huang, Jiabin Wang, Mingkai Li, Yinmei Lu, Gang Chang, Zhe Chuan Feng, Yunbin He",
    title:
      "Structures, compositions, and optical properties of ZnCr₂O₄ films grown epitaxially on c-sapphire by pulsed laser deposition",
    journal: "Applied Surface Science",
    details: "475, 820–827",
    doi: "https://doi.org/10.1016/j.apsusc.2019.01.039"
  },
  {
    id: "ms-2018-oxygen-pressure",
    year: 2018,
    authors: "Xin Tao, Hao Lu, Pai Li, Yinmei Lu, Yunbin He",
    title:
      "The Influence of Oxygen Pressure on the Structure, Optoelectronic Properties, and MIT Characters of VO₂ Thin Films",
    journal: "Material Sciences",
    details: "8(5), 573–581",
    doi: "https://doi.org/10.12677/MS.2018.85067"
  },
  {
    id: "ruvo2-2020-pressure",
    year: 2020,
    authors: "Ruiqi Cao, Hao Lu, Xin Tao, et al.",
    title:
      "Effect of deposition oxygen pressure on the structure and MIT characteristics of RuVO₂ alloy thin films",
    details: "Repository record; full bibliographic details need confirmation",
    verificationNote: "The DOI previously shown on this site does not resolve and has been withheld."
  }
];

export const patents: Patent[] = [
  {
    id: "patent-ruvo2-smart-glass",
    authors:
      "Yunbin He, Hao Lu, Mingkai Li, Xinru Wang, Pai Li, Hao Li, Gang Chang, Yinmei Lu, Qingfeng Zhang and Junnian Chen",
    title:
      "Preparation method of RuₓV₁₋ₓO₂ alloy semiconductor film material and its application in the field of smart glass",
    identifier: "China patent ZL201910864716.9"
  },
  {
    id: "patent-variable-temperature-holder",
    authors:
      "Yunbin He, Liangshuang Miao, Mingkai Li, Pai Li, Xin Tao, Hao Lu, Hao Li, Fengxin Liu and Yiwen Chen",
    title: "In-situ variable-temperature ultraviolet–visible–infrared spectroscopy test sample holder",
    identifier: "China patent ZL201821573033.5"
  },
  {
    id: "patent-vo2-alloy",
    authors:
      "Yunbin He, Xinru Wang, Pai Li, Hao Lu, Mingkai Li, Hao Li, Jian Chen, Yinmei Lu and Gang Chang",
    title: "VO₂ alloy semiconductor film and one kind of preparation and application",
    identifier: "China patent application 202010851070.3"
  },
  {
    id: "patent-dual-mode-infrared",
    authors: "Li Huang, Hao Lu, et al.",
    title: "Dual-mode uncooled infrared detector thermal layer structure and its preparation method",
    identifier: "China patent ZL113380916 A"
  },
  {
    id: "patent-v2o5-sandwich",
    authors: "Li Huang, Hao Lu, et al.",
    title: "Sandwich structure of vanadium pentoxide thermal film and its preparation method",
    identifier: "China patent ZL113114596 A"
  }
];

export const featuredArticles = journalArticles.filter((article) => article.featured);

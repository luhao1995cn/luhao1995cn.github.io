import { researchKeywords, siteConfig, socialLinks } from "@/data/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    url: siteConfig.url,
    image: new URL("/assets/site/profile-lu-hao.webp", siteConfig.url).toString(),
    jobTitle: "Postdoctoral Researcher",
    description: siteConfig.description,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Justus Liebig University Giessen",
      url: "https://www.uni-giessen.de/"
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Justus Liebig University Giessen"
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Hubei University"
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Hubei Engineering University"
      }
    ],
    knowsAbout: researchKeywords,
    sameAs: socialLinks.map((link) => link.href)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

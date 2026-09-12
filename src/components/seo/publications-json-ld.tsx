import { doctoralTheses, meetingAbstracts, peerReviewedArticles } from "@/data/publications";
import { siteConfig } from "@/data/site";

export function PublicationsJsonLd() {
  const works = [...peerReviewedArticles, ...meetingAbstracts].map((article) => ({
    "@type": article.kind === "journal-article" ? "ScholarlyArticle" : "Article",
    "@id": `${siteConfig.url}/publications/#${article.id}`,
    headline: article.title,
    name: article.title,
    author: article.authors.split(", ").map((name) => ({ "@type": "Person", name })),
    datePublished: String(article.year),
    ...(article.journal
      ? { isPartOf: { "@type": "Periodical", name: article.journal } }
      : {}),
    ...(article.doi ? { url: article.doi, sameAs: article.doi, identifier: article.doi } : {})
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [...works, ...doctoralTheses.map((thesis) => ({
      "@type": "Thesis",
      "@id": `${siteConfig.url}/publications/#${thesis.id}`,
      name: thesis.title,
      author: { "@type": "Person", name: thesis.authors },
      datePublished: String(thesis.year),
      inSupportOf: "Doctorate in Natural Sciences (Physics)",
      sourceOrganization: { "@type": "CollegeOrUniversity", name: thesis.institution },
      url: thesis.doi,
      sameAs: thesis.doi,
      identifier: thesis.doi
    }))]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
      }}
    />
  );
}

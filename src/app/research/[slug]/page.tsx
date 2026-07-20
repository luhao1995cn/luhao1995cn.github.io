import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/research/case-study-page";
import { getResearchCase, researchCases } from "@/data/research-cases";
import { createPageMetadata } from "@/lib/metadata";

type ResearchCasePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return researchCases.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: ResearchCasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getResearchCase(slug);

  if (!study) return {};

  return createPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/research/${study.slug}/`,
    image: study.image
  });
}

export default async function ResearchCasePage({ params }: ResearchCasePageProps) {
  const { slug } = await params;
  const study = getResearchCase(slug);

  if (!study) notFound();

  return <CaseStudyPage study={study} />;
}

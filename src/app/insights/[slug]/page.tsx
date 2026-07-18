import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/app/insights/_components/insight-article";
import {
  createInsightMetadata,
  getInsightBySlug,
  getInsightMeta,
  getInsightStaticParams
} from "@/lib/insights";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getInsightStaticParams();
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = getInsightMeta(slug);

  return meta ? createInsightMetadata(meta) : {};
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) notFound();

  return <InsightArticle insight={insight} />;
}

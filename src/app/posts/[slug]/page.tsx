import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/app/insights/_components/insight-article";
import {
  createInsightMetadata,
  getInsightBySlug,
  getInsightMeta,
  getInsightStaticParams
} from "@/lib/insights";

type LegacyPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getInsightStaticParams();
}

export async function generateMetadata({ params }: LegacyPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = getInsightMeta(slug);

  // The legacy route remains renderable for old links, while search engines
  // consistently index the new /insights/ URL.
  return meta ? createInsightMetadata(meta) : {};
}

export default async function LegacyPostPage({ params }: LegacyPostPageProps) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) notFound();

  return <InsightArticle insight={insight} />;
}

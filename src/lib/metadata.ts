import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/paths";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/og-image.png"
}: PageMetadataInput): Metadata {
  const canonical = withBasePath(path);
  const socialTitle = `${title} - ${siteConfig.name}`;
  const socialImage = withBasePath(image);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: siteConfig.fullName,
      title: socialTitle,
      description,
      images: [{ url: socialImage, width: 1200, height: 630, alt: socialTitle }]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage]
    }
  };
}

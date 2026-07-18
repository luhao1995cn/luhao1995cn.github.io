import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ResearchTheme } from "@/types/content";
import { withBasePath } from "@/lib/paths";

export function ResearchCard({ theme }: { theme: ResearchTheme }) {
  return (
    <article className={`research-card research-card-${theme.id}`}>
      <Link href={theme.href} aria-label={`Explore ${theme.title}`}>
        <div className="research-card-media">
          <Image
            src={withBasePath(theme.image)}
            alt={theme.imageAlt}
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span className="research-card-index">{theme.index}</span>
          <span className="research-card-arrow"><ArrowUpRight aria-hidden="true" /></span>
        </div>
        <div className="research-card-copy">
          <h3>{theme.title}</h3>
          <p>{theme.description}</p>
          <ul className="tag-list" aria-label="Research topics">
            {theme.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </Link>
    </article>
  );
}

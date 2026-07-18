import { ArrowUpRight } from "lucide-react";
import type { JournalArticle } from "@/types/content";

function Authors({ value }: { value: string }) {
  const parts = value.split(/(Hao Lu)/g);
  return (
    <>
      {parts.map((part, index) => part === "Hao Lu" ? <strong key={index}>{part}</strong> : part)}
    </>
  );
}

export function PublicationEntry({ article, ordinal }: { article: JournalArticle; ordinal?: number }) {
  const content = (
    <>
      <div className="publication-marker">
        <span>{ordinal ? String(ordinal).padStart(2, "0") : article.year}</span>
      </div>
      <div className="publication-copy">
        <p className="publication-authors"><Authors value={article.authors} /></p>
        <h3>{article.title}</h3>
        <p className="publication-journal">
          {article.journal ? <em>{article.journal}</em> : null}
          {article.journal && article.details ? <span> · </span> : null}
          {article.details}
        </p>
        {article.verificationNote ? <p className="verification-note">{article.verificationNote}</p> : null}
      </div>
      <div className="publication-year">
        <span>{article.year}</span>
        {article.doi ? <ArrowUpRight aria-hidden="true" /> : null}
      </div>
    </>
  );

  return article.doi ? (
    <a id={article.id} className="publication-entry" href={article.doi} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <article id={article.id} className="publication-entry publication-entry-static">
      {content}
    </article>
  );
}

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ExperienceItem } from "@/types/content";

function TimelineContent({ item }: { item: ExperienceItem }) {
  return (
    <>
      <div className="timeline-period">{item.period}</div>
      <div className="timeline-copy">
        <span>{item.type}</span>
        <h3>{item.title}</h3>
        {item.organization ? <p className="timeline-organization">{item.organization}</p> : null}
        <p>{item.description}</p>
      </div>
      {item.href ? <ArrowUpRight className="timeline-arrow" aria-hidden="true" /> : null}
    </>
  );
}

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="timeline-list">
      {items.map((item) => item.href ? (
        item.href.startsWith("http") ? (
          <a key={`${item.period}-${item.title}`} className="timeline-item" href={item.href} target="_blank" rel="noreferrer">
            <TimelineContent item={item} />
          </a>
        ) : (
          <Link key={`${item.period}-${item.title}`} className="timeline-item" href={item.href}>
            <TimelineContent item={item} />
          </Link>
        )
      ) : (
        <article key={`${item.period}-${item.title}`} className="timeline-item timeline-item-static">
          <TimelineContent item={item} />
        </article>
      ))}
    </div>
  );
}

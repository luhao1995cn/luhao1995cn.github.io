type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "split";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "split"
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "left" ? "section-heading-left" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

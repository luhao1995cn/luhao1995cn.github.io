"use client";

import renderMathInElement from "katex/contrib/auto-render";
import { useEffect, useRef } from "react";

type MathContentProps = {
  html: string;
  className?: string;
  renderMath?: boolean;
};

export function MathContent({
  html,
  className,
  renderMath = true
}: MathContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !renderMath) return;

    // Reset first so React Strict Mode and client-side route changes cannot
    // apply KaTeX twice to an already-rendered expression.
    container.innerHTML = html;

    renderMathInElement(container, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false,
      strict: false,
      trust: false,
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
    });
  }, [html, renderMath]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

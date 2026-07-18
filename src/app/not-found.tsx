import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found shell">
      <div>
        <p className="eyebrow">404 · Signal not found</p>
        <h1>This state is outside the measured range.</h1>
        <p>The page may have moved during the site migration, or the address may be incomplete.</p>
        <Link className="button-primary" href="/">
          <ArrowLeft aria-hidden="true" /> Back to the homepage
        </Link>
      </div>
      <div className="not-found-plot" aria-hidden="true">
        <svg viewBox="0 0 500 260">
          <path d="M0 40H500M0 130H500M0 220H500M80 0V260M250 0V260M420 0V260" />
          <path className="not-found-line" d="M0 210 C75 205 100 180 145 176 C190 171 205 80 245 68 C290 54 317 88 350 92 C398 98 430 42 500 36" />
        </svg>
      </div>
    </section>
  );
}

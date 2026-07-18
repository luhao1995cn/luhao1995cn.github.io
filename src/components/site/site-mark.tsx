import Link from "next/link";

export function SiteMark() {
  return (
    <Link className="site-mark" href="/" aria-label="Lu Hao — home">
      <span className="site-mark-symbol" aria-hidden="true">
        <span>H</span>
        <i />
      </span>
      <span className="site-mark-copy">
        <strong>Lu Hao</strong>
        <small>Materials · Physics · Devices</small>
      </span>
    </Link>
  );
}

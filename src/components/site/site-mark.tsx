import Link from "next/link";

export function SiteMark() {
  return (
    <Link className="site-mark" href="/">
      <span className="site-mark-symbol" aria-hidden="true">
        <span>H</span>
        <i />
      </span>
      <span className="site-mark-copy">
        <strong>Lu Hao<span className="sr-only"> - home</span></strong>
        <small aria-hidden="true">Materials · Physics · Devices</small>
      </span>
    </Link>
  );
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export function withBasePath(pathname: string) {
  if (!pathname.startsWith("/") || pathname.startsWith("//")) return pathname;
  return `${basePath}${pathname}`;
}

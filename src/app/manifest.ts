import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lu Hao | Thin-Film Materials & Device Research",
    short_name: "Lu Hao Research",
    description:
      "Thin-film growth, materials characterization, micro/nanofabrication and device-oriented research by Dr. Lu Hao.",
    start_url: "/",
    display: "standalone",
    background_color: "#070b0f",
    theme_color: "#070b0f",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ]
  };
}

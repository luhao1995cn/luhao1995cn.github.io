import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dr. Lu Hao — Academic Portfolio",
    short_name: "Lu Hao Research",
    description:
      "Functional oxide thin films, phase-transition materials and device physics research by Dr. Lu Hao.",
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

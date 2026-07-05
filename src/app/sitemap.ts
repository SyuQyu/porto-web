import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kyreon.space";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const anchors: { path: string; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { path: "", freq: "monthly", priority: 1 },
    { path: "#services", freq: "monthly", priority: 0.8 },
    { path: "#work", freq: "weekly", priority: 0.9 },
    { path: "#studio", freq: "monthly", priority: 0.7 },
    { path: "#pricing", freq: "monthly", priority: 0.8 },
    { path: "#contact", freq: "yearly", priority: 0.7 },
  ];

  return anchors.map((a) => ({
    url: `${BASE_URL}/${a.path}`,
    lastModified: now,
    changeFrequency: a.freq,
    priority: a.priority,
  }));
}

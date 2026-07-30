import { MetadataRoute } from "next";
import articles from "../data/articles.json";
import { exercisePages } from "./exercitii/data";
import { alimentPages } from "./alimente/data";
import { dietPages } from "./diete/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gymbro.ro";

  const staticPages: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/calculator", priority: 0.9, changeFrequency: "monthly" },
    { url: "/program-antrenament", priority: 0.9, changeFrequency: "monthly" },
    { url: "/meal-prep", priority: 0.9, changeFrequency: "monthly" },
    { url: "/blog", priority: 0.8, changeFrequency: "daily" },
    { url: "/imc", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/greutate-ideala", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/calculator-1rm", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/rest-timer", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/calculator-apa", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/body-fat", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/progress", priority: 0.7, changeFrequency: "monthly" },
    { url: "/rpe-guide", priority: 0.7, changeFrequency: "monthly" },
    { url: "/yoga", priority: 0.7, changeFrequency: "weekly" },
    { url: "/meditatie", priority: 0.7, changeFrequency: "weekly" },
    { url: "/suplimente", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/gymbro-ai", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/quiz-suplimente", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/despre", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const blogArticles = (articles as any[]).map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const exerciseUrls = exercisePages.map((page) => ({
    url: `${baseUrl}/exercitii/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const alimentUrls = alimentPages.map((page) => ({
    url: `${baseUrl}/alimente/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const dietUrls = dietPages.map((page) => ({
    url: `${baseUrl}/diete/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    { url: `${baseUrl}/alimente`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/diete`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    ...blogArticles,
    ...exerciseUrls,
    ...alimentUrls,
    ...dietUrls,
  ];
}

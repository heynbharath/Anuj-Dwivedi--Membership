import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anujdwivedi.com";

  const routes = [
    "",
    "/about",
    "/work",
    "/services",
    "/mentorship",
    "/membership",
    "/book",
    "/institutions",
    "/octopus-tank",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

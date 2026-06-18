import { MetadataRoute } from "next";
import { client } from "../../sanity/lib/client";
import { allCoursesQuery, allTrainersQuery } from "../../sanity/lib/queries";
import { Course, Trainer } from "@/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://techglazlabs.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/trainings",
    "/trainers",
    "/projects",
    "/placements",
    "/partners",
    "/r-and-d",
    "/testimonials",
    "/apply",
    "/contact",
    "/login",
    "/signup",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Fetch dynamic courses
  let courseRoutes: any[] = [];
  try {
    const courses = await client.fetch<Course[]>(allCoursesQuery);
    if (courses && courses.length > 0) {
      courseRoutes = courses.map((course) => ({
        url: `${baseUrl}/trainings/${course.branch.toLowerCase().replace(/_/g, "-")}/${course.slug.current}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch (e) {
    console.warn("Failed to fetch courses for sitemap, skipping dynamic course routes", e);
  }

  // Fetch dynamic trainers
  let trainerRoutes: any[] = [];
  try {
    const trainers = await client.fetch<Trainer[]>(allTrainersQuery);
    if (trainers && trainers.length > 0) {
      trainerRoutes = trainers.map((trainer) => ({
        url: `${baseUrl}/trainers/${trainer.slug.current}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
    }
  } catch (e) {
    console.warn("Failed to fetch trainers for sitemap, skipping dynamic trainer routes", e);
  }

  return [...staticRoutes, ...courseRoutes, ...trainerRoutes];
}

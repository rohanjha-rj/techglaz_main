// ============================================
// Sanity Studio Configuration
// ============================================

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { projectId, dataset } from "./env";

export default defineConfig({
  name: "techglaz-admin",
  title: "Techglaz Labs Admin Studio",

  projectId: projectId || "placeholder-id",
  dataset: dataset || "production",

  basePath: "/admin", // This is the route path for Sanity Studio inside Next.js

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

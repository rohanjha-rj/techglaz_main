// ============================================
// Techglaz Labs — Sanity CMS Client
// ============================================

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: process.env.SANITY_API_TOKEN, // token needed for write/mutations if any
});

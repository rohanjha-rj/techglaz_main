// ============================================
// Techglaz Labs — Sanity Image Builder
// ============================================

import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "placeholder_id",
  dataset: dataset || "production",
});

export const urlForImage = (source: Image | any) => {
  return imageBuilder.image(source).auto("format").fit("max");
};

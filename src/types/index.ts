// ============================================
// Techglaz Labs — Shared TypeScript Types
// ============================================

import type {
  BranchKey,
  TrainingTrack,
  ApplicationStatus,
  InstitutionTag,
  RnDAudience,
} from "@/lib/constants";

// ─── Sanity CMS Types ───────────────────────

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface SyllabusModule {
  _key: string;
  title: string;
  topics: string[];
  milestone?: string;
  prerequisites?: string[];
  projects?: string[];
}

export interface Course {
  _id: string;
  title: string;
  slug: SanitySlug;
  branch: BranchKey;
  domain: string;
  description?: string;
  learningOutcomes?: string[];
  syllabus?: SyllabusModule[];
  duration: string;
  schedule?: string;
  eligibility?: string;
  trainingTracks?: TrainingTrack[];
  trainer?: Trainer;
  image?: SanityImage;
  featured?: boolean;
}

export interface Trainer {
  _id: string;
  name: string;
  slug: SanitySlug;
  photo?: SanityImage;
  bio?: string;
  specialization: string[];
  institutionTag: InstitutionTag;
  courses?: Course[];
}

export interface Project {
  _id: string;
  title: string;
  branch: BranchKey;
  description: string;
  image?: SanityImage;
  team: string[];
  institutionTag?: InstitutionTag;
  type: "student" | "rd";
}

export interface Testimonial {
  _id: string;
  studentName: string;
  photo?: SanityImage;
  course: string;
  year: number;
  rating: number;
  quote: string;
}

export interface PlacementRecord {
  _id: string;
  studentName: string;
  company: string;
  package: string;
  year: number;
  course: string;
  testimonial?: string;
}

export interface Partner {
  _id: string;
  name: string;
  logo: SanityImage;
  type: "MU" | "Industry";
  websiteUrl?: string;
}

export interface RnDActivity {
  _id: string;
  title: string;
  institution: InstitutionTag;
  audience: RnDAudience;
  description: string;
  ctaLink?: string;
}

export interface FounderMessage {
  _id: string;
  founderName: string;
  photo?: SanityImage;
  designation: string;
  messageBody: string;
}

// ─── Database Types (MongoDB) ───────────────

export interface ApplicationDocument {
  _id?: string;
  userId?: string;
  fullName: string;
  email: string;
  phone: string;
  branch: BranchKey;
  course: string;
  trainingTrack: TrainingTrack;
  institution?: string;
  yearOrExperience?: string;
  message?: string;
  referralSource?: string;
  status: ApplicationStatus;
  referenceNumber: string;
  createdAt: Date;
}

export interface ContactSubmissionDocument {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Date;
}

// ─── Navigation Types ───────────────────────

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

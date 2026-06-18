// ============================================
// Techglaz Labs — GROQ Queries
// ============================================

import { groq } from "next-sanity";

// ─── Course Queries ─────────────────────────

export const allCoursesQuery = groq`
  *[_type == "course"] | order(title asc) {
    _id,
    title,
    slug,
    branch,
    domain,
    description,
    duration,
    schedule,
    eligibility,
    trainingTracks,
    image,
    featured
  }
`;

export const courseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    branch,
    domain,
    description,
    learningOutcomes,
    syllabus[] {
      _key,
      title,
      topics
    },
    duration,
    schedule,
    eligibility,
    trainingTracks,
    image,
    trainer-> {
      _id,
      name,
      slug,
      photo,
      specialization,
      institutionTag
    }
  }
`;

// ─── Trainer Queries ────────────────────────

export const allTrainersQuery = groq`
  *[_type == "trainer"] | order(name asc) {
    _id,
    name,
    slug,
    photo,
    specialization,
    institutionTag
  }
`;

export const trainerBySlugQuery = groq`
  *[_type == "trainer" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    photo,
    bio,
    specialization,
    institutionTag,
    "courses": *[_type == "course" && references(^._id)] {
      _id,
      title,
      slug,
      branch,
      domain,
      duration
    }
  }
`;

// ─── Project Queries ────────────────────────

export const allProjectsQuery = groq`
  *[_type == "project"] | order(title asc) {
    _id,
    title,
    branch,
    description,
    image,
    team,
    institutionTag,
    type
  }
`;

// ─── Testimonial Queries ────────────────────

export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(year desc) {
    _id,
    studentName,
    photo,
    course,
    year,
    rating,
    quote
  }
`;

// ─── Placement Queries ──────────────────────

export const allPlacementRecordsQuery = groq`
  *[_type == "placementRecord"] | order(year desc, studentName asc) {
    _id,
    studentName,
    company,
    package,
    year,
    course,
    testimonial
  }
`;

// ─── Partner Queries ────────────────────────

export const allPartnersQuery = groq`
  *[_type == "partner"] | order(name asc) {
    _id,
    name,
    logo,
    type,
    websiteUrl
  }
`;

// ─── R&D Queries ────────────────────────────

export const allRnDActivitiesQuery = groq`
  *[_type == "rndActivity"] | order(title asc) {
    _id,
    title,
    institution,
    audience,
    description,
    ctaLink
  }
`;

// ─── Founder Message Query ──────────────────

export const founderMessageQuery = groq`
  *[_type == "founderMessage"][0] {
    _id,
    founderName,
    photo,
    designation,
    messageBody
  }
`;

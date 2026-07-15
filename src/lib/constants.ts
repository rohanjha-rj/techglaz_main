// ============================================
// Techglaz Labs — Shared Constants
// ============================================

// Engineering Branches
export const BRANCHES = {
  CSE_IT: "CSE & IT",
  EE: "Electrical Engineering",
  ECE: "Electronics & Communication",
  ME: "Mechanical Engineering",
  CIVIL: "Civil Engineering",
} as const;

export type BranchKey = keyof typeof BRANCHES;
export type BranchLabel = (typeof BRANCHES)[BranchKey];

// Training Tracks
export const TRAINING_TRACKS = [
  "Teachers' School",
  "Teachers' College",
  "Students",
  "General",
] as const;

export type TrainingTrack = (typeof TRAINING_TRACKS)[number];

// Course-to-Branch Mapping
export const COURSES_BY_BRANCH: Record<BranchKey, string[]> = {
  CSE_IT: [
    "Full-Stack Web Development",
    "App Development",
    "AI/ML",
    "Cybersecurity",
    "Digital Forensics",
    "Agentic AI",
    "Computer Vision",
    "DBMS",
  ],
  EE: ["VLSI", "Design Harness"],
  ECE: ["Chip Design", "IoT", "Embedded Systems"],
  ME: ["Catia V5", "SolidWorks", "Ansys"],
  CIVIL: ["AutoCAD", "CamberCAD", "Architecture", "Interior Design"],
};

// Application Status
export const APPLICATION_STATUS = {
  PENDING: "pending",
  UNDER_REVIEW: "under_review",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
} as const;

export type ApplicationStatus =
  (typeof APPLICATION_STATUS)[keyof typeof APPLICATION_STATUS];

// Institution Tags (for trainers, projects, R&D)
export const INSTITUTION_TAGS = [
  "IIT",
  "CDAC",
  "CyberCell",
  "Industry",
] as const;

export type InstitutionTag = (typeof INSTITUTION_TAGS)[number];

// R&D Audience Types
export const RND_AUDIENCES = ["Students", "Teachers", "Industry"] as const;
export type RnDAudience = (typeof RND_AUDIENCES)[number];

// Social Media Links (placeholders — replace with real URLs)
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/techglazlabs",
  instagram: "https://instagram.com/techglazlabs",
  youtube: "https://youtube.com/@techglazlabs",
  whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919999999999"}`,
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Trainings",
    href: "/trainings",
    children: [
      { label: "Teachers' School", href: "/trainings?track=teachers-school" },
      { label: "Teachers' College", href: "/trainings?track=teachers-college" },
      { label: "Students", href: "/trainings?track=students" },
      { label: "General", href: "/trainings?track=general" },
      { label: "All Courses", href: "/trainings" },
      { label: "Career Path Finder 🎯", href: "/career-path-finder" },
    ],
  },
  { label: "Trainers", href: "/trainers" },
  { label: "Projects", href: "/projects" },
  { label: "Placements", href: "/placements" },
  { label: "Partners", href: "/partners" },
  {
    label: "R&D",
    href: "/r-and-d",
    children: [
      { label: "For Students", href: "/r-and-d?audience=students" },
      { label: "For Teachers", href: "/r-and-d?audience=teachers" },
      { label: "For Industry", href: "/r-and-d?audience=industry" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

// Footer Quick Links
export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Trainings", href: "/trainings" },
    { label: "Placements", href: "/placements" },
    { label: "Contact Us", href: "/contact" },
    { label: "Apply Now", href: "/apply" },
  ],
  courses: [
    { label: "Full-Stack Web Dev", href: "/trainings/cse-it/full-stack-web-development" },
    { label: "AI/ML", href: "/trainings/cse-it/ai-ml" },
    { label: "Cybersecurity", href: "/trainings/cse-it/cybersecurity" },
    { label: "IoT", href: "/trainings/ece/iot" },
    { label: "VLSI", href: "/trainings/ee/vlsi" },
  ],
};

// Referral Sources (for "How did you hear about us?" dropdown)
export const REFERRAL_SOURCES = [
  "Social Media",
  "Friend / Family",
  "College / University",
  "Google Search",
  "Advertisement",
  "Event / Workshop",
  "Other",
] as const;

// Stats (default values — can be overridden by CMS)
export const DEFAULT_STATS = {
  studentsTrained: 500,
  placementPercentage: 95,
  activeCourses: 18,
  partnerInstitutions: 10,
};

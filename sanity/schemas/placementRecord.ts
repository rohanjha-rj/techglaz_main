// ============================================
// Sanity Schema — Placement Record Document
// ============================================

export default {
  name: "placementRecord",
  title: "Placement Record",
  type: "document",
  fields: [
    {
      name: "studentName",
      title: "Student Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "company",
      title: "Placed Company",
      type: "string",
      description: "e.g. TCS, CDAC, Infosys, Tech Mahindra",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "package",
      title: "CTC Package Offered",
      type: "string",
      description: "e.g. 6.5 LPA, 12 LPA",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "year",
      title: "Placement Year",
      type: "number",
      validation: (Rule: any) => Rule.required().min(2020).max(new Date().getFullYear()),
    },
    {
      name: "course",
      title: "Course Completed",
      type: "string",
      description: "e.g. Full-Stack Web Development, AI/ML, IoT",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "testimonial",
      title: "Student Placement Story / Quote",
      type: "text",
    },
  ],
};

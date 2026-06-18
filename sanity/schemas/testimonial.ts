// ============================================
// Sanity Schema — Testimonial Document
// ============================================

export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "studentName",
      title: "Student Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "photo",
      title: "Student Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "course",
      title: "Course Taken",
      type: "string",
      description: "e.g. Full-Stack Web Development, AI/ML, IoT",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "year",
      title: "Completion Year",
      type: "number",
      validation: (Rule: any) => Rule.required().min(2020).max(new Date().getFullYear()),
    },
    {
      name: "rating",
      title: "Rating (1 to 5 Stars)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

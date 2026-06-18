// ============================================
// Sanity Schema — Course Document
// ============================================

export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "branch",
      title: "Engineering Branch",
      type: "string",
      options: {
        list: [
          { title: "CSE & IT", value: "CSE_IT" },
          { title: "Electrical Engineering", value: "EE" },
          { title: "Electronics & Communication", value: "ECE" },
          { title: "Mechanical Engineering", value: "ME" },
          { title: "Civil Engineering", value: "CIVIL" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "domain",
      title: "Engineering Domain",
      type: "string",
      description: "e.g. Full-Stack Development, VLSI, IoT, CAD, Architecture",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Course Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "learningOutcomes",
      title: "Learning Outcomes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "syllabus",
      title: "Syllabus Modules",
      type: "array",
      of: [
        {
          type: "object",
          name: "syllabusModule",
          title: "Syllabus Module",
          fields: [
            { name: "title", title: "Module Title", type: "string" },
            {
              name: "topics",
              title: "Topics",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
      description: "e.g. 4 Weeks, 6 Months, 40 Hours",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "schedule",
      title: "Schedule Description",
      type: "string",
      description: "e.g. Mon-Fri (2:00 PM - 5:00 PM)",
    },
    {
      name: "eligibility",
      title: "Eligibility Criteria",
      type: "string",
      description: "e.g. 2nd/3rd/4th Year CSE/IT Students",
    },
    {
      name: "trainingTracks",
      title: "Training Tracks",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Teachers' School", value: "Teachers' School" },
          { title: "Teachers' College", value: "Teachers' College" },
          { title: "Students", value: "Students" },
          { title: "General", value: "General" },
        ],
      },
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "trainer",
      title: "Assigned Trainer",
      type: "reference",
      to: [{ type: "trainer" }],
    },
    {
      name: "image",
      title: "Course Banner/Icon Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    },
  ],
};

// ============================================
// Sanity Schema — Project Document
// ============================================

export default {
  name: "project",
  title: "Project Showcase",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
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
      name: "description",
      title: "Project Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Project Screenshot/Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "team",
      title: "Team Members",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "institutionTag",
      title: "Associated Institution (for R&D)",
      type: "string",
      options: {
        list: [
          { title: "IIT", value: "IIT" },
          { title: "CDAC", value: "CDAC" },
          { title: "CyberCell", value: "CyberCell" },
          { title: "Industry Expert", value: "Industry" },
        ],
      },
    },
    {
      name: "type",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Student Project", value: "student" },
          { title: "Research & Development (R&D)", value: "rd" },
        ],
      },
      initialValue: "student",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

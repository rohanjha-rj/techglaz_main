// ============================================
// Sanity Schema — Trainer Document
// ============================================

export default {
  name: "trainer",
  title: "Trainer",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Trainer Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Biography",
      type: "text",
      description: "Brief professional background and achievements",
    },
    {
      name: "specialization",
      title: "Specialization Areas",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "institutionTag",
      title: "Institution Tag",
      type: "string",
      options: {
        list: [
          { title: "IIT", value: "IIT" },
          { title: "CDAC", value: "CDAC" },
          { title: "CyberCell", value: "CyberCell" },
          { title: "Industry Expert", value: "Industry" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

// ============================================
// Sanity Schema — R&D Activity Document
// ============================================

export default {
  name: "rndActivity",
  title: "R&D Activity",
  type: "document",
  fields: [
    {
      name: "title",
      title: "R&D Project/Activity Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "institution",
      title: "Associated R&D Institution",
      type: "string",
      options: {
        list: [
          { title: "IIT Collaborations", value: "IIT" },
          { title: "CDAC Collaborations", value: "CDAC" },
          { title: "CyberCell Collaborations", value: "CyberCell" },
          { title: "Industry Experts Collaborations", value: "Industry" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "audience",
      title: "Target Audience",
      type: "string",
      options: {
        list: [
          { title: "For Students", value: "Students" },
          { title: "For Teachers", value: "Teachers" },
          { title: "For Industry", value: "Industry" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Activity Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "ctaLink",
      title: "CTA Link (Optional)",
      type: "url",
      description: "Direct link to registration or research paper (if any)",
    },
  ],
};

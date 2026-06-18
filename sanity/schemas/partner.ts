// ============================================
// Sanity Schema — Partner Document
// ============================================

export default {
  name: "partner",
  title: "Partner Institution",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Partner Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "logo",
      title: "Partner Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "type",
      title: "Partner Type",
      type: "string",
      options: {
        list: [
          { title: "University Partner (MU)", value: "MU" },
          { title: "Industry/Corporate Partner", value: "Industry" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
    },
  ],
};

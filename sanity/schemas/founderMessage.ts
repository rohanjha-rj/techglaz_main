// ============================================
// Sanity Schema — Founder's Message Document
// ============================================

export default {
  name: "founderMessage",
  title: "Founder's Message",
  type: "document",
  fields: [
    {
      name: "founderName",
      title: "Founder Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "designation",
      title: "Designation / Role",
      type: "string",
      description: "e.g. Founder & CEO, Director",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "photo",
      title: "Founder Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "messageBody",
      title: "Message Body",
      type: "text",
      description: "The welcome address or message statement",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

import {defineField, defineType, type SchemaTypeDefinition} from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    defineType({
      name: 'status',
      title: 'Status',
      type: 'document',
      fields: [
        defineField({
          name: "product",
          title: "Product",
          description: "The title of the product the status is associated to",
          type: "string",
        }),
        defineField({
          name: "status",
          title: "Status",
          description: "The value for the status",
          type: "string",
          options: {
            list: ["Detected", "Updating", "Development", "Risky", "Undetected"]
          }
        })
      ]
    }),
    defineType({
      name: 'faq',
      title: 'FAQ',
      type: 'document',
      fields: [
        defineField({
          name: "question",
          title: "Question",
          description: "The Question to ask",
          type: "string",
        }),
        defineField({
          name: "answer",
          title: "Answer",
          description: "The Answer to the question",
          type: "string"
        })
      ]
    }),
    defineType({
      name: 'header',
      title: 'Header',
      type: 'document',
      fields: [
        defineField({
          name: "description",
          title: "Description",
          description: "The text underneath the \"ChairStore\" name on the landing page",
          type: "string",
        }),
        defineField({
          name: "productssold",
          title: "ProductsSold",
          description: "The amount of invoices sold (per 1000 with a decimal place)",
          type: "number",
        }),
        defineField({
          name: "customers",
          title: "Customers",
          description: "The amount of customers",
          type: "number",
        }),
      ]
    }),
    defineType({
      name: 'features',
      title: 'Features',
      type: 'document',
      fields: [
        defineField({
          name: "title",
          title: "Title",
          description: "A title for the section written in larger text size",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          description: "A small description about the service",
          type: "string",
        }),
        defineField({
          name: "subtitle1",
          title: "SubTitle1",
          description: "A subtitle for the first of the three boxes",
          type: "string",
        }),
        defineField({
          name: "content1",
          title: "Content1",
          description: "The content in the first of the three boxes",
          type: "string",
        }),
        defineField({
          name: "subtitle2",
          title: "SubTitle2",
          description: "A subtitle for the second of the three boxes",
          type: "string",
        }),
        defineField({
          name: "content2",
          title: "Content2",
          description: "The content in the second of the three boxes",
          type: "string",
        }),
        defineField({
          name: "subtitle3",
          title: "SubTitle3",
          description: "A subtitle for the third of the three boxes",
          type: "string",
        }),
        defineField({
          name: "content3",
          title: "Content3",
          description: "The content in the third of the three boxes",
          type: "string",
        }),
      ]
    }),
  ],
}
import {defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
    },
    {
      name: 'story',
      title: 'Our Story',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'storyImage',
      title: 'Story Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'philosophy',
      title: 'Design Philosophy',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Value Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
          ],
        },
      ],
    },
  ],
})

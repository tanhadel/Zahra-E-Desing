import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImages',
      title: 'Hero Slider Images',
      type: 'array',
      of: [{type: 'image'}],
      validation: Rule => Rule.min(1).max(10),
    }),

    // Who We Are Section
    defineField({
      name: 'whoWeAreImage',
      title: 'Who We Are Image',
      type: 'image',
    }),

    // Offerings Section
    defineField({
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'image', type: 'image', title: 'Image'},
          ],
        },
      ],
      validation: Rule => Rule.max(3),
    }),

    // Shopping Now Section
    defineField({
      name: 'shoppingLeftImage',
      title: 'Shopping Section - Left Image',
      type: 'image',
    }),
    defineField({
      name: 'shoppingRightImage',
      title: 'Shopping Section - Right Image',
      type: 'image',
    }),

    // Fashion Quote Section
    defineField({
      name: 'quoteBackgroundImage',
      title: 'Quote Background Image',
      type: 'image',
    }),

    // Testimonials
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'role', type: 'string', title: 'Role'},
            {name: 'quote', type: 'text', title: 'Quote'},
            {name: 'image', type: 'image', title: 'Image'},
          ],
        },
      ],
    }),
  ],
})

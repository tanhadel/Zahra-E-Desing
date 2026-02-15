import {InfoOutlineIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // Hero Section
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'E.g., "About us"',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      description: 'E.g., "Clothing that makes you feel beautiful and confident"',
    }),
    // Who We Are Section
    defineField({
      name: 'sectionLabel',
      title: 'Section Label',
      type: 'string',
      description: 'Script font text, e.g., "Who we are"',
    }),
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'text',
      rows: 2,
      description: 'E.g., "Expert wardrobe styling from the industry\'s top stylists"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Large center image of fashion designer',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featureCards',
      title: 'Feature Cards',
      type: 'array',
      description: '4 feature cards (Personalized Design, Collaborative Approach, etc.)',
      validation: (Rule) => Rule.max(4),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    }),
    // Core Business Section
    defineField({
      name: 'coreBusinessLabel',
      title: 'Core Business Label',
      type: 'string',
      description: 'Script font text, e.g., "Our Core Business"',
    }),
    defineField({
      name: 'coreBusinessTitle',
      title: 'Core Business Title',
      type: 'text',
      rows: 2,
      description: 'E.g., "Offering a unique and stylish perspective on fashion"',
    }),
    defineField({
      name: 'coreBusinessDescription',
      title: 'Core Business Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'serviceCards',
      title: 'Service Cards',
      type: 'array',
      description: '3 service cards with images (Design for Personal, Mass Production, etc.)',
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Card Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    }),
    // Team Section
    defineField({
      name: 'teamLabel',
      title: 'Team Label',
      type: 'string',
      description: 'Script font text, e.g., "Meet Our Team"',
    }),
    defineField({
      name: 'teamTitle',
      title: 'Team Title',
      type: 'string',
      description: 'E.g., "Teamwork makes the dream work"',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      description: 'Team member photos',
      validation: (Rule) => Rule.max(4),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Member Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'role',
              title: 'Role',
              type: 'string',
            },
          ],
        },
      ],
    }),
    // Quote Section
    defineField({
      name: 'quoteImage',
      title: 'Quote Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'quoteText',
      title: 'Quote Text',
      type: 'text',
      rows: 2,
      description: 'E.g., "Every day is a fashion show & the world is your runway"',
    }),
    defineField({
      name: 'quoteDescription',
      title: 'Quote Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
  },
})

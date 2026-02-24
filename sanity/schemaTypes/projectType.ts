import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Bridal', value: 'Bridal'},
          {title: 'Haute Couture', value: 'Haute Couture'},
          {title: 'Ready to Wear', value: 'Ready to Wear'},
          {title: 'Evening Wear', value: 'Evening Wear'},
          {title: 'Custom Design', value: 'Custom Design'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
      }],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
    }),
    defineField({
      name: 'pieces',
      title: 'Number of Pieces',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Year, Newest',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
  ],
})

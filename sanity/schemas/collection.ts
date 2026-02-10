import {defineType} from 'sanity'

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'season',
      title: 'Season',
      type: 'string',
      options: {
        list: [
          { title: 'Spring/Summer', value: 'spring-summer' },
          { title: 'Fall/Winter', value: 'fall-winter' },
          { title: 'Resort', value: 'resort' },
          { title: 'Pre-Fall', value: 'pre-fall' },
        ],
      },
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2020).max(2030),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured Collection',
      type: 'boolean',
      description: 'Display this collection on the homepage',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
  preview: {
    select: {
      title: 'title',
      season: 'season',
      year: 'year',
      media: 'coverImage',
    },
    prepare(selection) {
      const {title, season, year, media} = selection
      return {
        title: title,
        subtitle: season && year ? `${season} ${year}` : undefined,
        media: media,
      }
    },
  },
})

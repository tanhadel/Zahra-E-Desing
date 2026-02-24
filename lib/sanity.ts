import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Queries
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]{
    ...,
    "logo": logo.asset->url
  }`,
  
  featuredCollections: `*[_type == "collection" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    season,
    year,
    coverImage,
    featured
  }`,
  
  allCollections: `*[_type == "collection"] | order(year desc, order asc) {
    _id,
    title,
    slug,
    description,
    season,
    year,
    coverImage,
    "images": images[]{
      ...,
      "url": asset->url
    }
  }`,
  
  collectionBySlug: (slug: string) => `*[_type == "collection" && slug.current == "${slug}"][0]{
    ...,
    "images": images[].asset->url
  }`,
  
  featuredLookbooks: `*[_type == "lookbook" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    subtitle,
    mainImage,
    publishedAt
  }`,
  
  allLookbooks: `*[_type == "lookbook"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    subtitle,
    mainImage,
    publishedAt
  }`,
  
  lookbookBySlug: (slug: string) => `*[_type == "lookbook" && slug.current == "${slug}"][0]{
    ...,
    "images": images[]{
      "url": image.asset->url,
      caption
    }
  }`,
  
  featuredBlogPosts: `*[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt,
    author->{name, image}
  }`,
  
  allBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt,
    author->{name, image}
  }`,
  
  blogPostBySlug: (slug: string) => `*[_type == "blogPost" && slug.current == "${slug}"][0]{
    ...,
    author->{name, image, bio}
  }`,
  
  aboutPage: `*[_type == "about"][0]{
    title,
    heroImage,
    heroTitle,
    heroSubtitle,
    sectionLabel,
    mainTitle,
    description,
    mainImage,
    featureCards[]{
      title,
      description
    },
    coreBusinessLabel,
    coreBusinessTitle,
    coreBusinessDescription,
    serviceCards[]{
      image,
      title,
      description
    },
    teamLabel,
    teamTitle,
    teamMembers[]{
      image,
      name,
      role
    },
    quoteImage,
    quoteText,
    quoteDescription
  }`,

  homePage: `*[_type == "homePage"][0]{
    heroTitle,
    heroSubtitle,
    heroImages[defined(asset)]{
      ...,
      "url": asset->url
    },
    whoWeAreImage{
      ...,
      "url": asset->url
    },
    offerings[defined(image.asset)]{
      title,
      image{
        ...,
        "url": asset->url
      }
    },
    shoppingLeftImage{
      ...,
      "url": asset->url
    },
    shoppingRightImage{
      ...,
      "url": asset->url
    },
    quoteBackgroundImage{
      ...,
      "url": asset->url
    },
    testimonials[defined(image.asset)]{
      name,
      role,
      quote,
      image{
        ...,
        "url": asset->url
      }
    }
  }`,

  allProjects: `*[_type == "project"] | order(order asc, year desc) {
    _id,
    title,
    slug,
    category,
    year,
    description,
    mainImage,
    client,
    duration,
    pieces,
    featured
  }`,

  projectBySlug: (slug: string) => `*[_type == "project" && slug.current == "${slug}"][0]{
    ...,
    "mainImageUrl": mainImage.asset->url,
    "gallery": gallery[]{
      "url": asset->url
    }
  }`,

  featuredProjects: `*[_type == "project" && featured == true] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    category,
    year,
    description,
    mainImage
  }`,
}

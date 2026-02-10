// Common types for the Glamourista project

export interface Collection {
  _id: string
  _type: 'collection'
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  description?: string
  season?: 'spring-summer' | 'fall-winter' | 'resort' | 'pre-fall'
  year: number
  coverImage: SanityImage
  images?: SanityImage[]
  featured?: boolean
  order?: number
}

export interface Lookbook {
  _id: string
  _type: 'lookbook'
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  subtitle?: string
  description?: PortableTextBlock[]
  mainImage: SanityImage
  images?: LookbookImage[]
  publishedAt: string
  featured?: boolean
}

export interface LookbookImage {
  image: SanityImage
  caption?: string
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  excerpt?: string
  mainImage: SanityImage
  category?: 'fashion' | 'style' | 'trends' | 'behind-the-scenes' | 'news'
  body?: PortableTextBlock[]
  author?: Author
  publishedAt: string
  featured?: boolean
}

export interface Author {
  _id: string
  _type: 'author'
  name: string
  slug?: {
    current: string
    _type: 'slug'
  }
  image?: SanityImage
  bio?: PortableTextBlock[]
}

export interface AboutPage {
  _id: string
  _type: 'about'
  title: string
  heroImage?: SanityImage
  heroTitle?: string
  heroSubtitle?: string
  story?: PortableTextBlock[]
  storyImage?: SanityImage
  philosophy?: PortableTextBlock[]
  values?: CoreValue[]
}

export interface CoreValue {
  title: string
  description: string
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  title: string
  description?: string
  logo?: SanityImage
  email?: string
  phone?: string
  address?: string
  socialMedia?: SocialMedia
  heroSection?: HeroSection
}

export interface SocialMedia {
  instagram?: string
  facebook?: string
  twitter?: string
  pinterest?: string
  linkedin?: string
}

export interface HeroSection {
  title?: string
  subtitle?: string
  backgroundImage?: SanityImage
  ctaText?: string
  ctaLink?: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface PortableTextBlock {
  _key: string
  _type: string
  children: PortableTextChild[]
  markDefs?: PortableTextMarkDef[]
  style?: string
  listItem?: string
  level?: number
}

export interface PortableTextChild {
  _key: string
  _type: string
  text: string
  marks?: string[]
}

export interface PortableTextMarkDef {
  _key: string
  _type: string
  [key: string]: any
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface NewsletterFormData {
  email: string
}

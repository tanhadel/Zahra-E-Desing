import { type SchemaTypeDefinition } from 'sanity'
import { collectionType } from './collectionType'
import { lookbookType } from './lookbookType'
import { blogPostType } from './blogPostType'
import { authorType } from './authorType'
import { aboutType } from './aboutType'
import { siteSettingsType } from './siteSettingsType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    collectionType,
    lookbookType,
    blogPostType,
    authorType,
    aboutType,
    siteSettingsType,
  ],
}

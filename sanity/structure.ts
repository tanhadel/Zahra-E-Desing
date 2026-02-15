import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Zahra E Design Studio')
    .items([
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('collection').title('Collections'),
      S.documentTypeListItem('lookbook').title('Lookbooks'),
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.documentTypeListItem('author').title('Authors'),
      
      S.divider(),
      
      S.documentTypeListItem('about').title('About Page'),
      S.documentTypeListItem('siteSettings').title('Site Settings'),
      
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category', 'collection', 'lookbook', 'blogPost', 'author', 'about', 'siteSettings'].includes(item.getId()!),
      ),
    ])

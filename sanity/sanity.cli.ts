import {createClient} from '@sanity/cli'

export default createClient({
  name: 'default',
  title: 'Glamourista Fashion Designer',

  projectId: 'your-project-id',
  dataset: 'production',
})

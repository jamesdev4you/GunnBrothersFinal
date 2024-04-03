import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'howto',
  title: 'Howto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'firstP',
        title: 'FistP',
        type: 'string',
      }),
      defineField({
        name: 'secondP',
        title: 'SecondP',
        type: 'string',
      }),
]
})

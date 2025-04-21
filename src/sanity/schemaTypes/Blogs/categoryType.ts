import { MdCategory } from 'react-icons/md';
import { defineField } from 'sanity';

export const categoryType = defineField({
  name: 'category',
  title: 'Category',
  icon: MdCategory,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
  ],
});

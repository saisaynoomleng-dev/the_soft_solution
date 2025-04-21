import { defineField, defineType } from 'sanity';
import { BiDetail } from 'react-icons/bi';

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  icon: BiDetail,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) =>
        rule.required().info(`Required to gernerate a page on the website`),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: (rule) =>
        rule.required().info('Required to generate a page on the website'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) =>
            rule.required().info(`Required to generate a page on the website`),
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
  ],
});

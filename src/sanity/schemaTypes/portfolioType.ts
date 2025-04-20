import { defineField, defineType } from 'sanity';
import { LayoutPanelLeftIcon } from 'lucide-react';

export const portfolioType = defineType({
  name: 'portfolio',
  type: 'document',
  icon: LayoutPanelLeftIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Portfolio Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'category',
      title: 'App Category',
      description: 'Main Category of the app',
      type: 'string',
      options: {
        list: [
          { title: 'Mobile Apps', value: 'mobile-app' },
          { title: 'Custom Software', value: 'custom-software' },
          { title: 'QA & Testing', value: 'testing' },
          { title: 'UI/UX', value: 'ui' },
        ],
        layout: 'radio',
      },
      validation: (rule) =>
        rule.required().info(`Required to filter on the website`),
    }),
    defineField({
      name: 'type',
      title: 'App Type',
      description: 'App for particular Operating System',
      type: 'string',
      options: {
        list: [
          { title: 'iPhone App', value: 'iphone' },
          { title: 'Android App', value: 'android' },
          { title: 'Desktop App', value: 'desktop' },
          { title: 'Web App', value: 'web' },
        ],
        layout: 'radio',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a filter on the website`),
    }),
    defineField({
      name: 'releasedIn',
      title: 'App Release Date',
      type: 'date',
      validation: (rule) =>
        rule.required().info(`Requried to generate a page on the website`),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image for the App',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'App Detail',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      category: 'category',
      type: 'type',
      media: 'mainImage',
    },
    prepare({ name, category, type, media }) {
      return {
        title: `${name} (${category})`,
        subtitle: type,
        media: media || LayoutPanelLeftIcon,
      };
    },
  },
});

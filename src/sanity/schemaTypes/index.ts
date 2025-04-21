import { type SchemaTypeDefinition } from 'sanity';
import { portfolioType } from './portfolioType';
import { blockContentType } from './blockContent';
import { pricingType } from './pricingType';
import { authorType } from './Blogs/authorType';
import { categoryType } from './Blogs/categoryType';
import { blogType } from './Blogs/blogType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    portfolioType,
    blockContentType,
    pricingType,
    authorType,
    categoryType,
    blogType,
  ],
};

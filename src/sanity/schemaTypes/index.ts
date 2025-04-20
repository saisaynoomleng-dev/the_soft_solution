import { type SchemaTypeDefinition } from 'sanity';
import { portfolioType } from './portfolioType';
import { blockContentType } from './blockContent';
import { pricingType } from './pricingType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType, blockContentType, pricingType],
};

import { type SchemaTypeDefinition } from 'sanity';
import { portfolioType } from './portfolioType';
import { blockContentType } from './blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioType, blockContentType],
};

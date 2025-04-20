import { CircleDollarSignIcon, LayoutPanelLeftIcon } from 'lucide-react';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('portfolio')
        .title('Portfolios')
        .icon(LayoutPanelLeftIcon),
      S.documentTypeListItem('pricing')
        .title('Product Pricing')
        .icon(CircleDollarSignIcon),
    ]);

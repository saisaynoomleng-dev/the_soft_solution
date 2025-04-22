import {
  CircleDollarSignIcon,
  LayoutPanelLeftIcon,
  UserIcon,
} from 'lucide-react';
import { BiDetail } from 'react-icons/bi';
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdCategory } from 'react-icons/md';
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
      S.documentTypeListItem('blog').title('Blogs').icon(BiDetail),
      S.divider(),
      S.documentTypeListItem('author').title('Authors').icon(FaRegCircleUser),
      S.documentTypeListItem('category').title('Categories').icon(MdCategory),
      S.documentTypeListItem('teamMember').title('Team Members').icon(UserIcon),
    ]);

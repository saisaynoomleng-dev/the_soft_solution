import { defineQuery } from 'next-sanity';

export const PORTFOLIOS_QUERY = defineQuery(`*[_type == 'portfolio'
 && defined(slug.current)
 && (!defined($filter) || category match $filter)][0..6]{
  name,
  slug,
  category,
  releasedIn,
  mainImage{
    asset->{
      url
    },
    alt
  },
  type,
 } | order(releasedIn)`);

export const PORTFOLIO_QUERY = defineQuery(`*[_type == 'portfolio'
 && slug.current == $slug][0]{
  name,
  slug,
  category,
  releasedIn,
  mainImage{
    asset->{
      url
    },
    alt
  },
  type,
 } `);

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
  description
 } `);

export const PRICING_QUERY = defineQuery(`*[_type == 'pricing'
 && defined(slug.current)][0..3]{
  name,
  slug,
  isPopular,
  price,
  features[]
 } | order(price)`);

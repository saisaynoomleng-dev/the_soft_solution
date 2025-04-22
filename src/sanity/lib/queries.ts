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

export const BLOGS_QUERY = defineQuery(`
  *[_type == 'blog'
 && defined(slug.current)
 && (!defined($search) || category->name match $search || author->name match $search || title match $search) 
 && (!defined($tags) || category->slug.current match $tags)
 ]{
  title,
  slug,
  category->{
    name,
    slug
    },
  author->{
    name,
    mainImage{
      asset->{
        url
      },
      alt
  },
  },
  publishedAt,
  mainImage{
    asset->{
      url
    },
    alt
  },
 } | order(publishedAt desc)`);

export const BLOG_QUERY = defineQuery(`
  *[_type == 'blog'
 && slug.current == $slug][0]{
  title,
  slug,
  category->{
    name,
    slug
  },
  author->{
    name,
    mainImage{
      asset->{
        url
      },
      alt
    },
    bio,
    slug
  },
  publishedAt,
  mainImage{
    asset->{
      url
    },
    alt
  },
  description
 } `);

export const AUTHOR_QUERY = defineQuery(`
  *[_type == 'author'
 && slug.current == $slug][0]{
  name,
  bio,
  mainImage{
    alt,
    asset->{url}
  },
  slug
 }`);

export const TEAM_MEMBER_QUERY = defineQuery(`
  *[_type == 'teamMember'
 && defined(slug.current)]{
  name,
  position,
  image{
    alt,
    asset->{url}
  }
 }`);

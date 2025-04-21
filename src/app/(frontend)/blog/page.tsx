import Bounded from '@/components/Bounded';
import SegmentPath from '@/components/SegmentPath';
import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import { BLOGS_QUERY } from '@/sanity/lib/queries';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import Paragraph from '@/components/Paragraph';
import clsx from 'clsx';
import Form from 'next/form';
import { Button } from '@/components/ui/button';
import SearchResetForm from '@/components/SearchResetForm';

export const metadata: Metadata = {
  title: 'Blogs',
};

export const categories = [
  { title: 'Mobile App Development', value: 'mobile-app-development' },
  { title: 'Web Design', value: 'web-design' },
  { title: 'How to Guide', value: 'how-to-guide' },
  { title: 'White Lable', value: 'white-label' },
];

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; filter?: string; tags?: string }>;
}) => {
  const { query, filter, tags } = await searchParams;
  const params = {
    search: query || null,
    currentFilter: filter || null,
    tags: tags || null,
  };

  const { data: blogs } = await sanityFetch({
    query: BLOGS_QUERY,
    params,
  });

  return (
    <Bounded>
      <SegmentPath title="Blog Posts" />

      <div className="grid md:grid-cols-[auto_1fr] gap-5">
        <div className="space-y-5">
          <Form
            action=""
            scroll={false}
            id="search-form"
            className="grid grid-cols-[1fr_auto] gap-2"
          >
            <input
              name="query"
              defaultValue={query}
              placeholder="Search..."
              className="border border-brand-black focus-visible:ring-[2px] focus-visible:ring-brand-purple indent-2 outline-none h-[2.5rem]"
            />
            <Button
              type="submit"
              className="h-[2.5rem]"
            >
              <span className="relative z-20">Search</span>
            </Button>

            {query && <SearchResetForm />}
          </Form>

          <div className="flex flex-col gap-y-4">
            <Paragraph className="font-semibold text-brand-purple text-fs-400">
              Popular Tags
            </Paragraph>
            {categories.map((category) => (
              <Link
                href={`/blog?${new URLSearchParams({ tags: category.value })}`}
                key={category.value}
                className={clsx(
                  'font-semibold tracking-wide inline-block px-5 border-l-2 border-brand-purple',
                )}
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {query && (
            <Paragraph className="col-span-full font-bold text-fs-400">
              Search results for '{query}'
            </Paragraph>
          )}
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug?.current}
              {...blog}
            />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default BlogPage;

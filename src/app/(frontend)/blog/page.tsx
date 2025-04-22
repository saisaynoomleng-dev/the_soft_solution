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
import { SlideInGroup } from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Blogs',
};

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    filter?: string;
    tags?: string;
    page?: string;
  }>;
}) => {
  const { query, filter, tags, page } = await searchParams;
  const params = {
    search: query || null,
    currentFilter: filter || null,
    tags: tags || null,
  };

  const { data: allBlogs } = await sanityFetch({
    query: BLOGS_QUERY,
    params,
  });

  const categories = [
    { title: 'Mobile App Development', value: 'mobile-app-development' },
    { title: 'Web Design', value: 'web-design' },
    { title: 'How to Guide', value: 'how-to-guide' },
    { title: 'White Lable', value: 'white-label' },
  ];

  const currentPage = parseInt(page || '1', 10);
  const blogsPerPage = 3;
  const totalBlogs = allBlogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const blogs = allBlogs.slice(startIndex, endIndex);

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
            {tags && (
              <Link
                href={`/blog`}
                className="font-semibold tracking-wide inline-block px-5 border-l-2 border-red-600"
              >
                Clear Tags
              </Link>
            )}
          </div>
        </div>

        <div className="space-y-5">
          {query && (
            <Paragraph className="col-span-full font-bold text-fs-400">
              Search results for &apos;{query}&apos;
            </Paragraph>
          )}
          <SlideInGroup
            direction="left"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10"
          >
            {blogs.map((blog) => (
              <BlogCard
                key={blog.slug?.current}
                {...blog}
              />
            ))}
          </SlideInGroup>

          {totalPages > 1 && (
            <div className="flex gap-2 mt-8 col-sapn-full">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <Link
                    key={pageNumber}
                    scroll={false}
                    href={{
                      pathname: '/blog',
                      query: {
                        ...(query && { query }),
                        ...(tags && { tags }),
                        page: pageNumber,
                      },
                    }}
                    className={clsx(
                      'px-4 py-2 border rounded',
                      currentPage === pageNumber
                        ? 'bg-brand-purple text-white'
                        : 'bg-white text-brand-purple',
                    )}
                  >
                    {pageNumber}
                  </Link>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default BlogPage;

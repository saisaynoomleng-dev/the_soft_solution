import Bounded from '@/components/Bounded';
import SegmentPath from '@/components/SegmentPath';
import { Metadata } from 'next';
import Form from 'next/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sanityFetch } from '@/sanity/lib/live';
import { BLOGS_QUERY } from '@/sanity/lib/queries';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import Paragraph from '@/components/Paragraph';
import clsx from 'clsx';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Blogs',
};

export const categories = [
  { title: 'Mobile Development', value: 'mobile-development' },
  { title: 'Web Design', value: 'web-design' },
  { title: 'How to Guide', value: 'how-to-guide' },
  { title: 'White Lable', value: 'white-label' },
];

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; filter?: string; tag?: string }>;
}) => {
  const { query, filter, tag } = await searchParams;
  const params = {
    search: query || null,
    filter: filter || null,
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
            className="flex flex-col relative gap-3"
          >
            <label
              htmlFor="#search"
              className="sr-only"
            >
              Search in blogs
            </label>
            <input
              type="text"
              name="query"
              id="search"
              defaultValue={query}
              placeholder="Search"
              className="border border-brand-black indent-1 py-2 focus-visible:ring-[2px] outline-none focus-visible:ring-brand-purple focus-visible:border-none "
            />
            <button
              type="submit"
              className="absolute top-2 right-3"
            >
              <HiOutlineMagnifyingGlass className="size-5" />
            </button>
          </Form>

          <Form action="">
            <Select
              name="filter"
              value={filter}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="lastest">Latest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </Form>

          <div className="flex flex-col gap-y-4">
            <Paragraph className="font-semibold text-brand-purple text-fs-400">
              Popular Tags
            </Paragraph>
            {categories.map((category) => (
              <Link
                href="/"
                key={category.value}
                className={clsx(
                  'font-semibold tracking-wide inline-block px-5 border-l-2 border-brand-gray',
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

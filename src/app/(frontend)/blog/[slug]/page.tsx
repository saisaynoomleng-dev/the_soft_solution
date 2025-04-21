import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import { formatDate } from '@/lib/actions';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { BLOG_QUERY } from '@/sanity/lib/queries';
import { components } from '@/sanity/portableTextComponents';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: blog } = await sanityFetch({
    query: BLOG_QUERY,
    params: await params,
  });
  return (
    <Bounded>
      <Link
        href="/blog"
        className="text-brand-purple/80 font-semibold block hover:text-brand-purple"
      >
        &larr; Back to all blogs
      </Link>

      <div className="md:max-w-[70%] md:mx-auto space-y-10">
        <div>
          {blog?.mainImage?.asset?.url && (
            <Image
              src={urlFor(blog.mainImage.asset.url)
                .width(800)
                .height(800)
                .auto('format')
                .format('webp')
                .url()}
              width={800}
              height={800}
              alt={blog.mainImage.alt || ''}
              priority
              className="mx-auto rounded-sm max-w-[500px] object-cover"
            />
          )}
        </div>

        <Title
          size="md"
          as="h1"
          className="text-left"
        >
          {blog?.title}
        </Title>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div>
              {blog?.author?.mainImage?.asset?.url && (
                <Image
                  src={urlFor(blog.author.mainImage.asset.url)
                    .width(100)
                    .height(100)
                    .format('webp')
                    .auto('format')
                    .url()}
                  width={100}
                  height={100}
                  alt={blog.author.mainImage.alt || ''}
                  className="w-[50px] rounded-full"
                />
              )}
            </div>
            <Link
              href={`/author/${blog?.author?.slug?.current}`}
              className="underline underline-offset-4 decoration-brand-purple"
            >
              {blog?.author?.name}
            </Link>
          </div>

          <Paragraph>
            Last Updated {blog?.publishedAt && formatDate(blog.publishedAt)}
          </Paragraph>
        </div>
      </div>

      <div className="prose md:prose-lg max-w-[70%] mx-auto">
        {blog?.description && (
          <PortableText
            value={blog?.description}
            components={components}
          />
        )}
      </div>
      <Link
        href="/blog"
        className="text-brand-purple/80 hover:text-brand-purple font-semibold block"
      >
        &larr; Back to all blogs
      </Link>
    </Bounded>
  );
};

export default BlogDetail;

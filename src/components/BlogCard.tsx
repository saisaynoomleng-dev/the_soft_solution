import { urlFor } from '@/sanity/lib/image';
import { BLOGS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import Paragraph from './Paragraph';
import Title from './Title';
import { formatDate } from '@/lib/actions';

const BlogCard = (props: NonNullable<BLOGS_QUERYResult>[number]) => {
  const { title, slug, category, author, publishedAt, mainImage } = props;
  return (
    <Link
      href={`/blog/${slug?.current}`}
      className="flex flex-col gap-2 group overflow-hidden"
    >
      <div className="overflow-hidden">
        {mainImage?.asset?.url && (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .auto('format')
              .quality(80)
              .format('webp')
              .url()}
            width={500}
            height={500}
            alt={mainImage.alt || ''}
            priority
            className="min-w-full object-cover mx-auto rounded-sm group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>
      <div className="flex flex-col gap-3">
        {category && (
          <Paragraph className="p-1 bg-brand-gray text-brand-white rounded-sm self-start font-semibold">
            {category.name}
          </Paragraph>
        )}

        {title && (
          <Title
            as="h3"
            size="sm"
            className="text-left group-hover:text-brand-purple"
          >
            {title}
          </Title>
        )}

        <div className="flex justify-between items-center">
          {author && (
            <Paragraph className="font-semibold ">by {author.name}</Paragraph>
          )}
          {publishedAt && <Paragraph>{formatDate(publishedAt)}</Paragraph>}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

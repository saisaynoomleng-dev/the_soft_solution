import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import SegmentPath from '@/components/SegmentPath';
import Title from '@/components/Title';
import { formatDate } from '@/lib/actions';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { PORTFOLIO_QUERY } from '@/sanity/lib/queries';
import { components } from '@/sanity/portableTextComponents';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: portfolio } = await sanityFetch({
    query: PORTFOLIO_QUERY,
    params: await params,
  });

  return (
    <Bounded className="">
      <SegmentPath title="Portfolio Detail" />
      <Link
        href="/portfolios"
        className="block font-bold hover:text-brand-purple text-fs-400"
      >
        &larr;&nbsp;&nbsp; Back to Portfolios
      </Link>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          {portfolio?.mainImage?.asset?.url ? (
            <Image
              src={urlFor(portfolio.mainImage.asset.url)
                .width(800)
                .height(800)
                .auto('format')
                .quality(90)
                .url()}
              width={800}
              height={800}
              alt={portfolio.mainImage.alt || ''}
              priority
              className="object-cover min-w-full mx-auto rounded-lg shadow-md shadow-brand-black"
            />
          ) : null}
        </div>

        <div className="flex flex-col flex-1 gap-3">
          <Title
            as="h1"
            size="md"
            className="text-left"
          >
            {portfolio?.name}
          </Title>

          <Paragraph className="capitalize">
            <span className="font-bold">App Type:</span> {portfolio?.type}
          </Paragraph>

          <Paragraph className="capitalize">
            <span className="font-bold">Category:</span> {portfolio?.category}
          </Paragraph>

          {portfolio?.releasedIn && (
            <Paragraph className="capitalize">
              <span className="font-bold">Released In:</span>{' '}
              {formatDate(portfolio?.releasedIn)}
            </Paragraph>
          )}
        </div>
      </div>

      <div className="custom-divider" />

      <div className="flex flex-col gap-5">
        <Title
          as="h2"
          size="sm"
          className="text-left underline underline-offset-8 decoration-brand-purple"
        >
          App Details
        </Title>

        <div className="prose md:prose-lg min-w-full">
          {portfolio?.description && (
            <PortableText
              value={portfolio.description}
              components={components}
            />
          )}
        </div>
      </div>
      <Link
        href="/portfolios"
        className="block font-bold hover:text-brand-purple text-fs-400"
      >
        &larr;&nbsp;&nbsp; Back to Portfolios
      </Link>
    </Bounded>
  );
};

export default PortfolioDetailPage;

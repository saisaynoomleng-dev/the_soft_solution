import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import PortfolioCard from '@/components/PortfolioCard';
import PortfolioFilter from '@/components/PortfolioFilter';
import { SlideInEffect, SlideInGroup } from '@/components/ScrollAnimation';
import SegmentPath from '@/components/SegmentPath';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { PORTFOLIOS_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolios',
};

const PortfolioPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) => {
  const { category, page } = await searchParams;
  const params = { filter: category || null };

  const filterButtons = [
    { name: 'All', value: 'all' },
    { name: 'Custom Software', value: 'custom-software' },
    { name: 'Mobile App', value: 'mobile-app' },
    { name: 'Testing', value: 'testing' },
  ];

  const { data: allPortfolios } = await sanityFetch({
    query: PORTFOLIOS_QUERY,
    params,
  });

  const currentPage = parseInt(page || '1', 10);
  const portfolioPerPage = 3;
  const totalPortfolios = allPortfolios.length;
  const totalPages = Math.ceil(totalPortfolios / portfolioPerPage);

  const startIndex = (currentPage - 1) * portfolioPerPage;
  const endIndex = startIndex + portfolioPerPage;
  const portfolios = allPortfolios.slice(startIndex, endIndex);

  return (
    <Bounded>
      <SegmentPath title="Portfolios" />
      <div className="flex flex-col gap-2">
        <SlideInEffect direction="right">
          <Title
            as="h1"
            size="sm"
          >
            Our Portfolio Showcase
          </Title>
        </SlideInEffect>

        <SlideInGroup
          direction="left"
          className="md:max-w-[70%] md:mx-auto flex flex-col gap-3 text-justify"
        >
          <Paragraph className=" first-letter:float-left first-letter:mr-5 first-letter:text-fs-600 first-letter:font-bold ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            blanditiis incidunt quis veniam aperiam, quas officiis voluptates
            laudantium quia quo beatae recusandae velit nam eaque? Nobis,
            commodi? Dignissimos voluptas ex sed? In autem dicta suscipit omnis
            aspernatur hic mollitia corporis provident! Architecto repellendus
            obcaecati provident necessitatibus perferendis culpa quis eveniet
            illo consequatur incidunt molestias dolor, laborum unde natus sequi,
            magni veritatis a exercitationem, quos rerum repellat et commodi!
            Excepturi magni reiciendis provident atque ut vitae eaque illum
            alias recusandae pariatur.
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            itaque?
          </Paragraph>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa
            nostrum distinctio ad provident perspiciatis eveniet sapiente
            officia, voluptatem ab?
          </Paragraph>
        </SlideInGroup>
      </div>

      <div className="space-y-5">
        <div className="flex gap-5 divide-brand-gray items-center justify-around">
          {filterButtons.map((b) => (
            <PortfolioFilter
              href={b.value}
              key={b.value}
              name={b.name}
            />
          ))}
        </div>

        <SlideInGroup
          direction="top"
          className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 p-3"
        >
          {portfolios.map((p) => (
            <PortfolioCard
              key={p.slug?.current}
              {...p}
            />
          ))}
        </SlideInGroup>
        <div className="flex gap-3 items-center justify-center w-full">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Link
                scroll={false}
                key={pageNumber}
                href={{
                  pathname: '/portfolios',
                  query: {
                    ...(category && { category }),
                    page: pageNumber,
                  },
                }}
                className={clsx(
                  `px-4 py-2 border rounded`,
                  currentPage === pageNumber
                    ? 'bg-brand-purple text-brand-white'
                    : 'bg-white text-brand-purple',
                )}
              >
                {pageNumber}
              </Link>
            ),
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default PortfolioPage;

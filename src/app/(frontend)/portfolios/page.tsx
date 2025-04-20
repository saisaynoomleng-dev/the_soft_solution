import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import PortfolioCard from '@/components/PortfolioCard';
import PortfolioFilter from '@/components/PortfolioFilter';
import SegmentPath from '@/components/SegmentPath';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { PORTFOLIOS_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolios',
};

const PortfolioPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) => {
  const category = (await searchParams).category;
  const params = { filter: category || null };

  const filterButtons = [
    { name: 'All', value: 'all' },
    { name: 'Custom Software', value: 'custom-software' },
    { name: 'Mobile App', value: 'mobile-app' },
    { name: 'Testing', value: 'testing' },
  ];

  const { data: portfolios } = await sanityFetch({
    query: PORTFOLIOS_QUERY,
    params,
  });

  return (
    <Bounded>
      <SegmentPath title="Portfolios" />
      <div className="flex flex-col gap-2">
        <Title
          as="h1"
          size="sm"
        >
          Our Portfolio Showcase
        </Title>
        <Paragraph className="md:max-w-[70%] md:mx-auto first-letter:text-fs-500 first-letter:bg-brand-purple first-letter:p-1 first-letter:inline-block first-letter:mr-1 first-letter:text-brand-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          quisquam ratione praesentium possimus dicta! Repellat iure nulla
          sapiente perferendis, accusamus ducimus cumque, esse dolorum
          reiciendis eius exercitationem a odio molestiae.
        </Paragraph>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 p-3">
          {portfolios.map((p) => (
            <PortfolioCard
              key={p.slug?.current}
              {...p}
            />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default PortfolioPage;

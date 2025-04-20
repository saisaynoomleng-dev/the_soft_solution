import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import PortfolioCard from '@/components/PortfolioCard';
import PortfolioFilter from '@/components/PortfolioFilter';
import SegmentPath from '@/components/SegmentPath';
import Title from '@/components/Title';
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
        <div className="md:max-w-[70%] md:mx-auto flex flex-col gap-3 text-justify">
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
        </div>
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

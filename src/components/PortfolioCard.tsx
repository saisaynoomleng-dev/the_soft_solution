import { urlFor } from '@/sanity/lib/image';
import { PORTFOLIOS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';
import Title from './Title';
import Paragraph from './Paragraph';
import { formatDate } from '@/lib/actions';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const PortfolioCard = (props: NonNullable<PORTFOLIOS_QUERYResult>[number]) => {
  const { name, slug, category, releasedIn, mainImage, type } = props;
  return (
    <Link
      href={`/portfolios/${slug?.current}`}
      className="flex flex-col gap-5 group"
    >
      <div className="relative overflow-hidden">
        {mainImage?.asset?.url && (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .auto('format')
              .url()}
            width={500}
            height={500}
            alt={mainImage.alt || ''}
            priority
            className="w-[300px] md:w-[500px] object-cover mx-auto relative z-10"
          />
        )}

        <div className="absolute inset-0 group-hover:z-20 bg-brand-black/60 flex justify-center items-center ">
          <div className="p-10 border-2 border-brand-white">
            <FaMagnifyingGlass className="size-10 text-brand-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 ">
        <Title
          as="h3"
          size="sm"
          className="capitalize text-left group-hover:text-brand-purple group-hover:tracking-widest transition-all duration-300 ease-out"
        >
          {name}
        </Title>
        <Paragraph>
          {releasedIn && (
            <>
              <span className="font-semibold capitalize">{category}</span> |{' '}
              <span>{formatDate(releasedIn)}</span>
            </>
          )}
        </Paragraph>
      </div>
    </Link>
  );
};

export default PortfolioCard;

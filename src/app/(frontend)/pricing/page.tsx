import Bounded from '@/components/Bounded';
import CallToAction from '@/components/CallToAction';
import Paragraph from '@/components/Paragraph';
import SegmentPath from '@/components/SegmentPath';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { PRICING_QUERY } from '@/sanity/lib/queries';
import clsx from 'clsx';
import { Metadata } from 'next';
import {
  FaAppStore,
  FaFigma,
  FaGoogle,
  FaGooglePlay,
  FaPlaystation,
  FaShopify,
  FaSpotify,
} from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';
import { IoCheckmarkSharp, IoClose } from 'react-icons/io5';
import { CgAdidas } from 'react-icons/cg';
import { SiNike, SiPuma, SiUnderarmour } from 'react-icons/si';
import { SlideInEffect, SlideInGroup } from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Pricing',
};

const PricingPage = async () => {
  const { data: pricing } = await sanityFetch({ query: PRICING_QUERY });

  return (
    <Bounded>
      <SegmentPath title="Product Pricing" />
      <div className="flex justify-between">
        <Title
          as="h2"
          size="md"
          className="text-left"
        >
          Products Prices
        </Title>

        <CallToAction
          variant="default"
          href="mailto:sales@thesoftsolution.com"
          className="rounded-sm"
        >
          Contact Sales
        </CallToAction>
      </div>

      <div className="grid md:grid-cols-3 gap-5 cursor-pointer">
        {pricing.map((p) => (
          <div
            className="p-10 flex flex-col shadow-sm shadow-brand-black rounded-lg relative items-center justify-center hover:scale-[1.02] transition-transform duration-300 ease-in-out group hover:shadow-brand-purple"
            key={p.slug?.current}
          >
            {p?.isPopular && (
              <div className="absolute right-[1rem] top-[1rem] p-2 bg-brand-purple uppercase font-semibold text-brand-white rounded-sm">
                popular
              </div>
            )}

            <div className="flex flex-col gap-1 uppercase mt-10 text-center">
              <Paragraph className="text-fs-400 font-semibold">
                {p?.name}
              </Paragraph>
              <Paragraph className="tracking-wide text-brand-gray font-semibold">
                Starting at
              </Paragraph>
              <Paragraph className="text-fs-500 font-bold">
                $ {p?.price?.toFixed(2)}
              </Paragraph>
            </div>

            <div className="custom-divider"></div>

            <ul className="flex flex-col gap-5 capitalize mt-5">
              {p.features
                ? p.features.map((f) => (
                    <li
                      key={f.title}
                      className={clsx(
                        'flex items-center gap-2 font-semibold',
                        f.isIncluded ? 'text-brand-black' : 'text-brand-gray',
                      )}
                    >
                      {f.isIncluded ? (
                        <IoCheckmarkSharp className="text-brand-purple text-lg" />
                      ) : (
                        <IoClose className="text-[#969696] text-lg" />
                      )}
                      <span className="ml-5">{f.title}</span>
                    </li>
                  ))
                : null}
            </ul>

            <div
              className={clsx(
                'flex items-center justify-center p-5 bg-brand-gray text-brand-black uppercase group-hover:bg-brand-purple group-hover:text-brand-white  transition-colors duration-700 ease-in-out min-w-full mt-5 rounded-sm',
                p.isPopular && 'bg-brand-purple text-brand-white',
              )}
            >
              <Paragraph className="group-hover:tracking-widest transition-all duration-700 ease-in-out font-semibold text-fs-400">
                Get Started
              </Paragraph>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        <SlideInEffect direction="top">
          <Title
            as="h3"
            size="sm"
            className="uppercase"
          >
            Trusted by leading digital innovations
          </Title>
        </SlideInEffect>

        <SlideInGroup
          direction="bottom"
          className="grid grid-cols-6 px-10 gap-5 place-items-center max-w-[70%] md:max-w-[50%] mx-auto"
        >
          <FaGooglePlay className="size-10 text-brand-gray cursor-pointer" />
          <FaMeta className="size-10 text-brand-gray cursor-pointer" />
          <FaGoogle className="size-10 text-brand-gray cursor-pointer" />
          <FaPlaystation className="size-10 text-brand-gray cursor-pointer" />
          <FaFigma className="size-10 text-brand-gray cursor-pointer" />
          <FaShopify className="size-10 text-brand-gray cursor-pointer" />
          <FaSpotify className="size-10 text-brand-gray cursor-pointer" />
          <FaAppStore className="size-10 text-brand-gray cursor-pointer" />
          <CgAdidas className="size-10 text-brand-gray cursor-pointer" />
          <SiNike className="size-10 text-brand-gray cursor-pointer" />
          <SiPuma className="size-10 text-brand-gray cursor-pointer" />
          <SiUnderarmour className="size-10 text-brand-gray cursor-pointer" />
        </SlideInGroup>
      </div>
    </Bounded>
  );
};

export default PricingPage;

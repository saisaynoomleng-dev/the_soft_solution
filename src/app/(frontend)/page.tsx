import Bounded from '@/components/Bounded';
import CallToAction from '@/components/CallToAction';
import Paragraph from '@/components/Paragraph';
import {
  FadeInEffect,
  SlideInEffect,
  SlideInGroup,
} from '@/components/ScrollAnimation';
import ServiceCard from '@/components/ServiceCard';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { TEAM_MEMBER_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FaAppStore,
  FaFigma,
  FaGoogle,
  FaGooglePlay,
  FaMeta,
  FaPlaystation,
  FaShopify,
  FaSpotify,
} from 'react-icons/fa6';
import { CgAdidas } from 'react-icons/cg';
import { SiNike, SiPuma, SiUnderarmour } from 'react-icons/si';

export default async function Home() {
  const { data: members } = await sanityFetch({
    query: TEAM_MEMBER_QUERY,
  });

  return (
    <Bounded>
      <div className="flex flex-col gap-5 justify-center items-center text-center hero-bg py-32">
        <SlideInEffect direction="left">
          <Title
            as="h1"
            size="lg"
          >
            Mobile App Development
          </Title>
        </SlideInEffect>

        <SlideInEffect direction="right">
          <Paragraph>
            Since our establishment, we have been delivering high-quality and
            sustainable software solutions for corporate purposes of worldwide
            businesses.
          </Paragraph>
        </SlideInEffect>

        <SlideInEffect direction="bottom">
          <CallToAction
            href="/"
            variant="default"
          >
            GET IN TOUCH
          </CallToAction>
        </SlideInEffect>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <SlideInEffect
          direction="left"
          className="place-self-center"
        >
          <Image
            src="/assets/images/home1.png"
            width={500}
            height={500}
            priority
            alt=""
            className="min-w-full mx-auto "
          />
        </SlideInEffect>

        <SlideInGroup
          direction="bottom"
          className="grid md:grid-cols-2 gap-5"
        >
          <div className="flex flex-col justify-around items-center shadow-sm p-10 rounded-sm shadow-brand-black cursor-pointer ">
            <Title
              as="h3"
              size="md"
            >
              See All Service
            </Title>
            <div className="custom-divider" />
            <Button>
              <span className="relative z-20">All Services</span>
            </Button>
          </div>

          <ServiceCard
            title="corporate solutions"
            text="Need specific software for your company? We are ready to develop it."
          />

          <ServiceCard
            title="call center solutions"
            text="Our experts provide custom products of any complexity for call centers."
          />

          <ServiceCard
            title="colud development"
            text="We offer you reliable cloud devleopment solutions."
          />
        </SlideInGroup>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5  ">
        <FadeInEffect className="col-span-full">
          <Title
            as="h2"
            size="md"
          >
            Meet the Team
          </Title>
        </FadeInEffect>
        {members.map((member) => (
          <SlideInEffect
            direction="bottom"
            className="relative group cursor-pointer"
            key={member.name}
          >
            <div>
              {member?.image?.asset?.url && (
                <Image
                  src={urlFor(member.image.asset.url)
                    .width(500)
                    .height(500)
                    .format('webp')
                    .url()}
                  width={500}
                  height={500}
                  alt={member.image.alt || ''}
                  priority
                  className="relative z-0 object-cover mx-auto saturate-0 group-hover:saturate-100 transition-all duration-500 ease-in-out rounded-lg"
                />
              )}
            </div>
            <div className="absolute left-0 bottom-[1rem] bg-brand-black/40 p-5 z-10 w-[80%] group-hover:w-[90%] transition-all duration-300 border-r-5 border-r-brand-purple">
              <Title
                as="h3"
                size="sm"
                className="text-white"
              >
                {member.name}
              </Title>
              <Paragraph className="text-center text-brand-white">
                {member.position}
              </Paragraph>
            </div>
          </SlideInEffect>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-5">
          <FadeInEffect>
            <Title
              as="h2"
              size="md"
            >
              Get More With Us
            </Title>
          </FadeInEffect>

          <SlideInEffect direction="left">
            <Tabs
              defaultValue="1"
              className="min-w-full"
            >
              <TabsList className="min-w-full">
                <TabsTrigger value="1">01</TabsTrigger>
                <TabsTrigger value="2">02</TabsTrigger>
                <TabsTrigger value="3">03</TabsTrigger>
                <TabsTrigger value="4">04</TabsTrigger>
              </TabsList>
              <TabsContent
                value="1"
                className="flex flex-col gap-5"
              >
                <Title className="text-fs-400 text-left uppercase">
                  Free App
                </Title>
                <Paragraph className="font-semibold">
                  We regularly upload new free apps to our website, which is
                  fully accessible to our clients and subscribers. You can also
                  find out about free apps in our blog.
                </Paragraph>
                <Button className="self-start">
                  <span className="relative z-20">GET IN TOUCH</span>
                </Button>
              </TabsContent>

              <TabsContent
                value="2"
                className="flex flex-col gap-5"
              >
                <Title className="text-fs-400 text-left uppercase">
                  Get social
                </Title>
                <Paragraph className="font-semibold">
                  Every app we develop has built-in social support that allows
                  you to stay connected to your accounts on Facebook, Instagram,
                  Twitter and other networks.
                </Paragraph>
                <Button className="self-start">
                  <span className="relative z-20">GET IN TOUCH</span>
                </Button>
              </TabsContent>

              <TabsContent
                value="3"
                className="flex flex-col gap-5"
              >
                <Title className="text-fs-400 text-left uppercase">
                  customer service
                </Title>
                <Paragraph className="font-semibold">
                  Every customer of the Soft Solutions&reg; can get access to
                  our friendly and qualified 24/7 support via chat or pone. Feel
                  free to ask us any questions!
                </Paragraph>
                <Button className="self-start">
                  <span className="relative z-20">GET IN TOUCH</span>
                </Button>
              </TabsContent>

              <TabsContent
                value="4"
                className="flex flex-col gap-5"
              >
                <Title className="text-fs-400 text-left uppercase">
                  great usability
                </Title>
                <Paragraph className="font-semibold">
                  All our apps are designed to have great usability in order to
                  easily operate our applications. That is why our software has
                  high ratings and lots of awards.
                </Paragraph>
                <Button className="self-start">
                  <span className="relative z-20">GET IN TOUCH</span>
                </Button>
              </TabsContent>
            </Tabs>
          </SlideInEffect>
        </div>

        <SlideInGroup
          direction="right"
          className="grid grid-cols-2 place-items-center"
        >
          <div>
            <Image
              src="/assets/images/home1.png"
              alt=""
              width={300}
              height={500}
              priority
            />
          </div>

          <div className="pt-5">
            <Image
              src="/assets/images/home1.png"
              alt=""
              width={300}
              height={500}
              priority
            />
          </div>
        </SlideInGroup>
      </div>

      <div className="space-y-5">
        <SlideInEffect direction="top">
          <Title
            as="h3"
            size="sm"
            className="uppercase"
          >
            Our Clients
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
}

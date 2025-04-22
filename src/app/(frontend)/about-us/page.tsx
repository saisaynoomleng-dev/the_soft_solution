import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { Metadata } from 'next';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Paragraph from '@/components/Paragraph';
import { Progress } from '@/components/ui/progress';
import CircularProgress from '@/components/CircularProgress';
import { Button } from '@/components/ui/button';
import { SlideInEffect, SlideInGroup } from '@/components/ScrollAnimation';
import { SiNike, SiPuma, SiUnderarmour } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg';
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

export const metadata: Metadata = {
  title: 'About Us',
};

const AboutPage = () => {
  return (
    <Bounded>
      <div className="grid md:grid-cols-2 gap-5">
        <SlideInEffect direction="left">
          <Image
            src="/assets/images/about-us.webp"
            width={500}
            height={500}
            alt=""
            priority
            className="min-w-full object-cover mx-auto rounded-sm"
          />
        </SlideInEffect>
        <div className="flex flex-col gap-5">
          <SlideInGroup direction="right">
            <Title
              as="h1"
              size="sm"
            >
              Why Choose Us
            </Title>

            <Tabs
              defaultValue="experience"
              className="min-w-full"
            >
              <TabsList className="grid min-w-full grid-cols-3">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="mission">Missions</TabsTrigger>

                <TabsContent value="experience">
                  <Paragraph className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati quod doloribus, odit quaerat atque harum
                    blanditiis alias tempora beatae non.
                  </Paragraph>
                  <div className="flex flex-col gap-5 mt-5">
                    <div>
                      <Paragraph className="font-semibold uppercase text-brand-gray">
                        Window applications
                      </Paragraph>
                      <Progress value={80} />
                    </div>

                    <div>
                      <Paragraph className="font-semibold uppercase text-brand-gray">
                        IOS/MACOS APPS
                      </Paragraph>
                      <Progress value={90} />
                    </div>

                    <div>
                      <Paragraph className="font-semibold uppercase text-brand-gray">
                        android applications
                      </Paragraph>
                      <Progress value={85} />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <Paragraph className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo repellendus voluptates explicabo hic veritatis dicta
                    ipsam sit quia non debitis!
                  </Paragraph>

                  <div className="flex gap-5 justify-between items-center mt-5">
                    <div className="space-y-5">
                      <CircularProgress
                        progress={80}
                        className="mx-auto"
                      />
                      <Paragraph className="font-semibold uppercase">
                        app development
                      </Paragraph>
                    </div>

                    <div className="space-y-5">
                      <CircularProgress
                        progress={72}
                        className="mx-auto"
                      />
                      <Paragraph className="font-semibold uppercase">
                        qa & testing
                      </Paragraph>
                    </div>

                    <div className="space-y-5">
                      <CircularProgress
                        progress={99}
                        className="mx-auto"
                      />
                      <Paragraph className="font-semibold uppercase">
                        customer support
                      </Paragraph>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent
                  value="mission"
                  className="space-y-5"
                >
                  <Paragraph className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo repellendus voluptates explicabo hic veritatis dicta
                    ipsam sit quia non debitis!
                  </Paragraph>

                  <ul className="list-disc marker:text-brand-purple pl-4 font-semibold flex gap-x-10 gap-y-5 flex-wrap mt-5">
                    <li>IOS/MacOS Apps</li>
                    <li>Applications</li>
                    <li>QA & Testing</li>
                    <li>UI/UX</li>
                    <li>Android Applications</li>
                    <li>Database Management</li>
                  </ul>

                  <div className="grid grid-cols-2 gap-5">
                    <Button variant="default">
                      <span className="relative z-20 uppercase">
                        Get In Touch
                      </span>
                    </Button>
                    <Button variant="form">
                      <span className="relative z-20 uppercase">
                        Get Appointment
                      </span>
                    </Button>
                  </div>
                </TabsContent>
              </TabsList>
            </Tabs>
          </SlideInGroup>
        </div>
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
};

export default AboutPage;

import Bounded from '@/components/Bounded';
import Title from '@/components/Title';
import { Metadata } from 'next';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Paragraph from '@/components/Paragraph';
import { Progress } from '@/components/ui/progress';
import CircularProgress from '@/components/CircularProgress';

export const metadata: Metadata = {
  title: 'About Us',
};

const AboutPage = () => {
  return (
    <Bounded>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <Image
            src="/assets/images/about-us.webp"
            width={500}
            height={500}
            alt=""
            priority
            className="min-w-full object-cover mx-auto rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-5">
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
                  Obcaecati quod doloribus, odit quaerat atque harum blanditiis
                  alias tempora beatae non.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  repellendus voluptates explicabo hic veritatis dicta ipsam sit
                  quia non debitis!
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

              <TabsContent value="missions">
                <Paragraph className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  repellendus voluptates explicabo hic veritatis dicta ipsam sit
                  quia non debitis!
                </Paragraph>
              </TabsContent>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </Bounded>
  );
};

export default AboutPage;

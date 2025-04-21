import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import SegmentPath from '@/components/SegmentPath';
import Title from '@/components/Title';
import Image from 'next/image';
import Link from 'next/link';
import Form from 'next/form';
import { Button } from '@/components/ui/button';
import { SlideInEffect } from '@/components/ScrollAnimation';

const Contact = () => {
  return (
    <Bounded>
      <SegmentPath title="Contact Us" />

      <div className="grid md:grid-cols-2 gap-5">
        <SlideInEffect direction="left">
          <Image
            src="/assets/images/contact.jpg"
            width={600}
            height={600}
            priority
            alt=""
            className="object-cover min-w-full mx-auto rounded-lg"
          />
        </SlideInEffect>

        <SlideInEffect
          direction="right"
          className="flex flex-col gap-3"
        >
          <Title
            as="h2"
            size="sm"
            className="text-left"
          >
            Contact Us
          </Title>
          <Paragraph>
            Use this form for all general enquires. We monitor these responses
            constantly during working hours. If you are looking to partner with
            us, please complete the{' '}
            <Link
              href="/contact/new-customer-application"
              className="text-brand-purple font-semibold underline underline-offset-2 decoration-brand-purple"
            >
              new customer
            </Link>{' '}
            application form instead.
          </Paragraph>

          <Form
            action=""
            className="grid grid-cols-2 gap-3 justify-between"
          >
            <div className="space-y-2 col-span-full">
              <label
                htmlFor="name"
                className="form-label"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2 col-span-1">
              <label
                htmlFor="email"
                className="form-label"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-input"
                placeholder="Enter your Email"
              />
            </div>

            <div className="space-y-2 col-span-1">
              <label
                htmlFor="phone"
                className="form-label"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2 col-span-full">
              <label
                htmlFor="message"
                className="form-label"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="form-input"
                placeholder="Enter your Message"
              />
            </div>

            <Button
              variant="form"
              className="col-span-1"
            >
              <span className="relative z-20">Send Your Message</span>
            </Button>
          </Form>
        </SlideInEffect>
      </div>
    </Bounded>
  );
};

export default Contact;

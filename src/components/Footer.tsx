import Image from 'next/image';
import Paragraph from './Paragraph';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Title from './Title';
import CallToAction from './CallToAction';

const Footer = () => {
  const offers = [
    { title: 'DB Management', href: '/' },
    { title: 'IOS/MacOS', href: '/' },
    { title: 'Android Apps', href: '/' },
    { title: 'Windows Apps', href: '/' },
    { title: 'UX/UI', href: '/' },
  ];
  return (
    <footer className="grid md:grid-cols-2 lg:grid-cols-3 p-5 lg:mx-5 bg-brand-black/95 text-brand-white md:gap-x-5 lg:gap-x-10 gap-y-5">
      <div className="flex flex-col gap-5">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={200}
            height={200}
            alt=""
            priority
            className=""
          />
        </Link>

        <Paragraph className="text-justify">
          Our company has been developing high-quality and reliable software for
          corporate needs since 2008. We are renowned professinals of software
          development.
        </Paragraph>

        <div className="divide-y divid-y divide-brand-white/20 flex flex-col gap-3">
          <Paragraph className="py-2">
            <span className="text-brand-purple mr-5 uppercase font-semibold text-fs-300">
              address
            </span>
            4730 Crystal Springs Dr, Los Angeles, CA 90027
          </Paragraph>

          <Paragraph className="py-2">
            <span className="text-brand-purple mr-5 uppercase font-semibold text-fs-300">
              phones
            </span>
            +1 234 5678, +1 345 6789, +1 456 7890
          </Paragraph>

          <Paragraph className="py-2">
            <span className="text-brand-purple mr-5 uppercase font-semibold text-fs-300">
              email
            </span>
            info@thesoftsolution.com
          </Paragraph>
        </div>

        <div className="flex gap-3 w-full">
          <Link
            href="https://www.facebook.com"
            className="hover:text-brand-purple"
          >
            <FaFacebook size={20} />
          </Link>

          <Link
            href="https://www.x.com"
            className="hover:text-brand-purple"
          >
            <FaTwitter size={20} />
          </Link>

          <Link
            href="https://www.instagram.com"
            className="hover:text-brand-purple"
          >
            <FaInstagram size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com"
            className="hover:text-brand-purple"
          >
            <FaLinkedinIn size={20} />
          </Link>
        </div>
      </div>

      <form
        action=""
        className="flex flex-col gap-3 justify-around"
      >
        <Title
          as="h2"
          size="sm"
          className="text-brand-gray"
        >
          Contact Us
        </Title>
        <div>
          <label
            htmlFor="name"
            className="sr-only"
          >
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="sr-only"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="sr-only"
          >
            Message
          </label>
          <Textarea
            name="message"
            minLength={20}
            placeholder="Message"
            id="message"
          />
        </div>

        <Button
          type="submit"
          variant="form"
        >
          <span className="relative z-50">send message</span>
        </Button>
      </form>

      <div className="flex flex-col gap-5 ">
        <Title
          as="h2"
          size="sm"
          className="text-brand-gray"
        >
          What We Offer!
        </Title>
        <div className="flex flex-col gap-5 divide-y divide-brand-white/20">
          {offers.map((f) => (
            <CallToAction
              href={f.href}
              key={f.title}
              variant="arrow"
            >
              {f.title}
            </CallToAction>
          ))}
        </div>
      </div>

      <div className="col-span-full place-self-end">
        <Paragraph className="text-brand-gray font-bold text-fs-200">
          &copy; {new Date().getFullYear()} The Soft Solution. All rights
          reserved. Privacy Policy.
        </Paragraph>
      </div>
    </footer>
  );
};

export default Footer;

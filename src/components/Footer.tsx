import Image from 'next/image';
import Paragraph from './Paragraph';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-2 lg:grid-cols-3 p-5 lg:mx-5 bg-brand-black text-brand-white">
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

          <Link href="https://www.x.com" className="hover:text-brand-purple">
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
    </footer>
  );
};

export default Footer;

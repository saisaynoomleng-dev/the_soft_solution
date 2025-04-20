'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import clsx from 'clsx';

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const links = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
    { name: 'Portfolio', url: '/portfolios' },
    { name: 'Blog', url: '/blog' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Contact Us', url: '/contact' },
  ];
  return (
    <header className="p-5 flex justify-between items-center overflow-hidden">
      <Link href="/">
        <Image
          src="/assets/images/logo.png"
          width={100}
          height={100}
          alt=""
          priority
          className="w-[200px]"
        />
      </Link>

      <button
        className="hidden max-md:block relative z-50 text-brand-purple text-fs-400"
        onClick={() => setNavOpen((prev) => !prev)}
      >
        {navOpen ? <IoCloseSharp /> : <RxHamburgerMenu />}
      </button>

      <nav
        role="navigation"
        id="main-nav"
        className={clsx(
          'relative z-30 flex gap-3 max-md:fixed max-md:inset-0 max-md:left-[50%] max-md:flex-col max-md:bg-brand-black max-md:text-brand-white max-md:p-5 max-md:pt-20 max-md:backdrop:blur-sm transition-transform duration-500 ease-in-out',
          navOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full',
        )}
      >
        {links.map((link) => (
          <Navlink
            name={link.name}
            url={link.url}
            key={link.url}
            onClick={() => setNavOpen(false)}
          />
        ))}
      </nav>
    </header>
  );
};

export default Header;

'use client';

import { NavLinksProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ name, url, className, onClick }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={url}
      className={clsx(
        'font-semibold',
        pathname === url && 'text-brand-purple',
        className,
      )}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default Navlink;

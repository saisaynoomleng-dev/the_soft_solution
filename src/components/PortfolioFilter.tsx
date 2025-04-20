'use client';

import { PortfolioFilterProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PortfolioFilter = ({ name, href }: PortfolioFilterProps) => {
  const link =
    href === 'all'
      ? '/portfolios'
      : `/portfolios?${new URLSearchParams({ category: href })}`;

  const searchParams = useSearchParams();
  const categoryParams = searchParams.get('category');
  const isActive =
    (href === 'all' && categoryParams === null) || categoryParams === href;

  return (
    <Link
      href={link}
      className={clsx(
        'font-semibold tracking-wide inline-block px-5 border-l-2 border-brand-gray',
        isActive && 'text-brand-purple border-brand-purple',
      )}
    >
      {name}
    </Link>
  );
};

export default PortfolioFilter;

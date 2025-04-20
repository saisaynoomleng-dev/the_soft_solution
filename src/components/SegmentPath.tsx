'use client';

import { SegmentPathProps } from '@/lib/types';
import Title from './Title';
import { usePathname } from 'next/navigation';
import Paragraph from './Paragraph';
import clsx from 'clsx';

const SegmentPath = ({ title, className }: SegmentPathProps) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <div
      className={clsx(
        'bg-brand-gray/10 segment-bg-sm md:segment-bg-md min-w-screen h-[10rem] flex flex-col justify-center px-5',
        className,
      )}
    >
      <Title
        as="h2"
        size="md"
        className="text-left"
      >
        {title}
      </Title>
      <div className="flex gap-1 items-center">
        <Paragraph className="text-brand-gray">Home</Paragraph>
        {segments.map((s, index) => {
          const isLast = index === segments.length - 1;
          return (
            <div
              key={index}
              className="flex items-center gap-1"
            >
              <span>/</span>
              <Paragraph
                className={clsx(
                  'text-brand-gray capitalize',
                  isLast ? 'text-brand-purple font-bold' : 'text-brand-gray',
                )}
              >
                {decodeURIComponent(s)}
              </Paragraph>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SegmentPath;

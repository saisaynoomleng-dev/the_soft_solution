import { TitleProps } from '@/lib/types';
import clsx from 'clsx';

const Title = ({ as: Comp = 'h1', children, size, className }: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'text-balance text-center leading-[1.1]',
        size === 'lg' && 'font-bold text-fs-700 md:text-fs-800',
        size === 'md' && 'font-bold text-fs-600',
        size === 'sm' && 'font-semibold text-fs-400',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;

import { CallToActionProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import { MdArrowRight } from 'react-icons/md';

const CallToAction = ({
  href,
  children,
  className,
  variant = 'default',
}: CallToActionProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        'px-4 py-2 min-h-10 inline-block',
        variant === 'default' &&
          `relative z-10 overflow-hidden 
              bg-brand-purple text-brand-white 
              font-semibold border-0 cursor-pointer uppercase 
              rounded-none transition-colors duration-100 ease-in-out
              hover:text-white
              after:content-[''] after:absolute after:inset-0 
              after:scale-x-0 hover:after:scale-x-100 hover:after:w-full 
              after:origin-center after:bg-brand-black
              after:transition-all after:duration-200 after:ease-out 
              after:z-0`,
        variant === 'arrow' && `bg-transparent group `,
        className,
      )}
    >
      <span
        className={clsx(
          'relative z-20',
          variant === 'arrow' &&
            'flex gap-2 justify-around items-center group-hover:tracking-widest group-hover:text-brand-purple font-semibold text-fs-400 transition-all duration-300 ease-in-out',
        )}
      >
        <span
          className={clsx(
            'hidden',
            variant === 'arrow' && '!flex items-center gap-0 flex-1',
          )}
        >
          <div className="!p-0 !m-0 w-0 h-1 bg-brand-purple group-hover:w-full transition-all duration-300 ease-out group-hover:origin-right " />
          <MdArrowRight className="size-8 !p-0 !m-0" />
        </span>
        <span className="transition-colors duration-300 ease-out">
          {children}{' '}
        </span>
      </span>
    </Link>
  );
};

export default CallToAction;

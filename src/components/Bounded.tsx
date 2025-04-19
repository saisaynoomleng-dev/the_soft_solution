import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'px-5 py-10 overflow-x-hidden space-y-10 lg:mx-5',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;

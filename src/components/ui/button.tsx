import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: `bg-brand-purple text-brand-white font-semibold border-0 cursor-pointer uppercase relative z-10 hover:text-brand-black hover:bg-brand-white rounded-none hover:border-2 hover:border-brand-black`,
        form: `relative z-10 overflow-hidden 
              bg-brand-purple text-brand-white 
              font-semibold border-0 cursor-pointer uppercase 
              rounded-none transition-colors duration-100 ease-in-out
              hover:text-white
              after:content-[''] after:absolute after:inset-0 
              after:w-0 after:mx-auto hover:after:w-full 
              after:origin-center after:bg-brand-black
              after:transition-all after:duration-200 after:ease-out 
              after:z-0`,
      },
      size: {
        default: 'h-[3.3rem] px-4 py-2 has-[>svg]:px-3',
        sm: 'h-[3.1rem] gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-[3.5rem]  px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TextProps = ComponentProps<'p'> & {
  children: ReactNode;
};

export function Text({ children, className }: TextProps) {
  return (
    <p className={twMerge('text-lg font-medium md:text-3xl', className)}>
      {children}
    </p>
  );
}

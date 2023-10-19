import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ChapterProps = ComponentProps<'div'> & {
  children: ReactNode;
  color?: 'black' | 'white';
};

export function Chapter({
  children,
  className,
  color = 'black',
}: ChapterProps) {
  return (
    <div className="scroll-section h-screen w-screen flex items-center justify-center">
      <div
        data-color={color}
        className={twMerge(
          'h-full p-16 flex flex-col items-start justify-end gap-6 data-[color=black]:text-black data-[color=white]:text-white',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

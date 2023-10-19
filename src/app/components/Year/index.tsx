import { ComponentProps } from 'react';
import { CalendarHeart } from 'lucide-react';

type YearProps = ComponentProps<'div'> & {
  year: number;
  color?: 'black' | 'white';
};

export function Year({ year, color = 'black' }: YearProps) {
  return (
    <div
      data-color={color}
      className="calendar absolute top-0 right-0 flex items-center gap-4 p-6 data-[color=black]:text-black data-[color=white]:text-white"
    >
      <CalendarHeart size={24} />
      <h1 className="text-xl md:text-2xl font-bold leading-none">{year}</h1>
    </div>
  );
}

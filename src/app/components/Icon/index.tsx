import Image from 'next/image';

interface IconProps {
  src: string;
  color?: 'black' | 'white';
}

export function Icon({ src, color }: IconProps) {
  return (
    <figure>
      <Image
        src={src}
        alt="Ícone"
        width={96}
        height={96}
        data-color={color}
        className="data-[color=white]:brightness-0 data-[color=white]:invert"
      />
    </figure>
  );
}

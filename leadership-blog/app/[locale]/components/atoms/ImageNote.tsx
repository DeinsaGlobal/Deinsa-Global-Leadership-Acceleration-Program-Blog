import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

export default function NewsImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-48 w-full rounded-xl bg-gray-200"
      width={640}
      height={480}
    />
  );
}

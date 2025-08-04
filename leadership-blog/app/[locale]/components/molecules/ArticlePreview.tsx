import LinkNote from '../atoms/LinkNote';
import Heading from '../atoms/Heading';
import NewsImage from '../atoms/ImageNote';
import Paragraph from '../atoms/Paragraph';
import FechaNota from '../atoms/FechaNota';

type Props = {
  titulo: string;
  extracto: string;
  link: string;
  alt: string;
  src: string;
  fecha: string;
};

export default function ArticlePreview({
  titulo,
  extracto,
  link,
  alt,
  src,
  fecha,
}: Props) {
  //intentar sacar el key
  return (
    <article className="flex max-w-md flex-col overflow-hidden rounded-xl bg-white shadow-md dark:bg-[#1E1E1E]">
      <div className="mx-auto flex h-48 w-[99%] items-center justify-center rounded-xl bg-[#D9D9D9]">
        <NewsImage src={src} alt={alt} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Heading>{titulo}</Heading>
        <Paragraph>{extracto}</Paragraph>
        <div className="flex items-center justify-between text-sm">
          <FechaNota>{fecha}</FechaNota>
          <LinkNote href={link} />
        </div>
      </div>
    </article>
  );
}

import React, { JSX } from 'react';

interface HeadingTitleCardProps {
  title: string;
  level: 1 | 2 | 3;
  className?: string;
}
const HeadingTitleCard: React.FC<HeadingTitleCardProps> = ({
  title,
  level,
  className,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <div className={`flex flex-col ${className}`}>
      <HeadingTag className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </HeadingTag>
      <div className="mt-2 h-1 w-full bg-gray-300"></div>
    </div>
  );
};

export default HeadingTitleCard;
// This component is a simple heading card that takes a title and a level (1, 2, or 3) as props.

import React from 'react';
import Image from 'next/image';

interface DepartmentCardProps {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  iconSrc,
  altText,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col items-start rounded-md bg-gray-800 p-6 shadow-md">
      <div className="relative mb-4 h-10 w-10">
        <Image src={iconSrc} alt={altText} layout="fill" objectFit="contain" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="mb-4 text-sm text-gray-400">{description}</p>
      <a
        href={link}
        className="flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
      >
        Ver proyectos
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  );
};

export default DepartmentCard;

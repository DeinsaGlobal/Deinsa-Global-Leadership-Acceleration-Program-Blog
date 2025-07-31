import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import PlaceHolder from '../departmentPage/placeHolder';

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
  const t = useTranslations('mainpage');
  return (
    <div className="max-auto flex h-[350px] flex-col items-start rounded-md shadow-md dark:bg-[#3E3E3E]">
      <PlaceHolder className="h-full w-full p-6">
        <div className="relative mb-4 h-10 w-10">
          <Image
            src={iconSrc}
            alt={altText}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-dark mb-2 text-xl font-semibold dark:text-white">
          {title}
        </h3>
      </PlaceHolder>
      <p className="mt-5 p-6 text-sm text-black dark:text-white">
        {description}
      </p>
      <a
        href={link}
        className="mt-5 ml-auto flex items-center rounded-full px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600 dark:text-white"
      >
        {t('seeDeparment')}
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

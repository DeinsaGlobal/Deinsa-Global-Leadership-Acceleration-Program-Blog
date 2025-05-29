import React from 'react';
import Image from 'next/image';

interface DepartmentBannerProps {
  name: string;
  description: string | null;
  iconSrc: string | null;
}

const DepartmentBanner: React.FC<DepartmentBannerProps> = ({
  name,
  description,
  iconSrc,
}) => {
  return (
    <div className="flex items-center justify-center bg-gray-800 px-4 py-12 text-white md:px-8 lg:px-16 dark:bg-gray-700">
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        {iconSrc && (
          <div className="mb-4 flex-shrink-0 md:mr-8 md:mb-0">
            <Image src={iconSrc} alt={`${name} Icon`} width={96} height={96} />
          </div>
        )}
        <div className="text-center md:text-left">
          <h1 className="mb-2 text-4xl font-bold">{name}</h1>
          <p className="text-lg text-gray-300">
            {description ||
              'Descubre los proyectos y el equipo de este departamento.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentBanner;

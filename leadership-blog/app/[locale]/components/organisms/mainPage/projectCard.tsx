import React from 'react';
import ImagePlaceholder from '@/components/atoms/mainPage/imagePlaceHolderCard';
import Paragraph from '@/components/atoms/mainPage/paragraphDescriptionCard';
import ProjectMeta from '@/components/molecules/mainPage/departmentNameCreationDateCard';
import HeadingTitleCard from '@/components/atoms/mainPage/headingTitleCard';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  departmentName: string;
  creationDate: Date;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  departmentName,
  creationDate,
  imageSrc,
}) => {
  // Formatear la fecha para mostrarla
  const formattedDate = creationDate
    ? new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
        .format(creationDate)
        .replace(/\./g, '') // Eliminar puntos de la abreviatura del mes
        .replace('mar', 'Mar') // Ejemplo para mantener consistencia con "Mar"
    : '';
  return (
    //Link to the project page. In development yet
    <Link href={`/project/${id}`} passHref>
      <div
        key={id}
        className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-[#3E3E3E]"
      >
        {imageSrc ? (
          <Image src={imageSrc} alt={title} />
        ) : (
          <ImagePlaceholder className="h-40" />
        )}
        <div className="p-4">
          <HeadingTitleCard level={3} className="mt-2" title={title} />
          <Paragraph text={description} />
          <ProjectMeta
            departmentName={departmentName}
            creationDate={formattedDate}
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

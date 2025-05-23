import React from 'react';
import ImagePlaceholder from '@/components/atoms/mainPage/imagePlaceHolderCard';
import Paragraph from '@/components/atoms/mainPage/paragraphDescriptionCard';
import ProjectMeta from '@/components/molecules/mainPage/departmentNameCreationDateCard';
import HeadingTitleCard from '@/components/atoms/mainPage/headingTitleCard';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  departmentName: string;
  creationDate: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  departmentName,
  creationDate,
  imageSrc,
}) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-[#3E3E3E]">
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
          creationDate={creationDate}
        />
      </div>
    </div>
  );
};

export default ProjectCard;

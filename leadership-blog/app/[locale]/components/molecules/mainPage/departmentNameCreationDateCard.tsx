import React from 'react';
import TextSmall from '@/components/atoms/mainPage/smallTextCard';

interface DepartmentNameCreationDateCardProps {
  departmentName: string;
  creationDate: string;
  className?: string;
}

const ProjectMeta: React.FC<DepartmentNameCreationDateCardProps> = ({
  departmentName,
  creationDate,
  className,
}) => {
  return (
    <div className={`mt-4 flex items-center justify-between ${className}`}>
      <TextSmall text={departmentName} />
      <TextSmall text={creationDate} />
    </div>
  );
};

export default ProjectMeta;

import React from 'react';
import DepartmentCard from '@/components/atoms/mainPage/departmentCard';

interface Department {
  title: string;
  iconSrc: string;
  altText: string;
  description: string;
  link: string;
}

const DepartmentGrid: React.FC<{ departments: Department[] }> = ({
  departments,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {departments.map((department) => (
        <DepartmentCard
          key={department.title}
          iconSrc={department.iconSrc}
          altText={department.altText}
          title={department.title}
          description={department.description}
          link={department.link}
        />
      ))}
    </div>
  );
};

export default DepartmentGrid;

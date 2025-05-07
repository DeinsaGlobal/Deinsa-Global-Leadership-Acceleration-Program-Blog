import React from 'react';
import DepartmentGrid from '@/components/molecules/mainPage/departmentGrid';

interface Department {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

interface DepartmentsSectionProps {
  departments: Department[];
}

const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  departments,
}) => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Nuestros Departamentos
        </h2>
        <DepartmentGrid departments={departments} />
      </div>
    </section>
  );
};

export default DepartmentsSection;

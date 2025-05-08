import React from 'react';
import DepartmentGrid from '@/components/molecules/mainPage/departmentGrid';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('mainpage');
  return (
    <section className="bg-[#FFFFFF] py-12 dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <h2 className="text-dark-900 mb-8 text-3xl font-bold dark:text-white">
          {t('titleDepartments')}
        </h2>
        <DepartmentGrid departments={departments} />
      </div>
    </section>
  );
};

export default DepartmentsSection;

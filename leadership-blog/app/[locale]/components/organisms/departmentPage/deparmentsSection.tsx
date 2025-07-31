'use client';

import { useTranslations } from 'next-intl';
import DepartmentGrid from '@/components/molecules/deparmentPage/departmentGrid';

interface Department {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

interface DepartmentRaw {
  name: string;
}

interface DepartmentsSectionProps {
  departments: DepartmentRaw[];
}

export default function DepartmentsSection({
  departments,
}: DepartmentsSectionProps) {
  const t = useTranslations('mainpage');

  const staticDepartments: Department[] = [
    {
      iconSrc: '/icons/laplaza-icon.png',
      altText: 'La Plaza Icon',
      title: 'Plaza Digital',
      description: t('laPlazaDescription'),
      link: '', // lo actualizaremos abajo
    },
    {
      iconSrc: '/icons/capital-icon.png',
      altText: 'CH Icon',
      title: t('hc'),
      description: t('hcDescription'),
      link: '',
    },
    {
      iconSrc: '/icons/research-icon.png',
      altText: 'R&D Icon',
      title: t('rd'),
      description: t('rdDescription'),
      link: '',
    },
    {
      iconSrc: '/icons/relaciones-icon.png',
      altText: 'RRCC Icon',
      title: t('rrcc'),
      description: t('rrccDescription'),
      link: '',
    },
    {
      iconSrc: '/icons/ventas-icon.png',
      altText: 'Sales Icon',
      title: t('sales'),
      description: t('salesDescription'),
      link: '',
    },
    {
      iconSrc: '/icons/ssa-icon.png',
      altText: 'SSAA Icon',
      title: t('ssa'),
      description: t('ssaDescription'),
      link: '',
    },
  ];

  const departmentsWithLinks = staticDepartments.map((dept, index) => {
    const dbDept = departments[index];
    const slug =
      dbDept?.name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '') ?? 'sin-slug';

    return {
      ...dept,
      link: `/departments/${slug}`,
    };
  });

  return (
    <section className="bg-[#FFFFFF] py-12 dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <DepartmentGrid departments={departmentsWithLinks} />
      </div>
    </section>
  );
}

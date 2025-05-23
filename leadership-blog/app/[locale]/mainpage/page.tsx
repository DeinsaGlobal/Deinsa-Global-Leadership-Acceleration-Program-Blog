'use client';

import Header from '@/components/organisms/header';
import Banner from '@/components/molecules/mainPage/banner';
import DepartmentsSection from '@/components/organisms/mainPage/departmentsSection';
import PostulationBanner from '@/components/molecules/mainPage/postulationBanner';
import Footer from '@/components/organisms/footer';
import FeaturedProjectsSection from '@/components/template/featuredProjectsSection';
import { useTranslations } from 'next-intl';

interface DepartmentData {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

export default function MainPage() {
  const t = useTranslations('mainpage');

  const projectData = [
    {
      title: 'Desarrollo de algoritmos predictivos',
      description:
        'Creación de modelos de análisis para anticipar tendencias y comportamientos del mercado.',
      department: 'Departamento de R&D',
      date: '23 Mar 2025',
    },
    {
      title: 'Desarrollo de algoritmos predictivos',
      description:
        'Creación de modelos de análisis para anticipar tendencias y comportamientos del mercado.',
      department: 'Departamento de R&D',
      date: '23 Mar 2025',
    },
    {
      title: 'Desarrollo de algoritmos predictivos',
      description:
        'Creación de modelos de análisis para anticipar tendencias y comportamientos del mercado.',
      department: 'Departamento de R&D',
      date: '23 Mar 2025',
    },
  ];

  const departments: DepartmentData[] = [
    {
      iconSrc: '/icons/research-icon.png',
      altText: 'R&D Icon',
      title: t('rd'),
      description: t('rdDescription'),
      link: '/department1',
    },
    {
      iconSrc: '/icons/capital-icon.png',
      altText: 'CH Icon',
      title: t('hc'),
      description: t('hcDescription'),
      link: '/department1',
    },
    {
      iconSrc: '/icons/laplaza-icon.png',
      altText: 'La Plaza Icon',
      title: 'Plaza Digital',
      description: t('laPlazaDescription'),
      link: '/department1',
    },
    {
      iconSrc: '/icons/relaciones-icon.png',
      altText: 'RRCC Icon',
      title: t('rrcc'),
      description: t('rrccDescription'),
      link: '/department1',
    },
    {
      iconSrc: '/icons/ventas-icon.png',
      altText: 'Sales Icon',
      title: t('sales'),
      description: t('salesDescription'),
      link: '/department1',
    },
    {
      iconSrc: '/icons/ssa-icon.png',
      altText: 'SSAA Icon',
      title: t('ssa'),
      description: t('ssaDescription'),
      link: '/department1',
    },
  ];

  return (
    <div>
      <Header />
      <Banner />
      <FeaturedProjectsSection projects={projectData} />
      <DepartmentsSection departments={departments} />
      <PostulationBanner />
      <Footer />
    </div>
  );
}

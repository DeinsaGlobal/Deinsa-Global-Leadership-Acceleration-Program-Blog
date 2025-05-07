'use client';

import Header from '@/components/organisms/header';
import Banner from '@/components/molecules/mainPage/banner';
import DepartmentsSection from '@/components/organisms/mainPage/departmentsSection';

interface DepartmentData {
  iconSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const departments: DepartmentData[] = [
  {
    iconSrc: '/icons/research-icon.png',
    altText: 'R&D Icon',
    title: 'Research & Development',
    description: 'Bla',
    link: '/department1',
  },

  // Add more departments as needed
];
export default function MainPage() {
  return (
    <div>
      <Header />
      <Banner />
      <DepartmentsSection departments={departments} />
    </div>
  );
}

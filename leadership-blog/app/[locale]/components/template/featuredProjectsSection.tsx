'use client';
import React from 'react';
import ProjectCard from '../organisms/mainPage/projectCard';
import { useGetFeaturedPosts } from '@/hooks/post/useGetFeaturePosts';
import { useTranslations } from 'next-intl';

const FeaturedProjectsSection: React.FC = () => {
  const t = useTranslations('mainpage');
  const {
    featuredPosts: projects,
    isLoading,
    isError,
    error,
  } = useGetFeaturedPosts();

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-8 text-center">
        <p>{t('featuredProjectsLoading')}</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container mx-auto px-4 py-8 text-center text-red-600">
        <p>
          {t('featuredProjectsError')} {error?.message}
        </p>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="container mx-auto px-4 py-8 text-center">
        <p>{t('featuredProjectsEmpty')}</p>
      </section>
    );
  }
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t('featuredProjectsTitle')}
        </h2>
        <a href="#" className="flex items-center text-blue-600 hover:underline">
          {t('featuredProjectsSeeAll')}
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            id={project.id}
            title={project.title}
            description={project.content ?? ''}
            departmentName={project.departmentName ?? ''}
            creationDate={project.createdAt}
            imageSrc={''}
            key={project.id + index}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;

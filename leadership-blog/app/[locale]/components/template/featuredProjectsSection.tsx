import React from 'react';
import ProjectCard from '../organisms/mainPage/projectCard';

interface FeaturedProjectsSectionProps {
  projects: Array<{
    imageUrl?: string;
    title: string;
    description: string;
    department: string;
    date: string;
  }>;
}

const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects,
}) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Proyectos Destacados
        </h2>
        <a href="#" className="flex items-center text-blue-600 hover:underline">
          Ver todos
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
            departmentName={project.department}
            creationDate={project.date}
            imageSrc={''}
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;

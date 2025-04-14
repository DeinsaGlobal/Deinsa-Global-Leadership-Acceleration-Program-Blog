import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  children,
  level = 'h2',
  className = '',
}) => {
  const Tag = level;
  const sizeClasses = {
    h1: 'text-4xl font-extrabold',
    h2: 'text-3xl font-extrabold',
    h3: 'text-2xl font-bold',
  };

  return (
    <Tag className={`${sizeClasses[level]} ${className} text-gray-900`}>
      {children}
    </Tag>
  );
};

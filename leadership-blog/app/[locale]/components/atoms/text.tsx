import React from 'react';

interface TextProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return <p className={`${sizeClasses[size]} ${className}`}>{children}</p>;
};

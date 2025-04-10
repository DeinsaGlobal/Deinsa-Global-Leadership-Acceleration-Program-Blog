import React from 'react';
import { Title } from '../atoms/title';

interface AuthTemplateProps {
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {children}
        <div className="mt-8 text-center">
          <Title level="h3" className="text-lg">
            Bienvenido a la plataforma de Deinsa Global
          </Title>
        </div>
      </div>
    </div>
  );
};

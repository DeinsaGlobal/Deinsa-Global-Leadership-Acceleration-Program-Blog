'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface AuthTemplateProps {
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  const title = useTranslations('Login');
  const titleDescription = useTranslations('Login');

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      {/* Image Section */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-black/30" />
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          alt="Deinsa Global"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-center p-12">
          <div className="max-w-md">
            <div className="mb-6 inline-block rounded-lg bg-white/10 p-3 backdrop-blur-sm">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white">
              {title('title')}
            </h1>
            <p className="text-lg text-white/80">
              {titleDescription('titleDescription')}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
};

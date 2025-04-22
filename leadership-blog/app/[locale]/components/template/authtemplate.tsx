'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Header from '../organisms/header';

interface AuthTemplateProps {
  children: React.ReactNode;
}

/*export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  const t = useTranslations('Login');

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      {/* Image Section }
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-black/30" />
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
            <h1 className="mb-4 text-4xl font-bold text-white">{t('title')}</h1>
            <p className="text-lg text-white/80">{t('titleDescription')}</p>
          </div>
        </div>
      </div>

      {/* Form Section }
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
};
*/
export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  const t = useTranslations('Login');
  return (
    <div className="grid h-screen grid-cols-2 grid-rows-2 gap-0">
      <div className="col-span-2">
        <Header />
      </div>
      <div className="col-span-2 row-start-2 flex h-full items-center justify-center px-8">
        <div className="flex w-1/2 items-start justify-start pr-8">
          <div className="flex flex-col items-start justify-center">
            <div className="mb-6 inline-block rounded-lg bg-white/10 p-3 backdrop-blur-sm">
              <Image
                src="/white-deinsa-logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white">{t('title')}</h1>
            <p className="text-lg text-white/80">{t('titleDescription')}</p>
          </div>
        </div>
        <div className="flex w-1/2 items-start justify-end pl-8">
          <div className="w-full max-w-md space-y-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

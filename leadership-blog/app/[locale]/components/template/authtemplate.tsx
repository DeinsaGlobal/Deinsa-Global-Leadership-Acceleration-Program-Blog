'use client';

import React from 'react';
import Header from '../organisms/header';
import { useEffect, useState } from 'react';
import LoginMessage from '../organisms/loginMessage';

interface AuthTemplateProps {
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  // This is important. It allows us to avoid hydration errors when using the theme.
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="h-screen">
      <Header />
      <div className="grid h-full grid-cols-2">
        <div className="flex items-center justify-center px-8">
          <LoginMessage />
        </div>
        <div className="flex items-center justify-center px-8">{children}</div>
      </div>
    </div>
  );
};

/*
        -------THIS GRID IS FOR THE OLD DESIGN------------
<div className="grid h-screen grid-cols-2 grid-rows-2 gap-0">
      <div className="col-span-2">
        <Header />
      </div>
      <div className="col-span-2 row-start-2 flex h-full items-center justify-center px-8">
        <div className="flex w-1/2 items-start justify-start pr-8">
          <div className="flex flex-col items-start justify-center">
            <div className="mb-6 inline-block rounded-lg bg-white/10 p-3 backdrop-blur-sm">
              <Image
                src={logoSrc}
                alt="Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
            <p className="text-lg text-gray-700 dark:text-white/80">
              {t('titleDescription')}
            </p>
          </div>
        </div>
        <div className="flex w-1/2 items-start justify-end pl-8">
          <div className="w-full max-w-md space-y-8">{children}</div>
        </div>
      </div>
    </div>*/

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

{
  /*<div
        className={`grid h-screen grid-cols-2 grid-rows-2 gap-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div
          className={`row-start-2 flex h-full flex-col items-start justify-center px-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
        >
          <Image
            src={logoSrc}
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
          <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
          <p className="text-lg text-gray-700 dark:text-white/80">
            {t('titleDescription')}
          </p>
        </div>
        <div
          className={`row-start-2 flex h-full items-center justify-start px-8 ${theme === 'dark' ? 'bg-red-800' : 'bg-green-100'}`}
        >
          <div className="w-full max-w-md space-y-8">{children}</div>
        </div>
      </div>
    </>
  );*/
}

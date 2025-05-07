'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import LoginMessage from '../organisms/loginMessage';
import Footer from '../organisms/footer';

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
      <div className="grid h-full grid-cols-2">
        <div
          className={`flex items-center justify-center bg-[#BABABA] px-8 dark:bg-[#484848]`}
        >
          <LoginMessage />
        </div>
        <div
          className={`flex items-center justify-center bg-[#FFFFFF] px-8 dark:bg-[#484848]`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

'use client';

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface SessionAuthProviderProps {
  children: ReactNode;
}

const SessionAuthProvider = ({ children }: SessionAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionAuthProvider;

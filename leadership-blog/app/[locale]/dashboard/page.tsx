'use client';

import { DashboardTemplate } from '@/components/template/DashboardTemplate';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <DashboardTemplate
      onSignOut={() => void signOut({ callbackUrl: '/login' })}
    />
  );
}

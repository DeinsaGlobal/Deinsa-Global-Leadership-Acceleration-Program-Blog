'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push('/login'); //This throw error, check later
    return null;
  }

  const handleSignOut = () => {
    void signOut({ callbackUrl: '/login' });
  };

  return (
    <div>
      <h1>Welcome, {session.user?.name ?? 'User'}</h1>
      <button
        onClick={handleSignOut}
        className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

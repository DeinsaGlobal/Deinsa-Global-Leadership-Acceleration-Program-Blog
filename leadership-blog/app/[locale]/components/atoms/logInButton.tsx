'use client';

import { useRouter } from 'next/navigation';

interface Props {
  to: string;
  children: React.ReactNode;
}

export default function LogInButton({ to, children }: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(to)}
      className="rounded bg-orange-500 px-4 py-2 font-bold text-white transition duration-300 hover:bg-gray-700"
    >
      {children}
    </button>
  );
}

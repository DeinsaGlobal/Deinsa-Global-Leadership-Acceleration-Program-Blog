'use client';

import { trpc } from '@/_trpc/client';
import { useState } from 'react';

export default function TrpcTest() {
  const [name, setName] = useState('');
  const hello = trpc.hello.useQuery({ name: name || undefined });

  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h2 className="mb-4 text-xl font-bold">tRPC Test</h2>

      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div className="rounded bg-gray-100 p-3">
        {hello.isLoading ? (
          <p>Loading...</p>
        ) : hello.error ? (
          <p className="text-red-500">Error: {hello.error.message}</p>
        ) : (
          <div>
            <p className="font-medium text-black">{hello.data?.greeting}</p>
            <p className="text-sm text-gray-500">
              Server time: {hello.data?.timestamp}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

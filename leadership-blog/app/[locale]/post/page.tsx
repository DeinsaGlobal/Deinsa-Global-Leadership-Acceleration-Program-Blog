// src/app/posts/page.tsx (o donde lo quieras mostrar)
'use client';

import { trpc } from '../../../[locale]/lib/trpc';
import { useEffect } from 'react';

export default function PostsPage() {
  const { data: posts, isLoading, error } = trpc.post.getAll.useQuery();

  useEffect(() => {
    if (error) console.error('Error al cargar posts:', error);
  }, [error]);

  if (isLoading) return <p>Cargando...</p>;
  if (!posts || posts.length === 0) return <p>No hay publicaciones aún.</p>;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="rounded border p-4 shadow-sm">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          {post.content && (
            <p className="text-sm text-gray-700">{post.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

'use client';

import Image from 'next/image';
import serverClient from '@/_trpc/serverClient';
import { useGetAllPosts } from '@/hooks/post';

interface Props {
  initialPosts?: Awaited<ReturnType<typeof serverClient.post.getAll>>;
}

export default function PostList({ initialPosts }: Props) {
  const { isLoading, error, getAllPostsQuery } = useGetAllPosts(initialPosts);

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">All Posts</h1>

      {isLoading && <div className="mb-4 text-gray-500">Loading posts...</div>}

      {error && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
          Error: {error.message}
        </div>
      )}

      <div className="grid gap-4">
        {getAllPostsQuery.data?.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border bg-gray-800 p-4 shadow-sm"
          >
            <div className="mb-2 flex items-center justify-between"></div>
            {post.portraitImage && (
              <Image
                src={post.portraitImage.trimEnd()}
                alt="Post portrait"
                width={640}
                height={480}
                className="mb-3 h-32 w-full rounded object-cover"
              />
            )}
            <p>ID: {post.id}</p>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-200">{post.content}</p>
            <span className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

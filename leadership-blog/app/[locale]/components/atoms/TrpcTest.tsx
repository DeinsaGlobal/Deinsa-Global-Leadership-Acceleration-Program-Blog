'use client';

import { trpc } from '@/_trpc/client';
import { useState } from 'react';
import Post from '@/types/post.types';

export default function CreatePostTest() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [portraitImage, setPortraitImage] = useState('');
  const [result, setResult] = useState<Post | null>(null);

  const createPostMutation = trpc.createPost.useMutation({
    onSuccess: (data) => {
      setResult({ ...data, createdAt: new Date(data.createdAt) });
      setTitle('');
      setContent('');
      setPortraitImage('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPostMutation.mutate({
      title,
      content,
      portraitImage,
    });
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-xl font-bold">Create New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded border p-2"
            rows={4}
          />
        </div>

        <div>
          <label className="mb-1 block">Portrait Image URL:</label>
          <input
            type="text"
            value={portraitImage}
            onChange={(e) => setPortraitImage(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          disabled={createPostMutation.isPending}
        >
          {createPostMutation.isPending ? 'Creating...' : 'Create Post'}
        </button>
      </form>

      {createPostMutation.error && (
        <div className="mt-4 rounded bg-red-100 p-3 text-red-700">
          Error: {createPostMutation.error.message}
        </div>
      )}

      {result && (
        <div className="mt-4 rounded bg-green-100 p-3 text-green-700">
          <h2 className="font-bold">Post Created Successfully!</h2>
          <p>ID: {result.id}</p>
          <p>Title: {result.title}</p>
        </div>
      )}
    </div>
  );
}

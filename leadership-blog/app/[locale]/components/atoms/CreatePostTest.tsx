'use client';

import { useState } from 'react';
import { useCreatePost } from '@/hooks/post/useCreatePost';

export default function CreatePostTest() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [portraitImage, setPortraitImage] = useState('');
  const { result, isLoading, error, createPost } = useCreatePost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPost({
      title,
      content,
      portraitImage,
    });
    // Clear form fields after submission
    setTitle('');
    setContent('');
    setPortraitImage('');
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
          disabled={isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
      {error && (
        <div className="mt-4 rounded bg-red-100 p-3 text-red-700">
          Error: {error.message}
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

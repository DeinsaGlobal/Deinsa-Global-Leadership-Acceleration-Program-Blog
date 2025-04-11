'use client';

import { useState } from 'react';
import { useGetPost, useUpdatePost } from '@/hooks/post';

export default function UpdatePostTest() {
  const [postId, setPostId] = useState<number | ''>('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [portraitImage, setPortraitImage] = useState('');

  // Use separate hooks for getting and updating posts
  const { isLoading: isLoadingGet, error: getError, fetchPost } = useGetPost();

  const {
    result,
    isLoading: isLoadingUpdate,
    error: updateError,
    updatePost,
  } = useUpdatePost();

  // Combine loading states
  const isLoading = isLoadingGet || isLoadingUpdate;

  const handleFetchPost = async () => {
    if (postId === '') return;

    const post = await fetchPost(Number(postId));
    if (post) {
      setTitle(post.title ?? '');
      setContent(post.content ?? '');
      setPortraitImage(post.portraitImage ?? '');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postId === '') return;

    updatePost({
      id: Number(postId),
      title,
      content,
      portraitImage,
    });
  };

  const handleReset = () => {
    setPostId('');
    setTitle('');
    setContent('');
    setPortraitImage('');
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-xl font-bold">Update Existing Post</h1>

      <div className="mb-4">
        <label className="mb-1 block">Post ID:</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={postId}
            onChange={(e) =>
              setPostId(e.target.value ? Number(e.target.value) : '')
            }
            className="w-full rounded border p-2"
            required
          />
          <button
            type="button"
            onClick={() => void handleFetchPost()}
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            disabled={postId === '' || isLoading}
          >
            Fetch
          </button>
        </div>
      </div>

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

        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            disabled={isLoading || postId === ''}
          >
            {isLoading ? 'Updating...' : 'Update Post'}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </form>

      {getError && (
        <div className="mt-4 rounded bg-red-100 p-3 text-red-700">
          Error fetching post: {getError.message}
        </div>
      )}

      {updateError && (
        <div className="mt-4 rounded bg-red-100 p-3 text-red-700">
          Error updating post: {updateError.message}
        </div>
      )}

      {result && (
        <div className="mt-4 rounded bg-green-100 p-3 text-green-700">
          <h2 className="font-bold">Post Updated Successfully!</h2>
          <p>ID: {result.id}</p>
          <p>Title: {result.title}</p>
        </div>
      )}
    </div>
  );
}

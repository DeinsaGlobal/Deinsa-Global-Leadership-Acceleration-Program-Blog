import { useState } from 'react';
import { trpc } from '@/_trpc/client';
import type Post from '@/types/post.types';

export function useCreatePost() {
  const [result, setResult] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Create post mutation
  const createPostMutation = trpc.post.create.useMutation({
    onSuccess: (data) => {
      setResult({ ...data, createdAt: new Date(data.createdAt) });
      setIsLoading(false);
      setError(null);
    },
    onError: (error) => {
      setError(new Error(error.message));
      setIsLoading(false);
    },
  });

  // Create a new post
  const createPost = (data: {
    title: string;
    content?: string;
    portraitImage?: string;
  }) => {
    setIsLoading(true);
    setError(null);
    createPostMutation.mutate(data);
  };

  return {
    result,
    isLoading,
    error,
    createPost,
    createPostMutation,
  };
}

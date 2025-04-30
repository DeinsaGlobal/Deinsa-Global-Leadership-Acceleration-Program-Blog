import { useState } from 'react';
import { trpc } from '@/_trpc/client';
import type Post from '@/types/post.types';

export function useUpdatePost() {
  const [result, setResult] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Update post mutation
  const updatePostMutation = trpc.post.update.useMutation({
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

  // Update a post
  const updatePost = (data: {
    id: number;
    title: string;
    content: string;
    portraitImage: string;
  }) => {
    setIsLoading(true);
    setError(null);
    updatePostMutation.mutate(data);
  };

  return {
    result,
    isLoading,
    error,
    updatePost,
    updatePostMutation,
  };
}

import { useState } from 'react';
import { trpc } from '@/_trpc/client';

export function useDeletePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Delete post mutation
  const deletePostMutation = trpc.post.delete.useMutation({
    onSuccess: () => {
      setIsDeleted(true);
      setIsLoading(false);
      setError(null);
    },
    onError: (error) => {
      setError(new Error(error.message));
      setIsLoading(false);
    },
  });

  // Delete a post
  const deletePost = (id: number) => {
    setIsLoading(true);
    setIsDeleted(false);
    setError(null);
    deletePostMutation.mutate({ id });
  };

  // Reset the deletion state
  const resetDeleteState = () => {
    setIsDeleted(false);
    setError(null);
  };

  return {
    isLoading,
    isDeleted,
    error,
    deletePost,
    resetDeleteState,
    deletePostMutation,
  };
}

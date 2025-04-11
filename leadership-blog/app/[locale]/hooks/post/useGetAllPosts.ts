import { useState } from 'react';
import { trpc } from '@/_trpc/client';

export function useGetAllPosts() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Get all posts query
  const getAllPostsQuery = trpc.post.getAll.useQuery(undefined, {
    enabled: false,
  });

  // Fetch all posts
  const fetchAllPosts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await getAllPostsQuery.refetch();
      setIsLoading(false);
      return result.data;
    } catch (err) {
      const error = err as Error;
      console.error('Error fetching all posts:', error);
      setError(error);
      setIsLoading(false);
      return null;
    }
  };

  return {
    isLoading,
    error,
    fetchAllPosts,
    getAllPostsQuery,
  };
}

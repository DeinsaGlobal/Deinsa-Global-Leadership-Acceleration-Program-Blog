import { useState } from 'react';
import { trpc } from '@/_trpc/client';

export function useGetPost() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);

  // Get post query
  const getPostQuery = trpc.post.getOne.useQuery(
    { id: currentPostId },
    {
      enabled: false,
    },
  );

  // Fetch a post by ID
  const fetchPost = async (postId: number) => {
    if (!postId) return null;

    setIsLoading(true);
    setError(null);
    setCurrentPostId(postId);

    try {
      const result = await getPostQuery.refetch();
      setIsLoading(false);
      return result.data;
    } catch (err) {
      const error = err as Error;
      console.error('Error fetching post:', error);
      setError(error);
      setIsLoading(false);
      return null;
    }
  };

  return {
    isLoading,
    error,
    fetchPost,
    getPostQuery,
  };
}

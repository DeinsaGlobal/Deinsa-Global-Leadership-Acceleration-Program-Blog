// new hook

import { trpc } from '@/_trpc/client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { featuredPostOutputSchema } from '@/server/routers/post';
import { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@/server/index';

type RouterOutput = inferRouterOutputs<AppRouter>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FeaturedPost = RouterOutput['post']['getFeaturedPosts'][number];

export function useGetFeaturedPosts() {
  // Aquí usamos useQuery directamente, ya que queremos que se cargue al montar el componente
  const getFeaturedPostsQuery = trpc.post.getFeaturedPosts.useQuery(undefined, {
    staleTime: 5 * 60 * 1000, // Los datos se consideran "stale" después de 5 minutos
    refetchOnWindowFocus: false, // No refetchear automáticamente al enfocar la ventana
  });

  return {
    featuredPosts: getFeaturedPostsQuery.data,
    isLoading: getFeaturedPostsQuery.isLoading,
    isError: getFeaturedPostsQuery.isError,
    error: getFeaturedPostsQuery.error,
    refetch: getFeaturedPostsQuery.refetch,
  };
}

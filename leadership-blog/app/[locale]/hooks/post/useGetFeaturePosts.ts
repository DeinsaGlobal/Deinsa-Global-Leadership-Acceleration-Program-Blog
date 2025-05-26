// new hook

import { trpc } from '@/_trpc/client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { featuredPostOutputSchema } from '@/server/routers/post'; // Ajusta la ruta si es necesario
import { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@/server/index'; // Ajusta la ruta según donde exportes AppRouter

// Define el tipo para la salida de tu router TRPC
type RouterOutput = inferRouterOutputs<AppRouter>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FeaturedPost = RouterOutput['post']['getFeaturedPosts'][number]; // Accede al tipo de un solo elemento

export function useGetFeaturedPosts() {
  // Aquí usamos useQuery directamente, ya que queremos que se cargue al montar el componente
  const getFeaturedPostsQuery = trpc.post.getFeaturedPosts.useQuery(undefined, {
    // Puedes configurar opciones de caché y refetch aquí
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

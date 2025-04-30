import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/index';
import { createContext } from '@/server/context';

const handler = async (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });
};

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };

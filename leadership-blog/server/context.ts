import { type FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { PrismaClient } from '@prisma/client';

export const createContext = async (opts: FetchCreateContextFnOptions) => {
  const connection = new PrismaClient();
  await connection.$connect();

  return {
    prisma: connection,
    req: opts.req,
    ...(opts.info?.connectionParams && { links: opts.info.connectionParams }),
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;

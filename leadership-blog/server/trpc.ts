import { initTRPC } from '@trpc/server';
import { Context } from './context';
import superjson from 'superjson';

const trpc = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = trpc.router;
export const procedure = trpc.procedure;

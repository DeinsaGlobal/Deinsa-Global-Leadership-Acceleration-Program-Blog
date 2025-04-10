import { router, procedure } from './trpc';
import { z } from 'zod';

// Define your router
export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        name: z.string().optional(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.name ?? 'World'}!`,
        timestamp: new Date().toISOString(),
      };
    }),
});

// Export type router type signature, NOT the router itself.
export type AppRouter = typeof appRouter;

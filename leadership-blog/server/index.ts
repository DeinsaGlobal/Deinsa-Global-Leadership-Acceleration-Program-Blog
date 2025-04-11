import { router } from './trpc';
import { postRouter } from './routers/post';

export const appRouter = router({
  post: postRouter,
});

// Export type router type signature, NOT the router itself.
export type AppRouter = typeof appRouter;

import { router } from './trpc';
import { postRouter } from './routers/post';
import { departmentRouter } from './routers/department';

export const appRouter = router({
  post: postRouter,
  department: departmentRouter,
});

// Export type router type signature, NOT the router itself.
export type AppRouter = typeof appRouter;

import { router, procedure } from './trpc';
import { z } from 'zod';

// Define your router
export const appRouter = router({
  createPost: procedure
    .input(
      z.object({
        title: z.string(),
        content: z.string().optional(),
        portraitImage: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          portraitImage: input.portraitImage,
        },
      });
    }),
});

// Export type router type signature, NOT the router itself.
export type AppRouter = typeof appRouter;

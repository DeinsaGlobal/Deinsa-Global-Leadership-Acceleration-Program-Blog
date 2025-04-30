import { router, procedure } from '../trpc';
import { z } from 'zod';

export const postRouter = router({
  getAll: procedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany();
  }),

  getOne: procedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.post.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  create: procedure
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

  update: procedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        content: z.string().optional(),
        portraitImage: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.post.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          content: input.content,
          portraitImage: input.portraitImage,
        },
      });
    }),

  delete: procedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.post.delete({
        where: {
          id: input.id,
        },
      });
    }),
});

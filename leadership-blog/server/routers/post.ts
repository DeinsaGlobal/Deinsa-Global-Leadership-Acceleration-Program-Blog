import { router, procedure } from '../trpc';
import { z } from 'zod';

// Define el esquema de salida para los posts destacados
export const featuredPostOutputSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string().nullable(), // Content may be null
  portraitImage: z.string().nullable(), // portraitImage may be null
  createdAt: z.date(),
  departmentName: z.string().nullable(), // deártmentName may be null if no association
});

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

  // Nuevo procedimiento para obtener los posts destacados
  getFeaturedPosts: procedure
    .output(z.array(featuredPostOutputSchema)) // Esto es importante para tipar la salida
    .query(async ({ ctx }) => {
      // 1. Obtener los IDs de los posts marcados como "destacados" desde la tabla Top_Posts
      const topPosts = await ctx.prisma.topPost.findMany({
        orderBy: { position: 'asc' }, // Ordena por la posición definida en Top_Posts
        take: 3, // Limita a 3 posts, como en el diseño de las tarjetas
      });

      const topPostIds = topPosts.map((tp) => tp.postId);

      // Si no hay top posts, regresamos un array vacío.
      if (topPostIds.length === 0) {
        return [];
      }

      // 2. Obtener la información completa de esos posts, incluyendo sus departamentos.
      // Usamos `findMany` con `where: { id: { in: topPostIds } }` para obtener solo los destacados.
      const postsWithDepartments = await ctx.prisma.post.findMany({
        where: {
          id: {
            in: topPostIds,
          },
        },
        // Incluye las relaciones para obtener el nombre del departamento
        include: {
          departments: {
            include: {
              department: true,
            },
            // Si un post puede tener múltiples departamentos pero solo quieres mostrar uno:
            // Opcional: toma el primer departamento o un departamento "principal" si tienes esa lógica
            // take: 1,
            // orderBy: { departmentId: 'asc' }, // O algún otro criterio si es relevante
          },
        },
      });

      // 3. Mapear y transformar los datos para que coincidan con la estructura que necesita el frontend
      // y mantener el orden original de `topPosts`.
      const sortedFeaturedPosts = topPostIds
        .map((postId) => {
          const post = postsWithDepartments.find((p) => p.id === postId);
          if (!post) {
            return null; // En caso de que un postId en Top_Posts no tenga un Post asociado
          }

          // Obtener el nombre del departamento. Si hay múltiples, toma el primero.
          const departmentName =
            post.departments?.[0]?.department?.name || null;

          return {
            id: post.id,
            title: post.title,
            content: post.content,
            portraitImage: post.portraitImage,
            createdAt: post.createdAt, // createdAt ya es un objeto Date gracias a Prisma
            departmentName: departmentName,
          };
        })
        .filter((post) => post !== null) as z.infer<
        typeof featuredPostOutputSchema
      >[]; // Filtrar nulos y asegurar el tipo

      return sortedFeaturedPosts;
    }),
});

///// extensions

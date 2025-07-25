import { router, procedure } from '../trpc';
import { z } from 'zod';

export const departmentOutputSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const postByDepartmentOutputSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  portraitImage: z.string().nullable(),
  createdAt: z.date(),
});

export const departmentRouter = router({
  getAll: procedure.query(async ({ ctx }) => {
    return await ctx.prisma.department.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }),

  getOne: procedure
    .input(z.object({ id: z.number() })) // Espera un objeto con una propiedad 'id' que es un número
    .output(departmentOutputSchema.nullable()) // Puede devolver un departamento o null si no se encuentra
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.department.findUnique({
        where: { id: input.id }, // Busca el departamento por el ID proporcionado
      });
    }),

  getPostsByDepartmentId: procedure
    .input(z.object({ departmentId: z.number() }))
    .output(z.array(postByDepartmentOutputSchema))
    .query(async ({ ctx, input }) => {
      const postDepartments = await ctx.prisma.postDepartment.findMany({
        where: { departmentId: input.departmentId },
        select: { postId: true }, // Solo necesitamos el postId de cada relación
      });

      // 2. Extrae todos los postId de los resultados
      const postIds = postDepartments.map((pd) => pd.postId);

      // Si no hay posts asociados, devuelve un array vacío
      if (postIds.length === 0) {
        return [];
      }

      // 3. Obtén los posts completos para esos IDs
      // Aquí es donde obtienes los detalles de los Posts reales
      const posts = await ctx.prisma.post.findMany({
        where: {
          id: {
            in: postIds, // Usa `in` para filtrar por múltiples IDs de posts
          },
        },
        orderBy: { createdAt: 'desc' }, // O el orden que prefieras
        select: {
          id: true,
          title: true,
          content: true,
          portraitImage: true,
          createdAt: true,
        },
      });

      // Mapear a la estructura deseada para el frontend
      return posts.map((post) => ({
        id: post.id,
        title: post.title || 'Sin título',
        content: post.content ?? '', // Asegura que content nunca sea null
        portraitImage: post.portraitImage,
        createdAt: post.createdAt,
      }));
    }),
});

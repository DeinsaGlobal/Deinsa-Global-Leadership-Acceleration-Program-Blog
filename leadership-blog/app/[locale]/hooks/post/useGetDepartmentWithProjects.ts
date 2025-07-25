import { trpc } from '@/_trpc/client';
import { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@/server/index';

type RouterOutput = inferRouterOutputs<AppRouter>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type DepartmentData = RouterOutput['department']['getOne'] | null; // El tipo de un solo departamento

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type DepartmentPost =
  RouterOutput['department']['getPostsByDepartmentId'][number]; // Tipo de un solo post de departamento

export function useGetDepartmentWithProjects(departmentId: number) {
  // Obtener la información del departamento
  const departmentQuery = trpc.department.getOne.useQuery(
    { id: departmentId },
    {
      enabled: !!departmentId, // Solo ejecutar si departmentId es válido
      staleTime: 5 * 60 * 1000,
    },
  );

  // Obtener los proyectos del departamento
  const projectsQuery = trpc.department.getPostsByDepartmentId.useQuery(
    { departmentId },
    {
      enabled: !!departmentId, // Solo ejecutar si departmentId es válido
      staleTime: 5 * 60 * 1000,
    },
  );

  return {
    department: departmentQuery.data,
    projects: projectsQuery.data,
    isLoading: departmentQuery.isLoading || projectsQuery.isLoading,
    isError: departmentQuery.isError || projectsQuery.isError,
    error: departmentQuery.error || projectsQuery.error, // Puedes manejar errores de forma más granular si necesitas
    refetchDepartment: departmentQuery.refetch,
    refetchProjects: projectsQuery.refetch,
  };
}

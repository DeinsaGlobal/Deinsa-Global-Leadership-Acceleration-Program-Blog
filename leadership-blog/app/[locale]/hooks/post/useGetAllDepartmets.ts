import { trpc } from '@/_trpc/client';
import { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@/server/index';

type RouterOutput = inferRouterOutputs<AppRouter>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Department = RouterOutput['department']['getAll'][number];

export function useGetAllDepartments() {
  const getAllDepartmentsQuery = trpc.department.getAll.useQuery(undefined, {
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return {
    departments: getAllDepartmentsQuery.data,
    isLoading: getAllDepartmentsQuery.isLoading,
    isError: getAllDepartmentsQuery.isError,
    error: getAllDepartmentsQuery.error,
    refetch: getAllDepartmentsQuery.refetch,
  };
}

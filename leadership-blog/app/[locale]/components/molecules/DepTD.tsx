'use client';

import { useGetDepartmentWithProjects } from '@/hooks/post/useGetDepartmentWithProjects';
import { TTDesc } from './TituloDescDepartamento';
import { useTranslations } from 'next-intl';

interface TituloDepartamentoDataProps {
  departmentId: number;
}

export const TituloDepData = ({
  departmentId,
}: TituloDepartamentoDataProps) => {
  const { department, projects, isLoading, isError } =
    useGetDepartmentWithProjects(departmentId);

  const t = useTranslations('mainpage');

  console.log(projects);

  // 1. PRIMERO, manejas el estado de carga.
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  // 2. LUEGO, manejas el estado de error o si el departamento no se encontró.
  if (isError || !department) {
    return <div>Error: No se pudo cargar el departamento.</div>;
  }

  let descDep = '';
  let titleDep = '';
  let src = '';

  switch (departmentId) {
    case 1:
      descDep = 'laPlazaDescription';
      titleDep = 'laPlaza';
      src = 'laplaza-icon.png';
      break;
    case 2:
      descDep = 'hcDescription';
      titleDep = 'hc';
      src = 'capital-icon.png';
      break;
    case 3:
      descDep = 'rdDescription';
      titleDep = 'rd';
      src = 'research-icon.png';
      break;
    case 4:
      descDep = 'rrccDescription';
      titleDep = 'rrcc';
      src = 'relaciones-icon.png';
      break;
    case 5:
      descDep = 'salesDescription';
      titleDep = 'sales';
      src = 'ventas-icon.png';
      break;
    case 6:
      descDep = 'ssaDescription';
      titleDep = 'ssa';
      src = 'ssa-icon.png';
      break;

    default:
      break;
  }

  return (
    <TTDesc
      iconAlt={department.name}
      title={t(titleDep)}
      iconSrc={src}
      desc={t(descDep)}
    />
  );
};

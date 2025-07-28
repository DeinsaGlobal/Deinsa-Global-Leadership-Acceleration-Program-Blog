import { notFound } from 'next/navigation';
import serverClient from '@/_trpc/serverClient';
import { TituloDepData } from '@/components/molecules/DepTD';
import { TTDesc } from '@/components/molecules/TituloDescDepartamento';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}



export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;

 

  // Ejemplo: buscás por slug
  const departments = await serverClient.department.getAll();
  const department = departments.find(
    (dep) =>
      dep.name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '') === slug,
  );

  if (!department) return notFound();

  console.log(department);
  

  return (
    <div>
      <h1 className="text-3xl font-bold">{department.name}</h1>
    
      <TituloDepData
        departmentId={department.id}
      />
    </div>
  );
}

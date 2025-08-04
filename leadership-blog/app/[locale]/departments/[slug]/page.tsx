import { notFound } from 'next/navigation';
import serverClient from '@/_trpc/serverClient';
import { TituloDepData } from '@/components/molecules/DepTD';
import ListaNoticias from '@/components/organisms/NewsSearch';

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
    <div className="space-y-8 p-6">
      <TituloDepData departmentId={department.id} />

      <div className="flex flex-col items-center justify-center">
        <ListaNoticias departmentId={department.id} />
      </div>
    </div>
  );
}

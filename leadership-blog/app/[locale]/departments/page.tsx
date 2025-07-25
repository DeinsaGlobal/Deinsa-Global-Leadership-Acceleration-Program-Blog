import serverClient from '@/_trpc/serverClient';
import Link from 'next/link';

export default async function DepartmentsPage() {
  const departments = await serverClient.department.getAll();

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Departamentos</h1>
      <ul>
        {departments.map((dep) => {
          const slug = dep.name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '');
          return (
            <li key={dep.id}>
              <Link
                href={`/es/departments/${slug}`}
                className="text-blue-600 hover:underline"
              >
                {dep.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

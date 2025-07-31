import serverClient from '@/_trpc/serverClient';
import Footer from '@/components/organisms/footer';
import DepartmentsSection from '@/components/organisms/departmentPage/deparmentsSection';

export default async function DepartmentsPage() {
  const departments = await serverClient.department.getAll();

  const depa = departments.map((dep) => {
    const slug = dep.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '');

    return {
      name: dep.name,
      slug: slug,
    };
  });
  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="mb-4 p-6 px-27 text-3xl font-bold">
        Nuestros Departamentos
      </h1>
      <p className="px-27 text-gray-400">
        Conoce los diferentes equipos que conforman Deinsa Global y sus
        poyectos.
      </p>
      <div className="flex-grow">
        <DepartmentsSection departments={depa} />
      </div>
      <Footer />
    </div>
  );
}

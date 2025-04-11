import CreatePostTest from '@/components/atoms/CreatePostTest';
import UpdatePostTest from '@/components/atoms/UpdatePostTest';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">tRPC Test Page</h1>
      <CreatePostTest />
      <UpdatePostTest />
    </main>
  );
}

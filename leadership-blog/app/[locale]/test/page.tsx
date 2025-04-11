import CreatePostTest from '@/components/organisms/CreatePostTest';
import UpdatePostTest from '@/components/organisms/UpdatePostTest';
import PostList from '@/components/organisms/PostList';
import serverClient from '@/_trpc/serverClient';

export default async function Test() {
  const initialPosts = await serverClient.post.getAll();

  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">tRPC Test Page</h1>
      <CreatePostTest />
      <UpdatePostTest />
      <PostList initialPosts={initialPosts} />
    </main>
  );
}

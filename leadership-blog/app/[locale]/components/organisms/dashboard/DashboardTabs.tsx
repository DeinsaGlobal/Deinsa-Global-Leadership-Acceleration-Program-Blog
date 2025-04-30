import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { MyPostList } from './MyPostList';
import { NewPostForm } from './NewPostForm';

export function DashboardTabs() {
  return (
    <Tabs defaultValue="new-post" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="new-post">Nuevo Artículo</TabsTrigger>
        <TabsTrigger value="my-posts">Mis Artículos</TabsTrigger>
      </TabsList>

      <TabsContent value="new-post">
        <NewPostForm />
      </TabsContent>

      <TabsContent value="my-posts">
        <MyPostList />
      </TabsContent>
    </Tabs>
  );
}

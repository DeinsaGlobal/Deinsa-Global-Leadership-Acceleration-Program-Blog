// 'use client';

// import React from 'react';
// import { useSession, signOut } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Textarea } from '@/components/ui/textarea';
// import {
//   Calendar,
//   FileText,
//   ImageIcon,
//   Link2,
//   ListChecks,
//   Plus,
//   Save,
//   Upload,
// } from 'lucide-react';
// import { Button } from '@/components/atoms/button';

// export default function DashboardPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   // Redirect to login if not authenticated
//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }
//   if (!session) {
//     router.push('/login');
//     return null;
//   }

//   // Sign out handler
//   const handleSignOut = () => {
//     void signOut({ callbackUrl: '/login' });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Header with Logout */}
//       <div className="mb-8 flex items-center justify-between">
//         <div>
//           <h1 className="mb-1 text-4xl font-bold">Panel de Administración</h1>
//           <p className="text-muted-foreground text-xl">
//             Gestiona el contenido del blog y la plaza digital.
//           </p>
//         </div>
//         <Button variant="primary" onClick={handleSignOut}>
//           Cerrar sesión
//         </Button>
//       </div>

//       <Tabs defaultValue="new-post" className="w-full">
//         <TabsList className="mb-6">
//           <TabsTrigger value="new-post">Nuevo Artículo</TabsTrigger>
//           <TabsTrigger value="my-posts">Mis Artículos</TabsTrigger>
//         </TabsList>

//         {/* Nuevo Artículo */}
//         <TabsContent value="new-post">
//           <div className="grid gap-8 md:grid-cols-3">
//             {/* Formulario de Artículo */}
//             <div className="md:col-span-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Crear Nuevo Artículo</CardTitle>
//                   <CardDescription>
//                     Completa el formulario para publicar un nuevo artículo en el
//                     blog.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="title">Título</Label>
//                     <Input
//                       id="title"
//                       placeholder="Ingresa el título del artículo"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="description">Descripción</Label>
//                     <Textarea
//                       id="description"
//                       placeholder="Breve descripción del artículo"
//                       rows={3}
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="category">Categoría</Label>
//                     <select
//                       id="category"
//                       className="w-full rounded-md border px-3 py-2"
//                     >
//                       <option value="">Selecciona una categoría</option>
//                       <option value="plaza-digital">Plaza Digital</option>
//                       <option value="automatizacion">Automatización</option>
//                       <option value="proyectos">Proyectos</option>
//                       <option value="tecnologia">Tecnología</option>
//                       <option value="colaboracion">Colaboración</option>
//                     </select>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="content">Contenido</Label>
//                     <div className="rounded-md border p-2">
//                       <div className="mb-2 flex items-center gap-2 border-b pb-2">
//                         {[FileText, ImageIcon, Link2, ListChecks].map(
//                           (Icon, idx) => (
//                             <Button
//                               key={idx}
//                               variant="secondary"
//                               className="mr-2"
//                             >
//                               <Icon className="h-4 w-4" />
//                             </Button>
//                           ),
//                         )}
//                       </div>
//                       <Textarea
//                         id="content"
//                         placeholder="Escribe el contenido de tu artículo aquí..."
//                         className="min-h-[300px]"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label>Imagen Principal</Label>
//                     <div className="rounded-md border border-dashed p-8 text-center">
//                       <Upload className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
//                       <p className="text-muted-foreground text-sm">
//                         Arrastra una imagen o haz clic para seleccionar
//                       </p>
//                       <Button variant="secondary" className="mt-2">
//                         Seleccionar Archivo
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex justify-between">
//                   <Button variant="secondary">Guardar Borrador</Button>
//                   <Button>
//                     <Save className="mr-2 h-4 w-4" />
//                     Publicar Artículo
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </div>

//             {/* Recursos Adicionales */}
//             <div>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Recursos Adicionales</CardTitle>
//                   <CardDescription>
//                     Añade archivos y enlaces relacionados con tu artículo.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div className="space-y-2">
//                     <Label>Archivos Adjuntos</Label>
//                     <div className="rounded-md border border-dashed p-4 text-center">
//                       <Button variant="secondary" className="mt-2">
//                         <Plus className="mr-2 h-4 w-4" />
//                         Añadir Archivo
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="link">Enlaces Externos</Label>
//                     <div className="flex gap-2">
//                       <Input id="link" placeholder="https://" />
//                       <Button variant="secondary" className="mt-2">
//                         <Plus className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label>Programar Publicación</Label>
//                     <div className="flex items-center gap-2">
//                       <Calendar className="text-muted-foreground h-4 w-4" />
//                       <Input type="date" />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </TabsContent>

//         {/* Mis Artículos */}
//         <TabsContent value="my-posts">
//           <Card>
//             <CardHeader>
//               <CardTitle>Mis Artículos</CardTitle>
//               <CardDescription>
//                 Gestiona los artículos que has publicado.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {[1, 2, 3].map((post) => (
//                   <div
//                     key={post}
//                     className="flex items-center gap-4 rounded-lg border p-4"
//                   >
//                     <div className="relative h-16 w-16 overflow-hidden rounded-md">
//                       <Image
//                         src="/placeholder.svg?height=100&width=100"
//                         alt="Thumbnail"
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <h3 className="truncate font-medium">
//                         Título del artículo {post}
//                       </h3>
//                       <p className="text-muted-foreground text-sm">
//                         Publicado el 15 Mar 2025
//                       </p>
//                     </div>
//                     <div className="flex gap-2">
//                       <Button variant="secondary" className="mt-2">
//                         Editar
//                       </Button>
//                       <Button variant="secondary" className="mt-2">
//                         Eliminar
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

'use client';

import { DashboardTemplate } from '@/components/template/DashboardTemplate';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) {
    router.push('/login');
    return null;
  }

  return (
    <DashboardTemplate
      onSignOut={() => void signOut({ callbackUrl: '/login' })}
    />
  );
}

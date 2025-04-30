// src/components/molecules/PostFormCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/atoms/button';
import {
  FileText,
  ImageIcon,
  Link2,
  ListChecks,
  Save,
  Upload,
} from 'lucide-react';

export function PostFormCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crear Nuevo Artículo</CardTitle>
        <CardDescription>
          Completa el formulario para publicar un nuevo artículo en el blog.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Título</Label>
          <Input id="title" placeholder="Ingresa el título del artículo" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            placeholder="Breve descripción del artículo"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Categoría</Label>
          <select id="category" className="w-full rounded-md border px-3 py-2">
            <option value="">Selecciona una categoría</option>
            <option value="plaza-digital">Plaza Digital</option>
            <option value="automatizacion">Automatización</option>
            <option value="proyectos">Proyectos</option>
            <option value="tecnologia">Tecnología</option>
            <option value="colaboracion">Colaboración</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Contenido</Label>
          <div className="rounded-md border p-2">
            <div className="mb-2 flex items-center gap-2 border-b pb-2">
              {[FileText, ImageIcon, Link2, ListChecks].map((Icon, idx) => (
                <Button key={idx} variant="secondary" className="mr-2">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
            <Textarea
              id="content"
              placeholder="Escribe el contenido de tu artículo aquí..."
              className="min-h-[300px]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Imagen Principal</Label>
          <div className="rounded-md border border-dashed p-8 text-center">
            <Upload className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
            <p className="text-muted-foreground text-sm">
              Arrastra una imagen o haz clic para seleccionar
            </p>
            <Button variant="secondary" className="mt-2">
              Seleccionar Archivo
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">Guardar Borrador</Button>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Publicar Artículo
        </Button>
      </CardFooter>
    </Card>
  );
}

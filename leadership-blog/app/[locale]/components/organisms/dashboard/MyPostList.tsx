// src/components/molecules/MyPostList.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/atoms/button';
import Image from 'next/image';

export function MyPostList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mis Artículos</CardTitle>
        <CardDescription>
          Gestiona los artículos que has publicado.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[1, 2, 3].map((post) => (
            <div
              key={post}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-medium">
                  Título del artículo {post}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Publicado el 15 Mar 2025
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" className="mt-2">
                  Editar
                </Button>
                <Button variant="secondary" className="mt-2">
                  Eliminar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

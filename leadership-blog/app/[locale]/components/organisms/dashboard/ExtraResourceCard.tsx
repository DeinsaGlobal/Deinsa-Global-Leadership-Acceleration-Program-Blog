// src/components/molecules/ExtraResearchCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/atoms/button';
import { Plus, Calendar } from 'lucide-react';

export function ExtraResourceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recursos Adicionales</CardTitle>
        <CardDescription>
          Añade archivos y enlaces relacionados con tu artículo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Archivos Adjuntos</Label>
          <div className="rounded-md border border-dashed p-4 text-center">
            <Button variant="secondary" className="mt-2">
              <Plus className="mr-2 h-4 w-4" />
              Añadir Archivo
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="link">Enlaces Externos</Label>
          <div className="flex gap-2">
            <Input id="link" placeholder="https://" />
            <Button variant="secondary" className="mt-2">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Programar Publicación</Label>
          <div className="flex items-center gap-2">
            <Calendar className="text-muted-foreground h-4 w-4" />
            <Input type="date" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

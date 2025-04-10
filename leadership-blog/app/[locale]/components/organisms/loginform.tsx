'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormField } from '../molecules/formfield';
import { Button } from '../atoms/button';
import { Title } from '../atoms/title';
import { Text } from '../atoms/text';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('correo@deinsaglobal.com');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    router.push('/dashboard');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Title level="h2">Iniciar Sesión</Title>
        <Text className="mt-2 text-gray-600">
          Ingresa tus credenciales para acceder al panel de administración
        </Text>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4 rounded-md shadow-sm">
          <FormField
            label="Correo Electrónico"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            label="Contraseña"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //  error={error}
          />
        </div>

        <div>
          <Button type="submit" variant="primary" className="w-full">
            Iniciar Sesión
          </Button>
        </div>
      </form>
    </div>
  );
};

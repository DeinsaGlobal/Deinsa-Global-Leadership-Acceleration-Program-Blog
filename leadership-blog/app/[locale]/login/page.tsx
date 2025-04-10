'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const response = await signIn('credentials', {
      redirect: false,
      username: email,
      password,
    });

    if (response?.error) {
      setError('Correo o contraseña incorrectos.');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Image Section */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          alt="Deinsa Global"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-12 z-20">
          <div className="max-w-md">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg inline-block mb-6">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Bienvenido a la plataforma de Deinsa Global
            </h1>
            <p className="text-white/80 text-lg">
              Un espacio donde cada departamento comparte sus proyectos,
              herramientas y avances.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-2">
              <div className="lg:hidden relative h-12 w-12">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold">Iniciar Sesión</h2>
            <p className="text-gray-500 mt-2">
              Ingresa tus credenciales para acceder al panel de administración
            </p>
          </div>

          <div className="bg-white rounded shadow p-6">
            <form
              onSubmit={(e) => {
                void handleSubmit(e);
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="correo@deinsa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block font-medium">
                    Contraseña
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[#FF6600] hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <button
                type="submit"
                className="w-full py-2 bg-[#FF6600] hover:bg-[#FF6600]/90 text-white rounded"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>

          <div className="text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  O continúa con
                </span>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Google
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Microsoft"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Microsoft
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              ¿No tienes una cuenta?{' '}
              <Link href="#" className="text-[#FF6600] hover:underline">
                Contacta al administrador
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

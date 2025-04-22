'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormField } from '../molecules/formfield';
import { Button } from '../atoms/button';
// import { Title } from '../atoms/title';
import { Text } from '../atoms/text';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState(''); //correo@deinsaglobal.com
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const t = useTranslations('Login');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    // Aquí se simula el inicio de sesión
    const response = await signIn('credentials', {
      redirect: false, //new
      email,
      password,
      // callbackUrl: '/dashboard', //new
    });

    if (response?.error) {
      setError('Correo o contraseña incorrectos.');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center lg:text-left">
          <div className="mb-2 flex justify-center lg:justify-start">
            <div className="relative h-12 w-12 lg:hidden">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold">{t('login')}</h2>
          <p className="mt-2 text-gray-500">{t('loginDescription')}</p>
        </div>

        <div className="rounded bg-white p-6 shadow">
          <form
            onSubmit={(e) => {
              void handleSubmit(e);
            }}
            className="space-y-6"
          >
            <FormField
              label={t('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="correo@deinsa.com"
              style={{ color: 'black', backgroundColor: 'white' }}
              required
            />
            <FormField
              label={t('password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              style={{ color: 'black', backgroundColor: 'white' }}
              required
              // extraContent={
              //   <Link
              //     href="/forgot-password"
              //     className="text-sm text-[#FF6600] hover:underline"
              //   >
              //     ¿Olvidaste tu contraseña?
              //   </Link>
              // }
            />

            {error && <Text className="text-sm text-red-500">{error}</Text>}

            <Button
              type="submit"
              className="w-full rounded bg-[#FF6600] py-2 text-white hover:bg-[#FF6600]/90"
            >
              {t('loginButton')}
            </Button>
          </form>
        </div>

        <div className="space-y-4 text-center">
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

          <div className="flex justify-center gap-4">
            <button className="flex w-full items-center justify-center rounded border border-gray-300 py-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Google
            </button>
            <button className="flex w-full items-center justify-center rounded border border-gray-300 py-2">
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

          <p className="mt-6 text-sm text-gray-500">
            ¿No tienes una cuenta?{' '}
            <Link href="#" className="text-[#FF6600] hover:underline">
              Contacta al administrador
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

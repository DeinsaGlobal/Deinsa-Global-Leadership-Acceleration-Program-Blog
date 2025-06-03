'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormField } from '../molecules/formfield';
import { Button } from '../atoms/button';
import { Text } from '../atoms/text';
import Image from 'next/image';
//import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const t = useTranslations('Login');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const response = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      setError(t('loginError'));
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
              placeholder="email@deinsa.com"
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
          </div>
        </div>
      </div>
    </div>
  );
};

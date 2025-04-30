import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function LoginMessage() {
  const t = useTranslations('Login');
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const logoSrc =
    theme === 'dark' ? '/white-deinsa-logo.png' : '/orange-deinsa-logo.png';
  return (
    <div className={`${theme === 'dark' ? 'bg-[#484848]' : 'bg-[#BABABA]'}`}>
      <Image
        src={logoSrc}
        alt="Logo"
        width={150}
        height={150}
        className="object-contain"
      />
      <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
      <p className="text-lg text-gray-700 dark:text-white/80">
        {t('titleDescription')}
      </p>
    </div>
  );
}

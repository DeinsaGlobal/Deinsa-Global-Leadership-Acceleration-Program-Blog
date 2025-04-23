import NavLinks from '../molecules/navLinks';
import LogInButton from '../atoms/logInButton';
import ChangeThemeButton from '../atoms/changeThemeButton';
//import WhiteModeLogo from '../atoms/logo'; check later
import { useTranslations } from 'next-intl';
//import { DarkModeLogo } from '../atoms/logo'; check later
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Header');
  // This is important. It allows us to avoid hydration errors when using the theme.
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    //<header className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
    <header className="flex items-center justify-between bg-white px-8 py-4 text-black shadow-md transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Image
        src="/orange-deinsa-logo.png"
        alt="Deinsa Global logo"
        width={100}
        height={100}
        className="rounded"
        priority
      />
      <NavLinks />
      <ChangeThemeButton />
      <LogInButton to="/login">{t('loginButton')}</LogInButton>
    </header>
  );
}

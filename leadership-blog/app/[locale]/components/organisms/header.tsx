import NavLinks from '../molecules/navLinks';
import LogInButton from '../atoms/logInButton';
import ChangeThemeButton from '../atoms/changeThemeButton';
//import WhiteModeLogo from '../atoms/logo'; check later
import { useTranslations } from 'next-intl';
//import { DarkModeLogo } from '../atoms/logo'; check later
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Header');
  const { theme } = useTheme();
  // This is important. It allows us to avoid hydration errors when using the theme.
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const logoSrc =
    theme === 'dark' ? '/white-deinsa-logo.png' : '/orange-deinsa-logo.png';
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 text-black shadow-md transition-colors duration-300 dark:bg-[#3E3E3E] dark:text-white">
      <div className="flex items-center">
        <Image
          src={logoSrc}
          alt="Deinsa Global logo"
          width={100}
          height={100}
          className="rounded"
          priority
        />
        <div className="ml-10">
          <NavLinks />
        </div>
      </div>
      <div className="flex items-center">
        <ChangeThemeButton />
        <div className="ml-4">
          <LogInButton to="/login">{t('loginButton')}</LogInButton>
        </div>
      </div>
    </header>
  );
}

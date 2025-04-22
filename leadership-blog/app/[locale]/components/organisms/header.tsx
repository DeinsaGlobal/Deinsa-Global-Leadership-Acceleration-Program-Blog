import NavLinks from '../molecules/navLinks';
import LogInButton from '../atoms/logInButton';
//import ChangeThemeButton from '../atoms/changeThemeButton'; doesnt work sadly :c
//import WhiteModeLogo from '../atoms/logo'; check later
import { useTranslations } from 'next-intl';
//import { DarkModeLogo } from '../atoms/logo'; check later
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('Header');
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
      <Image
        src="/orange-deinsa-logo.png"
        alt="Deinsa Global logo"
        width={100}
        height={100}
        className="rounded"
        priority
      />
      <NavLinks />
      <LogInButton to="/login">{t('loginButton')}</LogInButton>
    </header>
  );
}

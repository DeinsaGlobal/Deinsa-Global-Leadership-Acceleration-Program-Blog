import NavLinks from '../molecules/navLinks';
import LogInButton from '../atoms/logInButton';
//import ChangeThemeButton from '../atoms/changeThemeButton';
import WhiteModeLogo from '../atoms/logo';
import { useTranslations } from 'next-intl';
//import { DarkModeLogo } from '../atoms/logo';

export default function Header() {
  const t = useTranslations('Header');
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
      <WhiteModeLogo />
      <NavLinks />
      <LogInButton to="/login">{t('loginButton')}</LogInButton>
    </header>
  );
}

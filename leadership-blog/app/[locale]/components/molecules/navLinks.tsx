import HeaderLink from '../atoms/headerLink';
import { useTranslations } from 'next-intl';

export default function NavLinks() {
  const t = useTranslations('Header');
  return (
    <div className="hidden space-x-4 lg:flex">
      <HeaderLink href="/about">{t('home')}</HeaderLink>
      <HeaderLink href="/blog">{t('blog')}</HeaderLink>
      <HeaderLink href="/contact">{t('departments')}</HeaderLink>
    </div>
  );
}

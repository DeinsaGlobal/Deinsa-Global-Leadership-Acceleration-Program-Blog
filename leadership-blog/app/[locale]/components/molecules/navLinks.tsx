import HeaderLink from '../atoms/headerLink';
import { useLocale, useTranslations } from 'next-intl';

export default function NavLinks() {
  const t = useTranslations('Header');
  const locale = useLocale();
  return (
    <div className="hidden space-x-4 lg:flex">
      <HeaderLink href={`/${locale}/mainpage`}>{t('home')}</HeaderLink>
      <HeaderLink href={`/${locale}/blog`}>{t('blog')}</HeaderLink>
      <HeaderLink href={`/${locale}/departments`}>
        {t('departments')}
      </HeaderLink>
    </div>
  );
}

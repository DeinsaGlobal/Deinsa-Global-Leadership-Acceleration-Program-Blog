import FooterLink from '../atoms/footerLink';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function FooterDepartmentsLinks() {
  const t = useTranslations('Footer');
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F5] px-8 py-4 dark:bg-[#484848]">
      <h6 className="text-center">{t('departments')}</h6>
      <Link href="/">Plaza Digital</Link>
      <FooterLink href="/about">{t('rd')}</FooterLink>
      <FooterLink href="/blog">{t('sales')}</FooterLink>
      <FooterLink href="/contact">{t('ssa')}</FooterLink>
    </div>
  );
}

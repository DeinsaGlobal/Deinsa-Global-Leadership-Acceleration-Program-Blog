import FooterLink from '../atoms/footerLink';
import { useTranslations } from 'next-intl';

export default function FooterDepartmentsLinks() {
  const t = useTranslations('Footer');
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F5] px-8 py-4 dark:bg-[#484848]">
      <h3 className="text-center">{t('departments')}</h3>
      {/* The href's will need to updated soon */}
      <ul className="list-none pl-0">
        <li>
          <FooterLink href="/">Plaza Digital</FooterLink>
        </li>
        <li>
          <FooterLink href="/about">{t('rd')}</FooterLink>
        </li>
        <li>
          <FooterLink href="/blog">{t('sales')}</FooterLink>
        </li>
        <li>
          <FooterLink href="/contact">{t('ssa')}</FooterLink>
        </li>
      </ul>
    </div>
  );
}

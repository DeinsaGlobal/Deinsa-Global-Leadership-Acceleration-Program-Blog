import { useTranslations } from 'next-intl';

export default function ContactInfoFooter() {
  const t = useTranslations('Footer');
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F5] px-8 py-4 dark:bg-[#484848]">
      <h6>{t('contact')}</h6>
      <p>Deinsa Global</p>
      <p>Direccion</p>
      <p>city, country</p>
      <p>deinsa email</p>
    </div>
  );
}

import { useTranslations } from 'next-intl';

export default function ContactInfoFooter() {
  const t = useTranslations('Footer');
  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] px-8 py-4 dark:bg-[#484848]">
      <h3>{t('contact')}</h3>
      <ul className="list-none pl-0">
        <li>DeinsaGlobal</li>
        <li>Direccion</li>
        <li>city,country</li>
        <li>Deinsa email</li>
      </ul>
    </div>
  );
}

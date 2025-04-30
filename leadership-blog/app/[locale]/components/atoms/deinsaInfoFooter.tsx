import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

export default function DeinsaInfoFooter() {
  const { theme } = useTheme();
  const t = useTranslations('Footer');
  const logoSrc =
    theme === 'dark' ? '/white-deinsa-logo.png' : '/orange-deinsa-logo.png';
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F5] px-8 py-4 dark:bg-[#484848]">
      <Image
        src={logoSrc}
        alt="Deinsa Global logo"
        width={100}
        height={100}
        className="rounded"
        priority
      />
      <p className="text-center">{t('deinsaDescription')}</p>
    </div>
  );
}

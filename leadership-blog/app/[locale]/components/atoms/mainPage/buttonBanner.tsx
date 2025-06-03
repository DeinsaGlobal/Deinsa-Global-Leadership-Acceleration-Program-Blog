import { useTranslations } from 'next-intl';

export default function ButtonBanner() {
  const t = useTranslations('Banner');
  return (
    <button className="mt-6 rounded bg-[#ff6600] px-4 py-2 font-semibold text-black hover:bg-gray-200">
      {t('button')}
    </button>
  );
}

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function PostulationBanner() {
  const t = useTranslations('mainpage');
  return (
    <section className="bg-[#FF9E4D] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-dark-900 mb-4 text-3xl font-bold dark:text-white">
            {t('postulationBannerTitle')}
          </h2>
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            {t('postulationBannerDescription')}
          </p>
          <Link
            href="/postulate"
            className="rounded bg-black px-6 py-3 text-white"
          >
            {t('postulationBannerButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}

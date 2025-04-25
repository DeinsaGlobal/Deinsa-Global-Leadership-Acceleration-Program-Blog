import { useTranslations } from 'next-intl';

export default function NewsletterFooter() {
  const t = useTranslations('Footer');
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F5] px-8 py-4 dark:bg-[#484848]">
      <h6>{t('newsletter')}</h6>
      <form className="flex flex-col items-center justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="mb-2 rounded border border-gray-300 p-2"
        />
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          {t('subscribeButton')}
        </button>
      </form>
    </div>
  );
}

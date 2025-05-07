import Image from 'next/image';
import ButtonBanner from '@/components/atoms/mainPage/buttonBanner';
import { useTranslations } from 'next-intl';

export default function Banner() {
  const t = useTranslations('Banner');
  return (
    <div className="relative mx-auto my-6 flex h-[250px] w-full max-w-screen-xl items-center justify-start overflow-hidden rounded-md bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <Image
        src="/banner-img.jpg"
        alt="Banner"
        className="object-cover brightness-75"
        layout="fill"
        priority
      />
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="mt-4 text-lg">{t('description')}</p>
        <ButtonBanner />
      </div>
    </div>
  );
}

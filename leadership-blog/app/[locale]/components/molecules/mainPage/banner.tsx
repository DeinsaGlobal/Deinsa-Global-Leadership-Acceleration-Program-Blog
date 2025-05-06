import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Image
        src="/banner-img.jpg"
        alt="Banner"
        className="object-cover"
        layout="fill"
        priority
      />
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Leadership Blog</h1>
        <p className="mt-4 text-lg">
          Explore insights, strategies, and stories from the world of
          leadership.
        </p>
      </div>
    </div>
  );
}

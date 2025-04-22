import Image from 'next/image';

export default function WhiteModeLogo() {
  return (
    <div className="relative h-12 w-12 lg:hidden">
      <Image
        src="/orange-deinsa-logo.png"
        alt="Deinsa Global logo"
        width={40}
        height={40}
        className="rounded"
        priority
      />
    </div>
  );
}

export function DarkModeLogo() {
  return (
    <div className="relative h-12 w-12 lg:hidden">
      <Image
        src="/white-deinsa-logo.png"
        alt="Deinsa Global logo"
        width={40}
        height={40}
        className="rounded"
        priority
      />
    </div>
  );
}

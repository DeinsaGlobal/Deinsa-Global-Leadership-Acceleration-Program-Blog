import Image from 'next/image';

export default function WhiteModeLogo() {
  return (
    <div className="relative h-12 w-12">
      <Image
        src="/orange-deinsa-logo.png"
        alt="Deinsa Global logo"
        width={100}
        height={100}
        className="rounded"
        priority
      />
    </div>
  );
}

export function DarkModeLogo() {
  return (
    <div className="relative h-12 w-12">
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

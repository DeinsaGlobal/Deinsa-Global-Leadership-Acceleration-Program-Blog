import Link from 'next/link';

export default function LinkNote({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="px-6 py-2 text-[15px] font-semibold text-[#939393] transition-colors"
    >
      Leer más
    </Link>
  );
}

import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-black-700 transition-colors duration-200 hover:text-orange-600 dark:text-white dark:hover:text-orange-400"
    >
      {children}
    </Link>
  );
}

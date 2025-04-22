import Link from 'next/link';

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function HeaderLink({ href, children }: HeaderLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-700 transition-colors duration-200 hover:text-blue-600"
    >
      {children}
    </Link>
  );
}

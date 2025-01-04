import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href}>
        <p className={isActive ? 'text-secondary_text' : ''} onClick={onClick}>{children}</p>
      </Link>
    </li>
  );
};

export default NavLink;
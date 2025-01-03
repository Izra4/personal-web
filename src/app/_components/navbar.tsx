"use client";
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const poppins = Poppins({
  weight: [
    '100', '200', '300', '400', 
    '500', '600', '700', '800', '900'
  ],
  subsets: ['latin'],
  display: 'swap',
});

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href}>
        <p className={isActive ? 'text-secondary_text' : ''}>{children}</p>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className={`${poppins.className} bg-white flex items-center justify-between shadow-md relative font-semibold`}>
      {/* Logo */}
      <div className="flex items-center ml-8 p-2">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={45} height={45} />
        </Link>
      </div>

      {/* Menu */}
      <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-primary_text">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/experience">Experience</NavLink>
        <NavLink href="/roast">Roast Me</NavLink>
        <NavLink href="/about">About Me</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

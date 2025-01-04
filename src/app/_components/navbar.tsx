// "use client";
// import { Poppins } from 'next/font/google';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useEffect, useRef, useState } from 'react';
// import { GiHamburgerMenu } from "react-icons/gi";

// const poppins = Poppins({
//   weight: [
//     '100', '200', '300', '400', 
//     '500', '600', '700', '800', '900'
//   ],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <li>
//       <Link href={href}>
//         <p className={isActive ? 'text-secondary_text' : ''} onClick={onClick}>{children}</p>
//       </Link>
//     </li>
//   );
// };

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLUListElement | null>(null);
  
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   {/* Handle buat kalo klik diluar menu, nutup */}
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   {/* Handle buat kalo md mesti false */}
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMenuOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <nav className={`${poppins.className} bg-white flex items-center justify-between shadow-md relative font-semibold`}>
//       {/* Logo */}
//       <div className="flex items-center ml-12 p-2">
//         <Link href="/">
//           <Image src="/logo.svg" alt="logo" width={45} height={45} />
//         </Link>
//       </div>

//       {/* Menu - Dekstop */}
//       <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-16 text-primary_text px-20 whitespace-nowrap">
//         <NavLink href="/home">Home</NavLink>
//         <NavLink href="/experience">Experience</NavLink>
//         <NavLink href="/roast">Roast Me</NavLink>
//         <NavLink href="/about">About Me</NavLink>
//       </ul>

//       {/* Ham Icon */}
//       <div className='md:hidden flex items-center' onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         <GiHamburgerMenu color='black'size={25} className='mr-8'/>
//       </div>

//       {/* Menu - Mobile */}
//       <ul 
//         ref={menuRef}
//         className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-0 left-0 right-0 bg-white p-6 space-y-4 text-primary_text flex flex-col justify-center items-center`}
//       >
//         <NavLink href="/home" onClick={closeMenu}>Home</NavLink>
//         <NavLink href="/experience" onClick={closeMenu}>Experience</NavLink>
//         <NavLink href="/roast" onClick={closeMenu}>Roast Me</NavLink>
//         <NavLink href="/about" onClick={closeMenu}>About Me</NavLink>
//       </ul>

//     </nav>
//   );
// };

// export default Navbar;

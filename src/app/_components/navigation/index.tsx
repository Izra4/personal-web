"use client";
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import MenuMobile from "./mobile";
import MenuDesktop from "./dekstop";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white flex items-center justify-between shadow-md relative font-semibold">
      {/* Logo */}
      <div className="ml-8 p-2 md:flex items-center md:ml-12">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={45} height={45} />
        </Link>
      </div>

      {/* Menu - Dekstop */}
      <MenuDesktop closeMenu={closeMenu} />

      {/* Ham Icon */}
      <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <GiHamburgerMenu color="black" size={25} className="mr-8" />
      </div>

      {/* Menu - Mobile */}
      <MenuMobile isMenuOpen={isMenuOpen} closeMenu={closeMenu} menuRef={menuRef} />
    </nav>
  );
};

export default Navbar;

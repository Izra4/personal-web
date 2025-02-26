import { RefObject } from "react";
import NavLink from "./navlink";

const MenuMobile = ({
  isMenuOpen,
  closeMenu,
  menuRef,
}: {
  isMenuOpen: boolean;
  closeMenu: () => void;
  menuRef: RefObject<HTMLUListElement | null>;
}) => {
  return (
    <ul
      ref={menuRef}
      className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 right-0 bg-white p-6 space-y-4 text-primary_text flex flex-col justify-center items-center`}
    >
      <NavLink href="/home" onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink href="/experience" onClick={closeMenu}>
        Experience
      </NavLink>
      <NavLink href="/roast" onClick={closeMenu}>
        Roast Me
      </NavLink>
      <NavLink href="/about" onClick={closeMenu}>
        About Me
      </NavLink>
    </ul>
  );
};

export default MenuMobile;

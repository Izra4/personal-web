import NavLink from './navlink';

const MenuDesktop = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-16 text-primary_text px-20 whitespace-nowrap">
      <NavLink href="/home" onClick={closeMenu}>Home</NavLink>
      <NavLink href="/experience" onClick={closeMenu}>Experience</NavLink>
      <NavLink href="/roast" onClick={closeMenu}>Roast Me</NavLink>
      <NavLink href="/about" onClick={closeMenu}>About Me</NavLink>
    </ul>
  );
};

export default MenuDesktop;

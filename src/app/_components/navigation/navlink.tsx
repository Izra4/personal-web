import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <li className={`${poppins.className}`}>
      <Link href={href}>
        <p className={isActive ? "text-secondary_text" : ""} onClick={onClick}>
          {children}
        </p>
      </Link>
    </li>
  );
};

export default NavLink;

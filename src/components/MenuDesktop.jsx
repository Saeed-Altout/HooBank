import Link from "next/link";
import { layout } from "@/app/style";
import { navLinks } from "@/constants/index";
import { useStateContext } from "@/contexts/providerState";
const MenuDesktop = () => {
  const { linkActive, handelLinkActive } = useStateContext();
  return (
    <ul className={layout.ulDesktop}>
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={`#${link.id}`}
          className={`${
            linkActive == link.id ? "text-secondary " : "text-gray-300"
          } text-lg font-semibold `}
          onClick={handelLinkActive}
        >
          {link.title}
        </Link>
      ))}
    </ul>
  );
};

export default MenuDesktop;

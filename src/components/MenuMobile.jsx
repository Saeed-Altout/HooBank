"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { layout } from "@/app/style";
import { navLinks } from "@/constants";
import { menuAnimate } from "@/utils/motion";
import { useStateContext } from "@/contexts/providerState";
const MenuMobile = () => {
  const { linkActive, handelLinkActive } = useStateContext();

  return (
    <motion.ul
      variants={menuAnimate}
      initial="hiddenMenu"
      animate="showMenu"
      className={layout.ulMobile}
    >
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
    </motion.ul>
  );
};

export default MenuMobile;

"use client";
import { MenuDesktop, MenuMobile, Logo, Toggle } from "./index";
import { layout } from "@/app/style";
import { useStateContext } from "@/contexts/providerState";
const Navbar = () => {
  const { activeMenu } = useStateContext();
  return (
    <nav className="z-[1000] min-h-28 py-3">
      <div className="container flex items-center justify-between px-6 py-6 mx-auto sm:px-16">
        <Logo styleLogo="w-[120px] h-auto" />
        <Toggle />
        <MenuDesktop />
        {activeMenu && <MenuMobile />}
      </div>
    </nav>
  );
};

export default Navbar;

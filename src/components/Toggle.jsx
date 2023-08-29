"use client";
import Image from "next/image";
import { menu, close } from "@/assets/index";
import { useStateContext } from "@/contexts/providerState";
const Toggle = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <button
      type="button"
      onClick={() => setActiveMenu((prev) => !prev)}
      className="block sm:hidden"
    >
      <Image
        src={activeMenu ? close : menu}
        alt={activeMenu ? "Close" : "Menu"}
        className="object-contain w-6 h-6"
      />
    </button>
  );
};

export default Toggle;

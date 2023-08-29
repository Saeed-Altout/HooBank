import Image from "next/image";
import { discount } from "@/assets";

const ProofDiscount = () => (
  <div className="flex items-center justify-center px-2 py-0.5 rounded-lg md:justify-start bg-black-gradient">
    <Image src={discount} alt="Discount" className="w-12 h-auto" />
    <p className="text-base font-medium text-center text-gray-400 sm:text-left md:text-lg">
      <span className="text-white">20%</span> Discount For{" "}
      <span className="text-white ">1 Month</span> Account
    </p>
  </div>
);

export default ProofDiscount;

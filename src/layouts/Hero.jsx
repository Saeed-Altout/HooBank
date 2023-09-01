import Image from "next/image";
import { robot } from "@/assets/index";
import { ProofDiscount } from "@/components";
import { useStateContext } from "@/contexts/providerState";
import { FiArrowUp } from "react-icons/fi";
const Hero = () => {
  const { scrolled } = useStateContext();
  return (
    <section className="w-full h-full z-[50] mt-12">
      <div className="container flex flex-col items-start justify-between gap-10 px-6 py-6 mx-auto md:flex-row sm:px-16">
        <div className="max-w-3xl">
          <ProofDiscount />
          <h1 className="py-6 text-4xl font-bold leading-[50px] text-center text-white sm:text-5xl md:text-6xl lg:text-7xl sm:text-left">
            The Next
            <br />
            <span className="text-gradient">Generation</span>
            <br />
            Payment Method.
          </h1>
          <p className="text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Image
            src={robot}
            alt="Robot"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <button
        type="button"
        className={`${
          scrolled ? "block" : "hidden"
        } fixed p-2 text-2xl text-black bg-white rounded-full sm:right-16 md:right-32 right-6 bottom-10`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FiArrowUp />
      </button>
    </section>
  );
};
export default Hero;

{
  /* <span className="absolute block w-full h-full opacity-50 -z-10 blue__gradient ring-0" /> */
}

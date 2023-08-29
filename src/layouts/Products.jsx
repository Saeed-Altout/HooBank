import Image from "next/image";
import Link from "next/link";
import { Section, Wrapper } from "@/components";
import { apple, google, bill } from "../assets/index";

const Products = () => (
  <Section id="product">
    <Wrapper>
      <div className="max-w-3xl mx-auto">
        <Image src={bill} alt="Bill" className="object-contain w-full h-full" />
      </div>

      <div className="max-w-3xl">
        <h1 className="py-6 text-4xl font-bold leading-[50px] text-center text-white sm:text-5xl sm:text-left">
          Easily control your billing & invoicing.
        </h1>
        <p className="text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row items-center justify-center gap-10 my-10 ">
          <Link href={"/"}>
            <Image src={apple} alt="Apple" className="w-38" />
          </Link>
          <Link href={"/"}>
            <Image src={google} alt="Google" className="w-38" />
          </Link>
        </div>
      </div>
    </Wrapper>
  </Section>
);

export default Products;

{
  /* <span className="absolute left-0 block w-full h-full opacity-40 -z-10 blue__gradient" /> */
}

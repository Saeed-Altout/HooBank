import Image from "next/image";
import { card } from "@/assets";
import { Button, Section, Wrapper } from "@/components";

const Business = () => (
  <Section id="business">
    <Wrapper>
      <div className="max-w-3xl">
        <h1 className="py-6 text-4xl font-bold leading-[50px] text-center text-white sm:text-5xl sm:text-left">
          Find a better card deal in few easy steps.
        </h1>
        <p className="text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button
          text="Get Started"
          styles="block w-fit mx-auto md:mr-auto md:ml-0"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <Image src={card} alt="Card" className="object-contain w-full h-full" />
      </div>
    </Wrapper>
  </Section>
);

export default Business;

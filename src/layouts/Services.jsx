import { Button, Section, Wrapper } from "@/components";
const Services = () => (
  <Section id="services">
    <Wrapper>
      <div className="w-full p-10 rounded-lg bg-black-gradient-2">
        <h1 className="py-6 text-4xl font-bold leading-[50px] text-center text-white sm:text-5xl sm:text-left">
          Let’s try our service now!
        </h1>
        <p className="text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
        <Button
          text="Get Started"
          styles="block w-fit mx-auto sm:mr-auto sm:ml-0"
        />
      </div>
    </Wrapper>
  </Section>
);

export default Services;

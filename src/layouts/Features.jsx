import Image from "next/image";
import { features } from "@/constants";
import { Button, Section, Wrapper } from "@/components";

const Features = () => (
  <Section id="features">
    <Wrapper>
      <div className="max-w-3xl">
        <h1 className="py-6 text-4xl font-bold leading-[50px] text-center text-white sm:text-5xl sm:text-left">
          You do the business, we’ll handle the money.
        </h1>
        <p className="text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button
          text="Get Started"
          styles="block w-fit mx-auto md:mr-auto md:ml-0"
        />
      </div>

      <div className="max-w-3xl">
        <div className="flex flex-col w-full gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-start gap-5 p-4 rounded-lg feature-card sm:flex-row"
            >
              <div className="w-12 h-12">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="object-contain w-full h-full"
                />
              </div>

              <p className="text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
                <span className="block text-xl font-bold text-white">
                  {feature.title}
                </span>
                {feature.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  </Section>
);

export default Features;

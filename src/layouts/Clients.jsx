import Image from "next/image";
import styles from "@/app/style";
import { feedback } from "@/constants";
import { Section, Wrapper } from "@/components";

const Clients = () => (
  <Section id="clients">
    <Wrapper>
      <div className="max-w-3xl">
        <h1 className="py-6 text-4xl font-bold leading-[50px] text-center text-white sm:text-5xl sm:text-left">
          What People are saying about us{" "}
        </h1>
        <p className="text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="max-w-3xl">
        <div className="flex flex-col w-full gap-10">
          {feedback.map((feed) => (
            <div
              key={feed.id}
              className="flex flex-col gap-2 p-5 rounded-lg feature-card"
            >
              <p className={`${styles.paragraph}`}>{feed.content}</p>

              <div className="flex flex-row items-center justify-center gap-5 py-5 w-fit">
                <Image src={feed.img} alt={feed.id} width={40} height={40} />
                <div>
                  <h1 className="text-2xl font-semibold text-white">
                    {feed.name}
                  </h1>
                  <h3 className="text-dimWhite">{feed.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  </Section>
);

export default Clients;

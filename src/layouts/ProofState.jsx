import { CardState } from "@/components";
import { stats } from "@/constants";
const ProofState = () => (
  <section className="flex flex-wrap items-center justify-center gap-10 my-40">
    {stats.map((stat) => (
      <CardState key={stat.id} state={stat.value} text={stat.title} />
    ))}
  </section>
);

export default ProofState;

import Image from "next/image";
import { clients } from "../constants/index";
const ProofCompany = () => (
  <section className="flex flex-wrap items-center justify-center gap-10 py-5">
    {clients.map((client) => (
      <Image
        src={client.logo}
        alt={client.id}
        key={client.id}
        className="w-32"
      />
    ))}
  </section>
);

export default ProofCompany;

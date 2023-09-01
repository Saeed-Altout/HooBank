"use client";
import {
  Business,
  Clients,
  Features,
  Footer,
  Hero,
  Products,
  ProofCompany,
  ProofState,
  Services,
} from "@/layouts";
import { Navbar } from "@/components";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <ProofState />
        <Features />
        <Products />
        <Business />
        <Clients />
        <ProofCompany />
        <Services />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;

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
      <header className="max-h-screen relative">
        <Navbar />
        <Hero />
      </header>
      <main className="mt-20 block">
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

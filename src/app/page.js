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
      <header className="h-screen flex flex-col items-start justify-center gap-20 relative">
        <Navbar />
        <Hero />
      </header>
      <main>
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

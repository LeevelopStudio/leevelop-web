import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { ExpertiseBands } from "@/components/sections/ExpertiseBands";
import { DecisionProcess } from "@/components/sections/DecisionProcess";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <ExpertiseBands />
        <DecisionProcess />
        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}

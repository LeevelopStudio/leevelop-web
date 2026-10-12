import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { ExpertiseBands } from "@/components/sections/ExpertiseBands";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <ExpertiseBands />
      </main>
    </>
  );
}

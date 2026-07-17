import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Ticker />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="relative z-10">
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}

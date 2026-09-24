import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Section from "@/components/ui/Section";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import Achievements from "@/components/sections/Achievements";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
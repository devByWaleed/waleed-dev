import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Journey from "@/components/sections/Journey";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Journey />

        <Section id="projects" eyebrow="Work" title="Featured projects">
          <p className="text-muted">Projects content</p>
        </Section>
        <Section id="achievements" eyebrow="Progress" title="Achievements">
          <p className="text-muted">Achievements content</p>
        </Section>
        <Section id="contact" eyebrow="Contact" title="Get in touch">
          <p className="text-muted">Contact content</p>
        </Section>
      </main>
    </>
  );
}
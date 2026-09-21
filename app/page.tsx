import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <div className="flex min-h-screen items-center justify-center px-6 pt-16">
          <h1 className="font-display text-5xl font-bold md:text-8xl">
            Hero goes here
          </h1>
        </div>

        <Section id="about" eyebrow="About" title="What I bring">
          <p className="text-muted">About content</p>
        </Section>
        <Section id="skills" eyebrow="Skills" title="Technical skills">
          <p className="text-muted">Skills content</p>
        </Section>
        <Section id="journey" eyebrow="Journey" title="My journey">
          <p className="text-muted">Journey content</p>
        </Section>
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
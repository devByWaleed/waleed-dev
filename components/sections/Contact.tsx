import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function Contact() {
    return (
        <Section id="contact" eyebrow="Contact" title="Get in touch">
            <div className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-2">
                    <ContactInfo />
                </div>
                <div className="md:col-span-3">
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
}
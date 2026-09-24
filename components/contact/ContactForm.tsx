"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "@/types";

const initialValues: ContactFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [values, setValues] = useState<ContactFormValues>(initialValues);
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("sending");

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("Missing EmailJS environment variables.");
            setStatus("error");
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: values.name,
                    from_email: values.email,
                    subject: values.subject,
                    message: values.message,
                },
                { publicKey }
            );
            setStatus("success");
            setValues(initialValues);
        } catch (error) {
            console.error("EmailJS failed to send:", error);
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-6">
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm text-muted">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={values.name}
                        onChange={handleChange}
                        className="rounded-lg border border-border bg-bg px-4 py-2.5 text-sm outline-none focus:border-accent"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm text-muted">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="abc@gmail.com"
                        value={values.email}
                        onChange={handleChange}
                        className="rounded-lg border border-border bg-bg px-4 py-2.5 text-sm outline-none focus:border-accent"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm text-muted">
                    Subject
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Freelance opportunity, job opening, collaboration..."
                    value={values.subject}
                    onChange={handleChange}
                    className="rounded-lg border border-border bg-bg px-4 py-2.5 text-sm outline-none focus:border-accent"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-muted">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me little about yourself..."
                    value={values.message}
                    onChange={handleChange}
                    className="resize-none rounded-lg border border-border bg-bg px-4 py-2.5 text-sm outline-none focus:border-accent"
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
            >
                {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
                <p className="text-sm text-accent">
                    Message sent. I will get back to you within a day or two.
                </p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email me directly.
                </p>
            )}
        </form>
    );
}
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact | Somethingg Technology",
  description:
    "Reach out to Somethingg Technology. Have a project, requirement, or idea? Let's talk about how we can help.",
};

const contactDetails = [
  {
    label: "Email",
    value: "hello@somethingg.co",
    href: "mailto:hello@somethingg.co",
    description: "We respond within 1–2 business days.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Book a Consultation",
    value: "Schedule a call",
    href: "/contact",
    description: "Prefer a live conversation? Let us know in your message.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How quickly do you respond?",
    answer:
      "We respond to all inquiries within 1–2 business days. For urgent matters, mention it in your message.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. While we're based in India, we work with clients remotely. Most of our engagement is async-friendly.",
  },
  {
    question: "What's the first step after I reach out?",
    answer:
      "We'll review your message, ask any clarifying questions by email, and schedule a short discovery call if appropriate — usually within the same week.",
  },
  {
    question: "Do you take on small projects?",
    answer:
      "Yes — we're flexible on scope. If your need is specific and well-defined, we can often help even if it's a focused engagement.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0F0F14] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0F14]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-3xl">
            Let&apos;s figure out how we can help
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
            Have a project, requirement, or idea in mind? Reach out and let&apos;s
            see how Somethingg can help. No commitments, just a straightforward
            conversation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — takes 3/5 */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-[#1A1A24] border border-white/5">
                <h2 className="text-lg font-semibold text-white mb-1">
                  Send us a message
                </h2>
                <p className="text-sm text-gray-500 mb-7">
                  Fill in the details below and we&apos;ll get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar — takes 2/5 */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="p-7 rounded-2xl bg-[#1A1A24] border border-white/5">
                <h2 className="text-sm font-semibold text-white mb-5">
                  Direct contact
                </h2>
                <div className="space-y-5">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-400 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="text-sm text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                        >
                          {item.value}
                        </a>
                        <p className="text-xs text-gray-600 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Consultation CTA */}
              <div className="relative p-7 rounded-2xl bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-600/20 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                <h3 className="text-sm font-semibold text-white mb-2">
                  Prefer a live conversation?
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-5">
                  Book a consultation call and we&apos;ll walk through your
                  requirements together — no slides, no pitch, just a useful
                  conversation.
                </p>
                <Button href="mailto:hello@somethingg.co" variant="primary" size="sm" external>
                  Book a Consultation
                </Button>
              </div>

              {/* Response time */}
              <div className="p-5 rounded-xl bg-[#111118] border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-400">
                    Active
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We typically respond within 24–48 hours on business days. For
                  time-sensitive needs, mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#0C0C12] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Common questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-xl bg-[#1A1A24] border border-white/5"
              >
                <h3 className="text-sm font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { teamMembers } from "@/data/team";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "IT Consultancy & Digital Services",
  description:
    "Somethingg provides modern IT consulting, digital solutions, product development, and business support services through a human, practical, and results-focused approach.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Somethingg | IT Consultancy & Digital Services",
    description:
      "Somethingg provides modern IT consulting, digital solutions, product development, and business support services through a human, practical, and results-focused approach.",
    url: "https://somethingg.co",
    siteName: "Somethingg",
    type: "website",
    locale: "en_IN",
  },
};

const trustStatements = [
  {
    label: "Client-Focused",
    description:
      "Every solution starts with understanding your goals, not our assumptions.",
  },
  {
    label: "Solution-Oriented",
    description: "We focus on outcomes, not just deliverables.",
  },
  {
    label: "Execution-Driven",
    description:
      "Strategy without delivery is just conversation. We do both.",
  },
  {
    label: "Human Approach",
    description:
      "Clear communication, real relationships, no corporate jargon.",
  },
];

const differentiators = [
  {
    title: "Practical, not theoretical",
    description:
      "We recommend what works for your scale and budget — not what looks impressive on a slide deck.",
  },
  {
    title: "Personalized support",
    description:
      "You work with a small, senior team that knows your business. No account managers passing messages.",
  },
  {
    title: "Modern execution",
    description:
      "We use current tools, frameworks, and practices — so what we build stays relevant and maintainable.",
  },
  {
    title: "Cross-functional team",
    description:
      "Technology, communication, and operations expertise under one roof. Coordinated, not siloed.",
  },
  {
    title: "Clear communication",
    description:
      "You always know what's happening, what's next, and why. No surprises, no black boxes.",
  },
];

const SECTION = "py-24 md:py-32 border-t border-white/[0.06]";
const CONTAINER = "max-w-6xl mx-auto px-6 lg:px-8";
const CARD =
  "p-6 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-200";

export default function HomePage() {
  return (
    <div className="bg-[#0A0A12]">
      <Hero />

      {/* Trust Strip — hairline divider, no bg shift */}
      <section className="border-t border-white/[0.06]">
        <div className={`${CONTAINER} py-14`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {trustStatements.map((item) => (
              <div key={item.label}>
                <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-[0.18em] mb-2">
                  {item.label}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow="What We Do"
            title="Services built around your business"
            description="From strategy to execution, we cover the full spectrum of what modern businesses need to grow and operate effectively."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className={`group relative ${CARD}`}
              >
                <div className="w-10 h-10 rounded-md bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-5">
                  <ServiceIcon icon={service.icon} className="text-blue-400" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Somethingg */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why Somethingg"
                title="Different by design"
                description="We built Somethingg to be the kind of technology partner we'd want ourselves — practical, transparent, and genuinely invested in your outcomes."
                align="left"
              />
            </div>
            <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {differentiators.map((item, i) => (
                <li key={item.title} className="flex gap-5 py-6">
                  <span className="flex-shrink-0 text-xs font-mono text-blue-400/70 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={SECTION}>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow="The Team"
            title="People behind the work"
            description="A small, senior, cross-functional team that brings technology, communication, and operations expertise together."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className={CARD}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-base mb-5 border"
                  style={{
                    backgroundColor: `${member.accentColor}1A`,
                    color: member.accentColor,
                    borderColor: `${member.accentColor}33`,
                  }}
                >
                  {member.initials}
                </div>
                <h3 className="text-[15px] font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-blue-400/90 font-medium mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {member.shortBio}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/team" variant="outline">
              Meet the Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={SECTION}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-[0.18em] mb-5">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
            Let&apos;s discuss your requirements
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us what you need, and we&apos;ll help you plan the right
            solution — no commitment required, just a straightforward
            conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact" size="lg" variant="primary">
              Get in Touch
            </Button>
            <Button href="/about" size="lg" variant="ghost">
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

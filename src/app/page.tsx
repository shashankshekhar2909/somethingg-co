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

export default function HomePage() {
  return (
    <>
      {/* Hero Section — animated Three.js + Anime.js hero */}
      <Hero />

      {/* Trust Strip */}
      <section className="bg-[#0C0C12] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStatements.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-blue-500" />
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Services Built Around Your Business"
            description="From strategy to execution, we cover the full spectrum of what modern businesses need to grow and operate effectively."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group relative p-6 rounded-xl bg-[#1A1A24] border border-white/5 hover:border-blue-600/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/5"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-5 group-hover:bg-blue-600/15 transition-colors duration-300">
                  <ServiceIcon icon={service.icon} className="text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg
                    className="h-4 w-4 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Somethingg */}
      <section className="py-20 md:py-28 bg-[#0C0C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Why Somethingg"
                title="Different by Design"
                description="We built Somethingg to be the kind of technology partner we'd want ourselves — practical, transparent, and genuinely invested in your outcomes."
                align="left"
              />
            </div>
            <div className="space-y-4">
              {differentiators.map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-xl bg-[#1A1A24] border border-white/5 hover:border-white/10 transition-colors duration-200"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600/15 border border-blue-600/25 flex items-center justify-center text-xs font-bold text-blue-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 md:py-28 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Team"
            title="People Behind the Work"
            description="A small, senior, cross-functional team that brings technology, communication, and operations expertise together."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="p-7 rounded-xl bg-[#1A1A24] border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-5 border"
                  style={{
                    backgroundColor: `${member.accentColor}22`,
                    color: member.accentColor,
                    borderColor: `${member.accentColor}33`,
                  }}
                >
                  {member.initials}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-xs text-blue-400 font-medium mt-0.5 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {member.shortBio}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/team" variant="outline">
              Meet the Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-[#0C0C12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-10 md:p-14 rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#1A1A24] border border-blue-600/15 overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
                Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
                Let&apos;s discuss your requirements
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Tell us what you need, and we&apos;ll help you plan the right solution
                — no commitment required, just a straightforward conversation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" size="lg" variant="primary">
                  Get in Touch
                </Button>
                <Button href="/about" size="lg" variant="ghost">
                  Learn About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

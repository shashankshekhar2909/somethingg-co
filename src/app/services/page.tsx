import type { Metadata } from "next";
import { services } from "@/data/services";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Somethingg's full range of services: IT consulting, web & product development, technical support, content & communication, and custom business solutions.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Somethingg",
    description:
      "Explore Somethingg's full range of services: IT consulting, web & product development, technical support, content & communication, and custom business solutions.",
    url: "https://somethingg.co/services",
    siteName: "Somethingg",
    type: "website",
    locale: "en_IN",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0F0F14] overflow-hidden">
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
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-3xl">
            Everything your business needs to move forward
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
            Five focused service areas that cover the full spectrum of modern
            business needs — from strategy to execution, technology to
            communication.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="group scroll-mt-24 p-8 md:p-10 rounded-2xl bg-[#1A1A24] border border-white/5 hover:border-blue-600/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/15 transition-colors duration-300">
                    <ServiceIcon
                      icon={service.icon}
                      className="text-blue-400"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-blue-600/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Detail Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-xl bg-[#111118] border border-white/5">
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
                      What it is
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.whatItIs}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#111118] border border-white/5">
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
                      Who it&apos;s for
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.whoItsFor}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#111118] border border-white/5">
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
                      Problem it solves
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.problemItSolves}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-[#111118] border border-white/5">
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
                      Expected outcome
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.expectedOutcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="py-20 md:py-24 bg-[#0C0C12] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Not Sure Where to Start?"
            title="Let's figure it out together"
            description="If your need doesn't fit neatly into one of these categories, that's fine too. Tell us what you're trying to solve and we'll help you think through the right approach."
            className="mb-8"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary">
              Talk to Us
            </Button>
            <Button href="/about" size="lg" variant="outline">
              How We Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

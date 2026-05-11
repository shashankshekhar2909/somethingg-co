import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Somethingg — a practical, modern, human-centered IT consultancy built to help growing businesses navigate technology, communication, and execution.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Somethingg",
    description:
      "Learn about Somethingg — a practical, modern, human-centered IT consultancy for growing businesses.",
    url: "https://somethingg.co/about",
    siteName: "Somethingg",
    type: "website",
    locale: "en_IN",
  },
};

const whatWeArePoints = [
  "A small, senior team with deep expertise across technology, communication, and operations.",
  "A consultancy that treats every client engagement as a genuine partnership.",
  "A service provider that bridges the gap between technical capability and business reality.",
  "A team that communicates clearly, delivers consistently, and stays accountable.",
];

const howWeWorkSteps = [
  {
    step: "01",
    title: "Listen First",
    description:
      "Every engagement starts with understanding — your goals, your context, your constraints. We ask the right questions before we offer any answers.",
  },
  {
    step: "02",
    title: "Plan Clearly",
    description:
      "We define scope, approach, and expected outcomes upfront. No ambiguity, no scope creep surprises. You know what you're getting before we start.",
  },
  {
    step: "03",
    title: "Execute Reliably",
    description:
      "We deliver what we commit to, on time, with regular updates along the way. If something changes, you're the first to know.",
  },
  {
    step: "04",
    title: "Stay Accountable",
    description:
      "We measure success by your outcomes, not our output. If something isn't working, we fix it — and we own it.",
  },
];

const whoWeServe = [
  {
    title: "Growing Businesses",
    description:
      "Companies at an inflection point — scaling up, digitizing operations, or expanding into new markets. You need partners who can move at your pace.",
  },
  {
    title: "Founders & Early Teams",
    description:
      "Builders who need to move fast without cutting corners. We help you make smart technology decisions early so you don't have to undo them later.",
  },
  {
    title: "Businesses Undergoing Change",
    description:
      "Organizations going through a rebrand, digital transformation, or operational overhaul. You need execution partners, not just advisors.",
  },
  {
    title: "Teams Without In-House Tech",
    description:
      "Businesses that need reliable technical capability without the cost and complexity of building an internal team. We fill that gap.",
  },
];

export default function AboutPage() {
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
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-3xl">
            Built to be the partner we&apos;d want
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
            Somethingg was built to offer practical, modern, human-centered
            consulting and digital services — the kind of support that growing
            businesses actually need.
          </p>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-20 md:py-28 bg-[#0C0C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="What We Are"
                title="A different kind of consultancy"
                description="Somethingg is not a large agency, not a solo freelancer, and not a typical IT firm. We're something in between — deliberate by design."
                align="left"
              />
            </div>
            <div className="space-y-4">
              {whatWeArePoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#1A1A24] border border-white/5"
                >
                  <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-blue-600/15 border border-blue-600/25 flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 md:py-28 bg-[#0F0F14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Why We Exist"
            title="Businesses deserve better support"
            className="mb-10"
          />
          <div className="space-y-6 text-left">
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Most growing businesses fall into a gap. They&apos;re too small for the
              large agencies and enterprise software vendors, but too ambitious for
              one-person freelancers or generic SaaS tools. They need something
              in the middle — reliable, expert, and actually invested in their
              success.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              That&apos;s exactly why Somethingg exists. We serve businesses that need
              reliable support across technology, communication, and execution —
              without the overhead, the jargon, or the slow pace of larger firms.
              We built this to be fast, focused, and genuinely useful.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              We started with a simple belief: that good technology support,
              combined with clear communication and solid execution, can transform
              how a business operates. Everything we do is built around that
              belief.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-[#0C0C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Collaborative, transparent, outcome-focused"
            description="Our process is simple by design — no complicated methodologies, no unnecessary meetings. Just clear work, done well."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWorkSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl bg-[#1A1A24] border border-white/5 hover:border-white/10 transition-colors duration-200"
              >
                <span className="block text-3xl font-bold text-blue-600/25 mb-4 font-mono">
                  {step.step}
                </span>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-28 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for businesses on the move"
            description="We work best with people who have high standards, move with intent, and want a partner — not just a vendor."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoWeServe.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-xl bg-[#1A1A24] border border-white/5 hover:border-blue-600/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#0C0C12] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-gray-400 text-base mb-8">
            Whether you have a specific project or just want to explore what&apos;s
            possible, we&apos;re happy to have that conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary">
              Get in Touch
            </Button>
            <Button href="/services" size="lg" variant="outline">
              See Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

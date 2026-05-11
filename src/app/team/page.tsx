import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind Somethingg — Sarvesh, Chanchal, and Sugandh. A small, senior, cross-functional team built for real results.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Team | Somethingg",
    description:
      "Meet the team behind Somethingg — a small, senior, cross-functional team built for real results.",
    url: "https://somethingg.co/team",
    siteName: "Somethingg",
    type: "website",
    locale: "en_IN",
  },
};

export default function TeamPage() {
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            The Team
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Real people. Real work.
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Somethingg is a tight team of three — each bringing a distinct
            discipline, all working toward the same goal: making your business
            better.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16 md:py-24 bg-[#0F0F14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group p-8 md:p-10 rounded-2xl bg-[#1A1A24] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold border"
                      style={{
                        backgroundColor: `${member.accentColor}18`,
                        color: member.accentColor,
                        borderColor: `${member.accentColor}30`,
                      }}
                    >
                      {member.initials}
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs font-mono text-gray-700">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {member.name}
                    </h2>
                    <p
                      className="text-sm font-semibold uppercase tracking-widest mb-5"
                      style={{ color: member.accentColor }}
                    >
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {member.fullBio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Ethos */}
      <section className="py-20 md:py-24 bg-[#0C0C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work Together"
            title="Small team, big accountability"
            description="At Somethingg, there's no handoff between strategy and delivery. The same people who plan your solution are the ones who build and deliver it."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "No middlemen",
                description:
                  "You talk directly to the people doing the work. No account managers, no layers, no lost context.",
              },
              {
                title: "Shared ownership",
                description:
                  "Each team member owns their domain fully — and we hold each other accountable to the same standard we set for clients.",
              },
              {
                title: "Complementary skills",
                description:
                  "Technology, communication, and operations aren't separate — they're coordinated. That's what makes Somethingg different.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-[#1A1A24] border border-white/5"
              >
                <h3 className="text-sm font-semibold text-white mb-2">
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
      <section className="py-20 md:py-24 bg-[#0F0F14] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to work with this team?
          </h2>
          <p className="text-gray-400 text-base mb-8">
            We take on a limited number of engagements to ensure each client
            gets our full attention. Reach out and let&apos;s see if we&apos;re a good
            fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" variant="primary">
              Start a Conversation
            </Button>
            <Button href="/services" size="lg" variant="outline">
              See What We Do
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

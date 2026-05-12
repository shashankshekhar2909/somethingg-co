import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected Somethingg projects across education and commerce, including school.somethingg.co and shop.somethingg.co.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Somethingg",
    description:
      "Explore selected Somethingg projects across education and commerce.",
    url: "https://somethingg.co/projects",
    siteName: "Somethingg",
    type: "website",
    locale: "en_IN",
  },
};

const projects = [
  {
    name: "Sunrise Public School Lucknow",
    url: "https://school.somethingg.co/",
    category: "Education Website",
    summary:
      "A school website focused on admissions, academics, facilities, and parent communication.",
    highlights: [
      "CBSE-focused positioning for Nursery to Class 12",
      "Admissions-first journey with clear calls to action",
      "Structured sections for academics, facilities, and testimonials",
    ],
  },
  {
    name: "Anupam Studio",
    url: "https://shop.somethingg.co/",
    category: "Retail Showcase Website",
    summary:
      "A premium local retail storefront website for curated fashion and lifestyle collections.",
    highlights: [
      "Collection-led browsing with featured categories and new arrivals",
      "Local conversion focus with WhatsApp enquiry flows",
      "Showroom-focused trust content including testimonials and timings",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0F0F14] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0F14]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            Projects
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-4xl">
            Selected work we&apos;ve shipped across industries
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl">
            A snapshot of recent websites delivered by Somethingg, with a focus
            on clear positioning, conversion-focused structure, and practical
            business outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0F0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <article
                key={project.url}
                className="p-8 rounded-2xl bg-[#1A1A24] border border-white/5"
              >
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                  {project.category}
                </p>
                <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {project.summary}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((item) => (
                    <li key={item} className="text-sm text-gray-400 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                <Button href={project.url} variant="outline" size="sm" external>
                  Visit Project
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

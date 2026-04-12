export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  whatItIs: string;
  whoItsFor: string;
  problemItSolves: string;
  expectedOutcome: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "it-consulting",
    title: "IT Consulting",
    shortDescription:
      "Help businesses make better technology decisions — from tools and systems to strategy and vendor selection.",
    icon: "consulting",
    whatItIs:
      "A structured advisory engagement where we assess your current technology landscape, identify gaps or inefficiencies, and recommend clear, actionable improvements.",
    whoItsFor:
      "Founders, business owners, and operations leaders who are unsure about which technology to adopt, are experiencing friction in their current systems, or need a trusted second opinion before making a major tech investment.",
    problemItSolves:
      "Most businesses make expensive technology decisions without a clear framework — buying tools they don't need, underusing what they have, or building on shaky foundations. We eliminate that guesswork.",
    expectedOutcome:
      "A clear technology roadmap, tool recommendations tailored to your budget and scale, and the confidence to move forward with decisions backed by expertise.",
  },
  {
    id: "web-product-development",
    title: "Web & Product Development",
    shortDescription:
      "Websites, dashboards, internal tools, and digital experiences built to work and built to last.",
    icon: "development",
    whatItIs:
      "End-to-end design and development of web-based products — from public-facing websites to complex internal platforms and custom business tools.",
    whoItsFor:
      "Businesses that need a strong digital presence, teams that need internal tools to improve their operations, and founders building early-stage digital products.",
    problemItSolves:
      "Too many businesses are running on outdated websites, cobbled-together tools, or expensive off-the-shelf software that doesn't quite fit. We build things that are purpose-built for your specific context.",
    expectedOutcome:
      "A polished, performant, and maintainable digital product that represents your business well and actually solves the problem it was built for.",
  },
  {
    id: "technical-support-execution",
    title: "Technical Support & Digital Execution",
    shortDescription:
      "Ongoing technical help, updates, and implementation support so your digital operations keep running without a hitch.",
    icon: "support",
    whatItIs:
      "A continuous support and execution service covering updates, troubleshooting, integrations, and implementation tasks — without the overhead of a full-time hire.",
    whoItsFor:
      "Small to mid-size businesses that have digital systems in place but lack the internal bandwidth or expertise to maintain, update, or expand them reliably.",
    problemItSolves:
      "Digital operations break down or stagnate when there's no reliable team to handle ongoing needs. We provide that reliability without the cost and complexity of in-house hiring.",
    expectedOutcome:
      "Consistent, proactive technical support that keeps your digital infrastructure running smoothly and evolving as your business grows.",
  },
  {
    id: "content-communication",
    title: "Content & Communication Support",
    shortDescription:
      "Brand communication, digital content, and online presence — crafted to connect with your audience and represent your business well.",
    icon: "content",
    whatItIs:
      "A content and communications service covering brand messaging, website copy, social content, digital narratives, and communication strategy — all tailored to your business voice.",
    whoItsFor:
      "Businesses that know they need stronger communication but don't have the time, skill, or team to produce it consistently. Especially useful for growing companies going through a rebrand, launch, or digital expansion.",
    problemItSolves:
      "Good products and services lose visibility and trust when the communication around them is unclear or inconsistent. We fix that by bringing strategy and craft to the way you present yourself.",
    expectedOutcome:
      "A clear, compelling, and consistent communication presence — across your website, content channels, and client-facing materials — that earns attention and builds trust.",
  },
  {
    id: "custom-business-solutions",
    title: "Custom Business Solutions",
    shortDescription:
      "Tailored solutions for operational and digital challenges that don't fit a standard service offering.",
    icon: "custom",
    whatItIs:
      "A flexible, project-based engagement where we scope, design, and deliver a solution specific to your business challenge — whether it's a workflow, a system, a process, or a hybrid of multiple needs.",
    whoItsFor:
      "Businesses with unique operational or digital needs that fall outside standard categories. If you've struggled to find the right vendor because your requirement doesn't fit a neat box, this is for you.",
    problemItSolves:
      "Many businesses have real, pressing problems that don't map neatly to a predefined service. Rather than forcing a template, we start from your problem and build the solution from there.",
    expectedOutcome:
      "A bespoke solution that directly addresses your specific challenge — delivered with the same quality, clarity, and accountability as everything else we do.",
  },
];

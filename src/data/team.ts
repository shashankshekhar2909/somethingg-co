export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  initials: string;
  accentColor: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "sarvesh",
    name: "Sarvesh",
    role: "Technology & Business Solutions",
    initials: "S",
    accentColor: "#3B6EF5",
    shortBio:
      "Leads technology strategy and business solution design. Bridges the gap between what businesses need and what technology can deliver.",
    fullBio:
      "Sarvesh drives the technical and strategic core of Somethingg. With a deep understanding of how modern technology intersects with business outcomes, he ensures every solution is purposeful, scalable, and aligned with client goals. He takes a pragmatic approach — cutting through the noise to identify what actually moves the needle for a business. Whether it is architecting a new digital system or helping a team rethink their tech stack, Sarvesh brings clarity, capability, and follow-through.",
  },
  {
    id: "chanchal",
    name: "Chanchal",
    role: "Brand, Content & Communication",
    initials: "C",
    accentColor: "#7C5CFC",
    shortBio:
      "Shapes how Somethingg and its clients communicate. Turns complex ideas into clear, compelling narratives that connect with the right audiences.",
    fullBio:
      "Chanchal leads all things brand, content, and communication at Somethingg. She believes that how a business communicates is just as important as what it does — and that the best strategies fail without the right words behind them. From brand voice and digital content to client communication frameworks, Chanchal ensures every message is intentional, clear, and resonant. She works closely with clients to help them articulate their value in ways that genuinely connect.",
  },
  {
    id: "sugandh",
    name: "Sugandh",
    role: "Operations, Strategy & Client Coordination",
    initials: "Su",
    accentColor: "#00B4A6",
    shortBio:
      "Keeps everything moving. Manages client relationships, coordinates delivery, and makes sure strategy translates into real, timely outcomes.",
    fullBio:
      "Sugandh is the operational backbone of Somethingg. She ensures that every engagement runs smoothly — from onboarding to delivery — and that clients always feel informed, heard, and supported. With a strong grasp of strategy and a detail-oriented mindset, Sugandh bridges the gap between planning and execution. She coordinates across the team, manages timelines, and keeps client goals front and center throughout every project. Her approach is calm, structured, and deeply client-first.",
  },
];

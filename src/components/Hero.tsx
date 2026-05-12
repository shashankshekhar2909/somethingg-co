"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import HeroScene from "./HeroScene";
import Button from "./Button";


const HEADLINE = "Building Modern Digital Solutions for Growing Businesses";
const HEADLINE_WORDS = HEADLINE.split(" ");

export default function Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  // Collect word span refs
  const setWordRef = (el: HTMLSpanElement | null, index: number) => {
    if (el) wordsRef.current[index] = el;
  };

  useEffect(() => {
    // Eyebrow — fade in + slide up
    if (eyebrowRef.current) {
      animate(eyebrowRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
        delay: 200,
        easing: "easeOutExpo",
      });
    }

    // Headline words — staggered slide up
    const wordEls = wordsRef.current.filter(Boolean);
    if (wordEls.length > 0) {
      animate(wordEls, {
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 700,
        delay: stagger(60, { start: 400 }),
        easing: "easeOutExpo",
      });
    }

    // Subheadline — fade in + slide up
    if (sublineRef.current) {
      animate(sublineRef.current, {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 700,
        delay: 800,
        easing: "easeOutExpo",
      });
    }

    // CTA buttons — scale + fade, staggered
    if (ctasRef.current) {
      const buttons = Array.from(
        ctasRef.current.querySelectorAll<HTMLElement>("a, button")
      );
      if (buttons.length > 0) {
        animate(buttons, {
          opacity: [0, 1],
          scale: [0.85, 1],
          duration: 600,
          delay: stagger(120, { start: 1000 }),
          easing: "easeOutBack",
        });
      }
    }

  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0A0A12" }}
    >
      {/* Three.js background canvas */}
      <HeroScene />

      {/* Subtle radial gradient to pull focus to center */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,110,245,0.06) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* Gradient fade at bottom so next section blends in */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0A0A12)",
          zIndex: 1,
        }}
      />

      {/* Foreground content */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40"
        style={{ zIndex: 10 }}
      >
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
          style={{
            opacity: 0,
            background: "rgba(59,110,245,0.10)",
            border: "1px solid rgba(59,110,245,0.22)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"
            aria-hidden="true"
          />
          <span className="text-xs font-medium text-blue-400 tracking-wide">
            IT Consulting & Digital Services
          </span>
        </div>

        {/* Headline — each word is its own span for staggered animation */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto">
          {HEADLINE_WORDS.map((word, i) => (
            <span
              key={i}
              ref={(el) => setWordRef(el, i)}
              className="inline-block mr-[0.28em] last:mr-0"
              style={{ opacity: 0, willChange: "transform, opacity" }}
            >
              {/* Give the last 3 words the gradient treatment */}
              {i >= HEADLINE_WORDS.length - 3 ? (
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #60a5fa 0%, #3b6ef5 100%)",
                  }}
                >
                  {word}
                </span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          ref={sublineRef}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ opacity: 0 }}
        >
          Somethingg combines technical capability, clear communication, and
          practical execution — so your business moves faster, smarter, and with
          less friction.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctasRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href="/contact"
            size="lg"
            variant="primary"
            className="opacity-0 will-change-transform"
          >
            Book a Consultation
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
          <Button
            href="/services"
            size="lg"
            variant="outline"
            className="opacity-0 will-change-transform"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}

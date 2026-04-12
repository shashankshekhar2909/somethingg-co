"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  errorMessage?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting" });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setFormState({ status: "success" });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setFormState({
        status: "error",
        errorMessage: "Something went wrong. Please try again or email us directly.",
      });
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-[#111118] border text-white text-sm placeholder-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-transparent";
  const inputDefault = `${inputBase} border-white/10 hover:border-white/15`;

  if (formState.status === "success") {
    return (
      <div className="p-8 rounded-xl bg-[#1A1A24] border border-green-500/20 text-center">
        <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center mx-auto mb-4">
          <svg
            className="h-6 w-6 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Message sent!</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Thanks for reaching out. We&apos;ll review your message and get back to
          you within 1–2 business days.
        </p>
        <button
          onClick={() => setFormState({ status: "idle" })}
          className="mt-5 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-400 mb-1.5"
          >
            Full Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputDefault}
            disabled={formState.status === "submitting"}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-400 mb-1.5"
          >
            Email Address <span className="text-blue-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputDefault}
            disabled={formState.status === "submitting"}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-xs font-medium text-gray-400 mb-1.5"
        >
          Company{" "}
          <span className="text-gray-600 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company or project name"
          className={inputDefault}
          disabled={formState.status === "submitting"}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium text-gray-400 mb-1.5"
        >
          Message <span className="text-blue-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, requirement, or question..."
          className={`${inputDefault} resize-none`}
          disabled={formState.status === "submitting"}
        />
      </div>

      {formState.status === "error" && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          {formState.errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={formState.status === "submitting"}
        className="w-full sm:w-auto"
      >
        {formState.status === "submitting" ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg
              className="ml-2 h-4 w-4"
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
          </>
        )}
      </Button>
    </form>
  );
}

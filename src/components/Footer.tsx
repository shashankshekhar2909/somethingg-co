import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-200">
                Somethingg
              </span>
              <span className="block text-xs font-medium text-gray-600 tracking-widest uppercase mt-0.5">
                Technology
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Practical, modern, human-centered IT consulting and digital services for growing businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@somethingg.co"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  hello@somethingg.co
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm text-blue-500 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  Book a Consultation
                  <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} RGCD Somethingg Technology Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-gray-700 italic">
            Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

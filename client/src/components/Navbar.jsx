import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/certifications", label: "Certs" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-xl tracking-tight text-gradient"
        >
          CB<span className="text-white/20">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-body text-sm tracking-wide transition-colors duration-200 ${
                  pathname === to
                    ? "text-teal-400"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/1N9ZFVEtn2PmOn53t40HSUJmQpigtrTPS/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-xs font-mono border border-teal-400/40 text-teal-400 px-4 py-2 rounded hover:bg-teal-400/10 transition-all duration-200"
        >
          Resume ↓
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`text-sm ${pathname === to ? "text-teal-400" : "text-white/60"}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1N9ZFVEtn2PmOn53t40HSUJmQpigtrTPS/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-teal-400"
              >
                Resume ↓
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

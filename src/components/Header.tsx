import { useState, useEffect } from "react";
import pentazeinLogo from "@/assets/pentazein_logo-2.svg";

const navLinks = [
  { label: "Home", href: "#home", mobileOnly: false },
  { label: "Products", href: "#products", mobileOnly: false },
  { label: "About Us", href: "#about", mobileOnly: false },
  { label: "Testimonials", href: "#testimonials", mobileOnly: true },
  { label: "Contact Us", href: "#contact", mobileOnly: false },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Mobile Menu — Full-screen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[hsl(var(--nav-bg))] flex flex-col items-center justify-center transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[hsl(var(--nav-foreground)/0.8)] hover:text-[hsl(var(--nav-foreground))] text-lg font-heading font-medium tracking-widest uppercase transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 75}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[hsl(var(--nav-bg)/0.95)] backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-max flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img src={pentazeinLogo} alt="Pentazein" className="h-[100px] md:h-[150px] w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.filter((link) => !link.mobileOnly).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[hsl(var(--nav-foreground)/0.8)] hover:text-[hsl(var(--nav-foreground))] text-sm font-heading font-medium tracking-widest uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[hsl(var(--nav-foreground))]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

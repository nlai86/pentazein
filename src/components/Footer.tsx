import pentazeinLogo from "@/assets/pentazein_logo-2.svg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--nav-bg))] py-12">
      <div className="container-max">
        <div className="brand-line-long mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home">
            <img src={pentazeinLogo} alt="Pentazein" className="h-24 w-auto opacity-80" />
          </a>
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[hsl(var(--nav-foreground)/0.5)] hover:text-[hsl(var(--nav-foreground))] text-xs tracking-widest uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 text-center">
          <p className="text-[hsl(var(--nav-foreground)/0.3)] text-xs tracking-wider">
            © 2025 Pentazein. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import pentazeinLogo from "@/assets/pentazein_logo-2.svg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--nav-bg))] py-12">
      <div className="container-max">
        <div className="brand-line-long mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Logo & tagline */}
          <div className="-mt-8">
            <a href="#home">
              <img
                src={pentazeinLogo}
                alt="Pentazein"
                className="h-[150px] w-auto opacity-80 mb-4"
              />
            </a>
          </div>

          {/* Canada office */}
          <div>
            <h4 className="font-heading text-[hsl(var(--nav-foreground)/0.8)] text-xs tracking-widest uppercase font-semibold mb-4">
              Management Office — Canada
            </h4>
            <p className="text-[hsl(var(--nav-foreground)/0.5)] text-xs leading-relaxed">
              273, Checkerberry Cres,
              <br />
              Brampton, L6R3P6, Canada
            </p>
          </div>

          {/* Pakistan office */}
          <div>
            <h4 className="font-heading text-[hsl(var(--nav-foreground)/0.8)] text-xs tracking-widest uppercase font-semibold mb-4">
              Management Office — Pakistan
            </h4>
            <p className="text-[hsl(var(--nav-foreground)/0.5)] text-xs leading-relaxed">
              211, 3-KM, Main Defense Road,
              <br />
              Lahore, Pakistan
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-[hsl(var(--nav-foreground)/0.8)] text-xs tracking-widest uppercase font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[hsl(var(--nav-foreground)/0.5)] hover:text-[hsl(var(--nav-foreground))] text-xs tracking-wider transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-[hsl(var(--nav-foreground)/0.1)] text-center">
          <p className="text-[hsl(var(--nav-foreground)/0.3)] text-xs tracking-wider">
            © 2025 Pentazein. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

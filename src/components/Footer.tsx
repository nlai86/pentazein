import pentazeinLogo from "@/assets/pentazein_logo-2.svg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--nav-bg))] py-12">
      <div className="container-max">
        <div className="brand-line-long mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
          {/* Logo & tagline */}
          <div className="hidden sm:block -mt-8">
            <a href="#home">
              <img
                src={pentazeinLogo}
                alt="Pentazein"
                className="h-[100px] md:h-[150px] w-auto opacity-80 mb-4"
              />
            </a>
          </div>

          {/* Canada office */}
          <div>
            <h4 className="font-heading text-[hsl(var(--nav-foreground)/0.8)] text-xs tracking-widest uppercase font-semibold mb-4">
              Management Office — Canada
            </h4>
            <div className="flex items-start gap-2 text-[hsl(var(--nav-foreground)/0.7)] text-xs leading-relaxed">
              <svg className="w-3.5 h-3.5 text-[hsl(var(--brand))] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>
                273, Checkerberry Cres,
                <br />
                Brampton, L6R3P6, Canada
              </span>
            </div>
          </div>

          {/* Pakistan office */}
          <div>
            <h4 className="font-heading text-[hsl(var(--nav-foreground)/0.8)] text-xs tracking-widest uppercase font-semibold mb-4">
              Management Office — Pakistan
            </h4>
            <div className="flex items-start gap-2 text-[hsl(var(--nav-foreground)/0.7)] text-xs leading-relaxed">
              <svg className="w-3.5 h-3.5 text-[hsl(var(--brand))] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>
                211, 3-KM, Main Defense Road,
                <br />
                Lahore, Pakistan
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="hidden sm:block">
            <h4 className="font-heading text-[hsl(var(--nav-foreground)/0.8)] text-xs tracking-widest uppercase font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[hsl(var(--nav-foreground)/0.5)] hover:text-[hsl(var(--nav-foreground))] text-xs font-heading tracking-widest uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Key contacts */}
          <div className="lg:-ml-8">
            <h4 className="font-heading text-[hsl(var(--nav-foreground)/0.8)] text-xs tracking-widest uppercase font-semibold mb-4">
              Key Contacts
            </h4>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[hsl(var(--nav-foreground)/0.8)] text-xs font-medium">
                  Yahya Sohail
                </p>
                <p className="text-[hsl(var(--nav-foreground)/0.6)] text-xs mt-0.5">
                  Business Partner
                </p>
                <div className="flex flex-col gap-1.5 mt-2">
                  <span className="flex items-center gap-2 text-[hsl(var(--nav-foreground)/0.7)] text-xs">
                    <svg className="w-3.5 h-3.5 text-[hsl(var(--brand))] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Toronto, Canada
                  </span>
                  <a
                    href="mailto:yahyasohail@yahoo.com"
                    className="flex items-center gap-2 text-[hsl(var(--nav-foreground)/0.7)] hover:text-[hsl(var(--nav-foreground))] text-xs transition-colors duration-300"
                  >
                    <svg className="w-3.5 h-3.5 text-[hsl(var(--brand))] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    yahyasohail@yahoo.com
                  </a>
                  <a
                    href="tel:+14167049259"
                    className="flex items-center gap-2 text-[hsl(var(--nav-foreground)/0.7)] hover:text-[hsl(var(--nav-foreground))] text-xs transition-colors duration-300"
                  >
                    <svg className="w-3.5 h-3.5 text-[hsl(var(--brand))] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +1 416-704-9259
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[hsl(var(--nav-foreground)/0.8)] text-xs font-medium">
                  Muhammad Ahmad
                </p>
                <p className="text-[hsl(var(--nav-foreground)/0.6)] text-xs mt-0.5">
                  Customer Development Manager
                </p>
                <div className="flex flex-col gap-1.5 mt-2">
                  <span className="flex items-center gap-2 text-[hsl(var(--nav-foreground)/0.7)] text-xs">
                    <svg className="w-3.5 h-3.5 text-[hsl(var(--brand))] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Toronto, Canada
                  </span>
                  <a
                    href="mailto:muhammadahmad918@gmail.com"
                    className="flex items-center gap-2 text-[hsl(var(--nav-foreground)/0.7)] hover:text-[hsl(var(--nav-foreground))] text-xs transition-colors duration-300"
                  >
                    <svg className="w-3.5 h-3.5 text-[hsl(var(--brand))] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    muhammadahmad918@gmail.com
                  </a>
                  <a
                    href="tel:+16478579259"
                    className="flex items-center gap-2 text-[hsl(var(--nav-foreground)/0.7)] hover:text-[hsl(var(--nav-foreground))] text-xs transition-colors duration-300"
                  >
                    <svg className="w-3.5 h-3.5 text-[hsl(var(--brand))] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +1 647-857-9259
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-[hsl(var(--nav-foreground)/0.1)] text-center">
          <p className="text-[hsl(var(--nav-foreground)/0.3)] text-xs tracking-wider">
            © {new Date().getFullYear()} Pentazein. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import heroFabric from "@/assets/hero-fabric.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroFabric}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero opacity-80" />
      </div>

      <div className="container-max relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="brand-line mb-8 animate-fade-in" />
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 animate-fade-in-up">
            Precision Garment{" "}
            <span className="text-gradient-brand">Manufacturing</span>{" "}
            for Global Brands
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            End-to-end apparel production with uncompromising quality standards,
            scalable capacity, and international compliance.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-secondary/20"
            >
              Request Manufacturing Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-primary-foreground/10">
        <div className="container-max py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "50M+", label: "Units Annually" },
            { value: "30+", label: "Countries Served" },
            { value: "ISO", label: "9001 Certified" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-heading text-2xl md:text-3xl font-bold text-gradient-brand">
                {stat.value}
              </div>
              <div className="text-primary-foreground/50 text-xs tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

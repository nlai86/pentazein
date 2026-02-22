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

    </section>
  );
};

export default HeroSection;

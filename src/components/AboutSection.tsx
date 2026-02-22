import factoryFloor from "@/assets/factory-floor.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="brand-line mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Built on Decades of{" "}
              <span className="text-secondary">Manufacturing Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Pentazein operates state-of-the-art production facilities equipped
              with advanced machinery and staffed by skilled artisans. Our
              vertically integrated supply chain ensures quality control at every
              stage — from raw material sourcing to finished garment delivery.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Vertical Integration", desc: "Full control from fabric to finish" },
                { title: "Sustainable Practices", desc: "GOTS & OEKO-TEX certified" },
                { title: "Rapid Prototyping", desc: "Sample turnaround in 5-7 days" },
                { title: "Global Logistics", desc: "FOB, CIF, and DDP shipping" },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-brand pl-4">
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={factoryFloor}
              alt="Pentazein manufacturing facility"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

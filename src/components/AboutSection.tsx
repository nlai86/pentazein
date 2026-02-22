import factoryFloor from "@/assets/factory-floor.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="brand-line mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              About <span className="text-secondary">Us</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At Pentazein, we don't just make garments – we create clothing
              solutions that combine comfort, durability, and style. With our own
              manufacturing facility in Pakistan, we bring ideas to life through
              fabrics and designs that meet the diverse needs of our customers.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              From sporty activewear to stylish knitwear and fashion, from
              professional workwear to smart school uniforms, our product range
              reflects versatility and innovation. Every piece we produce is
              crafted with care, backed by advanced technology and the expertise
              of our skilled team.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Driven by quality and inspired by our clients' trust, we continue
              to deliver garments that people love to wear every day, everywhere.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Customization Tailored To Your Needs",
                  desc: "From choice of fabrics, colours, sizes to specific features you like to include, we do it all to perfectly match your needs.",
                },
                {
                  title: "Uniforms & Workwear",
                  desc: "We specialize in providing uniforms and workwear that deliver performance, durability and comfort, reflecting your professional outlook.",
                },
                {
                  title: "Sports and Activewear",
                  desc: "From playing fields to podiums, we outfit teams, clubs, institutes and individuals with performance sports and activewear.",
                },
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

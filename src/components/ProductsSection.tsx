const products = [
  {
    title: "Customization",
    description:
      "From choice of fabrics, colours, sizes to specific features you like to include, we do it all to perfectly match your needs.",
    examples: [
      "Custom fabric selection",
      "Bespoke colour matching",
      "Size grading & fit adjustments",
      "Private label & branding",
      "Custom trims & accessories",
    ],
  },
  {
    title: "Uniforms & Workwear",
    description:
      "We specialize in providing uniforms and workwear that deliver performance, durability and comfort, reflecting your professional outlook.",
    examples: [
      "School uniforms",
      "Corporate uniforms",
      "Industrial workwear",
      "Hospitality attire",
      "Healthcare scrubs",
    ],
  },
  {
    title: "Sports & Activewear",
    description:
      "From playing fields to podiums, we outfit teams, clubs, institutes and individuals with performance sports and activewear designed around your specific needs.",
    examples: [
      "Team jerseys & kits",
      "Training wear",
      "Athletic shorts & joggers",
      "Compression wear",
      "Custom club merchandise",
    ],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-section-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-section-dark-foreground leading-tight mb-6">
            What We Manufacture
          </h2>
          <p className="text-section-dark-foreground/60 text-lg max-w-2xl mx-auto">
            Quality garment production across every category — tailored to your
            exact specifications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-section-dark-foreground/10">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-section-dark p-10 md:p-12 group hover:bg-dark-light transition-colors duration-500"
            >
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-section-dark-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-section-dark-foreground/60 leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.examples.map((example) => (
                  <li
                    key={example}
                    className="text-sm text-section-dark-foreground/50 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

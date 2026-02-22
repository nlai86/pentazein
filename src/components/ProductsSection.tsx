const products = [
  {
    title: "Casual & Streetwear",
    description: "T-shirts, hoodies, joggers, and contemporary casual wear manufactured with premium cotton blends.",
    features: ["Cut & sew", "Screen print & embroidery", "Private label"],
  },
  {
    title: "Formal & Corporate",
    description: "Dress shirts, trousers, blazers, and corporate uniforms crafted with precision tailoring.",
    features: ["Bespoke patterns", "Bulk production", "Custom fabrics"],
  },
  {
    title: "Sportswear & Activewear",
    description: "Performance apparel with moisture-wicking, anti-microbial, and stretch technologies.",
    features: ["Technical fabrics", "Sublimation printing", "Athletic fits"],
  },
  {
    title: "Denim & Workwear",
    description: "Durable denim garments and industrial workwear built for longevity and compliance.",
    features: ["Washing treatments", "Reinforced stitching", "Safety standards"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-section-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="brand-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-section-dark-foreground leading-tight mb-4">
            Manufacturing Capabilities
          </h2>
          <p className="text-section-dark-foreground/60 text-lg max-w-2xl mx-auto">
            Full-spectrum garment production for every category — from development to delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-section-dark-foreground/10">
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
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs tracking-wider uppercase px-3 py-1.5 border border-brand/30 text-brand-light"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left copy */}
          <div className="flex flex-col">
            <div className="brand-line mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Let's Manufacture{" "}
              <span className="text-secondary">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Whether you're launching a new brand or scaling existing
              production, our team is ready to deliver. Share your requirements
              and we'll get back to you with a detailed proposal.
            </p>
            <div className="space-y-6 text-sm text-muted-foreground">
              <div>
                <h3 className="font-heading font-semibold text-foreground text-xs tracking-widest uppercase mb-2">
                  Manufacturing Site
                </h3>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>
                    212, 3-KM, Main Defense Road,
                    <br />
                    Opposite US Apparel, Lahore, Pakistan
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@pentazein.com
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +92-340-0055555
              </div>
              <div className="pt-4 border-t border-border">
                <h3 className="font-heading font-semibold text-foreground text-xs tracking-widest uppercase mb-3">
                  Key Contacts
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-foreground font-medium">Yahya Sohail</p>
                    <p className="text-xs text-muted-foreground">
                      Business Partner – Canada · +1 416-704-9259
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Muhammad Ahmad</p>
                    <p className="text-xs text-muted-foreground">
                      Customer Development Manager · +1 647-857-9259
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center border border-border p-12 text-center">
                <div>
                  <div className="text-secondary text-4xl mb-4">✓</div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Request Received
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Our team will respond with a detailed proposal shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "company", label: "Company", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-secondary focus:outline-none transition-colors text-sm"
                      placeholder={`Your ${field.label.toLowerCase()}`}
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-dark-light hover:shadow-lg"
                >
                  Request Manufacturing Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

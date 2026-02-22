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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left copy */}
          <div className="flex flex-col justify-center">
            <div className="brand-line mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Let's Manufacture{" "}
              <span className="text-secondary">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Whether you're launching a new brand or scaling existing production,
              our team is ready to deliver. Share your requirements and receive a
              detailed manufacturing proposal within 48 hours.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@pentazein.com
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Global Operations — Asia, Europe, Americas
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
                    Our team will respond within 48 hours with a detailed proposal.
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
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/40 focus:border-secondary focus:outline-none transition-colors text-sm resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
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

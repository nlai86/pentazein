const ContactSection = () => {
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
                <h3 className="font-heading font-semibold text-foreground text-xs tracking-widest uppercase mb-3">
                  Manufacturing Site
                </h3>
                <a href="https://maps.google.com/?q=212,+3-KM,+Main+Defense+Road,+Lahore,+Pakistan" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-foreground transition-colors">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>
                    212, 3-KM, Main Defense Road,
                    <br />
                    Opposite US Apparel, Lahore, Pakistan
                  </span>
                </a>
              </div>
              <a href="mailto:info@pentazein.com" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@pentazein.com
              </a>
              <a href="tel:+923400055555" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +92-340-0055555
              </a>
              <div className="pt-4 border-t border-border">
                <h3 className="font-heading font-semibold text-foreground text-xs tracking-widest uppercase mb-3">
                  Key Contacts
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground font-medium">Yahya Sohail</p>
                    <p className="text-xs text-muted-foreground">Business Partner</p>
                    <div className="flex flex-col gap-1.5 mt-2">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <svg className="w-3.5 h-3.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        Toronto, Canada
                      </span>
                      <a href="mailto:yahyasohail@yahoo.com" className="flex items-center gap-2 text-xs text-secondary hover:text-secondary/80 transition-colors">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        yahyasohail@yahoo.com
                      </a>
                      <a href="tel:+14167049259" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <svg className="w-3.5 h-3.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        +1 416-704-9259
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Muhammad Ahmad</p>
                    <p className="text-xs text-muted-foreground">Customer Development Manager</p>
                    <div className="flex flex-col gap-1.5 mt-2">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <svg className="w-3.5 h-3.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        Toronto, Canada
                      </span>
                      <a href="mailto:muhammadahmad918@gmail.com" className="flex items-center gap-2 text-xs text-secondary hover:text-secondary/80 transition-colors">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        muhammadahmad918@gmail.com
                      </a>
                      <a href="tel:+16478579259" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <svg className="w-3.5 h-3.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        +1 647-857-9259
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client testimonials */}
          <div id="testimonials" className="flex flex-col gap-6">
            <h3 className="font-heading text-xs tracking-widest uppercase font-semibold text-muted-foreground">
              What Our Clients Say
            </h3>
            {[
              {
                quote: "Pentazein delivered exceptional quality on our first order and has been our go-to manufacturing partner ever since. Their attention to detail on stitching and fabric is unmatched.",
                name: "Sarah Mitchell",
                role: "Founder",
                company: "Elevate Apparel Co.",
              },
              {
                quote: "Working with the Pentazein team made scaling our production seamless. They understood our brand standards from day one and consistently met tight deadlines.",
                name: "James Carter",
                role: "Head of Operations",
                company: "Northline Clothing",
              },
              {
                quote: "The communication and transparency throughout the entire process gave us confidence to place larger orders. Truly a reliable partner for growing brands.",
                name: "Amira Khan",
                role: "Creative Director",
                company: "Mosaic Streetwear",
              },
            ].map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="border-l-2 border-secondary/30 pl-6 py-2"
              >
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-3">
                  "{testimonial.quote}"
                </p>
                <footer className="text-xs">
                  <span className="text-foreground font-medium">
                    {testimonial.name}
                  </span>
                  <span className="text-muted-foreground">
                    {" "}&mdash; {testimonial.role}, {testimonial.company}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

function Contact() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="contact-hero text-white text-center">
        <div className="container">
          <h1 className="fw-bold animate-fade">Contact Us</h1>
          <p className="mt-3 animate-fade delay-1">
            Get in touch with SHADOWGURD SECURITY — We’re available 24/7
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO + FORM ===== */}
      <section className="container py-5">
        <div className="row g-4">
          {/* CONTACT INFO */}
          <div className="col-md-5 animate-up">
            <div className="contact-card">
              <h4 className="fw-bold mb-4">Contact Information</h4>

              <p className="contact-item">
                📞 <strong>Phone:</strong> +17788636047
              </p>

              <p className="contact-item">
                ✉️ <strong>Email:</strong> shadowguardinc@outlook.com
              </p>

              <p className="contact-item">
                📍 <strong>Address:</strong> 45351 creekside drive Chilliwack,
                BC Canada, V2P 7S4
              </p>

              <p className="text-muted mt-3">
                Our team is always ready to assist you with professional
                security solutions tailored to your needs.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-md-7 animate-up delay-1">
            <div className="contact-card">
              <h4 className="fw-bold mb-4">Send Us a Message</h4>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-danger px-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-5 bg-dark text-white text-center">
        <h2 className="fw-bold animate-fade">Your Safety Is Our Priority</h2>
        <p className="mt-2 animate-fade delay-1">
          Contact us today to discuss your security requirements.
        </p>
        <a href="https://wa.me/+17788636047" className="btn btn-danger mt-3">
          Chat on WhatsApp
        </a>
      </section>
    </>
  );
}

export default Contact;

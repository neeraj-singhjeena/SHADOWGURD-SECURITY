function Contact() {
  const accent = "#ff4d1c";
  const darkBg = "#0b0f14";
  const darkCard = "#111827";

  return (
    <>
      {/* ===== HEADER ===== */}
      <section
        className="text-white text-center"
        style={{
          background: `linear-gradient(180deg, ${darkBg}, ${darkCard})`,
          padding: "100px 15px",
        }}
      >
        <div className="container">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="mt-3" style={{ color: accent, fontWeight: 500 }}>
            Get in touch with SHADOWGURD SECURITY — We’re available 24/7
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO + FORM ===== */}
      <section className="container py-5">
        <div className="row g-4">
          {/* CONTACT INFO */}
          <div className="col-md-5">
            <div
              style={{
                background: darkCard,
                color: "#e5e7eb",
                padding: "30px",
                borderRadius: "8px",
                borderLeft: `4px solid ${accent}`,
              }}
            >
              <h4 className="fw-bold mb-4" style={{ color: accent }}>
                Contact Information
              </h4>

              <p>
                📞 <strong>Phone:</strong> +17788636047
              </p>

              <p>
                ✉️ <strong>Email:</strong> shadowguardinc@outlook.com
              </p>

              <p>
                📍 <strong>Address:</strong> 45351 Creekside Drive, Chilliwack,
                BC Canada, V2P 7S4
              </p>

              <p className="mt-3" style={{ color: "#9ca3af" }}>
                Our team is always ready to assist you with professional
                security solutions tailored to your needs.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-md-7">
            <div
              style={{
                background: darkCard,
                padding: "30px",
                borderRadius: "8px",
              }}
            >
              <h4 className="fw-bold mb-4" style={{ color: accent }}>
                Send Us a Message
              </h4>

              <form>
                {[
                  { type: "text", placeholder: "Your Name" },
                  { type: "email", placeholder: "Your Email" },
                  { type: "tel", placeholder: "Phone Number" },
                ].map((field, i) => (
                  <div className="mb-3" key={i}>
                    <input
                      type={field.type}
                      className="form-control"
                      placeholder={field.placeholder}
                      style={{
                        background: "#0b0f14",
                        border: "1px solid #374151",
                        color: "#e5e7eb",
                      }}
                      required
                    />
                  </div>
                ))}

                <div className="mb-3">
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Your Message"
                    style={{
                      background: "#0b0f14",
                      border: "1px solid #374151",
                      color: "#e5e7eb",
                    }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn px-4"
                  style={{
                    backgroundColor: accent,
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="text-white text-center"
        style={{
          background: darkBg,
          padding: "60px 15px",
        }}
      >
        <h2 className="fw-bold">Your Safety Is Our Priority</h2>
        <p className="mt-2" style={{ color: "#9ca3af" }}>
          Contact us today to discuss your security requirements.
        </p>
        <a
          href="https://wa.me/+17788636047"
          className="btn mt-3"
          style={{
            backgroundColor: accent,
            color: "#fff",
          }}
        >
          Chat on WhatsApp
        </a>
      </section>
    </>
  );
}

export default Contact;

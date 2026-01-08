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
          padding: "50px 15px",
        }}
      >
        <div className="container">
          <h1 className="fw-bold">Contact Us</h1>
        </div>
      </section>

      {/* ===== CONTACT INFO + FORM ===== */}
      <section className="container py-5">
        <div className="row g-4">
          {/* CONTACT INFO (DARK – SAME) */}
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

          {/* CONTACT FORM (WHITE CARD) */}
          <div className="col-md-7">
            <div
              style={{
                background: "#ffffff",
                padding: "35px",
                borderRadius: "10px",
                boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
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
                        background: "#ffffff",
                        border: "1px solid #d1d5db",
                        padding: "12px",
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
                      background: "#ffffff",
                      border: "1px solid #d1d5db",
                      padding: "12px",
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

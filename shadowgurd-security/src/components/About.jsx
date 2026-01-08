function About() {
  const accent = "#ff4d1c";
  const dark = "#111827";

  return (
    <>
      {/* ===== HERO HEADER ===== */}
      <section
        className="text-white text-center"
        style={{
          background: dark,
          padding: "50px 15px",
        }}
      >
        <div className="container">
          <h1 className="fw-bold" style={{ letterSpacing: "1px" }}>
            Who We Are
          </h1>
          <p className="mt-3" style={{ color: accent, fontWeight: 500 }}>
            Dedicated to Your Safety. Trusted for professional Protection.
          </p>
        </div>
      </section>

      {/* ===== WHY WE EXIST ===== */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              style={{
                background: dark,
                padding: "45px",
                borderRadius: "12px",
                borderLeft: `5px solid ${accent}`,
                boxShadow: "0 25px 45px rgba(0,0,0,0.35)",
                animation: "fadeUp 0.8s ease",
              }}
            >
              <h3 className="fw-bold mb-3" style={{ color: accent }}>
                Why We Exist
              </h3>

              {/* ONE LINE */}
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "14px",
                }}
              >
                To provide dependable, responsive, and professional security
                services that protect what matters most 24/7.
              </p>

              {/* PARAGRAPH */}
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.9",
                  color: "#d1d5db",
                  textAlign: "justify",
                  marginBottom: 0,
                }}
              >
                <strong style={{ color: "#ffffff" }}>
                  SHADOWGURD SECURITY
                </strong>{" "}
                is a trusted provider of professional security services with
                years of experience protecting people, property, and assets. We
                are driven by integrity, discipline, and a strong commitment to
                client safety—delivering peace of mind through reliable security
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION / VALUES ===== */}
      <section className="py-5" style={{ background: dark }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              {
                title: "Our Mission",
                text: "Deliver reliable, professional, and responsive security services tailored to every client’s needs.",
              },
              {
                title: "Our Vision",
                text: "To become a trusted leader in modern security solutions through excellence and innovation.",
              },
              {
                title: "Our Values",
                text: "Integrity, discipline, professionalism, and client-first commitment.",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div
                  style={{
                    background: "#ffffff",
                    padding: "32px",
                    borderRadius: "12px",
                    height: "100%",
                    transition: "all 0.35s ease",
                    boxShadow: "0 18px 35px rgba(0,0,0,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h5 className="fw-bold" style={{ color: accent }}>
                    {item.title}
                  </h5>
                  <p className="mt-3 text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM (UNCHANGED) ===== */}
      {/* ===== OUR TEAM (ANIMATED BOXES) ===== */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-3">Our Professional Team</h2>
        <p className="text-center text-muted mb-5">
          Trained, verified, disciplined professionals you can trust.
        </p>

        <div className="row g-4 text-center">
          {[
            "Background Verified",
            "Professionally Trained",
            "Reliable & Responsible",
          ].map((text, i) => (
            <div className="col-md-4" key={i}>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  padding: "30px",
                  border: "1px solid #e5e7eb",
                  borderTop: "4px solid transparent",
                  transition: "all 0.35s ease",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderTop = "4px solid #ff4d1c";
                  e.currentTarget.style.boxShadow =
                    "0 25px 45px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderTop = "4px solid transparent";
                  e.currentTarget.style.boxShadow =
                    "0 12px 25px rgba(0,0,0,0.12)";
                }}
              >
                <h5 className="fw-semibold" style={{ color: "#111827" }}>
                  ✔ {text}
                </h5>
                <p className="text-muted mt-2">
                  High standards maintained across all operations.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EXPERIENCE / STATS ===== */}
      <section className="text-white py-5" style={{ background: dark }}>
        <div className="container">
          <div className="row text-center g-4">
            {[
              ["2+", "Years Experience"],
              ["50+", "Clients Protected"],
              ["24/7", "Availability"],
              ["100%", "Client Satisfaction"],
            ].map((item, i) => (
              <div className="col-md-3" key={i}>
                <h3 className="fw-bold" style={{ color: accent }}>
                  {item[0]}
                </h3>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="py-5 text-center text-white"
        style={{ background: dark }}
      >
        <h2 className="fw-bold">Let Us Protect What Matters Most to You</h2>
        <a
          href="#contact"
          className="btn mt-3 px-4"
          style={{ backgroundColor: accent, color: "#fff" }}
        >
          Contact Us Today
        </a>
      </section>
    </>
  );
}

export default About;

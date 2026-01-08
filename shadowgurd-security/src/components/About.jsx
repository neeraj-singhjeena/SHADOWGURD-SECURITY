function About() {
  return (
    <>
      {/* ===== HERO HEADER ===== */}
      <section
        className="text-white text-center"
        style={{
          background: "linear-gradient(180deg, #0b0f14, #111827)",
          padding: "100px 15px",
        }}
      >
        <div className="container">
          <h1 className="fw-bold" style={{ letterSpacing: "1px" }}>
            Who We Are
          </h1>
          <p className="mt-3" style={{ color: "#ff4d1c", fontWeight: 500 }}>
            Dedicated to Your Safety. Trusted for Professional Protection.
          </p>
        </div>
      </section>

      {/* ===== WHY WE EXIST (ONLY SECTION, OUR STORY REMOVED) ===== */}
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              style={{
                background: "#111827",
                color: "#e5e7eb",
                padding: "40px",
                borderLeft: "5px solid #ff4d1c",
                borderRadius: "10px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              }}
            >
              <h3 className="fw-bold mb-3" style={{ color: "#ff4d1c" }}>
                Why We Exist
              </h3>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.8",
                  color: "#d1d5db",
                }}
              >
                To provide dependable, responsive, and professional security
                services that protect what matters most 24/7.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#9ca3af",
                }}
              >
                <strong style={{ color: "#ffffff" }}>
                  SHADOWGURD SECURITY
                </strong>{" "}
                is a trusted provider of professional security services with
                years of experience protecting people, property, and assets.
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#9ca3af",
                  marginBottom: 0,
                }}
              >
                We are driven by integrity, discipline, and a strong commitment
                to client safety delivering peace of mind through reliable
                security solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION / VALUES ===== */}
      <section className="py-5" style={{ backgroundColor: "#0b0f14" }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              {
                title: " Our Mission",
                text: "Deliver reliable, professional, and responsive security services tailored to every client’s needs.",
              },
              {
                title: " Our Vision",
                text: "To become a trusted leader in modern security solutions through excellence and innovation.",
              },
              {
                title: " Our Values",
                text: "Integrity, discipline, professionalism, and client-first commitment.",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div
                  style={{
                    background: "#111827",
                    padding: "30px",
                    borderRadius: "10px",
                    height: "100%",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.35)",
                  }}
                >
                  <h5 className="fw-bold" style={{ color: "#ff4d1c" }}>
                    {item.title}
                  </h5>
                  <p className="mt-3" style={{ color: "#9ca3af" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
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
                  border: "1px solid #e5e7eb",
                  padding: "25px",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                }}
              >
                <h5 className="fw-semibold">✔ {text}</h5>
                <p className="text-muted mt-2">
                  High standards maintained across all operations.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TRUST STATS ===== */}
      <section
        className="text-white py-5"
        style={{
          background: "linear-gradient(180deg, #111827, #0b0f14)",
        }}
      >
        <div className="container">
          <div className="row text-center g-4">
            {[
              ["2", "Years Experience"],
              ["50", "Clients Protected"],
              ["24/7", "Availability"],
              ["100%", "Client Satisfaction"],
            ].map((item, i) => (
              <div className="col-md-3" key={i}>
                <h3 className="fw-bold" style={{ color: "#ff4d1c" }}>
                  {item[0]}
                </h3>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-5 text-center bg-dark text-white">
        <h2 className="fw-bold">Let Us Protect What Matters Most to You</h2>
        <a
          href="#contact"
          className="btn mt-3 px-4"
          style={{
            backgroundColor: "#ff4d1c",
            color: "#fff",
          }}
        >
          Contact Us Today
        </a>
      </section>
    </>
  );
}

export default About;

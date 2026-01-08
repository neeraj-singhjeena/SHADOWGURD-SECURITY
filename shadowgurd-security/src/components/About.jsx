function About() {
  return (
    <>
      {/* ===== HERO HEADER (NO IMAGE) ===== */}
      <section className="about-hero text-white text-center">
        <div className="container">
          <h1 className="fw-bold animate-fade">Who We Are</h1>
          <p className="mt-3 animate-fade delay-1">
            Dedicated to Your Safety. Trusted for Professional Protection.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 animate-up">
            <h2 className="fw-bold">Our Story</h2>
            <p className="text-muted mt-3">
              <strong>SHADOWGURD SECURITY</strong> is a trusted provider of
              professional security services with years of experience protecting
              people, property, and assets.
            </p>
            <p className="text-muted">
              We are driven by integrity, discipline, and a strong commitment to
              client safety—delivering peace of mind through reliable security
              solutions.
            </p>
          </div>

          <div className="col-md-6 animate-up delay-1">
            <div className="about-card">
              <h5 className="fw-semibold mb-2">Why We Exist</h5>
              <p className="text-muted mb-0">
                To provide dependable, responsive, and professional security
                services that protect what matters most—24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION / VALUES ===== */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4 animate-up">
              <div className="about-box">
                <h5 className="fw-bold">🎯 Our Mission</h5>
                <p className="text-muted">
                  Deliver reliable, professional, and responsive security
                  services tailored to every client’s needs.
                </p>
              </div>
            </div>

            <div className="col-md-4 animate-up delay-1">
              <div className="about-box">
                <h5 className="fw-bold">👁️ Our Vision</h5>
                <p className="text-muted">
                  To become a trusted leader in modern security solutions
                  through excellence and innovation.
                </p>
              </div>
            </div>

            <div className="col-md-4 animate-up delay-2">
              <div className="about-box">
                <h5 className="fw-bold">🤝 Our Values</h5>
                <p className="text-muted">
                  Integrity, discipline, professionalism, and client-first
                  commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-3 animate-fade">
          Our Professional Team
        </h2>
        <p className="text-center text-muted mb-5 animate-fade delay-1">
          Trained, verified, disciplined professionals you can trust.
        </p>

        <div className="row g-4 text-center">
          <div className="col-md-4 animate-up">
            <div className="team-card">
              <h5>✔ Background Verified</h5>
              <p className="text-muted">
                Strict background checks and verification for all personnel.
              </p>
            </div>
          </div>

          <div className="col-md-4 animate-up delay-1">
            <div className="team-card">
              <h5>✔ Professionally Trained</h5>
              <p className="text-muted">
                Continuous training ensures alertness and readiness.
              </p>
            </div>
          </div>

          <div className="col-md-4 animate-up delay-2">
            <div className="team-card">
              <h5>✔ Reliable & Responsible</h5>
              <p className="text-muted">
                We operate with accountability and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST STATS ===== */}
      <section className="trust-section text-white">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3 animate-fade">
              <h3 className="fw-bold">10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="col-md-3 animate-fade delay-1">
              <h3 className="fw-bold">500+</h3>
              <p>Clients Protected</p>
            </div>
            <div className="col-md-3 animate-fade delay-2">
              <h3 className="fw-bold">24/7</h3>
              <p>Availability</p>
            </div>
            <div className="col-md-3 animate-fade delay-3">
              <h3 className="fw-bold">100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-5 text-center bg-dark text-white">
        <h2 className="fw-bold animate-fade">
          Let Us Protect What Matters Most to You
        </h2>
        <a href="#contact" className="btn btn-danger mt-3 px-4">
          Contact Us Today
        </a>
      </section>
    </>
  );
}

export default About;

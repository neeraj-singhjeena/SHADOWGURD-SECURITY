import heroImg from "../assets/lincenceinfo02.webp";

function Home() {
  return (
    <section id="home" className="hero-section">
      {/* BACKGROUND IMAGE */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        <p className="hero-subtitle text-danger fw-semibold">
          We Provide The Best
        </p>

        <h1 className="hero-title">
          Security <span className="text-danger">Service</span>
        </h1>

        <p className="hero-text">
          Professional security solutions for homes, offices, events and
          industries. Your safety is our priority.
        </p>

        <button
          className="btn btn-danger px-4 py-2"
          data-bs-toggle="modal"
          data-bs-target="#appointmentModal"
        >
          Get Appointment
        </button>
      </div>
    </section>
  );
}

export default Home;

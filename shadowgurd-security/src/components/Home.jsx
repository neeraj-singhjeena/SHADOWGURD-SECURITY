import { useEffect, useState } from "react";

// Local images
import img1 from "../assets/Photo1.webp";
import img2 from "../assets/Photo3.webp";

function Home() {
  const images = [
    img1,
    img2,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1800); // ✅ 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="hero-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* BACKGROUND FADE IMAGES */}
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${img})`,
            position: "absolute",
            inset: 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: current === index ? 1 : 0,
            transition: "opacity 1s ease-in-out", // ✅ fade
          }}
        />
      ))}

      {/* OVERLAY (same as before) */}
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* CONTENT (UNTOUCHED) */}
      <div className="hero-content" style={{ position: "relative", zIndex: 2 }}>
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

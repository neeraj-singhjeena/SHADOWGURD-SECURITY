import { useEffect, useState } from "react";

// Local images
import img1 from "../assets/Photo1.webp";
import img2 from "../assets/Photo3.webp";
import img3 from "../assets/Photo2.webp";

function Home() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* BACKGROUND SLIDER */}
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
            transition: "opacity 1s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* DARK GRADIENT OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.3) 100%)",
          zIndex: 1,
        }}
      />

      {/* ORANGE CIRCLE ACCENT (like screenshot) */}
      <div
        style={{
          position: "absolute",
          left: "-120px",
          bottom: "-120px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "#ff4d1c",
          zIndex: 1,
          opacity: 0.95,
        }}
      />

      {/* CONTENT (TEXT UNTOUCHED) */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "650px",
          paddingLeft: "80px",
          paddingTop: "140px",
          color: "#fff",
        }}
      >
        <p className="hero-subtitle text-danger fw-semibold">
          We Provide The Best
        </p>

        <h1
          className="hero-title"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "1px",
          }}
        >
          Security <span className="text-danger">Service</span>
        </h1>

        <p
          className="hero-text"
          style={{
            color: "#d1d5db",
            marginTop: "20px",
            fontSize: "1.05rem",
            maxWidth: "520px",
          }}
        >
          Professional security solutions for homes, offices, events and
          industries. Your safety is our priority.
        </p>

        <button
          className="btn btn-danger px-4 py-2 mt-3"
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

import { useState } from "react";
import AppointmentModal from "./AppointmentModal";

function Navbar() {
  const [open, setOpen] = useState(false);

  const accent = "#ff4d1c";
  const darkBg = "#0b0f14";
  const darkBg2 = "#111827";

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav
        className="navbar sticky-top"
        style={{
          background: `linear-gradient(180deg, ${darkBg}, ${darkBg2})`,
        }}
      >
        <div className="container-fluid px-3 d-flex align-items-center">
          {/* BRAND */}
          <a
            className="navbar-brand fw-bold"
            href="#home"
            style={{ color: "#fff", letterSpacing: "0.5px" }}
          >
            <span className="d-none d-lg-inline">
              SHADOWGUARD <span style={{ color: accent }}>SECURITY</span>
            </span>
            <span className="d-inline d-lg-none">SHADOWGUARD</span>
          </a>

          {/* MOBILE TOGGLER */}
          <button
            className="btn d-lg-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              fontSize: "26px",
              color: open ? accent : "#fff",
            }}
          >
            {open ? "✕" : "☰"}
          </button>

          {/* DESKTOP MENU */}
          <ul className="navbar-nav ms-auto d-none d-lg-flex flex-row gap-4 align-items-center">
            {["home", "about", "services", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link"
                  href={`#${item}`}
                  style={{
                    color: "#e5e7eb",
                    fontWeight: 500,
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

            <li className="nav-item">
              <button
                className="btn btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#appointmentModal"
                style={{
                  backgroundColor: accent,
                  color: "#fff",
                  border: "none",
                }}
              >
                Make Appointment
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* ===== MOBILE SLIDE MENU ===== */}
      <div
        className="d-lg-none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "75%",
          height: "100vh",
          background: "rgba(11,15,20,0.92)",
          backdropFilter: "blur(6px)",
          padding: "90px 20px 20px",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.35s ease",
          zIndex: 1050,
        }}
      >
        <ul className="navbar-nav">
          {["home", "about", "services", "contact"].map((item) => (
            <li key={item} className="nav-item mb-3">
              <a
                className="nav-link fs-5"
                href={`#${item}`}
                onClick={() => setOpen(false)}
                style={{ color: "#e5e7eb" }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="btn w-100 mt-3"
          data-bs-toggle="modal"
          data-bs-target="#appointmentModal"
          onClick={() => setOpen(false)}
          style={{
            backgroundColor: accent,
            color: "#fff",
            border: "none",
          }}
        >
          Make Appointment
        </button>
      </div>

      <AppointmentModal />
    </>
  );
}

export default Navbar;

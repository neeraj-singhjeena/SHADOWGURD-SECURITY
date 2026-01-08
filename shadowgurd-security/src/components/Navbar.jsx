// import AppointmentModal from "./AppointmentModal";

// function Navbar() {
//   const closeMenu = () => {
//     const nav = document.getElementById("mobileNavbar");
//     if (nav) nav.classList.remove("show");
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
//         <div className="container-fluid px-3">
//           {/* LEFT: LOGO */}
//           <a className="navbar-brand fw-bold m-0" href="#home">
//             SHADOWGURD <span className="text-danger">SECURITY</span>
//           </a>

//           {/* RIGHT: TOGGLER */}
//           <button
//             className="navbar-toggler custom-toggler ms-auto"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#mobileNavbar"
//             aria-controls="mobileNavbar"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* SLIDE MENU */}
//           <div className="collapse navbar-collapse" id="mobileNavbar">
//             <ul className="navbar-nav ms-lg-auto mt-4 mt-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link" href="#home" onClick={closeMenu}>
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about" onClick={closeMenu}>
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#services" onClick={closeMenu}>
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#contact" onClick={closeMenu}>
//                   Contact
//                 </a>
//               </li>
//             </ul>

//             {/* BUTTON */}
//             <div className="ms-lg-4 mt-4 mt-lg-0">
//               <button
//                 className="btn btn-danger w-100 w-lg-auto"
//                 data-bs-toggle="modal"
//                 data-bs-target="#appointmentModal"
//                 onClick={closeMenu}
//               >
//                 Make Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <AppointmentModal />
//     </>
//   );
// }

// export default Navbar;
import { useState } from "react";
import AppointmentModal from "./AppointmentModal";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-fluid px-3 d-flex align-items-center">
          {/* BRAND */}
          <a className="navbar-brand fw-bold" href="#home">
            <span className="d-none d-lg-inline">
              SHADOWGURD <span className="text-danger">SECURITY</span>
            </span>
            <span className="d-inline d-lg-none">SHADOWGURD</span>
          </a>

          {/* MOBILE TOGGLER */}
          <button
            className="btn text-white d-lg-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ fontSize: "26px" }}
          >
            {open ? "✕" : "☰"}
          </button>

          {/* DESKTOP MENU */}
          <ul className="navbar-nav ms-auto d-none d-lg-flex flex-row gap-4">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#appointmentModal"
              >
                Make Appointment
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div
        className="d-lg-none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "75%",
          height: "100vh",
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(6px)",
          padding: "80px 20px 20px",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.35s ease",
          zIndex: 1050,
        }}
      >
        <ul className="navbar-nav">
          {["home", "about", "services", "contact"].map((item) => (
            <li key={item} className="nav-item mb-3">
              <a
                className="nav-link text-white fs-5"
                href={`#${item}`}
                onClick={() => setOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-danger w-100 mt-3"
          data-bs-toggle="modal"
          data-bs-target="#appointmentModal"
          onClick={() => setOpen(false)}
        >
          Make Appointment
        </button>
      </div>

      <AppointmentModal />
    </>
  );
}

export default Navbar;

// import { useState } from "react";
// import AppointmentModal from "./AppointmentModal";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   const accent = "#ff4d1c";
//   const darkBg = "#0b0f14";
//   const darkBg2 = "#111827";

//   return (
//     <>
//       {/* ===== NAVBAR ===== */}
//       <nav
//         className="navbar sticky-top"
//         style={{
//           background: `linear-gradient(180deg, ${darkBg}, ${darkBg2})`,
//         }}
//       >
//         <div className="container-fluid px-3 d-flex align-items-center">
//           {/* BRAND */}
//           <a
//             className="navbar-brand fw-bold"
//             href="#home"
//             style={{ color: "#fff", letterSpacing: "0.5px" }}
//           >
//             <span className="d-none d-lg-inline">
//               SHADOWGUARD <span style={{ color: accent }}>SECURITY</span>
//             </span>
//             <span className="d-inline d-lg-none">SHADOWGUARD</span>
//           </a>

//           {/* MOBILE TOGGLER */}
//           <button
//             className="btn d-lg-none"
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle menu"
//             style={{
//               fontSize: "26px",
//               color: open ? accent : "#fff",
//             }}
//           >
//             {open ? "✕" : "☰"}
//           </button>

//           {/* DESKTOP MENU */}
//           <ul className="navbar-nav ms-auto d-none d-lg-flex flex-row gap-4 align-items-center">
//             {["home", "about", "services", "contact"].map((item) => (
//               <li className="nav-item" key={item}>
//                 <a
//                   className="nav-link"
//                   href={`#${item}`}
//                   style={{
//                     color: "#e5e7eb",
//                     fontWeight: 500,
//                   }}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               </li>
//             ))}

//             <li className="nav-item">
//               <button
//                 className="btn btn-sm"
//                 data-bs-toggle="modal"
//                 data-bs-target="#appointmentModal"
//                 style={{
//                   backgroundColor: accent,
//                   color: "#fff",
//                   border: "none",
//                 }}
//               >
//                 Make Appointment
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* ===== MOBILE SLIDE MENU ===== */}
//       <div
//         className="d-lg-none"
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "75%",
//           height: "100vh",
//           background: "rgba(11,15,20,0.92)",
//           backdropFilter: "blur(6px)",
//           padding: "90px 20px 20px",
//           transform: open ? "translateX(0)" : "translateX(-100%)",
//           transition: "transform 0.35s ease",
//           zIndex: 1050,
//         }}
//       >
//         <ul className="navbar-nav">
//           {["home", "about", "services", "contact"].map((item) => (
//             <li key={item} className="nav-item mb-3">
//               <a
//                 className="nav-link fs-5"
//                 href={`#${item}`}
//                 onClick={() => setOpen(false)}
//                 style={{ color: "#e5e7eb" }}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <button
//           className="btn w-100 mt-3"
//           data-bs-toggle="modal"
//           data-bs-target="#appointmentModal"
//           onClick={() => setOpen(false)}
//           style={{
//             backgroundColor: accent,
//             color: "#fff",
//             border: "none",
//           }}
//         >
//           Make Appointment
//         </button>
//       </div>

//       <AppointmentModal />
//     </>
//   );
// }

// export default Navbar;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppointmentModal from "./AppointmentModal";

function Navbar() {
  const [open, setOpen] = useState(false);

  const accent = "#ff5a1f";
  const darkBg = "#081225";
  const darkBg2 = "#0b1730";

  return (
    <>
      <style>
        {`
          .premium-navbar {
            background: rgba(8,18,37,0.88);
            backdrop-filter: blur(14px);
            border-bottom: 1px solid rgba(255,255,255,0.06);
            transition: 0.35s ease;
            padding: 14px 0;
          }

          .brand-logo {
            font-size: 1.4rem;
            font-weight: 800;
            color: white;
            text-decoration: none;
            letter-spacing: 1px;
            transition: 0.3s ease;
          }

          .brand-logo:hover {
            transform: scale(1.02);
          }

          .nav-link-custom {
            color: #d1d5db;
            text-decoration: none;
            font-weight: 600;
            position: relative;
            transition: 0.3s ease;
            padding: 8px 0;
          }

          .nav-link-custom::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            left: 0;
            bottom: -4px;
            background: ${accent};
            transition: 0.35s ease;
          }

          .nav-link-custom:hover {
            color: white;
          }

          .nav-link-custom:hover::after {
            width: 100%;
          }

          .appoint-btn {
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            color: white;
            border: none;
            padding: 12px 22px;
            border-radius: 14px;
            font-weight: 700;
            transition: 0.35s ease;
            box-shadow: 0 12px 30px rgba(255,90,31,0.28);
          }

          .appoint-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 40px rgba(255,90,31,0.4);
          }

          .mobile-toggle {
            background: transparent;
            border: none;
            color: white;
            font-size: 30px;
            transition: 0.3s ease;
          }

          .mobile-toggle:hover {
            color: ${accent};
            transform: scale(1.08);
          }

          .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 78%;
            max-width: 340px;
            height: 100vh;
            background: rgba(8,18,37,0.96);
            backdrop-filter: blur(14px);
            padding: 100px 28px 30px;
            z-index: 2000;
            border-right: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 0 40px rgba(0,0,0,0.45);
          }

          .mobile-link {
            color: #e5e7eb;
            text-decoration: none;
            font-size: 1.15rem;
            font-weight: 600;
            display: block;
            padding: 14px 0;
            transition: 0.3s ease;
          }

          .mobile-link:hover {
            color: ${accent};
            transform: translateX(8px);
          }

          .mobile-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.55);
            z-index: 1500;
          }

          @media (max-width: 992px) {

            .desktop-menu {
              display: none !important;
            }
          }

          @media (min-width: 993px) {

            .mobile-toggle {
              display: none;
            }
          }
        `}
      </style>

      {/* NAVBAR */}
      <nav className="navbar sticky-top premium-navbar">
        <div className="container-fluid px-3 d-flex align-items-center justify-content-between">
          {/* LOGO */}
          <motion.a
            href="#home"
            className="brand-logo"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="d-none d-lg-inline">
              SHADOWGUARD <span style={{ color: accent }}>SECURITY</span>
            </span>

            <span className="d-inline d-lg-none">SHADOWGUARD</span>
          </motion.a>

          {/* DESKTOP MENU */}
          <motion.ul
            className="navbar-nav ms-auto d-flex flex-row gap-4 align-items-center desktop-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {["home", "about", "services", "contact"].map((item) => (
              <li key={item} className="nav-item">
                <a href={`#${item}`} className="nav-link-custom">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}

            <li className="nav-item">
              <button
                className="appoint-btn"
                data-bs-toggle="modal"
                data-bs-target="#appointmentModal"
              >
                Make Appointment
              </button>
            </li>
          </motion.ul>

          {/* MOBILE TOGGLE */}
          <button className="mobile-toggle" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* MENU */}
            <motion.div
              className="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35 }}
            >
              <ul className="navbar-nav">
                {["home", "about", "services", "contact"].map((item) => (
                  <li key={item} className="nav-item">
                    <a
                      href={`#${item}`}
                      className="mobile-link"
                      onClick={() => setOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                className="appoint-btn w-100 mt-4"
                data-bs-toggle="modal"
                data-bs-target="#appointmentModal"
                onClick={() => setOpen(false)}
              >
                Make Appointment
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AppointmentModal />
    </>
  );
}

export default Navbar;

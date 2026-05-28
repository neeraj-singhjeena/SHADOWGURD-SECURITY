// import {
//   FaWhatsapp,
//   FaFacebookF,
//   FaXTwitter,
//   FaEnvelope,
// } from "react-icons/fa6";

// function Footer() {
//   const accent = "#ff4d1c";
//   const darkBg = "#0b0f14";
//   const darkCard = "#111827";
//   const text = "#e5e7eb";
//   const muted = "#9ca3af";

//   return (
//     <footer
//       style={{
//         background: darkBg,
//         color: text,
//         padding: "60px 0 20px",
//       }}
//     >
//       <div className="container">
//         <div className="row g-4">
//           {/* COMPANY INFO */}
//           <div className="col-md-4">
//             <h5 style={{ color: accent, fontWeight: 700 }}>
//               SHADOWGUARD SECURITY
//             </h5>
//             <p style={{ color: muted, marginTop: "15px" }}>
//               We are a trusted security service provider delivering reliable,
//               professional, and 24/7 protection solutions for homes, businesses,
//               and events.
//             </p>
//           </div>

//           {/* QUICK LINKS */}
//           <div className="col-md-2">
//             <h6 style={{ color: accent, fontWeight: 600 }}>Quick Links</h6>
//             <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
//               {["Home", "About Us", "Services", "Contact"].map((item, i) => (
//                 <li key={i} style={{ marginBottom: "8px" }}>
//                   <a
//                     href={`#${item.toLowerCase().replace(" ", "")}`}
//                     style={{
//                       color: muted,
//                       textDecoration: "none",
//                     }}
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SERVICES */}
//           <div className="col-md-3">
//             <h6 style={{ color: accent, fontWeight: 600 }}>Our Services</h6>
//             <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
//               {[
//                 "Residential Security",
//                 "Commercial Security",
//                 "Event Security",
//                 "Mobile Patrol",
//                 "CCTV Monitoring",
//               ].map((service, i) => (
//                 <li key={i} style={{ color: muted, marginBottom: "8px" }}>
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div className="col-md-3">
//             <h6 style={{ color: accent, fontWeight: 600 }}>Contact Us</h6>
//             <p style={{ color: muted, marginTop: "15px" }}>📞 +17788636047</p>
//             <p style={{ color: muted }}>
//               <FaEnvelope style={{ marginRight: "6px" }} />
//               shadowguardinc@outlook.com
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 gap: "12px",
//                 marginTop: "15px",
//               }}
//             >
//               {[
//                 {
//                   icon: <FaWhatsapp />,
//                   link: "https://wa.me/+17788636047",
//                 },
//                 {
//                   icon: <FaFacebookF />,
//                   link: "https://facebook.com",
//                 },
//                 {
//                   icon: <FaXTwitter />,
//                   link: "https://twitter.com",
//                 },
//               ].map((item, i) => (
//                 <a
//                   key={i}
//                   href={item.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{
//                     background: darkCard,
//                     color: accent,
//                     padding: "10px",
//                     borderRadius: "50%",
//                     display: "inline-flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     textDecoration: "none",
//                   }}
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div
//           style={{
//             borderTop: "1px solid #1f2937",
//             marginTop: "40px",
//             paddingTop: "15px",
//             textAlign: "center",
//             color: muted,
//           }}
//         >
//           <p style={{ margin: 0 }}>
//             © 2026{" "}
//             <strong style={{ color: accent }}>SHADOWGUARD SECURITY</strong>. All
//             Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaEnvelope,
  FaShieldHalved,
  FaArrowUp,
} from "react-icons/fa6";

import { motion } from "framer-motion";

function Footer() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>
        {`
          .footer {
            background: linear-gradient(to bottom, #081225, #050b18);
            color: white;
            padding: 90px 8% 25px;
            position: relative;
            overflow: hidden;
          }

          .footer::before {
            content: "";
            position: absolute;
            width: 450px;
            height: 450px;
            background: rgba(255, 90, 31, 0.08);
            border-radius: 50%;
            top: -180px;
            left: -120px;
            filter: blur(60px);
            animation: pulseGlow 6s ease-in-out infinite;
          }

          @keyframes pulseGlow {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }

            50% {
              transform: scale(1.15);
              opacity: 1;
            }

            100% {
              transform: scale(1);
              opacity: 0.5;
            }
          }

          .footer-container {
            max-width: 1350px;
            margin: auto;
            position: relative;
            z-index: 2;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 1fr 1fr;
            gap: 50px;
          }

          .footer-logo {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 20px;
          }

          .footer-logo-icon {
            width: 60px;
            height: 60px;
            border-radius: 18px;
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 24px;
            box-shadow: 0 12px 30px rgba(255,90,31,0.35);
            animation: floatIcon 3s ease-in-out infinite;
          }

          @keyframes floatIcon {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-6px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          .footer-logo h2 {
            font-size: 28px;
            margin: 0;
            font-weight: 800;
          }

          .footer-logo span {
            color: #ff5a1f;
          }

          .footer-text {
            color: #b9c5d4;
            line-height: 1.9;
            margin-bottom: 28px;
          }

          .footer-heading {
            font-size: 22px;
            margin-bottom: 25px;
            font-weight: 700;
            color: white;
            position: relative;
          }

          .footer-heading::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 55px;
            height: 3px;
            background: #ff5a1f;
            border-radius: 10px;
          }

          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-links li {
            margin-bottom: 16px;
          }

          .footer-links button {
            background: none;
            border: none;
            color: #b9c5d4;
            cursor: pointer;
            transition: 0.3s ease;
            font-size: 15px;
          }

          .footer-links button:hover {
            color: #ff5a1f;
            transform: translateX(6px);
          }

          .service-item {
            color: #b9c5d4;
            margin-bottom: 16px;
            transition: 0.3s ease;
          }

          .service-item:hover {
            color: #ff5a1f;
            transform: translateX(6px);
          }

          .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            margin-bottom: 22px;
            color: #b9c5d4;
            line-height: 1.7;
          }

          .contact-icon {
            width: 42px;
            height: 42px;
            min-width: 42px;
            border-radius: 14px;
            background: rgba(255,255,255,0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ff5a1f;
            transition: 0.3s ease;
          }

          .contact-item:hover .contact-icon {
            background: #ff5a1f;
            color: white;
          }

          .social-icons {
            display: flex;
            gap: 14px;
            margin-top: 25px;
          }

          .social-icons a {
            width: 48px;
            height: 48px;
            border-radius: 16px;
            background: rgba(255,255,255,0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ff5a1f;
            font-size: 18px;
            transition: 0.35s ease;
            text-decoration: none;
          }

          .social-icons a:hover {
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            color: white;
            transform: translateY(-6px) rotate(6deg);
          }

          .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.08);
            margin-top: 70px;
            padding-top: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .footer-bottom p {
            color: #9fb0c4;
            margin: 0;
          }

          .footer-bottom span {
            color: #ff5a1f;
            font-weight: 700;
          }

          .scroll-top-btn {
            width: 52px;
            height: 52px;
            border-radius: 18px;
            border: none;
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            color: white;
            cursor: pointer;
            font-size: 18px;
            transition: 0.35s ease;
            box-shadow: 0 15px 35px rgba(255,90,31,0.35);
          }

          .scroll-top-btn:hover {
            transform: translateY(-6px);
          }

          @media (max-width: 992px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (max-width: 600px) {
            .footer {
              padding: 70px 5% 25px;
            }

            .footer-grid {
              grid-template-columns: 1fr;
            }

            .footer-logo h2 {
              font-size: 24px;
            }

            .footer-bottom {
              flex-direction: column;
              text-align: center;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* COMPANY */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <FaShieldHalved />
                </div>

                <h2>
                  SHADOW<span>GUARD</span>
                </h2>
              </div>

              <p className="footer-text">
                SHADOWGUARD SECURITY delivers trusted and professional
                protection solutions with advanced surveillance, trained guards,
                and 24/7 monitoring services for homes, businesses, and events.
              </p>

              <div className="social-icons">
                <a
                  href="https://wa.me/17788636047"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>

                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaXTwitter />
                </a>
              </div>
            </motion.div>

            {/* LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h3 className="footer-heading">Quick Links</h3>

              <ul className="footer-links">
                <li>
                  <button onClick={() => handleScroll("home")}>Home</button>
                </li>

                <li>
                  <button onClick={() => handleScroll("about")}>About</button>
                </li>

                <li>
                  <button onClick={() => handleScroll("services")}>
                    Services
                  </button>
                </li>

                <li>
                  <button onClick={() => handleScroll("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </motion.div>

            {/* SERVICES */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <h3 className="footer-heading">Our Services</h3>

              <div className="service-item">Residential Security</div>

              <div className="service-item">Commercial Security</div>

              <div className="service-item">Event Security</div>

              <div className="service-item">CCTV Monitoring</div>

              <div className="service-item">Mobile Patrol</div>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <h3 className="footer-heading">Contact Us</h3>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>

                <span>+1 (778) 863-6047</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <span>shadowguardinc@outlook.com</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaShieldHalved />
                </div>

                <span>Chilliwack, BC Canada</span>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p>
              © 2026 <span>SHADOWGUARD SECURITY</span>. All Rights Reserved.
            </p>

            <motion.button
              className="scroll-top-btn"
              onClick={scrollTop}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

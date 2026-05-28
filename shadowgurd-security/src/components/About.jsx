// function About() {
//   const accent = "#ff4d1c";
//   const dark = "#111827";

//   return (
//     <>
//       {/* ===== HERO HEADER ===== */}
//       <section
//         className="text-white text-center"
//         style={{
//           background: dark,
//           padding: "50px 15px",
//         }}
//       >
//         <div className="container">
//           <h1 className="fw-bold" style={{ letterSpacing: "1px" }}>
//             Who We Are
//           </h1>
//           <p className="mt-3" style={{ color: accent, fontWeight: 500 }}>
//             Dedicated to Your Safety. Trusted for professional Protection.
//           </p>
//         </div>
//       </section>

//       {/* ===== WHY WE EXIST ===== */}
//       <section className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <div
//               style={{
//                 background: dark,
//                 padding: "45px",
//                 borderRadius: "12px",
//                 borderLeft: `5px solid ${accent}`,
//                 boxShadow: "0 25px 45px rgba(0,0,0,0.35)",
//                 animation: "fadeUp 0.8s ease",
//               }}
//             >
//               <h3 className="fw-bold mb-3" style={{ color: accent }}>
//                 Why We Exist
//               </h3>

//               {/* ONE LINE */}
//               <p
//                 style={{
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   color: "#ffffff",
//                   marginBottom: "14px",
//                 }}
//               >
//                 To provide dependable, responsive, and professional security
//                 services that protect what matters most 24/7.
//               </p>

//               {/* PARAGRAPH */}
//               <p
//                 style={{
//                   fontSize: "16px",
//                   lineHeight: "1.9",
//                   color: "#d1d5db",
//                   textAlign: "justify",
//                   marginBottom: 0,
//                 }}
//               >
//                 <strong style={{ color: "#ffffff" }}>
//                   SHADOWGUARD SECURITY
//                 </strong>{" "}
//                 is a trusted provider of professional security services with
//                 years of experience protecting people, property, and assets. We
//                 are driven by integrity, discipline, and a strong commitment to
//                 client safety—delivering peace of mind through reliable security
//                 solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== MISSION / VISION / VALUES ===== */}
//       <section className="py-5" style={{ background: dark }}>
//         <div className="container">
//           <div className="row g-4 text-center">
//             {[
//               {
//                 title: "Our Mission",
//                 text: "Deliver reliable, professional, and responsive security services tailored to every client’s needs.",
//               },
//               {
//                 title: "Our Vision",
//                 text: "To become a trusted leader in modern security solutions through excellence and innovation.",
//               },
//               {
//                 title: "Our Values",
//                 text: "Integrity, discipline, professionalism, and client-first commitment.",
//               },
//             ].map((item, i) => (
//               <div className="col-md-4" key={i}>
//                 <div
//                   style={{
//                     background: "#ffffff",
//                     padding: "32px",
//                     borderRadius: "12px",
//                     height: "100%",
//                     transition: "all 0.35s ease",
//                     boxShadow: "0 18px 35px rgba(0,0,0,0.25)",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "translateY(-8px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "translateY(0)";
//                   }}
//                 >
//                   <h5 className="fw-bold" style={{ color: accent }}>
//                     {item.title}
//                   </h5>
//                   <p className="mt-3 text-muted">{item.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== OUR TEAM (UNCHANGED) ===== */}
//       {/* ===== OUR TEAM (ANIMATED BOXES) ===== */}
//       <section className="container py-5">
//         <h2 className="fw-bold text-center mb-3">Our Professional Team</h2>
//         <p className="text-center text-muted mb-5">
//           Trained, verified, disciplined professionals you can trust.
//         </p>

//         <div className="row g-4 text-center">
//           {[
//             "Background Verified",
//             "Professionally Trained",
//             "Reliable & Responsible",
//           ].map((text, i) => (
//             <div className="col-md-4" key={i}>
//               <div
//                 style={{
//                   background: "#ffffff",
//                   borderRadius: "12px",
//                   padding: "30px",
//                   border: "1px solid #e5e7eb",
//                   borderTop: "4px solid transparent",
//                   transition: "all 0.35s ease",
//                   boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
//                   height: "100%",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.borderTop = "4px solid #ff4d1c";
//                   e.currentTarget.style.boxShadow =
//                     "0 25px 45px rgba(0,0,0,0.25)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.borderTop = "4px solid transparent";
//                   e.currentTarget.style.boxShadow =
//                     "0 12px 25px rgba(0,0,0,0.12)";
//                 }}
//               >
//                 <h5 className="fw-semibold" style={{ color: "#111827" }}>
//                   ✔ {text}
//                 </h5>
//                 <p className="text-muted mt-2">
//                   High standards maintained across all operations.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== EXPERIENCE / STATS ===== */}
//       <section className="text-white py-5" style={{ background: dark }}>
//         <div className="container">
//           <div className="row text-center g-4">
//             {[
//               ["2+", "Years Experience"],
//               ["50+", "Clients Protected"],
//               ["24/7", "Availability"],
//               ["100%", "Client Satisfaction"],
//             ].map((item, i) => (
//               <div className="col-md-3" key={i}>
//                 <h3 className="fw-bold" style={{ color: accent }}>
//                   {item[0]}
//                 </h3>
//                 <p>{item[1]}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA ===== */}
//       <section
//         className="py-5 text-center text-white"
//         style={{ background: dark }}
//       >
//         <h2 className="fw-bold">Let Us Protect What Matters Most to You</h2>
//         <a
//           href="#contact"
//           className="btn mt-3 px-4"
//           style={{ backgroundColor: accent, color: "#fff" }}
//         >
//           Contact Us Today
//         </a>
//       </section>
//     </>
//   );
// }

// export default About;
import { motion } from "framer-motion";

function About() {
  const accent = "#ff5a1f";
  const dark = "#081225";
  const dark2 = "#0b1730";

  const handleScroll = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>
        {`
          .about-section {
            background: linear-gradient(to bottom, ${dark}, ${dark2});
            position: relative;
            overflow: hidden;
          }

          .about-section::before {
            content: "";
            position: absolute;
            width: 500px;
            height: 500px;
            background: rgba(255,90,31,0.08);
            border-radius: 50%;
            top: -180px;
            left: -120px;
            filter: blur(60px);
          }

          .glass-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.08);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            transition: 0.4s ease;
          }

          .glass-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255,90,31,0.3);
            box-shadow: 0 25px 45px rgba(0,0,0,0.35);
          }

          .about-btn {
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            border: none;
            color: white;
            padding: 15px 34px;
            border-radius: 14px;
            font-weight: 700;
            transition: 0.35s ease;
            box-shadow: 0 15px 35px rgba(255,90,31,0.3);
          }

          .about-btn:hover {
            transform: translateY(-5px) scale(1.03);
          }

          .stats-box h2 {
            font-size: 52px;
            color: ${accent};
            font-weight: 800;
          }

          .stats-box p {
            color: #d1d5db;
            margin-top: 10px;
          }

          .team-box {
            transition: 0.35s ease;
          }

          .team-box:hover {
            transform: translateY(-10px);
          }

          @media (max-width: 768px) {
            .main-heading {
              font-size: 34px !important;
            }
          }
        `}
      </style>

      <section className="about-section">
        {/* HERO */}
        <section
          className="text-white text-center"
          style={{
            padding: "90px 15px 70px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="fw-bold main-heading"
              style={{
                letterSpacing: "1px",
                fontSize: "60px",
              }}
            >
              Who We Are
            </h1>

            <p
              className="mt-3"
              style={{
                color: accent,
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              Dedicated to Your Safety. Trusted for Professional Protection.
            </p>
          </motion.div>
        </section>

        {/* WHY WE EXIST */}
        <section className="container py-5">
          <motion.div
            className="row justify-content-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="col-lg-10">
              <div
                className="glass-card"
                style={{
                  padding: "50px",
                  borderLeft: `5px solid ${accent}`,
                }}
              >
                <h3 className="fw-bold mb-3" style={{ color: accent }}>
                  Why We Exist
                </h3>

                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "16px",
                  }}
                >
                  To provide dependable, responsive, and professional security
                  services that protect what matters most 24/7.
                </p>

                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "2",
                    color: "#d1d5db",
                    marginBottom: 0,
                  }}
                >
                  <strong style={{ color: "#ffffff" }}>
                    SHADOWGUARD SECURITY
                  </strong>{" "}
                  is a trusted provider of professional security services with
                  years of experience protecting people, property, and assets.
                  We are driven by integrity, discipline, and a strong
                  commitment to client safety—delivering peace of mind through
                  reliable security solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* MISSION */}
        <section className="py-5">
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
                <motion.div
                  className="col-md-4"
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.2,
                  }}
                >
                  <div
                    className="glass-card"
                    style={{
                      padding: "35px",
                      height: "100%",
                    }}
                  >
                    <h5 className="fw-bold" style={{ color: accent }}>
                      {item.title}
                    </h5>

                    <p
                      className="mt-3"
                      style={{
                        color: "#d1d5db",
                        lineHeight: "1.9",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="container py-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold text-center mb-3 text-white">
              Our Professional Team
            </h2>

            <p className="text-center text-light mb-5">
              Trained, verified, disciplined professionals you can trust.
            </p>
          </motion.div>

          <div className="row g-4 text-center">
            {[
              "Background Verified",
              "Professionally Trained",
              "Reliable & Responsible",
            ].map((text, i) => (
              <motion.div
                className="col-md-4"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                }}
              >
                <div
                  className="glass-card team-box"
                  style={{
                    padding: "35px",
                    height: "100%",
                  }}
                >
                  <h5 className="fw-semibold" style={{ color: "#ffffff" }}>
                    ✔ {text}
                  </h5>

                  <p
                    className="mt-3"
                    style={{
                      color: "#d1d5db",
                    }}
                  >
                    High standards maintained across all operations.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="py-5">
          <div className="container">
            <div className="row text-center g-4">
              {[
                ["2+", "Years Experience"],
                ["50+", "Clients Protected"],
                ["24/7", "Availability"],
                ["100%", "Client Satisfaction"],
              ].map((item, i) => (
                <motion.div
                  className="col-md-3"
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                  }}
                >
                  <div
                    className="glass-card stats-box"
                    style={{
                      padding: "35px",
                    }}
                  >
                    <h2>{item[0]}</h2>

                    <p>{item[1]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-5 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="fw-bold">Let Us Protect What Matters Most to You</h2>

            <button onClick={handleScroll} className="about-btn mt-4">
              Contact Us Today
            </button>
          </motion.div>
        </section>
      </section>
    </>
  );
}

export default About;

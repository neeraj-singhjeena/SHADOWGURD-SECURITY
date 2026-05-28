// import { useEffect, useState } from "react";

// // Local images
// import img1 from "../assets/Photo1.webp";
// import img2 from "../assets/Photo3.webp";
// import img3 from "../assets/Photo2.webp";

// function Home() {
//   const images = [img1, img2, img3];
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 1800);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       style={{
//         position: "relative",
//         height: "100vh",
//         overflow: "hidden",
//         background: "#000",
//       }}
//     >
//       {/* BACKGROUND SLIDER */}
//       {images.map((img, index) => (
//         <div
//           key={index}
//           style={{
//             backgroundImage: `url(${img})`,
//             position: "absolute",
//             inset: 0,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             opacity: current === index ? 1 : 0,
//             transition: "opacity 1s ease-in-out",
//             zIndex: 0,
//           }}
//         />
//       ))}

//       {/* DARK GRADIENT OVERLAY */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(90deg, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.3) 100%)",
//           zIndex: 1,
//         }}
//       />

//       {/* ORANGE CIRCLE ACCENT (like screenshot) */}
//       <div
//         style={{
//           position: "absolute",
//           left: "-120px",
//           bottom: "-120px",
//           width: "420px",
//           height: "420px",
//           borderRadius: "50%",
//           background: "#ff4d1c",
//           zIndex: 1,
//           opacity: 0.95,
//         }}
//       />

//       {/* CONTENT (TEXT UNTOUCHED) */}
//       <div
//         className="hero-content"
//         style={{
//           position: "relative",
//           zIndex: 2,
//           maxWidth: "650px",
//           paddingLeft: "80px",
//           paddingTop: "140px",
//           color: "#fff",
//         }}
//       >
//         <p className="hero-subtitle text-danger fw-semibold">
//           We Provide The Best
//         </p>

//         <h1
//           className="hero-title"
//           style={{
//             fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
//             fontWeight: 800,
//             lineHeight: 1.1,
//             letterSpacing: "1px",
//           }}
//         >
//           Security <span className="text-danger">Service</span>
//         </h1>

//         <p
//           className="hero-text"
//           style={{
//             color: "#d1d5db",
//             marginTop: "20px",
//             fontSize: "1.05rem",
//             maxWidth: "520px",
//           }}
//         >
//           Professional security solutions for homes, offices, events and
//           industries. Your safety is our priority.
//         </p>

//         <button
//           className="btn btn-danger px-4 py-2 mt-3"
//           data-bs-toggle="modal"
//           data-bs-target="#appointmentModal"
//         >
//           Get Appointment
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Home;
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          .hero-section {
            position: relative;
            height: 100vh;
            overflow: hidden;
            background: #000;
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                90deg,
                rgba(0,0,0,0.92) 25%,
                rgba(0,0,0,0.55) 65%,
                rgba(0,0,0,0.25) 100%
              );
            z-index: 1;
          }

          .orange-glow {
            position: absolute;
            left: -140px;
            bottom: -140px;
            width: 460px;
            height: 460px;
            border-radius: 50%;
            background: rgba(255, 77, 28, 0.95);
            filter: blur(10px);
            z-index: 1;
            animation: pulseGlow 5s ease-in-out infinite;
          }

          @keyframes pulseGlow {

            0% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.08);
            }

            100% {
              transform: scale(1);
            }
          }

          .hero-content {
            position: relative;
            z-index: 3;
            max-width: 720px;
            padding-left: 90px;
            padding-top: 160px;
            color: white;
          }

          .glass-box {
            background: rgba(255,255,255,0.06);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.08);
            padding: 45px;
            border-radius: 28px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.35);
          }

          .hero-subtitle {
            color: #ff5a1f;
            font-weight: 700;
            letter-spacing: 3px;
            margin-bottom: 18px;
            text-transform: uppercase;
          }

          .hero-title {
            font-size: clamp(2.8rem, 5vw, 5rem);
            font-weight: 900;
            line-height: 1.05;
            margin-bottom: 22px;
          }

          .hero-title span {
            color: #ff5a1f;
          }

          .hero-text {
            color: #d1d5db;
            font-size: 1.08rem;
            line-height: 1.9;
            max-width: 560px;
            margin-bottom: 35px;
          }

          .hero-btn {
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            border: none;
            color: white;
            padding: 16px 34px;
            border-radius: 16px;
            font-weight: 700;
            font-size: 16px;
            transition: 0.35s ease;
            box-shadow: 0 15px 35px rgba(255,90,31,0.35);
          }

          .hero-btn:hover {
            transform: translateY(-5px) scale(1.03);
            box-shadow: 0 20px 45px rgba(255,90,31,0.45);
          }

          .floating-badge {
            position: absolute;
            right: 100px;
            bottom: 90px;
            z-index: 3;
            background: rgba(255,255,255,0.08);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 22px;
            padding: 22px 30px;
            color: white;
            animation: floatBadge 4s ease-in-out infinite;
          }

          .floating-badge h3 {
            color: #ff5a1f;
            font-size: 42px;
            margin-bottom: 4px;
            font-weight: 800;
          }

          .floating-badge p {
            margin: 0;
            color: #d1d5db;
            letter-spacing: 1px;
          }

          @keyframes floatBadge {

            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-12px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          @media (max-width: 992px) {

            .hero-content {
              padding-left: 40px;
              padding-right: 20px;
              padding-top: 140px;
            }

            .floating-badge {
              display: none;
            }
          }

          @media (max-width: 600px) {

            .hero-content {
              padding-left: 20px;
              padding-right: 20px;
              padding-top: 120px;
            }

            .glass-box {
              padding: 28px;
            }

            .hero-title {
              font-size: 2.5rem;
            }

            .hero-text {
              font-size: 0.98rem;
            }
          }
        `}
      </style>

      <section id="home" className="hero-section">
        {/* BACKGROUND SLIDER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            style={{
              backgroundImage: `url(${images[current]})`,
              position: "absolute",
              inset: 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
        </AnimatePresence>

        {/* OVERLAY */}
        <div className="hero-overlay" />

        {/* ORANGE GLOW */}
        <div className="orange-glow" />

        {/* CONTENT */}
        <div className="hero-content">
          <motion.div
            className="glass-box"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              We Provide The Best
            </motion.p>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Security <span>Service</span>
            </motion.h1>

            <motion.p
              className="hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Professional security solutions for homes, offices, events and
              industries. Your safety is our priority.
            </motion.p>

            <motion.button
              className="hero-btn"
              data-bs-toggle="modal"
              data-bs-target="#appointmentModal"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Appointment
            </motion.button>
          </motion.div>
        </div>

        {/* FLOATING BOX */}
        <motion.div
          className="floating-badge"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <h3>24/7</h3>

          <p>ACTIVE SECURITY SUPPORT</p>
        </motion.div>
      </section>
    </>
  );
}

export default Home;

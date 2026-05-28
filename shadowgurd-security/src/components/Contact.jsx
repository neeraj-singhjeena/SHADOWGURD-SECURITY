// function Contact() {
//   const accent = "#ff4d1c";
//   const darkBg = "#0b0f14";
//   const darkCard = "#111827";

//   return (
//     <>
//       {/* ===== HEADER ===== */}
//       <section
//         className="text-white text-center"
//         style={{
//           background: `linear-gradient(180deg, ${darkBg}, ${darkCard})`,
//           padding: "50px 15px",
//         }}
//       >
//         <div className="container">
//           <h1 className="fw-bold">Contact Us</h1>
//         </div>
//       </section>

//       {/* ===== CONTACT INFO + FORM ===== */}
//       <section className="container py-5">
//         <div className="row g-4">
//           {/* CONTACT INFO (DARK – SAME) */}
//           <div className="col-md-5">
//             <div
//               style={{
//                 background: darkCard,
//                 color: "#e5e7eb",
//                 padding: "30px",
//                 borderRadius: "8px",
//                 borderLeft: `4px solid ${accent}`,
//               }}
//             >
//               <h4 className="fw-bold mb-4" style={{ color: accent }}>
//                 Contact Information
//               </h4>

//               <p>
//                 📞 <strong>Phone:</strong> +17788636047
//               </p>
//               <p>
//                 ✉️ <strong>Email:</strong> shadowguardinc@outlook.com
//               </p>
//               <p>
//                 📍 <strong>Address:</strong> 45351 Creekside Drive, Chilliwack,
//                 BC Canada, V2P 7S4
//               </p>

//               <p className="mt-3" style={{ color: "#9ca3af" }}>
//                 Our team is always ready to assist you with professional
//                 security solutions tailored to your needs.
//               </p>
//             </div>
//           </div>

//           {/* CONTACT FORM (WHITE CARD) */}
//           <div className="col-md-7">
//             <div
//               style={{
//                 background: "#ffffff",
//                 padding: "35px",
//                 borderRadius: "10px",
//                 boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
//               }}
//             >
//               <h4 className="fw-bold mb-4" style={{ color: accent }}>
//                 Send Us a Message
//               </h4>

//               <form>
//                 {[
//                   { type: "text", placeholder: "Your Name" },
//                   { type: "email", placeholder: "Your Email" },
//                   { type: "tel", placeholder: "Phone Number" },
//                 ].map((field, i) => (
//                   <div className="mb-3" key={i}>
//                     <input
//                       type={field.type}
//                       className="form-control"
//                       placeholder={field.placeholder}
//                       style={{
//                         background: "#ffffff",
//                         border: "1px solid #d1d5db",
//                         padding: "12px",
//                       }}
//                       required
//                     />
//                   </div>
//                 ))}

//                 <div className="mb-3">
//                   <textarea
//                     rows="4"
//                     className="form-control"
//                     placeholder="Your Message"
//                     style={{
//                       background: "#ffffff",
//                       border: "1px solid #d1d5db",
//                       padding: "12px",
//                     }}
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn px-4"
//                   style={{
//                     backgroundColor: accent,
//                     color: "#fff",
//                     border: "none",
//                   }}
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA ===== */}
//       <section
//         className="text-white text-center"
//         style={{
//           background: darkBg,
//           padding: "60px 15px",
//         }}
//       >
//         <h2 className="fw-bold">Your Safety Is Our Priority</h2>
//         <p className="mt-2" style={{ color: "#9ca3af" }}>
//           Contact us today to discuss your security requirements.
//         </p>
//         <a
//           href="https://wa.me/+17788636047"
//           className="btn mt-3"
//           style={{
//             backgroundColor: accent,
//             color: "#fff",
//           }}
//         >
//           Chat on WhatsApp
//         </a>
//       </section>
//     </>
//   );
// }

// export default Contact;
/* ===== ADD THIS IMPORT ===== */

import { Phone, Mail, MapPin, Send, ShieldCheck } from "lucide-react";

import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <style>
        {`
          .contact-section {
            background: linear-gradient(to bottom, #081225, #0b1730);
            padding: 110px 8%;
            position: relative;
            overflow: hidden;
          }

          .contact-section::before {
            content: "";
            position: absolute;
            width: 500px;
            height: 500px;
            background: rgba(255, 90, 31, 0.08);
            border-radius: 50%;
            top: -200px;
            left: -150px;
            filter: blur(60px);
            animation: pulseGlow 6s infinite ease-in-out;
          }

          @keyframes pulseGlow {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.1);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 0.5;
            }
          }

          .contact-container {
            max-width: 1350px;
            margin: auto;
            position: relative;
            z-index: 2;
          }

          .contact-header {
            text-align: center;
            margin-bottom: 70px;
          }

          .contact-subtitle {
            color: #ff5a1f;
            font-weight: 700;
            letter-spacing: 3px;
            margin-bottom: 18px;
          }

          .contact-title {
            color: white;
            font-size: 58px;
            font-weight: 800;
            margin-bottom: 18px;
          }

          .contact-text {
            color: #b8c5d4;
            max-width: 760px;
            margin: auto;
            line-height: 1.9;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 40px;
          }

          .contact-info {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 30px;
            padding: 45px;
            backdrop-filter: blur(10px);
          }

          .contact-form {
            background: white;
            border-radius: 30px;
            padding: 50px;
            animation: fadeUp 1s ease;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .info-box {
            display: flex;
            gap: 18px;
            margin-bottom: 25px;
            transition: 0.3s ease;
          }

          .info-box:hover {
            transform: translateX(8px);
          }

          .info-icon {
            width: 60px;
            height: 60px;
            border-radius: 18px;
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }

          .info-content h4 {
            color: white;
            margin-bottom: 6px;
          }

          .info-content span {
            color: #c3cfdd;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-control {
            width: 100%;
            padding: 18px;
            border-radius: 14px;
            border: 1px solid #ddd;
            outline: none;
            transition: 0.3s ease;
          }

          .form-control:focus {
            border-color: #ff5a1f;
            box-shadow: 0 0 0 4px rgba(255,90,31,0.12);
          }

          textarea.form-control {
            min-height: 150px;
            resize: none;
          }

          .submit-btn {
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            border: none;
            color: white;
            padding: 18px 34px;
            border-radius: 14px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: 0.35s ease;
          }

          .submit-btn:hover {
            transform: translateY(-5px) scale(1.03);
          }

          .contact-cta {
            margin-top: 80px;
            background: rgba(255,255,255,0.04);
            border-radius: 30px;
            padding: 60px 40px;
            text-align: center;
          }

          .cta-icon {
            width: 90px;
            height: 90px;
            margin: auto;
            margin-bottom: 25px;
            border-radius: 24px;
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            animation: rotateGlow 5s linear infinite;
          }

          @keyframes rotateGlow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .contact-cta h2 {
            color: white;
            font-size: 42px;
            margin-bottom: 15px;
          }

          .contact-cta p {
            color: #c3cfdd;
            max-width: 700px;
            margin: auto;
            line-height: 1.9;
          }

          .whatsapp-btn {
            margin-top: 30px;
            display: inline-block;
            background: #25d366;
            color: white;
            padding: 18px 34px;
            border-radius: 14px;
            text-decoration: none;
            font-weight: 700;
            transition: 0.3s ease;
          }

          .whatsapp-btn:hover {
            transform: translateY(-5px);
            color: white;
          }
        `}
      </style>

      <motion.section
        className="contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="contact-container">
          <div className="contact-header">
            <p className="contact-subtitle">CONTACT US</p>

            <h2 className="contact-title">
              Secure Your Future With Confidence
            </h2>

            <p className="contact-text">
              Reach out to SHADOWGUARD SECURITY for modern and reliable
              protection services tailored for your business and property.
            </p>
          </div>

          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="info-box">
                <div className="info-icon">
                  <Phone />
                </div>

                <div className="info-content">
                  <h4>Phone</h4>
                  <span>+1 (778) 863-6047</span>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <Mail />
                </div>

                <div className="info-content">
                  <h4>Email</h4>
                  <span>shadowguardinc@outlook.com</span>
                </div>
              </div>

              <div className="info-box">
                <div className="info-icon">
                  <MapPin />
                </div>

                <div className="info-content">
                  <h4>Address</h4>
                  <span>Chilliwack, BC Canada</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form"
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3>Send Message</h3>

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    className="form-control"
                  ></textarea>
                </div>

                <button className="submit-btn">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>

          <div className="contact-cta">
            <div className="cta-icon">
              <ShieldCheck size={40} />
            </div>

            <h2>Your Safety Is Our Priority</h2>

            <p>
              Professional protection services with 24/7 monitoring and rapid
              response systems.
            </p>

            <a
              href="https://wa.me/17788636047"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              Chat On WhatsApp
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;

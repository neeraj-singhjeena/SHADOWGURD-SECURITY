// import React from "react";
// import { ShieldCheck, BadgeCheck, Lock, ArrowRight } from "lucide-react";

// import { motion } from "framer-motion";

// function SecurityUpgradeSection() {
//   const handleScroll = () => {
//     const section = document.getElementById("contact");

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           .security-section {
//             background: linear-gradient(to bottom, #081225, #0b1730);
//             padding: 110px 8%;
//             overflow: hidden;
//             position: relative;
//           }

//           .security-section::before {
//             content: "";
//             position: absolute;
//             width: 500px;
//             height: 500px;
//             background: rgba(255, 90, 31, 0.08);
//             border-radius: 50%;
//             top: -180px;
//             right: -120px;
//             filter: blur(60px);
//             animation: glowPulse 6s ease-in-out infinite;
//           }

//           @keyframes glowPulse {
//             0% {
//               transform: scale(1);
//               opacity: 0.5;
//             }

//             50% {
//               transform: scale(1.15);
//               opacity: 1;
//             }

//             100% {
//               transform: scale(1);
//               opacity: 0.5;
//             }
//           }

//           .security-container {
//             max-width: 1350px;
//             margin: auto;
//             display: grid;
//             grid-template-columns: 1fr 1.1fr;
//             gap: 90px;
//             align-items: center;
//             position: relative;
//             z-index: 2;
//           }

//           .security-image-wrapper {
//             position: relative;
//           }

//           .security-image {
//             width: 100%;
//             height: 760px;
//             object-fit: cover;
//             border-radius: 30px;
//             box-shadow: 0 25px 70px rgba(0,0,0,0.45);
//             transition: 0.4s ease;
//           }

//           .security-image:hover {
//             transform: scale(1.02);
//           }

//           .experience-card {
//             position: absolute;
//             top: 40px;
//             right: -25px;
//             background: rgba(8, 18, 37, 0.96);
//             backdrop-filter: blur(12px);
//             border: 1px solid rgba(255,255,255,0.08);
//             padding: 30px 42px;
//             border-radius: 24px;
//             box-shadow: 0 20px 50px rgba(0,0,0,0.35);
//             animation: floatCard 4s ease-in-out infinite;
//           }

//           @keyframes floatCard {
//             0% {
//               transform: translateY(0px);
//             }

//             50% {
//               transform: translateY(-10px);
//             }

//             100% {
//               transform: translateY(0px);
//             }
//           }

//           .experience-card h2 {
//             font-size: 60px;
//             color: #ff5a1f;
//             margin-bottom: 6px;
//             line-height: 1;
//           }

//           .experience-card p {
//             color: #ffffff;
//             font-weight: 700;
//             letter-spacing: 2px;
//             font-size: 14px;
//           }

//           .corner-top,
//           .corner-bottom {
//             position: absolute;
//             width: 90px;
//             height: 90px;
//             border: 6px solid #ff5a1f;
//           }

//           .corner-top {
//             top: -15px;
//             left: -15px;
//             border-right: none;
//             border-bottom: none;
//             border-radius: 18px 0 0 0;
//           }

//           .corner-bottom {
//             bottom: -15px;
//             right: -15px;
//             border-left: none;
//             border-top: none;
//             border-radius: 0 0 18px 0;
//           }

//           .security-subtitle {
//             display: flex;
//             align-items: center;
//             gap: 14px;
//             color: #ff5a1f;
//             font-weight: 700;
//             letter-spacing: 1px;
//             margin-bottom: 22px;
//           }

//           .subtitle-line {
//             width: 70px;
//             height: 2px;
//             background: #ff5a1f;
//           }

//           .security-heading {
//             font-size: 60px;
//             line-height: 1.1;
//             color: white;
//             font-weight: 800;
//             margin-bottom: 28px;
//             text-transform: uppercase;
//           }

//           .security-description {
//             color: #c9d3e0;
//             line-height: 2;
//             margin-bottom: 50px;
//             font-size: 16px;
//           }

//           .feature-box {
//             display: flex;
//             gap: 24px;
//             margin-bottom: 38px;
//             align-items: flex-start;
//             padding: 20px;
//             border-radius: 22px;
//             transition: 0.35s ease;
//           }

//           .feature-box:hover {
//             background: rgba(255,255,255,0.04);
//             transform: translateX(8px);
//           }

//           .feature-icon {
//             width: 78px;
//             height: 78px;
//             min-width: 78px;
//             border-radius: 22px;
//             background: linear-gradient(135deg, #ff5a1f, #ff7a45);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             color: white;
//             box-shadow: 0 12px 35px rgba(255, 90, 31, 0.35);
//             animation: iconFloat 3s ease-in-out infinite;
//           }

//           @keyframes iconFloat {
//             0% {
//               transform: translateY(0px);
//             }

//             50% {
//               transform: translateY(-6px);
//             }

//             100% {
//               transform: translateY(0px);
//             }
//           }

//           .feature-content h3 {
//             font-size: 24px;
//             color: white;
//             margin-bottom: 12px;
//             text-transform: uppercase;
//           }

//           .feature-content p {
//             color: #b9c5d4;
//             line-height: 1.9;
//           }

//           .security-btn {
//             margin-top: 10px;
//             background: linear-gradient(135deg, #ff5a1f, #ff7a45);
//             color: white;
//             border: none;
//             padding: 18px 34px;
//             border-radius: 16px;
//             font-size: 16px;
//             font-weight: 700;
//             cursor: pointer;
//             display: inline-flex;
//             align-items: center;
//             gap: 12px;
//             transition: 0.35s ease;
//             box-shadow: 0 15px 40px rgba(255, 90, 31, 0.35);
//           }

//           .security-btn:hover {
//             transform: translateY(-5px) scale(1.03);
//             box-shadow: 0 22px 50px rgba(255, 90, 31, 0.45);
//           }

//           .security-btn svg {
//             transition: 0.3s ease;
//           }

//           .security-btn:hover svg {
//             transform: translateX(5px);
//           }
//         `}
//       </style>

//       <section className="security-section">
//         <div className="security-container">
//           {/* LEFT IMAGE */}
//           <motion.div
//             className="security-image-wrapper"
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//           >
//             <div className="corner-top"></div>

//             <motion.img
//               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
//               alt="Security"
//               className="security-image"
//               whileHover={{ scale: 1.03 }}
//             />

//             <motion.div
//               className="experience-card"
//               initial={{ opacity: 0, y: -40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//             >
//               <h2>14+</h2>
//               <p>YEARS OF EXPERIENCE</p>
//             </motion.div>

//             <div className="corner-bottom"></div>
//           </motion.div>

//           {/* RIGHT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//           >
//             <div className="security-subtitle">
//               <div className="subtitle-line"></div>
//               <span>Your Trusted Security Partner Since 2010</span>
//             </div>

//             <motion.h2
//               className="security-heading"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.7 }}
//             >
//               Upgrade Your Security With Smart Protection
//             </motion.h2>

//             <motion.p
//               className="security-description"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               SHADOWGUARD SECURITY delivers modern and dependable protection
//               services for businesses, homes, industries, and private events.
//               Our experienced professionals combine advanced surveillance, rapid
//               response systems, and intelligent monitoring to ensure complete
//               safety and peace of mind.
//             </motion.p>

//             {/* FEATURE 1 */}
//             <motion.div
//               className="feature-box"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.7 }}
//               whileHover={{ x: 8 }}
//             >
//               <div className="feature-icon">
//                 <ShieldCheck size={34} />
//               </div>

//               <div className="feature-content">
//                 <h3>Advanced Surveillance</h3>

//                 <p>
//                   Real-time CCTV monitoring and AI-powered observation systems
//                   ensure maximum protection for your property and assets.
//                 </p>
//               </div>
//             </motion.div>

//             {/* FEATURE 2 */}
//             <motion.div
//               className="feature-box"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.7 }}
//               whileHover={{ x: 8 }}
//             >
//               <div
//                 className="feature-icon"
//                 style={{
//                   background: "linear-gradient(135deg, #142850, #1d3c78)",
//                 }}
//               >
//                 <BadgeCheck size={34} />
//               </div>

//               <div className="feature-content">
//                 <h3>Professional Security Team</h3>

//                 <p>
//                   Our licensed guards are highly trained in emergency response,
//                   access control, event management, and risk prevention.
//                 </p>
//               </div>
//             </motion.div>

//             {/* FEATURE 3 */}
//             <motion.div
//               className="feature-box"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.7 }}
//               whileHover={{ x: 8 }}
//             >
//               <div className="feature-icon">
//                 <Lock size={34} />
//               </div>

//               <div className="feature-content">
//                 <h3>24/7 Protection & Support</h3>

//                 <p>
//                   We provide continuous monitoring and instant support to keep
//                   your business, employees, and loved ones safe at all times.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.button
//               className="security-btn"
//               onClick={handleScroll}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Free Security Consultation
//               <ArrowRight size={20} />
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default SecurityUpgradeSection;
import React from "react";
import { ShieldCheck, BadgeCheck, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function SecurityUpgradeSection() {
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

          .security-section {

            background:
              linear-gradient(
                to bottom,
                #081225,
                #0b1730
              );

            padding: 110px 8%;

            overflow: hidden;

            position: relative;
          }

          .security-section::before {

            content: "";

            position: absolute;

            width: 500px;
            height: 500px;

            background:
              rgba(255, 90, 31, 0.08);

            border-radius: 50%;

            top: -180px;
            right: -120px;

            filter: blur(60px);

            animation:
              glowPulse 6s ease-in-out infinite;
          }

          @keyframes glowPulse {

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

          .security-container {

            max-width: 1350px;

            margin: auto;

            display: grid;

            grid-template-columns: 1fr 1.1fr;

            gap: 90px;

            align-items: center;

            position: relative;

            z-index: 2;
          }

          /* IMAGE */

          .security-image-wrapper {

            position: relative;
          }

          .security-image {

            width: 100%;

            height: 760px;

            object-fit: cover;

            border-radius: 30px;

            box-shadow:
              0 25px 70px rgba(0,0,0,0.45);

            transition: 0.4s ease;
          }

          .security-image:hover {

            transform: scale(1.02);
          }

          .experience-card {

            position: absolute;

            top: 40px;
            right: -25px;

            background:
              rgba(8, 18, 37, 0.96);

            backdrop-filter: blur(12px);

            border:
              1px solid rgba(255,255,255,0.08);

            padding: 30px 42px;

            border-radius: 24px;

            box-shadow:
              0 20px 50px rgba(0,0,0,0.35);

            animation:
              floatCard 4s ease-in-out infinite;
          }

          @keyframes floatCard {

            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-10px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          .experience-card h2 {

            font-size: 60px;

            color: #ff5a1f;

            margin-bottom: 6px;

            line-height: 1;
          }

          .experience-card p {

            color: #ffffff;

            font-weight: 700;

            letter-spacing: 2px;

            font-size: 14px;
          }

          .corner-top,
          .corner-bottom {

            position: absolute;

            width: 90px;
            height: 90px;

            border: 6px solid #ff5a1f;
          }

          .corner-top {

            top: -15px;
            left: -15px;

            border-right: none;
            border-bottom: none;

            border-radius: 18px 0 0 0;
          }

          .corner-bottom {

            bottom: -15px;
            right: -15px;

            border-left: none;
            border-top: none;

            border-radius: 0 0 18px 0;
          }

          /* RIGHT */

          .security-subtitle {

            display: flex;

            align-items: center;

            gap: 14px;

            color: #ff5a1f;

            font-weight: 700;

            letter-spacing: 1px;

            margin-bottom: 22px;
          }

          .subtitle-line {

            width: 70px;
            height: 2px;

            background: #ff5a1f;
          }

          .security-heading {

            font-size: 60px;

            line-height: 1.1;

            color: white;

            font-weight: 800;

            margin-bottom: 28px;

            text-transform: uppercase;
          }

          .security-description {

            color: #c9d3e0;

            line-height: 2;

            margin-bottom: 50px;

            font-size: 16px;
          }

          /* FEATURES */

          .feature-box {

            display: flex;

            gap: 24px;

            margin-bottom: 38px;

            align-items: flex-start;

            padding: 20px;

            border-radius: 22px;

            transition: 0.35s ease;
          }

          .feature-box:hover {

            background:
              rgba(255,255,255,0.04);

            transform: translateX(8px);
          }

          .feature-icon {

            width: 78px;
            height: 78px;
            min-width: 78px;

            border-radius: 22px;

            background:
              linear-gradient(
                135deg,
                #ff5a1f,
                #ff7a45
              );

            display: flex;

            align-items: center;
            justify-content: center;

            color: white;

            box-shadow:
              0 12px 35px rgba(255, 90, 31, 0.35);

            animation:
              iconFloat 3s ease-in-out infinite;
          }

          @keyframes iconFloat {

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

          .feature-content h3 {

            font-size: 24px;

            color: white;

            margin-bottom: 12px;

            text-transform: uppercase;
          }

          .feature-content p {

            color: #b9c5d4;

            line-height: 1.9;
          }

          /* BUTTON */

          .security-btn {

            margin-top: 10px;

            background:
              linear-gradient(
                135deg,
                #ff5a1f,
                #ff7a45
              );

            color: white;

            border: none;

            padding: 18px 34px;

            border-radius: 16px;

            font-size: 16px;

            font-weight: 700;

            cursor: pointer;

            display: inline-flex;

            align-items: center;

            gap: 12px;

            transition: 0.35s ease;

            box-shadow:
              0 15px 40px rgba(255, 90, 31, 0.35);
          }

          .security-btn:hover {

            transform:
              translateY(-5px)
              scale(1.03);

            box-shadow:
              0 22px 50px rgba(255, 90, 31, 0.45);
          }

          .security-btn svg {

            transition: 0.3s ease;
          }

          .security-btn:hover svg {

            transform: translateX(5px);
          }

          /* ================= RESPONSIVE ================= */

          @media (max-width: 992px) {

            .security-container {

              grid-template-columns: 1fr;

              gap: 55px;
            }

            .security-heading {

              font-size: 42px;

              text-align: center;
            }

            .security-subtitle {

              justify-content: center;

              text-align: center;
            }

            .security-description {

              text-align: center;

              margin-bottom: 35px;
            }

            .security-btn {

              width: 100%;

              justify-content: center;
            }

            .security-image {

              height: 560px;
            }

            .experience-card {

              right: 20px;
            }
          }

          @media (max-width: 768px) {

            .security-section {

              padding: 80px 5%;
            }

            .security-container {

              gap: 40px;
            }

            .security-image {

              height: 430px;

              border-radius: 24px;
            }

            .security-heading {

              font-size: 30px;

              line-height: 1.25;
            }

            .security-description {

              font-size: 14px;

              line-height: 1.9;
            }

            .feature-box {

              flex-direction: column;

              gap: 18px;

              padding: 18px;
            }

            .feature-icon {

              width: 65px;
              height: 65px;
              min-width: 65px;

              border-radius: 18px;
            }

            .feature-content h3 {

              font-size: 20px;
            }

            .feature-content p {

              font-size: 14px;

              line-height: 1.8;
            }

            .experience-card {

              top: 18px;

              right: 15px;

              padding: 18px 22px;

              border-radius: 18px;
            }

            .experience-card h2 {

              font-size: 34px;
            }

            .experience-card p {

              font-size: 11px;

              letter-spacing: 1px;
            }

            .corner-top,
            .corner-bottom {

              width: 55px;
              height: 55px;

              border-width: 4px;
            }

            .security-btn {

              padding: 15px 20px;

              font-size: 14px;

              border-radius: 14px;
            }
          }

          @media (max-width: 480px) {

            .security-section {

              padding: 70px 4%;
            }

            .security-heading {

              font-size: 25px;
            }

            .security-subtitle span {

              font-size: 12px;
            }

            .subtitle-line {

              width: 35px;
            }

            .security-image {

              height: 350px;
            }

            .feature-box {

              margin-bottom: 22px;
            }

            .feature-content h3 {

              font-size: 18px;
            }

            .feature-content p {

              font-size: 13px;
            }

            .security-btn {

              width: 100%;

              font-size: 13px;
            }
          }
        `}
      </style>

      <section className="security-section">
        <div className="security-container">
          {/* LEFT IMAGE */}

          <motion.div
            className="security-image-wrapper"
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="corner-top"></div>

            <motion.img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Security"
              className="security-image"
              whileHover={{
                scale: 1.03,
              }}
            />

            <motion.div
              className="experience-card"
              initial={{
                opacity: 0,
                y: -40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
            >
              <h2>14+</h2>
              <p>YEARS OF EXPERIENCE</p>
            </motion.div>

            <div className="corner-bottom"></div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="security-subtitle">
              <div className="subtitle-line"></div>

              <span>Your Trusted Security Partner Since 2010</span>
            </div>

            <motion.h2
              className="security-heading"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
            >
              Upgrade Your Security With Smart Protection
            </motion.h2>

            <motion.p
              className="security-description"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
            >
              SHADOWGUARD SECURITY delivers modern and dependable protection
              services for businesses, homes, industries, and private events.
              Our experienced professionals combine advanced surveillance, rapid
              response systems, and intelligent monitoring to ensure complete
              safety and peace of mind.
            </motion.p>

            {/* FEATURE 1 */}

            <motion.div
              className="feature-box"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
            >
              <div className="feature-icon">
                <ShieldCheck size={34} />
              </div>

              <div className="feature-content">
                <h3>Advanced Surveillance</h3>

                <p>
                  Real-time CCTV monitoring and AI-powered observation systems
                  ensure maximum protection for your property and assets.
                </p>
              </div>
            </motion.div>

            {/* FEATURE 2 */}

            <motion.div
              className="feature-box"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
            >
              <div
                className="feature-icon"
                style={{
                  background: "linear-gradient(135deg, #142850, #1d3c78)",
                }}
              >
                <BadgeCheck size={34} />
              </div>

              <div className="feature-content">
                <h3>Professional Security Team</h3>

                <p>
                  Our licensed guards are highly trained in emergency response,
                  access control, event management, and risk prevention.
                </p>
              </div>
            </motion.div>

            {/* FEATURE 3 */}

            <motion.div
              className="feature-box"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.7,
              }}
            >
              <div className="feature-icon">
                <Lock size={34} />
              </div>

              <div className="feature-content">
                <h3>24/7 Protection & Support</h3>

                <p>
                  We provide continuous monitoring and instant support to keep
                  your business, employees, and loved ones safe at all times.
                </p>
              </div>
            </motion.div>

            <motion.button
              className="security-btn"
              onClick={handleScroll}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Get Free Security Consultation
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SecurityUpgradeSection;

// import { useState } from "react";

// function Services() {
//   const [openId, setOpenId] = useState(null);

//   const toggleBox = (id) => {
//     setOpenId(openId === id ? null : id);
//   };

//   const accent = "#ff4d1c";
//   const muted = "#6b7280";
//   const dark = "#111827";

//   const services = [
//     {
//       id: 1,
//       title: "Residential Security",
//       icon: "🏠",
//       short: "Protecting homes, apartments, and gated communities.",
//       more: "Our residential security services focus on complete household safety including access control, patrols, CCTV monitoring, and resident protection.",
//     },
//     {
//       id: 2,
//       title: "Commercial Security",
//       icon: "🏢",
//       short: "Security for offices, warehouses, and retail spaces.",
//       more: "We protect business premises by preventing theft, managing access points, and ensuring employee and asset safety.",
//     },
//     {
//       id: 3,
//       title: "Construction Site Security",
//       icon: "🚧",
//       short: "Prevent theft, vandalism, and unauthorized access.",
//       more: "Our guards protect materials, equipment, and sites with night patrols and controlled entry.",
//     },
//     {
//       id: 4,
//       title: "Mobile Patrol Services",
//       icon: "🚓",
//       short: "Scheduled and random patrol services.",
//       more: "Marked and unmarked patrol vehicles ensure visibility, deterrence, and rapid response.",
//     },
//     {
//       id: 5,
//       title: "Event Security",
//       icon: "🎪",
//       short: "Crowd control and entry management.",
//       more: "Professional security for concerts, weddings, festivals, and private events.",
//     },
//     {
//       id: 6,
//       title: "Access Control & Entry Management",
//       icon: "🚪",
//       short: "Controlled entry and visitor verification.",
//       more: "ID verification, visitor logs, gate supervision, and restricted access management.",
//     },
//     {
//       id: 7,
//       title: "Loss Prevention & Retail Security",
//       icon: "🛒",
//       short: "Reduce theft and inventory loss.",
//       more: "Shoplifting prevention, internal theft control, and surveillance monitoring.",
//     },
//     {
//       id: 8,
//       title: "Healthcare Facility Security",
//       icon: "🏥",
//       short: "Security for hospitals and clinics.",
//       more: "Patient safety, staff protection, and calm environment maintenance.",
//     },
//     {
//       id: 9,
//       title: "Parking Lot & Traffic Control",
//       icon: "🚗",
//       short: "Safe traffic flow and parking management.",
//       more: "Vehicle control, pedestrian safety, and accident prevention.",
//     },
//     {
//       id: 10,
//       title: "24/7 On-Site Security Coverage",
//       icon: "🕒",
//       short: "Round-the-clock protection services.",
//       more: "Day and night guard presence for continuous protection.",
//     },
//     {
//       id: 11,
//       title: "Emergency Response & Incident Reporting",
//       icon: "🚨",
//       short: "Rapid response and reporting.",
//       more: "Immediate response, incident documentation, and authority coordination.",
//     },
//     {
//       id: 12,
//       title: "Fire Watch Security",
//       icon: "🔥",
//       short: "Fire hazard monitoring.",
//       more: "Fire risk monitoring, compliance support, and emergency readiness.",
//     },
//     {
//       id: 13,
//       title: "Surveillance Monitoring & CCTV Observation",
//       icon: "📹",
//       short: "Real-time surveillance monitoring.",
//       more: "Continuous CCTV observation and threat detection.",
//     },
//   ];

//   return (
//     <section id="services" style={{ background: "#ffffff", padding: "80px 0" }}>
//       <div className="container">
//         <div className="text-center mb-5 px-3">
//           <h2 className="fw-bold">Our Security Services</h2>
//           <p className="text-muted">
//             Professional security solutions designed for complete protection.
//           </p>
//         </div>

//         <div className="row g-4 align-items-start">
//           {services.map((s) => (
//             <div className="col-12 col-sm-6 col-lg-4 d-flex" key={s.id}>
//               <div
//                 style={{
//                   background: "#ffffff",
//                   padding: "28px",
//                   borderRadius: "16px",
//                   width: "100%",
//                   border:
//                     openId === s.id
//                       ? `2px solid ${accent}`
//                       : "1px solid #e5e7eb",
//                   borderTop:
//                     openId === s.id
//                       ? `4px solid ${accent}`
//                       : "4px solid transparent",
//                   boxShadow:
//                     openId === s.id
//                       ? "0 22px 40px rgba(0,0,0,0.22)"
//                       : "0 10px 22px rgba(0,0,0,0.10)",
//                   transform:
//                     openId === s.id ? "translateY(-6px)" : "translateY(0)",
//                   transition: "all 0.35s ease",
//                   alignSelf: "flex-start",
//                 }}
//                 onMouseEnter={(e) => {
//                   if (window.innerWidth > 768) {
//                     e.currentTarget.style.transform = "translateY(-6px)";
//                     e.currentTarget.style.boxShadow =
//                       "0 22px 40px rgba(0,0,0,0.22)";
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (window.innerWidth > 768 && openId !== s.id) {
//                     e.currentTarget.style.transform = "translateY(0)";
//                     e.currentTarget.style.boxShadow =
//                       "0 10px 22px rgba(0,0,0,0.10)";
//                   }
//                 }}
//               >
//                 <div style={{ fontSize: "36px", marginBottom: "12px" }}>
//                   {s.icon}
//                 </div>

//                 <h5 className="fw-semibold" style={{ color: accent }}>
//                   {s.title}
//                 </h5>

//                 <p style={{ color: muted }}>{s.short}</p>

//                 {openId === s.id && (
//                   <p
//                     style={{
//                       color: dark,
//                       marginTop: "10px",
//                       lineHeight: "1.7",
//                     }}
//                   >
//                     {s.more}
//                   </p>
//                 )}

//                 <button
//                   onClick={() => toggleBox(s.id)}
//                   style={{
//                     background: "none",
//                     border: "none",
//                     color: accent,
//                     fontWeight: 600,
//                     marginTop: "12px",
//                     cursor: "pointer",
//                     padding: 0,
//                   }}
//                 >
//                   {openId === s.id ? "Learn Less ↑" : "Learn More →"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  HardHat,
  CarFront,
  Users,
  DoorOpen,
  ShoppingBag,
  Hospital,
  ParkingCircle,
  Clock3,
  Siren,
  Flame,
  Cctv,
} from "lucide-react";

function Services() {
  const [openId, setOpenId] = useState(null);

  const toggleBox = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const accent = "#ff6b2c";
  const muted = "#b8c4d6";

  const services = [
    {
      id: 1,
      title: "Residential Security",
      icon: <ShieldCheck size={34} />,
      short: "Protecting homes, apartments, and gated communities.",
      more: "Our residential security solutions include 24/7 patrols, smart access control, CCTV surveillance, visitor management, emergency response, perimeter checks, and complete family safety monitoring.",
    },

    {
      id: 2,
      title: "Commercial Security",
      icon: <Building2 size={34} />,
      short: "Security for offices, warehouses, and retail spaces.",
      more: "We protect businesses with professional guards, access management, theft prevention systems, surveillance monitoring, and rapid incident response for commercial properties.",
    },

    {
      id: 3,
      title: "Construction Site Security",
      icon: <HardHat size={34} />,
      short: "Prevent theft, vandalism, and unauthorized access.",
      more: "Our trained officers secure construction zones with overnight patrols, material protection, equipment monitoring, entry supervision, and emergency site response.",
    },

    {
      id: 4,
      title: "Mobile Patrol Services",
      icon: <CarFront size={34} />,
      short: "Scheduled and random patrol services.",
      more: "Fast-response mobile patrol units provide visible deterrence, alarm checks, property inspections, and rapid support whenever suspicious activity is detected.",
    },

    {
      id: 5,
      title: "Event Security",
      icon: <Users size={34} />,
      short: "Crowd control and entry management.",
      more: "Professional event protection for concerts, weddings, conferences, VIP gatherings, and festivals with crowd safety and emergency management support.",
    },

    {
      id: 6,
      title: "Access Control",
      icon: <DoorOpen size={34} />,
      short: "Controlled entry and visitor verification.",
      more: "We manage restricted access areas with visitor logging, ID verification, gate monitoring, entry screening, and checkpoint security systems.",
    },

    {
      id: 7,
      title: "Retail Security",
      icon: <ShoppingBag size={34} />,
      short: "Reduce theft and inventory loss.",
      more: "Retail-focused security solutions designed to prevent shoplifting, reduce shrinkage, monitor suspicious behavior, and maintain customer safety.",
    },

    {
      id: 8,
      title: "Healthcare Security",
      icon: <Hospital size={34} />,
      short: "Security for hospitals and clinics.",
      more: "Protecting patients, healthcare staff, medical equipment, visitors, and sensitive areas while maintaining a calm and secure environment.",
    },

    {
      id: 9,
      title: "Traffic & Parking Control",
      icon: <ParkingCircle size={34} />,
      short: "Safe traffic flow and parking management.",
      more: "Vehicle coordination, parking supervision, pedestrian guidance, traffic control, and safe movement management for busy properties and events.",
    },

    {
      id: 10,
      title: "24/7 On-Site Security",
      icon: <Clock3 size={34} />,
      short: "Round-the-clock protection services.",
      more: "Continuous security coverage with dedicated guards, active surveillance, regular patrols, and emergency support day and night.",
    },

    {
      id: 11,
      title: "Emergency Response",
      icon: <Siren size={34} />,
      short: "Rapid response and reporting.",
      more: "Immediate response to incidents with accurate reporting, authority coordination, emergency handling, and professional risk management.",
    },

    {
      id: 12,
      title: "Fire Watch Security",
      icon: <Flame size={34} />,
      short: "Fire hazard monitoring and prevention.",
      more: "Specialized fire watch services including hazard inspections, prevention monitoring, emergency preparedness, and compliance support.",
    },

    {
      id: 13,
      title: "CCTV Monitoring",
      icon: <Cctv size={34} />,
      short: "Real-time surveillance monitoring.",
      more: "Advanced CCTV observation systems with live monitoring, suspicious activity detection, remote observation, and incident recording.",
    },
  ];

  return (
    <>
      <style>
        {`
          .services-section {
            background:
              radial-gradient(circle at top left, rgba(255,107,44,0.08), transparent 28%),
              radial-gradient(circle at bottom right, rgba(0,102,255,0.08), transparent 28%),
              linear-gradient(to bottom, #07111f, #0b1730);
            padding: 110px 8%;
            overflow: hidden;
          }

          .services-container {
            max-width: 1400px;
            margin: auto;
          }

          .services-header {
            text-align: center;
            margin-bottom: 70px;
          }

          .services-subtitle {
            color: ${accent};
            font-weight: 700;
            letter-spacing: 4px;
            margin-bottom: 18px;
          }

          .services-title {
            font-size: 58px;
            font-weight: 800;
            color: white;
            margin-bottom: 18px;
          }

          .services-text {
            color: ${muted};
            max-width: 760px;
            margin: auto;
            line-height: 1.9;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            align-items: start;
          }

          .service-card {
            background: rgba(10,18,35,0.92);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 30px;
            padding: 34px;
            transition: 0.4s ease;
            position: relative;
            overflow: hidden;
          }

          .service-card:hover {
            transform: translateY(-10px);
            border-color: rgba(255,107,44,0.3);
            box-shadow: 0 25px 60px rgba(0,0,0,0.45);
          }

          .service-card::before {
            content: "";
            position: absolute;
            width: 180px;
            height: 180px;
            background: rgba(255,107,44,0.08);
            border-radius: 50%;
            top: -60px;
            right: -60px;
            filter: blur(20px);
          }

          .service-icon {
            width: 82px;
            height: 82px;
            border-radius: 24px;
            background: linear-gradient(135deg, #ff6b2c, #ff8a5b);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 24px;
            box-shadow: 0 18px 40px rgba(255,107,44,0.35);
            position: relative;
            z-index: 2;
          }

          .service-title {
            color: white;
            font-size: 26px;
            font-weight: 700;
            margin-bottom: 14px;
            position: relative;
            z-index: 2;
          }

          .service-short {
            color: ${muted};
            line-height: 1.9;
            margin-bottom: 16px;
            position: relative;
            z-index: 2;
          }

          /* MAIN FIX */

          .details-wrapper {
            overflow: hidden;
          }

          .service-more {
            color: #ffffff;
            line-height: 1.9;
            font-size: 15px;
            margin-top: 12px;
            margin-bottom: 18px;
            padding-top: 14px;
            border-top: 1px solid rgba(255,255,255,0.08);
            display: block;
            opacity: 1;
            visibility: visible;
            position: relative;
            z-index: 2;
          }

          .service-btn {
            background: none;
            border: none;
            color: ${accent};
            font-weight: 700;
            cursor: pointer;
            padding: 0;
            transition: 0.3s ease;
            position: relative;
            z-index: 2;
          }

          .service-btn:hover {
            transform: translateX(5px);
            color: #ff8a5b;
          }

          @media (max-width: 1100px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .services-title {
              font-size: 44px;
            }
          }

          @media (max-width: 700px) {

            .services-section {
              padding: 80px 5%;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .services-title {
              font-size: 34px;
            }

            .service-card {
              padding: 28px;
            }
          }
        `}
      </style>

      <section className="services-section">
        <div className="services-container">
          <motion.div
            className="services-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="services-subtitle">OUR SERVICES</p>

            <h2 className="services-title">Premium Security Solutions</h2>

            <p className="services-text">
              SHADOWGUARD SECURITY provides advanced protection services for
              residential, commercial, industrial, and event environments with
              trained professionals and modern surveillance technology.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((s, index) => (
              <motion.div
                key={s.id}
                className="service-card"
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{s.icon}</div>

                <h3 className="service-title">{s.title}</h3>

                <p className="service-short">{s.short}</p>

                {/* FIXED LEARN MORE */}

                <AnimatePresence initial={false}>
                  {openId === s.id && (
                    <motion.div
                      className="details-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="service-more">{s.more}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button className="service-btn" onClick={() => toggleBox(s.id)}>
                  {openId === s.id ? "Learn Less ↑" : "Learn More →"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

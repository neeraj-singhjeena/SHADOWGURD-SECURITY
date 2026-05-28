// import React, { useState } from "react";
// import { Plus, Minus } from "lucide-react";
// import { motion } from "framer-motion";

// const faqData = [
//   {
//     question: "What security services do you provide?",
//     answer:
//       "We provide CCTV monitoring, event security, professional guards, industrial protection, and 24/7 emergency security solutions.",
//   },
//   {
//     question: "Are your security guards professionally trained?",
//     answer:
//       "Yes, all our guards are highly trained, licensed, and experienced in handling various security situations professionally.",
//   },
//   {
//     question: "Do you provide security for private events?",
//     answer:
//       "Absolutely. We provide customized security for weddings, concerts, business meetings, and VIP events.",
//   },
//   {
//     question: "Can I get emergency security support?",
//     answer:
//       "Yes, our emergency response team is available 24/7 for urgent security requirements and assistance.",
//   },
//   {
//     question: "How can I contact your security team?",
//     answer:
//       "You can easily contact us through phone, email, WhatsApp, or the contact form available on our website.",
//   },
// ];

// function FAQSection() {
//   const [active, setActive] = useState(0);

//   const toggleFAQ = (index) => {
//     setActive(active === index ? null : index);
//   };

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
//           .faq-section {
//             background: linear-gradient(
//                 rgba(7, 15, 35, 0.94),
//                 rgba(7, 15, 35, 0.94)
//               ),
//               url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop");

//             background-size: cover;
//             background-position: center;
//             padding: 110px 8%;
//             color: white;
//             position: relative;
//             overflow: hidden;
//           }

//           .faq-section::before {
//             content: "";
//             position: absolute;
//             width: 450px;
//             height: 450px;
//             background: rgba(255, 90, 31, 0.08);
//             border-radius: 50%;
//             top: -120px;
//             right: -120px;
//             filter: blur(40px);
//             animation: glowMove 6s ease-in-out infinite;
//           }

//           @keyframes glowMove {
//             0% {
//               transform: scale(1);
//             }

//             50% {
//               transform: scale(1.15);
//             }

//             100% {
//               transform: scale(1);
//             }
//           }

//           .faq-container {
//             max-width: 1300px;
//             margin: auto;
//             display: grid;
//             grid-template-columns: 1fr 1.2fr;
//             gap: 80px;
//             position: relative;
//             z-index: 2;
//           }

//           .faq-tag {
//             color: #ff5a1f;
//             font-size: 14px;
//             letter-spacing: 5px;
//             font-weight: 700;
//             margin-bottom: 18px;
//           }

//           .faq-heading {
//             font-size: 60px;
//             font-weight: 800;
//             line-height: 1.1;
//             margin-bottom: 45px;
//           }

//           .faq-card {
//             background: rgba(255,255,255,0.06);
//             backdrop-filter: blur(10px);
//             border: 1px solid rgba(255,255,255,0.08);
//             padding: 45px;
//             border-radius: 28px;
//             box-shadow: 0 15px 50px rgba(0,0,0,0.35);
//             transition: 0.4s ease;
//           }

//           .faq-card:hover {
//             transform: translateY(-10px);
//           }

//           .faq-card h3 {
//             font-size: 32px;
//             margin-bottom: 22px;
//             color: #ffffff;
//           }

//           .faq-card p {
//             color: #cfcfcf;
//             line-height: 1.9;
//             margin-bottom: 35px;
//             font-size: 16px;
//           }

//           .faq-btn {
//             background: linear-gradient(135deg, #ff5a1f, #ff7b47);
//             border: none;
//             padding: 16px 36px;
//             color: white;
//             font-size: 16px;
//             font-weight: 700;
//             border-radius: 16px;
//             cursor: pointer;
//             transition: all 0.35s ease;
//             box-shadow: 0 10px 30px rgba(255, 90, 31, 0.35);
//           }

//           .faq-btn:hover {
//             transform: translateY(-5px) scale(1.04);
//             box-shadow: 0 18px 40px rgba(255, 90, 31, 0.5);
//           }

//           .faq-right {
//             background: rgba(255,255,255,0.04);
//             border: 1px solid rgba(255,255,255,0.08);
//             border-radius: 28px;
//             padding: 20px 35px;
//             backdrop-filter: blur(12px);
//             box-shadow: 0 15px 40px rgba(0,0,0,0.3);
//           }

//           .faq-item {
//             border-bottom: 1px solid rgba(255,255,255,0.12);
//             padding: 28px 0;
//             cursor: pointer;
//             transition: 0.3s ease;
//           }

//           .faq-item:last-child {
//             border-bottom: none;
//           }

//           .faq-question {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             gap: 20px;
//           }

//           .faq-question h3 {
//             font-size: 20px;
//             font-weight: 600;
//             color: #fff;
//             transition: 0.3s ease;
//           }

//           .faq-item:hover .faq-question h3 {
//             color: #ff5a1f;
//           }

//           .faq-answer {
//             margin-top: 18px;
//             color: #d7d7d7;
//             line-height: 1.9;
//             font-size: 15px;
//           }

//           .faq-icon {
//             width: 45px;
//             height: 45px;
//             min-width: 45px;
//             border-radius: 50%;
//             background: rgba(255, 90, 31, 0.12);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             color: #ff5a1f;
//             transition: all 0.35s ease;
//           }

//           .faq-item:hover .faq-icon {
//             background: #ff5a1f;
//             color: white;
//             transform: rotate(90deg);
//           }

//           .active-icon {
//             background: #ff5a1f;
//             color: white;
//             transform: rotate(180deg);
//           }

//           @media (max-width: 992px) {
//             .faq-container {
//               grid-template-columns: 1fr;
//             }

//             .faq-heading {
//               font-size: 44px;
//             }
//           }

//           @media (max-width: 600px) {
//             .faq-section {
//               padding: 80px 5%;
//             }

//             .faq-heading {
//               font-size: 34px;
//             }
//           }
//         `}
//       </style>

//       <section className="faq-section">
//         <div className="faq-container">
//           {/* LEFT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <p className="faq-tag">F.A.Q</p>

//             <h2 className="faq-heading">
//               Frequently Asked <br />
//               Questions
//             </h2>

//             <motion.div className="faq-card" whileHover={{ scale: 1.02 }}>
//               <h3>Need Security Assistance?</h3>

//               <p>
//                 Our expert security team delivers trusted protection services
//                 for homes, businesses, industries, and private events with
//                 complete professionalism and reliability.
//               </p>

//               <button className="faq-btn" onClick={handleScroll}>
//                 Get In Touch
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE */}
//           <motion.div
//             className="faq-right"
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             {faqData.map((item, index) => (
//               <motion.div
//                 className="faq-item"
//                 key={index}
//                 onClick={() => toggleFAQ(index)}
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="faq-question">
//                   <h3>{item.question}</h3>

//                   <div
//                     className={`faq-icon ${
//                       active === index ? "active-icon" : ""
//                     }`}
//                   >
//                     {active === index ? (
//                       <Minus size={22} />
//                     ) : (
//                       <Plus size={22} />
//                     )}
//                   </div>
//                 </div>

//                 {active === index && (
//                   <motion.p
//                     className="faq-answer"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {item.answer}
//                   </motion.p>
//                 )}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default FAQSection;
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What security services do you provide?",
    answer:
      "We provide CCTV monitoring, event security, professional guards, industrial protection, mobile patrol services, access control systems, and 24/7 emergency security solutions for residential and commercial properties.",
  },
  {
    question: "Are your security guards professionally trained?",
    answer:
      "Yes, all our guards are professionally trained, licensed, and experienced in emergency response, surveillance monitoring, crowd management, and risk prevention operations.",
  },
  {
    question: "Do you provide security for private events?",
    answer:
      "Absolutely. We provide tailored event security services for weddings, concerts, business meetings, festivals, VIP gatherings, and private functions with complete crowd control support.",
  },
  {
    question: "Can I get emergency security support?",
    answer:
      "Yes, our rapid response security team is available 24/7 to handle urgent situations, emergency incidents, alarm responses, and immediate protection requirements.",
  },
  {
    question: "How can I contact your security team?",
    answer:
      "You can contact our team through WhatsApp, phone, email, or by filling out the contact form available on the website. Our support team responds quickly to all inquiries.",
  },
];

function FAQSection() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

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
          .faq-section {
            background:
              radial-gradient(circle at top left, rgba(255,98,0,0.08), transparent 28%),
              radial-gradient(circle at bottom right, rgba(0,132,255,0.08), transparent 28%),
              linear-gradient(to bottom, #07111f, #0b1730);

            padding: 110px 8%;
            color: white;
            position: relative;
            overflow: hidden;
          }

          .faq-glow {
            position: absolute;
            width: 500px;
            height: 500px;
            background: rgba(255,98,0,0.08);
            border-radius: 50%;
            top: -180px;
            right: -140px;
            filter: blur(70px);
            animation: floatGlow 7s ease-in-out infinite;
          }

          @keyframes floatGlow {

            0% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.15);
            }

            100% {
              transform: scale(1);
            }
          }

          .faq-container {
            max-width: 1350px;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 70px;
            position: relative;
            z-index: 2;
          }

          .faq-tag {
            color: #ff6b2c;
            letter-spacing: 5px;
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .faq-heading {
            font-size: 58px;
            line-height: 1.1;
            font-weight: 800;
            margin-bottom: 40px;
          }

          .faq-card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.08);
            backdrop-filter: blur(14px);
            border-radius: 28px;
            padding: 45px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.35);
            transition: 0.4s ease;
          }

          .faq-card:hover {
            transform: translateY(-8px);
          }

          .faq-card h3 {
            font-size: 32px;
            margin-bottom: 22px;
          }

          .faq-card p {
            color: #cfd7e3;
            line-height: 1.9;
            margin-bottom: 35px;
          }

          .faq-btn {
            background: linear-gradient(135deg, #ff6b2c, #ff8757);
            border: none;
            color: white;
            padding: 16px 34px;
            border-radius: 16px;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: 0.35s ease;
            box-shadow: 0 14px 35px rgba(255,107,44,0.35);
          }

          .faq-btn:hover {
            transform: translateY(-5px) scale(1.03);
            box-shadow: 0 22px 45px rgba(255,107,44,0.45);
          }

          .faq-right {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 28px;
            padding: 15px 35px;
            backdrop-filter: blur(12px);
            box-shadow: 0 18px 45px rgba(0,0,0,0.3);
          }

          .faq-item {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 28px 0;
            cursor: pointer;
          }

          .faq-item:last-child {
            border-bottom: none;
          }

          .faq-question {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
          }

          .faq-question h3 {
            font-size: 20px;
            font-weight: 600;
            transition: 0.3s ease;
          }

          .faq-item:hover .faq-question h3 {
            color: #ff6b2c;
          }

          .faq-icon {
            width: 48px;
            height: 48px;
            min-width: 48px;
            border-radius: 50%;
            background: rgba(255,107,44,0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ff6b2c;
            transition: 0.35s ease;
          }

          .faq-item:hover .faq-icon {
            background: #ff6b2c;
            color: white;
            transform: rotate(90deg);
          }

          .active-icon {
            background: #ff6b2c;
            color: white;
            transform: rotate(180deg);
          }

          .faq-answer-wrapper {
            overflow: hidden;
          }

          .faq-answer {
            color: #d6dfeb;
            line-height: 1.9;
            font-size: 15px;
            padding-top: 16px;
          }

          @media (max-width: 992px) {

            .faq-container {
              grid-template-columns: 1fr;
            }

            .faq-heading {
              font-size: 44px;
            }
          }

          @media (max-width: 600px) {

            .faq-section {
              padding: 80px 5%;
            }

            .faq-heading {
              font-size: 34px;
            }

            .faq-card {
              padding: 30px;
            }

            .faq-right {
              padding: 10px 22px;
            }
          }
        `}
      </style>

      <section className="faq-section">
        <div className="faq-glow"></div>

        <div className="faq-container">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="faq-tag">F.A.Q</p>

            <h2 className="faq-heading">
              Frequently Asked <br />
              Questions
            </h2>

            <motion.div className="faq-card" whileHover={{ scale: 1.02 }}>
              <h3>Need Security Assistance?</h3>

              <p>
                Our professional security specialists provide trusted protection
                services for homes, businesses, industries, and private events
                with complete reliability and advanced monitoring systems.
              </p>

              <button className="faq-btn" onClick={handleScroll}>
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="faq-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {faqData.map((item, index) => (
              <motion.div
                className="faq-item"
                key={index}
                onClick={() => toggleFAQ(index)}
                whileHover={{ x: 5 }}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>

                  <div
                    className={`faq-icon ${
                      active === index ? "active-icon" : ""
                    }`}
                  >
                    {active === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.35 }}
                    >
                      <motion.p
                        className="faq-answer"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                      >
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default FAQSection;

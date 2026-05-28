import { motion } from "framer-motion";
import {
  ShieldCheck,
  RadioTower,
  Users,
  Lock,
  ArrowRight,
  ScanFace,
} from "lucide-react";

function WhySecuritySection() {
  const features = [
    {
      icon: <ShieldCheck size={34} />,
      title: "Smart Risk Protection",
      desc: "We use advanced monitoring systems and trained professionals to identify and prevent security threats before they escalate.",
    },

    {
      icon: <RadioTower size={34} />,
      title: "24/7 Live Monitoring",
      desc: "Continuous surveillance and instant emergency response ensure complete protection for your people and property.",
    },

    {
      icon: <Users size={34} />,
      title: "Professional Security Team",
      desc: "Our licensed guards are experienced in event security, access control, patrol management, and emergency handling.",
    },

    {
      icon: <Lock size={34} />,
      title: "Custom Security Solutions",
      desc: "Every client receives a personalized security strategy designed specifically for their business or property needs.",
    },

    {
      icon: <ScanFace size={34} />,
      title: "Advanced Access Control",
      desc: "Modern access systems and visitor verification provide enhanced protection for restricted and sensitive areas.",
    },

    {
      icon: <ArrowRight size={34} />,
      title: "Rapid Incident Response",
      desc: "Our response teams act quickly during emergencies to minimize risk and maintain safety at all times.",
    },
  ];

  return (
    <>
      <style>
        {`
          .why-security-section {

            position: relative;

            overflow: hidden;

            padding: 110px 7%;

            background:
              linear-gradient(
                135deg,
                #050816,
                #08152c,
                #0b1d3d
              );

            color: white;
          }

          .why-security-section::before {

            content: "";

            position: absolute;

            width: 450px;
            height: 450px;

            background:
              rgba(255,90,31,0.08);

            border-radius: 50%;

            top: -180px;
            left: -100px;

            filter: blur(70px);
          }

          .why-security-section::after {

            content: "";

            position: absolute;

            width: 400px;
            height: 400px;

            background:
              rgba(0,119,255,0.08);

            border-radius: 50%;

            bottom: -160px;
            right: -120px;

            filter: blur(70px);
          }

          .why-security-container {

            position: relative;

            z-index: 2;

            max-width: 1400px;

            margin: auto;

            display: grid;

            grid-template-columns: 0.9fr 1.4fr;

            gap: 70px;

            align-items: start;
          }

          /* LEFT */

          .why-security-left {

            position: sticky;

            top: 120px;
          }

          .why-badge {

            display: inline-flex;

            align-items: center;

            gap: 10px;

            padding: 10px 18px;

            border-radius: 50px;

            background:
              rgba(255,255,255,0.05);

            border:
              1px solid rgba(255,255,255,0.08);

            color: #ffb347;

            font-size: 14px;

            font-weight: 700;

            margin-bottom: 24px;
          }

          .badge-line {

            width: 35px;
            height: 2px;

            background:
              linear-gradient(
                90deg,
                #ff7a1a,
                #ffb347
              );
          }

          .why-main-heading {

            font-size: 60px;

            line-height: 1.05;

            font-weight: 900;

            text-transform: uppercase;

            margin-bottom: 25px;
          }

          .why-main-heading span {

            background:
              linear-gradient(
                135deg,
                #ff7a1a,
                #ffb347,
                #ffd77a
              );

            -webkit-background-clip: text;

            -webkit-text-fill-color: transparent;
          }

          .why-main-text {

            color: #c7d2e1;

            line-height: 2;

            font-size: 16px;
          }

          /* RIGHT */

          .why-security-grid {

            display: grid;

            grid-template-columns: repeat(2, 1fr);

            gap: 28px;
          }

          .why-security-card {

            position: relative;

            overflow: hidden;

            padding: 35px 30px;

            border-radius: 26px;

            background:
              linear-gradient(
                145deg,
                rgba(255,255,255,0.05),
                rgba(255,255,255,0.03)
              );

            border:
              1px solid rgba(255,255,255,0.08);

            backdrop-filter: blur(12px);

            transition: 0.4s ease;

            min-height: 280px;
          }

          .why-security-card:hover {

            transform:
              translateY(-10px);

            border:
              1px solid rgba(255,180,71,0.3);

            box-shadow:
              0 18px 45px rgba(0,0,0,0.35);
          }

          .why-security-card::before {

            content: "";

            position: absolute;

            width: 170px;
            height: 170px;

            border-radius: 50%;

            background:
              rgba(255,180,71,0.05);

            top: -70px;
            right: -70px;

            transition: 0.4s ease;
          }

          .why-security-card:hover::before {

            transform: scale(1.2);
          }

          .why-security-icon {

            width: 78px;
            height: 78px;

            border-radius: 22px;

            display: flex;

            align-items: center;
            justify-content: center;

            margin-bottom: 24px;

            color: white;

            background:
              linear-gradient(
                135deg,
                #ff5a1f,
                #ff9f43
              );

            box-shadow:
              0 15px 35px rgba(255,90,31,0.35);
          }

          .why-security-card h3 {

            font-size: 28px;

            line-height: 1.2;

            font-weight: 800;

            margin-bottom: 16px;

            text-transform: uppercase;
          }

          .why-security-card p {

            color: #c9d4e5;

            line-height: 1.9;

            font-size: 15px;
          }

          /* RESPONSIVE */

          @media (max-width: 1100px) {

            .why-security-container {

              grid-template-columns: 1fr;
            }

            .why-security-left {

              position: relative;

              top: 0;
            }

            .why-main-heading {

              font-size: 48px;
            }
          }

          @media (max-width: 768px) {

            .why-security-section {

              padding: 80px 5%;
            }

            .why-security-grid {

              grid-template-columns: 1fr;
            }

            .why-main-heading {

              font-size: 34px;
            }

            .why-security-card {

              min-height: auto;
            }

            .why-security-card h3 {

              font-size: 22px;
            }

            .why-security-icon {

              width: 65px;
              height: 65px;
            }
          }
        `}
      </style>

      <section className="why-security-section">
        <div className="why-security-container">
          {/* LEFT SIDE */}

          <motion.div
            className="why-security-left"
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="why-badge">
              <div className="badge-line"></div>
              WHY TRUST SHADOWGUARD
            </div>

            <h2 className="why-main-heading">
              Professional
              <br />
              <span>Security Solutions</span>
              <br />
              For Every Environment
            </h2>

            <p className="why-main-text">
              SHADOWGUARD SECURITY delivers premium protection services using
              modern surveillance systems, professional guards, and rapid
              response solutions tailored for businesses, residential
              properties, construction sites, and private events.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}

          <div className="why-security-grid">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="why-security-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div className="why-security-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhySecuritySection;

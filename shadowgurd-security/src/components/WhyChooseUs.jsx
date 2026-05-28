import { motion } from "framer-motion";
import {
  ShieldCheck,
  RadioTower,
  BadgeCheck,
  LockKeyhole,
  Siren,
  ScanEye,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={34} />,
      title: "Trusted Security Expertise",
      desc: "Our highly trained professionals deliver dependable protection services for businesses, residential communities, and events.",
    },

    {
      icon: <RadioTower size={34} />,
      title: "24/7 Smart Monitoring",
      desc: "Advanced surveillance systems and rapid response monitoring ensure round-the-clock safety and instant threat detection.",
    },

    {
      icon: <BadgeCheck size={34} />,
      title: "Certified Security Officers",
      desc: "Licensed and experienced guards trained in access control, emergency handling, and professional risk management.",
    },

    {
      icon: <LockKeyhole size={34} />,
      title: "Custom Security Plans",
      desc: "Tailored protection strategies designed specifically for offices, homes, construction sites, and commercial properties.",
    },

    {
      icon: <Siren size={34} />,
      title: "Rapid Incident Response",
      desc: "Quick action teams and real-time coordination help prevent incidents before they escalate into major threats.",
    },

    {
      icon: <ScanEye size={34} />,
      title: "Advanced Access Control",
      desc: "Modern entry management systems help secure sensitive areas while maintaining smooth operational flow.",
    },
  ];

  return (
    <>
      <style>
        {`
          .why-section {

            position: relative;

            overflow: hidden;

            padding: 110px 7%;

            background:
              linear-gradient(
                135deg,
                #060b1f,
                #081731,
                #0b1f44
              );

            color: white;
          }

          .why-section::before {

            content: "";

            position: absolute;

            width: 500px;
            height: 500px;

            background:
              rgba(255,90,31,0.08);

            border-radius: 50%;

            top: -180px;
            left: -120px;

            filter: blur(70px);
          }

          .why-section::after {

            content: "";

            position: absolute;

            width: 420px;
            height: 420px;

            background:
              rgba(0,119,255,0.08);

            border-radius: 50%;

            bottom: -180px;
            right: -120px;

            filter: blur(70px);
          }

          .why-container {

            position: relative;

            z-index: 2;

            max-width: 1400px;

            margin: auto;

            display: grid;

            grid-template-columns: 0.9fr 1.5fr;

            gap: 70px;

            align-items: start;
          }

          /* LEFT */

          .why-left {

            position: sticky;

            top: 120px;
          }

          .why-tag {

            display: inline-block;

            padding: 10px 18px;

            border-radius: 50px;

            background:
              rgba(255,255,255,0.06);

            color: #ffb347;

            font-size: 14px;

            font-weight: 700;

            letter-spacing: 1px;

            margin-bottom: 24px;

            border:
              1px solid rgba(255,255,255,0.08);
          }

          .why-heading {

            font-size: 62px;

            line-height: 1.05;

            font-weight: 900;

            text-transform: uppercase;

            margin-bottom: 25px;
          }

          .why-heading span {

            background:
              linear-gradient(
                135deg,
                #ff7b1c,
                #ffb347,
                #ffd77a
              );

            -webkit-background-clip: text;

            -webkit-text-fill-color: transparent;
          }

          .why-text {

            color: #c7d2e1;

            line-height: 2;

            font-size: 16px;
          }

          /* RIGHT GRID */

          .why-grid {

            display: grid;

            grid-template-columns: repeat(2, 1fr);

            gap: 28px;
          }

          .why-card {

            position: relative;

            padding: 38px 30px;

            border-radius: 28px;

            overflow: hidden;

            background:
              linear-gradient(
                145deg,
                rgba(255,255,255,0.05),
                rgba(255,255,255,0.03)
              );

            backdrop-filter: blur(14px);

            border:
              1px solid rgba(255,255,255,0.08);

            transition: 0.4s ease;

            min-height: 280px;
          }

          .why-card:hover {

            transform:
              translateY(-10px);

            border:
              1px solid rgba(255,180,71,0.35);

            box-shadow:
              0 20px 45px rgba(0,0,0,0.35);
          }

          .why-card::before {

            content: "";

            position: absolute;

            width: 180px;
            height: 180px;

            background:
              rgba(255,180,71,0.06);

            border-radius: 50%;

            top: -80px;
            right: -80px;

            transition: 0.4s ease;
          }

          .why-card:hover::before {

            transform: scale(1.2);
          }

          .why-icon {

            width: 78px;
            height: 78px;

            border-radius: 22px;

            background:
              linear-gradient(
                135deg,
                #ff5a1f,
                #ff9f43
              );

            display: flex;

            align-items: center;
            justify-content: center;

            color: white;

            margin-bottom: 28px;

            box-shadow:
              0 15px 35px rgba(255,90,31,0.35);
          }

          .why-card h3 {

            font-size: 28px;

            font-weight: 800;

            line-height: 1.2;

            margin-bottom: 18px;

            text-transform: uppercase;
          }

          .why-card p {

            color: #c8d4e5;

            line-height: 1.9;

            font-size: 15px;
          }

          /* RESPONSIVE */

          @media (max-width: 1100px) {

            .why-container {

              grid-template-columns: 1fr;
            }

            .why-left {

              position: relative;

              top: 0;
            }

            .why-heading {

              font-size: 50px;
            }
          }

          @media (max-width: 768px) {

            .why-section {

              padding: 80px 5%;
            }

            .why-grid {

              grid-template-columns: 1fr;
            }

            .why-heading {

              font-size: 36px;
            }

            .why-card {

              min-height: auto;
            }

            .why-card h3 {

              font-size: 22px;
            }

            .why-icon {

              width: 65px;
              height: 65px;
            }
          }
        `}
      </style>

      <section className="why-section">
        <div className="why-container">
          {/* LEFT SIDE */}

          <motion.div
            className="why-left"
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
            <div className="why-tag">WHY CHOOSE SHADOWGUARD</div>

            <h2 className="why-heading">
              Premium <span>Security</span>
              <br />
              Solutions For
              <br />
              Modern Protection
            </h2>

            <p className="why-text">
              SHADOWGUARD SECURITY combines advanced surveillance technology,
              experienced professionals, and rapid response systems to provide
              trusted protection for homes, businesses, construction sites,
              industrial areas, and private events.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}

          <div className="why-grid">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="why-card"
                initial={{
                  opacity: 0,
                  y: 50,
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
                <div className="why-icon">{item.icon}</div>

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

export default WhyChooseUs;

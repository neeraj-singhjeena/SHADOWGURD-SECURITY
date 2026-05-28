import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function SecurityBanner() {
  const fullText = "EXCELLENCE AND PROFESSIONAL SECURITY";

  const [displayText, setDisplayText] = useState("");

  /* LETTER ANIMATION */

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));

      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

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
          .security-banner {

            position: relative;

            min-height: 58vh;

            display: flex;
            align-items: center;
            justify-content: center;

            overflow: hidden;

            padding: 70px 20px;

            background:
              linear-gradient(
                135deg,
                rgba(7, 12, 32, 0.92),
                rgba(8, 22, 55, 0.88),
                rgba(12, 35, 78, 0.88)
              ),

              url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop");

            background-size: cover;
            background-position: center;
          }

          .security-banner::before {

            content: "";

            position: absolute;

            inset: 0;

            background:
              linear-gradient(
                90deg,
                rgba(5, 10, 28, 0.9),
                rgba(8, 24, 58, 0.55)
              );

            z-index: 1;
          }

          /* FLOATING GLOW */

          .banner-glow {

            position: absolute;

            width: 420px;
            height: 420px;

            background:
              rgba(255, 94, 20, 0.16);

            border-radius: 50%;

            filter: blur(90px);

            top: -140px;
            right: -120px;

            z-index: 1;

            animation:
              glowMove 6s ease-in-out infinite;
          }

          @keyframes glowMove {

            0% {
              transform: scale(1) translateY(0px);
            }

            50% {
              transform: scale(1.12) translateY(20px);
            }

            100% {
              transform: scale(1) translateY(0px);
            }
          }

          /* MAIN CARD */

          .banner-content {

            position: relative;

            z-index: 2;

            max-width: 920px;

            text-align: center;

            padding: 48px 38px;

            border-radius: 30px;

            background:
              linear-gradient(
                135deg,
                rgba(10, 18, 40, 0.88),
                rgba(12, 25, 52, 0.82)
              );

            backdrop-filter: blur(14px);

            border:
              1px solid rgba(255,255,255,0.08);

            box-shadow:
              0 25px 70px rgba(0,0,0,0.5);

            animation:
              floatingCard 5s ease-in-out infinite;
          }

          @keyframes floatingCard {

            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          /* TOP */

          .banner-top {

            color: #ffb347;

            font-size: 14px;

            font-weight: 700;

            letter-spacing: 1px;

            margin-bottom: 18px;

            display: inline-flex;
            align-items: center;
            gap: 12px;
          }

          .banner-line {

            width: 55px;
            height: 2px;

            background:
              linear-gradient(
                90deg,
                #ff7b1c,
                #ffb347
              );

            animation:
              lineGlow 2s linear infinite;
          }

          @keyframes lineGlow {

            0% {
              opacity: 0.5;
            }

            50% {
              opacity: 1;
            }

            100% {
              opacity: 0.5;
            }
          }

          /* HEADING */

          .banner-heading {

            font-size: 54px;

            line-height: 1.08;

            font-weight: 900;

            margin-bottom: 24px;

            text-transform: uppercase;
          }

          .heading-word {

            color: #ffffff;

            display: block;

            margin-bottom: 6px;

            text-shadow:
              0 5px 18px rgba(0,0,0,0.35);

            animation:
              fadeSlide 1s ease;
          }

          .highlight-word {

            background:
              linear-gradient(
                135deg,
                #ff6a00,
                #ffb347,
                #ffd77a
              );

            -webkit-background-clip: text;

            -webkit-text-fill-color: transparent;

            text-shadow:
              0 0 35px rgba(255,140,0,0.35);
          }

          /* CURSOR */

          .typing-cursor {

            color: #ffb347;

            animation:
              blink 0.8s infinite;
          }

          @keyframes blink {

            0% {
              opacity: 1;
            }

            50% {
              opacity: 0;
            }

            100% {
              opacity: 1;
            }
          }

          /* DESCRIPTION */

          .banner-text {

            color: #d6deeb;

            font-size: 15px;

            line-height: 1.9;

            max-width: 760px;

            margin:
              auto auto 28px;
          }

          /* BUTTON */

          .banner-btn {

            background:
              linear-gradient(
                135deg,
                #ff5a1f,
                #ff7b1c,
                #ff9d2f
              );

            color: white;

            border: none;

            padding: 15px 34px;

            border-radius: 14px;

            font-size: 15px;

            font-weight: 800;

            cursor: pointer;

            transition: 0.35s ease;

            box-shadow:
              0 16px 38px rgba(255,90,31,0.35);

            position: relative;

            overflow: hidden;
          }

          .banner-btn::before {

            content: "";

            position: absolute;

            top: 0;
            left: -120%;

            width: 100%;
            height: 100%;

            background:
              rgba(255,255,255,0.2);

            transform: skewX(-25deg);

            transition: 0.7s ease;
          }

          .banner-btn:hover::before {

            left: 120%;
          }

          .banner-btn:hover {

            transform:
              translateY(-4px)
              scale(1.03);

            box-shadow:
              0 24px 55px rgba(255,90,31,0.45);
          }

          /* TEXT ENTRY */

          @keyframes fadeSlide {

            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* RESPONSIVE */

          @media (max-width: 992px) {

            .banner-heading {
              font-size: 42px;
            }

            .banner-content {
              padding: 38px 24px;
            }
          }

          @media (max-width: 768px) {

            .security-banner {

              min-height: auto;

              padding: 60px 16px;
            }

            .banner-heading {
              font-size: 30px;
            }

            .banner-text {
              font-size: 14px;
            }

            .banner-content {
              padding: 34px 20px;
            }

            .banner-top {
              font-size: 12px;
            }

            .banner-line {
              width: 32px;
            }

            .banner-btn {
              width: 100%;
            }
          }
        `}
      </style>

      <section className="security-banner">
        <div className="banner-glow"></div>

        <motion.div
          className="banner-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          {/* TOP TEXT */}

          <motion.div
            className="banner-top"
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="banner-line"></div>

            <span>Top-tier Security Solutions Nationwide</span>

            <div className="banner-line"></div>
          </motion.div>

          {/* HEADING */}

          <motion.h1
            className="banner-heading"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="heading-word">EMPHASIZING</span>

            <span className="highlight-word">{displayText}</span>

            <span className="typing-cursor">|</span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            className="banner-text"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            SHADOWGUARD SECURITY provides trusted protection services with
            trained professionals, intelligent surveillance systems, rapid
            response teams, and modern safety solutions for businesses, homes,
            construction sites, and special events.
          </motion.p>

          {/* BUTTON */}

          <motion.button
            className="banner-btn"
            onClick={handleScroll}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            Get Your Free Security Assessment
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}

export default SecurityBanner;

// import { FaWhatsapp, FaFacebookF, FaXTwitter } from "react-icons/fa6";

// function SocialSidebar() {
//   return (
//     <div className="social-sidebar d-none d-md-block" style={{ right: "20px" }}>
//       <ul className="list-unstyled m-0 p-0 d-flex flex-column gap-3">
//         {/* WhatsApp */}
//         <li className="social-item">
//           <a
//             href="https://wa.me/+17788636047"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-hover whatsapp"
//           >
//             <FaWhatsapp size={20} />
//             <span className="social-text">WhatsApp</span>
//           </a>
//         </li>

//         {/* Facebook */}
//         <li className="social-item">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-hover facebook"
//           >
//             <FaFacebookF size={18} />
//             <span className="social-text">Facebook</span>
//           </a>
//         </li>

//         {/* Twitter / X */}
//         <li className="social-item">
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-hover twitter"
//           >
//             <FaXTwitter size={18} />
//             <span className="social-text">Twitter</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default SocialSidebar;
import { FaWhatsapp, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import { motion } from "framer-motion";

function SocialSidebar() {
  const socialLinks = [
    {
      icon: <FaWhatsapp size={22} />,
      text: "WhatsApp",
      link: "https://wa.me/+17788636047",
      className: "whatsapp",
      top: "0px",
    },

    {
      icon: <FaFacebookF size={20} />,
      text: "Facebook",
      link: "https://facebook.com",
      className: "facebook",
      top: "82px",
    },

    {
      icon: <FaXTwitter size={20} />,
      text: "Twitter",
      link: "https://twitter.com",
      className: "twitter",
      top: "164px",
    },
  ];

  return (
    <>
      <style>
        {`
          .social-sidebar {
            position: fixed;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1200;

            width: 220px;
            height: 230px;
          }

          .social-item {
            position: absolute;
            right: 0;
          }

          .social-link {

            width: 64px;
            height: 64px;

            display: flex;
            align-items: center;

            overflow: hidden;

            border-radius: 18px;

            background: rgba(8,18,37,0.88);

            backdrop-filter: blur(12px);

            border: 1px solid rgba(255,255,255,0.08);

            text-decoration: none;

            color: white;

            transition:
              width 0.35s ease,
              transform 0.35s ease,
              background 0.35s ease;

            box-shadow:
              0 12px 28px rgba(0,0,0,0.28);

            padding-left: 21px;
          }

          /* ONLY THIS ICON EXPANDS */

          .social-link:hover {
            width: 190px;
            transform: translateX(-8px);
          }

          /* HOVER COLORS */

          .social-link.whatsapp:hover {
            background: linear-gradient(
              135deg,
              #25d366,
              #1ebe5d
            );
          }

          .social-link.facebook:hover {
            background: linear-gradient(
              135deg,
              #1877f2,
              #0f5ec9
            );
          }

          .social-link.twitter:hover {
            background: linear-gradient(
              135deg,
              #111827,
              #000000
            );
          }

          .social-icon {

            min-width: 22px;

            display: flex;
            align-items: center;
            justify-content: center;
          }

          .social-text {

            margin-left: 18px;

            color: white;

            font-weight: 700;

            white-space: nowrap;

            opacity: 0;

            transform: translateX(12px);

            transition: 0.3s ease;

            font-size: 15px;

            letter-spacing: 0.5px;
          }

          .social-link:hover .social-text {
            opacity: 1;
            transform: translateX(0);
          }

          .floating-social {
            animation: floatSocial 4s ease-in-out infinite;
          }

          @keyframes floatSocial {

            0% {
              transform: translateY(-50%);
            }

            50% {
              transform: translateY(calc(-50% - 10px));
            }

            100% {
              transform: translateY(-50%);
            }
          }

          @media (max-width: 768px) {

            .social-sidebar {
              display: none;
            }
          }
        `}
      </style>

      <motion.div
        className="social-sidebar floating-social"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        {socialLinks.map((item, index) => (
          <motion.div
            key={index}
            className="social-item"
            style={{
              top: item.top,
            }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${item.className}`}
            >
              <span className="social-icon">{item.icon}</span>

              <span className="social-text">{item.text}</span>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default SocialSidebar;

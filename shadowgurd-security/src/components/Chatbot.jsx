// import { useState, useRef, useEffect } from "react";
// import botImg from "../assets/OIP.webp";

// function Chatbot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       from: "bot",
//       text: "Hello 👋 Welcome to SHADOWGURD SECURITY.\n\nI’m your virtual assistant. You can ask me about our company, services, or contact details.",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, typing]);

//   const getBotReply = (msg) => {
//     const text = msg.toLowerCase();

//     if (
//       text.includes("about") ||
//       text.includes("company") ||
//       text.includes("website") ||
//       text.includes("who are you")
//     ) {
//       return "SHADOWGURD SECURITY is a professional security service provider.\n\nWe protect homes, businesses, events, and facilities with trained guards, CCTV monitoring, and 24/7 support.";
//     }

//     if (text.includes("service") || text.includes("provide")) {
//       return (
//         "We provide:\n\n" +
//         "• Residential Security\n" +
//         "• Commercial Security\n" +
//         "• Event & Construction Site Security\n" +
//         "• Mobile Patrol & Fire Watch\n" +
//         "• CCTV Monitoring & 24/7 On-Site Guards"
//       );
//     }

//     if (
//       text.includes("appointment") ||
//       text.includes("book") ||
//       text.includes("quote")
//     ) {
//       return "You can request an appointment by clicking the **Make Appointment** button on the website.\n\nOur team will contact you shortly.";
//     }

//     if (
//       text.includes("contact") ||
//       text.includes("phone") ||
//       text.includes("number")
//     ) {
//       return "You can contact us at:\n\n📞 9815723616\n\nWe are available 24/7.";
//     }

//     if (text.includes("price") || text.includes("cost")) {
//       return "Pricing depends on your security requirements.\n\nPlease request a quote for exact pricing.";
//     }

//     return "Thank you for your message 😊\n\nI can help you with information about our services, company details, or how to contact us.";
//   };

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const userMsg = { from: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     setTyping(true);

//     const replyText = getBotReply(input);

//     const delay = Math.floor(Math.random() * 1200) + 1500; // 1.5–2.7 sec

//     setTimeout(() => {
//       setTyping(false);
//       setMessages((prev) => [...prev, { from: "bot", text: replyText }]);
//     }, delay);
//   };

//   return (
//     <>
//       {/* FLOATING BUTTON */}
//       <div className="chatbot-fab" onClick={() => setOpen(!open)}>
//         <img src={botImg} alt="Chatbot" />
//       </div>

//       {/* CHAT PANEL */}
//       {open && (
//         <div className="chatbot-panel">
//           <div className="chatbot-header">
//             <div className="chatbot-title">
//               <img src={botImg} alt="Bot" />
//               <span>Security Assistant</span>
//             </div>
//             <button onClick={() => setOpen(false)}>✕</button>
//           </div>

//           <div className="chatbot-body">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`chat-bubble ${msg.from === "bot" ? "bot" : "user"}`}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {typing && (
//               <div className="chat-bubble bot typing">
//                 typing<span>.</span>
//                 <span>.</span>
//                 <span>.</span>
//               </div>
//             )}

//             <div ref={bottomRef}></div>
//           </div>

//           <div className="chatbot-footer">
//             <input
//               placeholder="Ask about our services or company..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Chatbot;
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendHorizonal, X } from "lucide-react";

import botImg from "../assets/OIP.webp";

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Welcome to SHADOWGUARD SECURITY.\n\nI’m your virtual assistant. Ask me about our services, pricing, appointments, or contact details.",
    },
  ]);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (
      text.includes("about") ||
      text.includes("company") ||
      text.includes("website")
    ) {
      return (
        "SHADOWGUARD SECURITY is a professional security company providing trusted protection solutions.\n\n" +
        "We specialize in residential security, commercial protection, CCTV monitoring, mobile patrol, event security, and 24/7 guard services."
      );
    }

    if (text.includes("service") || text.includes("provide")) {
      return (
        "🔐 Our Services:\n\n" +
        "• Residential Security\n" +
        "• Commercial Security\n" +
        "• Event Security\n" +
        "• CCTV Monitoring\n" +
        "• Mobile Patrol Services\n" +
        "• Fire Watch Security\n" +
        "• 24/7 On-Site Guards"
      );
    }

    if (text.includes("appointment") || text.includes("book")) {
      return (
        "📅 You can book an appointment using the 'Make Appointment' button on the website.\n\n" +
        "Our team will contact you shortly."
      );
    }

    if (text.includes("contact") || text.includes("phone")) {
      return (
        "📞 Contact SHADOWGUARD SECURITY:\n\n" +
        "Phone: +17788636047\n" +
        "Email: shadowguardinc@outlook.com"
      );
    }

    if (text.includes("price") || text.includes("cost")) {
      return (
        "💰 Pricing depends on your security requirements.\n\n" +
        "Contact our team for a custom quote."
      );
    }

    return (
      "Thank you for your message 😊\n\n" +
      "I can help you with information about our services, pricing, appointments, and contact details."
    );
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      from: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    setTyping(true);

    const replyText = getBotReply(input);

    setTimeout(() => {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: replyText,
        },
      ]);
    }, 1400);
  };

  return (
    <>
      <style>
        {`

          /* FLOAT BUTTON */

          .chatbot-fab {

            position: fixed;

            bottom: 28px;
            right: 28px;

            width: 72px;
            height: 72px;

            border-radius: 50%;

            background:
              linear-gradient(
                135deg,
                #ff5a1f,
                #ff8a47
              );

            display: flex;

            align-items: center;
            justify-content: center;

            cursor: pointer;

            z-index: 9999;

            overflow: hidden;

            box-shadow:
              0 20px 45px rgba(255,90,31,0.35);

            animation:
              floatBot 3s ease-in-out infinite;
          }

          .chatbot-fab img {

            width: 100%;
            height: 100%;

            object-fit: cover;
          }

          @keyframes floatBot {

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

          /* CHAT PANEL */

          .chatbot-panel {

            position: fixed;

            bottom: 115px;
            right: 28px;

            width: 390px;
            height: 620px;

            border-radius: 30px;

            overflow: hidden;

            z-index: 9999;

            display: flex;
            flex-direction: column;

            background:
              linear-gradient(
                180deg,
                #07111f,
                #0b1730
              );

            border:
              1px solid rgba(255,255,255,0.08);

            box-shadow:
              0 30px 70px rgba(0,0,0,0.45);
          }

          /* HEADER */

          .chatbot-header {

            padding: 20px 22px;

            display: flex;

            align-items: center;
            justify-content: space-between;

            background:
              linear-gradient(
                135deg,
                rgba(255,90,31,0.18),
                rgba(255,138,71,0.08)
              );

            border-bottom:
              1px solid rgba(255,255,255,0.08);
          }

          .chatbot-title {

            display: flex;

            align-items: center;

            gap: 14px;

            color: white;

            font-weight: 700;

            font-size: 17px;
          }

          .chatbot-title img {

            width: 48px;
            height: 48px;

            border-radius: 50%;

            border:
              2px solid rgba(255,255,255,0.15);

            object-fit: cover;
          }

          .close-btn {

            width: 40px;
            height: 40px;

            border-radius: 50%;

            border: none;

            background:
              rgba(255,255,255,0.06);

            color: white;

            cursor: pointer;

            display: flex;

            align-items: center;
            justify-content: center;

            transition: 0.3s ease;
          }

          .close-btn:hover {

            background:
              rgba(255,90,31,0.2);

            transform: rotate(90deg);
          }

          /* BODY */

          .chatbot-body {

            flex: 1;

            overflow-y: auto;

            padding: 22px 18px;

            display: flex;

            flex-direction: column;

            gap: 16px;

            background:
              linear-gradient(
                to bottom,
                rgba(8,15,28,0.2),
                rgba(4,8,15,0.2)
              );
          }

          .chatbot-body::-webkit-scrollbar {
            width: 4px;
          }

          .chatbot-body::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.15);
            border-radius: 10px;
          }

          /* CHAT BUBBLES */

          .chat-bubble {

            max-width: 82%;

            padding: 15px 18px;

            border-radius: 20px;

            line-height: 1.8;

            font-size: 14px;

            white-space: pre-line;

            animation:
              fadeUp 0.35s ease;
          }

          .chat-bubble.bot {

            background:
              rgba(255,255,255,0.06);

            color: #eef2f7;

            align-self: flex-start;

            border:
              1px solid rgba(255,255,255,0.06);
          }

          .chat-bubble.user {

            background:
              linear-gradient(
                135deg,
                #ff5a1f,
                #ff8747
              );

            color: white;

            align-self: flex-end;

            box-shadow:
              0 14px 32px rgba(255,90,31,0.25);
          }

          @keyframes fadeUp {

            from {
              opacity: 0;
              transform: translateY(12px);
            }

            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          /* TYPING */

          .typing {

            display: flex;

            gap: 4px;
          }

          .typing span {

            animation:
              blink 1s infinite;
          }

          .typing span:nth-child(2) {
            animation-delay: 0.2s;
          }

          .typing span:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes blink {

            0% {
              opacity: 0.2;
            }

            50% {
              opacity: 1;
            }

            100% {
              opacity: 0.2;
            }
          }

          /* FOOTER */

          .chatbot-footer {

            padding: 18px;

            display: flex;

            gap: 12px;

            border-top:
              1px solid rgba(255,255,255,0.08);

            background:
              rgba(255,255,255,0.03);
          }

          .chatbot-footer input {

            flex: 1;

            height: 54px;

            border-radius: 16px;

            border:
              1px solid rgba(255,255,255,0.08);

            background:
              rgba(255,255,255,0.05);

            color: white;

            padding: 0 16px;

            outline: none;

            font-size: 14px;
          }

          .chatbot-footer input::placeholder {

            color: #9ca3af;
          }

          .send-btn {

            width: 54px;
            height: 54px;

            border-radius: 16px;

            border: none;

            cursor: pointer;

            color: white;

            background:
              linear-gradient(
                135deg,
                #ff5a1f,
                #ff8747
              );

            display: flex;

            align-items: center;
            justify-content: center;

            transition: 0.3s ease;

            box-shadow:
              0 12px 28px rgba(255,90,31,0.25);
          }

          .send-btn:hover {

            transform:
              scale(1.06)
              rotate(-6deg);
          }

          /* MOBILE */

          @media (max-width: 600px) {

            .chatbot-panel {

              width: calc(100% - 24px);

              left: 12px;
              right: 12px;

              height: 78vh;

              bottom: 92px;
            }

            .chatbot-fab {

              width: 66px;
              height: 66px;

              right: 18px;
              bottom: 18px;
            }
          }
        `}
      </style>

      {/* FLOAT BUTTON */}

      <motion.div
        className="chatbot-fab"
        onClick={() => setOpen(!open)}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
      >
        <img src={botImg} alt="Chatbot" />
      </motion.div>

      {/* CHAT WINDOW */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbot-panel"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.92,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            {/* HEADER */}

            <div className="chatbot-header">
              <div className="chatbot-title">
                <img src={botImg} alt="Bot" />

                <span>Security Assistant</span>
              </div>

              <button className="close-btn" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* BODY */}

            <div className="chatbot-body">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`chat-bubble ${
                    msg.from === "bot" ? "bot" : "user"
                  }`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {typing && (
                <div className="chat-bubble bot typing">
                  typing
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              )}

              <div ref={bottomRef}></div>
            </div>

            {/* FOOTER */}

            <div className="chatbot-footer">
              <input
                placeholder="Ask about services..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              <button className="send-btn" onClick={sendMessage}>
                <SendHorizonal size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;

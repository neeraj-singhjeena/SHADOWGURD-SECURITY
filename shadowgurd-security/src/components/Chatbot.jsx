import { useState, useRef, useEffect } from "react";
import botImg from "../assets/OIP.webp";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello 👋 Welcome to SHADOWGURD SECURITY.\n\nI’m your virtual assistant. You can ask me about our company, services, or contact details.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (
      text.includes("about") ||
      text.includes("company") ||
      text.includes("website") ||
      text.includes("who are you")
    ) {
      return "SHADOWGURD SECURITY is a professional security service provider.\n\nWe protect homes, businesses, events, and facilities with trained guards, CCTV monitoring, and 24/7 support.";
    }

    if (text.includes("service") || text.includes("provide")) {
      return (
        "We provide:\n\n" +
        "• Residential Security\n" +
        "• Commercial Security\n" +
        "• Event & Construction Site Security\n" +
        "• Mobile Patrol & Fire Watch\n" +
        "• CCTV Monitoring & 24/7 On-Site Guards"
      );
    }

    if (
      text.includes("appointment") ||
      text.includes("book") ||
      text.includes("quote")
    ) {
      return "You can request an appointment by clicking the **Make Appointment** button on the website.\n\nOur team will contact you shortly.";
    }

    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("number")
    ) {
      return "You can contact us at:\n\n📞 9815723616\n\nWe are available 24/7.";
    }

    if (text.includes("price") || text.includes("cost")) {
      return "Pricing depends on your security requirements.\n\nPlease request a quote for exact pricing.";
    }

    return "Thank you for your message 😊\n\nI can help you with information about our services, company details, or how to contact us.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTyping(true);

    const replyText = getBotReply(input);

    const delay = Math.floor(Math.random() * 1200) + 1500; // 1.5–2.7 sec

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: replyText }]);
    }, delay);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="chatbot-fab" onClick={() => setOpen(!open)}>
        <img src={botImg} alt="Chatbot" />
      </div>

      {/* CHAT PANEL */}
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <img src={botImg} alt="Bot" />
              <span>Security Assistant</span>
            </div>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-bubble ${msg.from === "bot" ? "bot" : "user"}`}
              >
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="chat-bubble bot typing">
                typing<span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            )}

            <div ref={bottomRef}></div>
          </div>

          <div className="chatbot-footer">
            <input
              placeholder="Ask about our services or company..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;

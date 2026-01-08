import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  const accent = "#ff4d1c";
  const darkBg = "#0b0f14";
  const darkCard = "#111827";
  const text = "#e5e7eb";
  const muted = "#9ca3af";

  return (
    <footer
      style={{
        background: darkBg,
        color: text,
        padding: "60px 0 20px",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* COMPANY INFO */}
          <div className="col-md-4">
            <h5 style={{ color: accent, fontWeight: 700 }}>
              SHADOWGUARD SECURITY
            </h5>
            <p style={{ color: muted, marginTop: "15px" }}>
              We are a trusted security service provider delivering reliable,
              professional, and 24/7 protection solutions for homes, businesses,
              and events.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 style={{ color: accent, fontWeight: 600 }}>Quick Links</h6>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
              {["Home", "About Us", "Services", "Contact"].map((item, i) => (
                <li key={i} style={{ marginBottom: "8px" }}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    style={{
                      color: muted,
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col-md-3">
            <h6 style={{ color: accent, fontWeight: 600 }}>Our Services</h6>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "15px" }}>
              {[
                "Residential Security",
                "Commercial Security",
                "Event Security",
                "Mobile Patrol",
                "CCTV Monitoring",
              ].map((service, i) => (
                <li key={i} style={{ color: muted, marginBottom: "8px" }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-3">
            <h6 style={{ color: accent, fontWeight: 600 }}>Contact Us</h6>
            <p style={{ color: muted, marginTop: "15px" }}>📞 +17788636047</p>
            <p style={{ color: muted }}>
              <FaEnvelope style={{ marginRight: "6px" }} />
              shadowguardinc@outlook.com
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "15px",
              }}
            >
              {[
                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.me/+17788636047",
                },
                {
                  icon: <FaFacebookF />,
                  link: "https://facebook.com",
                },
                {
                  icon: <FaXTwitter />,
                  link: "https://twitter.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: darkCard,
                    color: accent,
                    padding: "10px",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            borderTop: "1px solid #1f2937",
            marginTop: "40px",
            paddingTop: "15px",
            textAlign: "center",
            color: muted,
          }}
        >
          <p style={{ margin: 0 }}>
            © 2026{" "}
            <strong style={{ color: accent }}>SHADOWGUARD SECURITY</strong>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

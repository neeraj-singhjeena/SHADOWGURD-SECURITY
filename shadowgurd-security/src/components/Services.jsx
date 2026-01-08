import { useState } from "react";

function Services() {
  const [openId, setOpenId] = useState(null);

  const toggleBox = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const accent = "#ff4d1c";
  const muted = "#6b7280";
  const dark = "#111827";

  const services = [
    {
      id: 1,
      title: "Residential Security",
      icon: "🏠",
      short: "Protecting homes, apartments, and gated communities.",
      more: "Our residential security services focus on complete household safety including access control, patrols, CCTV monitoring, and resident protection.",
    },
    {
      id: 2,
      title: "Commercial Security",
      icon: "🏢",
      short: "Security for offices, warehouses, and retail spaces.",
      more: "We protect business premises by preventing theft, managing access points, and ensuring employee and asset safety.",
    },
    {
      id: 3,
      title: "Construction Site Security",
      icon: "🚧",
      short: "Prevent theft, vandalism, and unauthorized access.",
      more: "Our guards protect materials, equipment, and sites with night patrols and controlled entry.",
    },
    {
      id: 4,
      title: "Mobile Patrol Services",
      icon: "🚓",
      short: "Scheduled and random patrol services.",
      more: "Marked and unmarked patrol vehicles ensure visibility, deterrence, and rapid response.",
    },
    {
      id: 5,
      title: "Event Security",
      icon: "🎪",
      short: "Crowd control and entry management.",
      more: "Professional security for concerts, weddings, festivals, and private events.",
    },
    {
      id: 6,
      title: "Access Control & Entry Management",
      icon: "🚪",
      short: "Controlled entry and visitor verification.",
      more: "ID verification, visitor logs, gate supervision, and restricted access management.",
    },
    {
      id: 7,
      title: "Loss Prevention & Retail Security",
      icon: "🛒",
      short: "Reduce theft and inventory loss.",
      more: "Shoplifting prevention, internal theft control, and surveillance monitoring.",
    },
    {
      id: 8,
      title: "Healthcare Facility Security",
      icon: "🏥",
      short: "Security for hospitals and clinics.",
      more: "Patient safety, staff protection, and calm environment maintenance.",
    },
    {
      id: 9,
      title: "Parking Lot & Traffic Control",
      icon: "🚗",
      short: "Safe traffic flow and parking management.",
      more: "Vehicle control, pedestrian safety, and accident prevention.",
    },
    {
      id: 10,
      title: "24/7 On-Site Security Coverage",
      icon: "🕒",
      short: "Round-the-clock protection services.",
      more: "Day and night guard presence for continuous protection.",
    },
    {
      id: 11,
      title: "Emergency Response & Incident Reporting",
      icon: "🚨",
      short: "Rapid response and reporting.",
      more: "Immediate response, incident documentation, and authority coordination.",
    },
    {
      id: 12,
      title: "Fire Watch Security",
      icon: "🔥",
      short: "Fire hazard monitoring.",
      more: "Fire risk monitoring, compliance support, and emergency readiness.",
    },
    {
      id: 13,
      title: "Surveillance Monitoring & CCTV Observation",
      icon: "📹",
      short: "Real-time surveillance monitoring.",
      more: "Continuous CCTV observation and threat detection.",
    },
  ];

  return (
    <section id="services" style={{ background: "#ffffff", padding: "80px 0" }}>
      <div className="container">
        <div className="text-center mb-5 px-3">
          <h2 className="fw-bold">Our Security Services</h2>
          <p className="text-muted">
            Professional security solutions designed for complete protection.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          {services.map((s) => (
            <div className="col-12 col-sm-6 col-lg-4 d-flex" key={s.id}>
              <div
                style={{
                  background: "#ffffff",
                  padding: "28px",
                  borderRadius: "16px",
                  width: "100%",
                  border:
                    openId === s.id
                      ? `2px solid ${accent}`
                      : "1px solid #e5e7eb",
                  borderTop:
                    openId === s.id
                      ? `4px solid ${accent}`
                      : "4px solid transparent",
                  boxShadow:
                    openId === s.id
                      ? "0 22px 40px rgba(0,0,0,0.22)"
                      : "0 10px 22px rgba(0,0,0,0.10)",
                  transform:
                    openId === s.id ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.35s ease",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 22px 40px rgba(0,0,0,0.22)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth > 768 && openId !== s.id) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 22px rgba(0,0,0,0.10)";
                  }
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>
                  {s.icon}
                </div>

                <h5 className="fw-semibold" style={{ color: accent }}>
                  {s.title}
                </h5>

                <p style={{ color: muted }}>{s.short}</p>

                {openId === s.id && (
                  <p
                    style={{
                      color: dark,
                      marginTop: "10px",
                      lineHeight: "1.7",
                    }}
                  >
                    {s.more}
                  </p>
                )}

                <button
                  onClick={() => toggleBox(s.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: accent,
                    fontWeight: 600,
                    marginTop: "12px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {openId === s.id ? "Learn Less ↑" : "Learn More →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

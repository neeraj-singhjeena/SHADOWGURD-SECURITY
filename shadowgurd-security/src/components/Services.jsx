import { useState } from "react";

function Services() {
  const [openId, setOpenId] = useState(null);

  const toggleBox = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const accent = "#ff4d1c";
  const cardBg = "#111827";
  const muted = "#6b7280";
  const text = "#e5e7eb";

  const services = [
    {
      id: 1,
      title: "Residential Security",
      icon: "🏠",
      short: "Protecting homes, apartments, and gated communities.",
      more: "Our residential security services focus on complete household safety. This includes controlled access, visitor verification, regular patrols, CCTV monitoring, and ensuring a safe environment for residents and families at all times.",
    },
    {
      id: 2,
      title: "Commercial Security",
      icon: "🏢",
      short: "Security for offices, warehouses, and retail spaces.",
      more: "We provide professional commercial security to protect offices and business premises. Our guards help prevent theft, ensure employee safety, manage access points, and safeguard valuable company assets.",
    },
    {
      id: 3,
      title: "Construction Site Security",
      icon: "🚧",
      short: "Prevent theft, vandalism, and unauthorized access.",
      more: "Construction sites are vulnerable to theft and damage. Our services include night patrols, material protection, controlled entry points, and on-site monitoring to reduce losses.",
    },
    {
      id: 4,
      title: "Mobile Patrol Services",
      icon: "🚓",
      short: "Scheduled and random patrol services.",
      more: "Our mobile patrol units operate marked and unmarked vehicles to conduct routine and surprise patrols. This ensures visibility, rapid response, and continuous deterrence against security threats.",
    },
    {
      id: 5,
      title: "Event Security",
      icon: "🎪",
      short: "Crowd control and entry management for events.",
      more: "We provide trained event security personnel for concerts, weddings, festivals, and private events. Our team handles crowd control, entry checks, emergency response, and overall event safety.",
    },
    {
      id: 6,
      title: "Access Control & Entry Management",
      icon: "🚪",
      short: "Controlled entry and visitor verification.",
      more: "Our access control services include ID verification, visitor logs, gate supervision, and restricted access management to ensure only authorized individuals enter the premises.",
    },
    {
      id: 7,
      title: "Loss Prevention & Retail Security",
      icon: "🛒",
      short: "Reduce theft and inventory loss.",
      more: "We help retail businesses minimize losses by preventing shoplifting, detecting internal theft, and monitoring customer activity through trained security staff and surveillance systems.",
    },
    {
      id: 8,
      title: "Healthcare Facility Security",
      icon: "🏥",
      short: "Security for hospitals and clinics.",
      more: "Our healthcare security services focus on patient safety, staff protection, access control, and maintaining a calm and secure environment in hospitals and medical facilities.",
    },
    {
      id: 9,
      title: "Parking Lot & Traffic Control",
      icon: "🚗",
      short: "Safe traffic flow and parking management.",
      more: "We manage vehicle movement, parking discipline, and pedestrian safety to ensure smooth traffic flow and reduce accidents in parking areas.",
    },
    {
      id: 10,
      title: "24/7 On-Site Security Coverage",
      icon: "🕒",
      short: "Round-the-clock protection services.",
      more: "Our trained guards provide continuous on-site security coverage, ensuring protection during day and night with constant vigilance.",
    },
    {
      id: 11,
      title: "Emergency Response & Incident Reporting",
      icon: "🚨",
      short: "Rapid response and incident documentation.",
      more: "We ensure quick emergency response, proper incident handling, and detailed reporting while coordinating with authorities when required.",
    },
    {
      id: 12,
      title: "Fire Watch Security",
      icon: "🔥",
      short: "Fire hazard monitoring and prevention.",
      more: "Our fire watch security monitors potential fire hazards, ensures compliance with safety standards, and responds immediately during emergencies.",
    },
    {
      id: 13,
      title: "Surveillance Monitoring & CCTV Observation",
      icon: "📹",
      short: "Real-time surveillance monitoring.",
      more: "We provide continuous CCTV monitoring and surveillance observation to detect suspicious activities and enhance overall security awareness.",
    },
  ];

  return (
    <section
      id="services"
      style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Security Services</h2>
          <p className="text-muted">
            Professional security solutions designed for complete protection.
          </p>
        </div>

        <div className="row g-4">
          {services.map((s) => (
            <div className="col-sm-6 col-lg-4" key={s.id}>
              <div
                style={{
                  background: cardBg,
                  padding: "30px",
                  borderRadius: "10px",
                  height: "100%",
                  border:
                    openId === s.id
                      ? `1px solid ${accent}`
                      : "1px solid #1f2937",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ fontSize: "34px", marginBottom: "10px" }}>
                  {s.icon}
                </div>

                <h5 className="fw-semibold" style={{ color: accent }}>
                  {s.title}
                </h5>

                <p style={{ color: muted }}>{s.short}</p>

                {openId === s.id && <p style={{ color: text }}>{s.more}</p>}

                <button
                  onClick={() => toggleBox(s.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: accent,
                    fontWeight: 500,
                    marginTop: "10px",
                    cursor: "pointer",
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

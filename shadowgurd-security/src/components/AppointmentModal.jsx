// function AppointmentModal() {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const phone = e.target.phone.value;
//     const service = e.target.service.value;
//     const date = e.target.date.value;
//     const message = e.target.message.value;

//     const text =
//       `Name: ${name}%0A` +
//       `Phone: ${phone}%0A` +
//       `Service: ${service}%0A` +
//       `Preferred Date: ${date}%0A` +
//       `Message: ${message}`;

//     window.open(`https://wa.me/+17788636047?text=${text}`, "_blank");
//   };

//   return (
//     <div className="modal fade" id="appointmentModal" tabIndex="-1">
//       <div className="modal-dialog modal-lg modal-dialog-centered">
//         <div className="modal-content shadow-lg">
//           {/* HEADER */}
//           <div className="modal-header bg-dark text-white">
//             <h5 className="modal-title">📅 Make an Appointment</h5>
//             <button
//               className="btn-close btn-close-white"
//               data-bs-dismiss="modal"
//             ></button>
//           </div>

//           {/* FORM */}
//           <form onSubmit={handleSubmit}>
//             <div className="modal-body">
//               <p className="text-muted mb-4">
//                 Fill in the details below and our team will contact you shortly.
//               </p>

//               <div className="row g-3">
//                 {/* NAME */}
//                 <div className="col-md-6">
//                   <label className="form-label fw-semibold">Full Name</label>
//                   <input
//                     name="name"
//                     className="form-control"
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>

//                 {/* PHONE */}
//                 <div className="col-md-6">
//                   <label className="form-label fw-semibold">Phone Number</label>
//                   <input
//                     name="phone"
//                     className="form-control"
//                     placeholder="Enter phone number"
//                     required
//                   />
//                 </div>

//                 {/* SERVICE */}
//                 <div className="col-md-6">
//                   <label className="form-label fw-semibold">
//                     Select Service
//                   </label>
//                   <select name="service" className="form-select">
//                     <option>Residential Security</option>
//                     <option>Commercial Security</option>
//                     <option>Event Security</option>
//                     <option>24/7 Surveillance</option>
//                   </select>
//                 </div>

//                 {/* DATE */}
//                 <div className="col-md-6">
//                   <label className="form-label fw-semibold">
//                     Preferred Date
//                   </label>
//                   <input type="date" name="date" className="form-control" />
//                 </div>

//                 {/* MESSAGE */}
//                 <div className="col-12">
//                   <label className="form-label fw-semibold">
//                     Additional Message
//                   </label>
//                   <textarea
//                     name="message"
//                     className="form-control"
//                     rows="3"
//                     placeholder="Any specific requirement..."
//                   ></textarea>
//                 </div>
//               </div>
//             </div>

//             {/* FOOTER */}
//             <div className="modal-footer d-flex justify-content-between">
//               <small className="text-muted">
//                 🔒 Your information is safe with us
//               </small>

//               <button className="btn btn-danger px-4 fw-semibold">
//                 Send Appointment
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppointmentModal;
import { motion } from "framer-motion";

function AppointmentModal() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const service = e.target.service.value;
    const date = e.target.date.value;
    const message = e.target.message.value;

    const text =
      `📌 SHADOWGUARD SECURITY APPOINTMENT %0A%0A` +
      `👤 Name: ${name}%0A` +
      `📞 Phone: ${phone}%0A` +
      `🛡️ Service: ${service}%0A` +
      `📅 Preferred Date: ${date}%0A` +
      `📝 Message: ${message}`;

    window.open(`https://wa.me/+17788636047?text=${text}`, "_blank");
  };

  const accent = "#ff5a1f";

  return (
    <>
      <style>
        {`
          .premium-modal .modal-content {
            background: rgba(8,18,37,0.96);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 28px;
            overflow: hidden;
            box-shadow: 0 25px 60px rgba(0,0,0,0.45);
          }

          .premium-modal .modal-header {
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding: 24px 28px;
            background:
              linear-gradient(
                135deg,
                rgba(255,90,31,0.18),
                rgba(255,255,255,0.03)
              );
          }

          .premium-modal .modal-title {
            color: white;
            font-weight: 800;
            letter-spacing: 0.5px;
          }

          .premium-modal .modal-body {
            padding: 30px 28px;
          }

          .premium-modal .modal-footer {
            border-top: 1px solid rgba(255,255,255,0.08);
            padding: 22px 28px;
          }

          .premium-label {
            color: white;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .premium-input,
          .premium-select,
          .premium-textarea {
            background: rgba(255,255,255,0.05) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            color: white !important;
            border-radius: 14px !important;
            padding: 14px 16px !important;
            transition: 0.35s ease !important;
            box-shadow: none !important;
          }

          .premium-input::placeholder,
          .premium-textarea::placeholder {
            color: #9ca3af !important;
          }

          .premium-select option {
            background: #081225;
            color: white;
          }

          .premium-input:focus,
          .premium-select:focus,
          .premium-textarea:focus {
            border-color: ${accent} !important;
            box-shadow: 0 0 0 4px rgba(255,90,31,0.15) !important;
            transform: translateY(-2px);
          }

          .modal-subtext {
            color: #b9c5d4;
            line-height: 1.8;
          }

          .submit-btn {
            background: linear-gradient(135deg, #ff5a1f, #ff7a45);
            border: none;
            color: white;
            padding: 14px 30px;
            border-radius: 14px;
            font-weight: 700;
            transition: 0.35s ease;
            box-shadow: 0 15px 35px rgba(255,90,31,0.28);
          }

          .submit-btn:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 20px 45px rgba(255,90,31,0.42);
          }

          .secure-text {
            color: #9ca3af;
            font-size: 14px;
          }

          .modal-glow {
            position: absolute;
            width: 260px;
            height: 260px;
            background: rgba(255,90,31,0.12);
            border-radius: 50%;
            top: -80px;
            right: -80px;
            filter: blur(50px);
            z-index: 0;
          }

          @media (max-width: 600px) {

            .premium-modal .modal-body,
            .premium-modal .modal-header,
            .premium-modal .modal-footer {
              padding-left: 18px;
              padding-right: 18px;
            }
          }
        `}
      </style>

      <div
        className="modal fade premium-modal"
        id="appointmentModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="modal-glow"></div>

            {/* HEADER */}
            <div className="modal-header position-relative">
              <h5 className="modal-title">📅 Make an Appointment</h5>

              <button
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              <div className="modal-body position-relative">
                <p className="modal-subtext mb-4">
                  Fill in the details below and our professional security team
                  will contact you shortly with the best protection solution
                  tailored to your needs.
                </p>

                <div className="row g-4">
                  {/* NAME */}
                  <div className="col-md-6">
                    <label className="premium-label">Full Name</label>

                    <input
                      name="name"
                      className="form-control premium-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div className="col-md-6">
                    <label className="premium-label">Phone Number</label>

                    <input
                      name="phone"
                      className="form-control premium-input"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  {/* SERVICE */}
                  <div className="col-md-6">
                    <label className="premium-label">Select Service</label>

                    <select
                      name="service"
                      className="form-select premium-select"
                    >
                      <option>Residential Security</option>

                      <option>Commercial Security</option>

                      <option>Event Security</option>

                      <option>Construction Site Security</option>

                      <option>Mobile Patrol Services</option>

                      <option>24/7 Surveillance</option>
                    </select>
                  </div>

                  {/* DATE */}
                  <div className="col-md-6">
                    <label className="premium-label">Preferred Date</label>

                    <input
                      type="date"
                      name="date"
                      className="form-control premium-input"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="col-12">
                    <label className="premium-label">Additional Message</label>

                    <textarea
                      name="message"
                      rows="4"
                      className="form-control premium-textarea"
                      placeholder="Tell us about your security requirements..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="modal-footer d-flex justify-content-between align-items-center">
                <small className="secure-text">
                  🔒 Your information is safe with us
                </small>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="submit-btn"
                >
                  Send Appointment
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AppointmentModal;

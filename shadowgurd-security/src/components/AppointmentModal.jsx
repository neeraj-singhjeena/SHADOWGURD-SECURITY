function AppointmentModal() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const service = e.target.service.value;
    const date = e.target.date.value;
    const message = e.target.message.value;

    const text =
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Service: ${service}%0A` +
      `Preferred Date: ${date}%0A` +
      `Message: ${message}`;

    window.open(`https://wa.me/+17788636047?text=${text}`, "_blank");
  };

  return (
    <div className="modal fade" id="appointmentModal" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content shadow-lg">
          {/* HEADER */}
          <div className="modal-header bg-dark text-white">
            <h5 className="modal-title">📅 Make an Appointment</h5>
            <button
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <p className="text-muted mb-4">
                Fill in the details below and our team will contact you shortly.
              </p>

              <div className="row g-3">
                {/* NAME */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Phone Number</label>
                  <input
                    name="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                {/* SERVICE */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Select Service
                  </label>
                  <select name="service" className="form-select">
                    <option>Residential Security</option>
                    <option>Commercial Security</option>
                    <option>Event Security</option>
                    <option>24/7 Surveillance</option>
                  </select>
                </div>

                {/* DATE */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Preferred Date
                  </label>
                  <input type="date" name="date" className="form-control" />
                </div>

                {/* MESSAGE */}
                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Any specific requirement..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="modal-footer d-flex justify-content-between">
              <small className="text-muted">
                🔒 Your information is safe with us
              </small>

              <button className="btn btn-danger px-4 fw-semibold">
                Send Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentModal;

import AppointmentModal from "./AppointmentModal";

function Navbar() {
  const closeMenu = () => {
    const nav = document.getElementById("mobileNavbar");
    if (nav) nav.classList.remove("show");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid px-3">
          {/* LEFT: LOGO */}
          <a className="navbar-brand fw-bold m-0" href="#home">
            SHADOWGURD <span className="text-danger">SECURITY</span>
          </a>

          {/* RIGHT: TOGGLER */}
          <button
            className="navbar-toggler custom-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNavbar"
            aria-controls="mobileNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* SLIDE MENU */}
          <div className="collapse navbar-collapse" id="mobileNavbar">
            <ul className="navbar-nav ms-lg-auto mt-4 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>

            {/* BUTTON */}
            <div className="ms-lg-4 mt-4 mt-lg-0">
              <button
                className="btn btn-danger w-100 w-lg-auto"
                data-bs-toggle="modal"
                data-bs-target="#appointmentModal"
                onClick={closeMenu}
              >
                Make Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AppointmentModal />
    </>
  );
}

export default Navbar;

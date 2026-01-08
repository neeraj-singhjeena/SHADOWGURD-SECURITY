import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          {/* COMPANY INFO */}
          <div className="col-md-4">
            <h5 className="footer-title">SHADOWGURD SECURITY</h5>
            <p className="footer-text">
              We are a trusted security service provider delivering reliable,
              professional, and 24/7 protection solutions for homes, businesses,
              and events.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="footer-title">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col-md-3">
            <h6 className="footer-title">Our Services</h6>
            <ul className="footer-links">
              <li>Residential Security</li>
              <li>Commercial Security</li>
              <li>Event Security</li>
              <li>Mobile Patrol</li>
              <li>CCTV Monitoring</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-3">
            <h6 className="footer-title">Contact Us</h6>
            <p className="footer-text">📞 9815723616</p>
            <p className="footer-text">
              <FaEnvelope /> support@shadowgurdsecurity.com
            </p>

            <div className="footer-social">
              <a href="https://wa.me/919815723616" target="_blank">
                <FaWhatsapp />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © 2026 <strong>SHADOWGURD SECURITY</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

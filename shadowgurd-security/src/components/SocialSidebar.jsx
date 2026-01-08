import { FaWhatsapp, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function SocialSidebar() {
  return (
    <div className="social-sidebar d-none d-md-block" style={{ right: "20px" }}>
      <ul className="list-unstyled m-0 p-0 d-flex flex-column gap-3">
        {/* WhatsApp */}
        <li className="social-item">
          <a
            href="https://wa.me/+17788636047"
            target="_blank"
            rel="noopener noreferrer"
            className="social-hover whatsapp"
          >
            <FaWhatsapp size={20} />
            <span className="social-text">WhatsApp</span>
          </a>
        </li>

        {/* Facebook */}
        <li className="social-item">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-hover facebook"
          >
            <FaFacebookF size={18} />
            <span className="social-text">Facebook</span>
          </a>
        </li>

        {/* Twitter / X */}
        <li className="social-item">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-hover twitter"
          >
            <FaXTwitter size={18} />
            <span className="social-text">Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialSidebar;

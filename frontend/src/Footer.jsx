
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-icon">&lt;/&gt;</span>
              <span>
                Code<span className="gradient-text">2Chill</span>
              </span>
            </Link>

            <p>Where Ideas Turn Into Code.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/join">Join Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-social">
            <h3>Connect With Us</h3>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/code2chill.osl/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>

              <a
                href="https://www.linkedin.com/company/code2chill/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Code2Chill. All Rights Reserved.</p>
          <p>Made with ♥ by the Code2Chill community.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

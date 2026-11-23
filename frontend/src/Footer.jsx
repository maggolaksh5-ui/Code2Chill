
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-icon">&lt;/&gt;</span>
              <span>Code<span className="gradient-text">2Chill</span></span>
            </Link>
            <p>Where Ideas Turn Into Code.</p>
            <span>Think. Code. Collaborate.</span>
          </div>

          <div className="footer-links">
            <h4>EXPLORE</h4>
            <Link to="/about">About Us</Link>
            <Link to="/events">Events</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/gallery">Gallery</Link>
          </div>

          <div className="footer-links">
            <h4>CONNECT</h4>
            <Link to="/join">Join Community</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="mailto:code2chill@example.com">Email</a>
          </div>

          <div className="footer-social">
            <h4>FOLLOW OUR JOURNEY</h4>
            <div className="social-icons">
              <a href="#contact">Instagram ↗</a>
              <a href="#contact">GitHub ↗</a>
              <a href="#contact">LinkedIn ↗</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Code2Chill. All rights reserved.</p>
          <p>Made with ♥ by the Code2Chill community.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

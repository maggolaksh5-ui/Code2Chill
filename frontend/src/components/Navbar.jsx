
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Events", "/events"],
    ["Team", "/team"],
    ["Gallery", "/gallery"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-content">

        <Link to="/" className="brand">
          <span className="brand-icon">&lt;/&gt;</span>
          <span>
            Code<span className="gradient-text">2Chill</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {links.map(([name, link]) => (
            <Link
              key={name}
              to={link}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          <Link
            to="/join"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Join Club ↗
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;

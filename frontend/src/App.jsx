import './App.css'
import { useState } from "react";

const events = [
  {
    number: "01",
    type: "WORKSHOP",
    title: "Web Development Bootcamp",
    description: "Learn modern web development and build your first website.",
    date: "Coming Soon",
    icon: "</>",
  },
  {
    number: "02",
    type: "COMPETITION",
    title: "Code Clash",
    description: "Challenge yourself and compete with other coding enthusiasts.",
    date: "Coming Soon",
    icon: "⚡",
  },
  {
    number: "03",
    type: "COMMUNITY",
    title: "Tech Connect",
    description: "Connect with developers, exchange ideas and learn together.",
    date: "Coming Soon",
    icon: "◈",
  },
];

const team = [
  { name: "Technical Head 01", role: "Technical Head", initials: "TH" },
  { name: "Technical Head 02", role: "Technical Head", initials: "TH" },
  { name: "Team Member 01", role: "Developer", initials: "TM" },
  { name: "Team Member 02", role: "Creative Team", initials: "TM" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Events", "#events"],
    ["Team", "#team"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="website">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-content">

          <a href="#home" className="brand">
            <span className="brand-icon">&lt;/&gt;</span>
            <span>Code<span className="gradient-text">2Chill</span></span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
            {links.map(([name, link]) => (
              <a key={name} href={link} onClick={() => setMenuOpen(false)}>
                {name}
              </a>
            ))}
            <a href="#join" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Join Club ↗
            </a>
          </nav>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>

          <div className="container hero-layout">

            <div className="hero-content">

              <div className="announcement">
                <span className="live-dot"></span>
                THE DEVELOPER COMMUNITY
              </div>

              <h1>
                Where Ideas
                <br />
                Turn Into
                <br />
                <span className="gradient-text">Code.</span>
              </h1>

              <p className="hero-description">
                We are Code2Chill — a community of curious minds,
                passionate developers and future innovators.
                Think big, build together and create something extraordinary.
              </p>

              <div className="hero-buttons">
                <a href="#join" className="btn btn-primary">
                  Join Our Community →
                </a>

                <a href="#about" className="btn btn-secondary">
                  Explore More ↗
                </a>
              </div>

              <div className="hero-proof">
                <div className="avatar-stack">
                  <span>C</span>
                  <span>2</span>
                  <span>C</span>
                </div>
                <div>
                  <strong>Think. Code. Collaborate.</strong>
                  <p>A community built for creators.</p>
                </div>
              </div>

            </div>

            {/* CODE EDITOR */}
            <div className="hero-visual">

              <div className="floating-tag">✦ Build Something Great</div>

              <div className="code-window">

                <div className="window-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>innovation.jsx</span>
                  <span>⌘</span>
                </div>

                <div className="code-body">
                  <p><span className="line-number">01</span> <span className="code-purple">const</span> community = {"{"}</p>
                  <p><span className="line-number">02</span> &nbsp;&nbsp;name: <span className="code-green">"Code2Chill"</span>,</p>
                  <p><span className="line-number">03</span> &nbsp;&nbsp;mindset: <span className="code-green">"Innovative"</span>,</p>
                  <p><span className="line-number">04</span> &nbsp;&nbsp;passion: <span className="code-green">"Infinite"</span>,</p>
                  <p><span className="line-number">05</span> &nbsp;&nbsp;dreams: <span className="code-blue">"Unlimited"</span></p>
                  <p><span className="line-number">06</span> {"}"}</p>
                  <br />
                  <p><span className="line-number">07</span> <span className="code-purple">function</span> <span className="code-yellow">buildFuture</span>() {"{"}</p>
                  <p><span className="line-number">08</span> &nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-green">"Let's create!"</span>;</p>
                  <p><span className="line-number">09</span> {"}"}</p>
                  <br />
                  <div className="code-output">
                    <span className="live-dot"></span>
                    Ready to innovate_
                  </div>
                </div>

              </div>

              <div className="floating-tag tag-bottom">
                ✨ Ideas → Reality
              </div>

            </div>

          </div>

          <div className="container hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
            <span>01 / 06</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="container">

            <div className="section-heading">
              <span className="eyebrow">— WHO WE ARE</span>
              <h2>
                More Than Just
                <br />
                <span className="gradient-text">A Coding Club.</span>
              </h2>
              <p>
                A place where curiosity meets creativity and ideas
                become real-world solutions.
              </p>
            </div>

            <div className="about-grid">

              <div className="about-main-card">
                <div className="about-icon">✦</div>
                <h3>We Believe in Building.</h3>
                <p>
                  Code2Chill is a student-driven developer community
                  that encourages learning by doing. We bring together
                  students who want to explore technology, collaborate
                  on projects and grow as developers.
                </p>
                <a href="#join" className="text-link">
                  Become a part of us ↗
                </a>
                <div className="about-decoration">&lt;/&gt;</div>
              </div>

              <div className="about-small-card">
                <div className="small-card-icon">⌘</div>
                <h3>Learn Together</h3>
                <p>Explore new technologies and sharpen your skills.</p>
              </div>

              <div className="about-small-card">
                <div className="small-card-icon">◈</div>
                <h3>Build Together</h3>
                <p>Collaborate with creative minds and build projects.</p>
              </div>

              <div className="about-small-card">
                <div className="small-card-icon">⚡</div>
                <h3>Grow Together</h3>
                <p>Take challenges, participate and achieve more.</p>
              </div>

            </div>
          </div>
        </section>

        {/* EVENTS */}
        <section className="section events-section" id="events">
          <div className="container">

            <div className="section-top">
              <div>
                <span className="eyebrow">— WHAT'S HAPPENING</span>
                <h2>
                  Events & <span className="gradient-text">Experiences.</span>
                </h2>
                <p>Learn, compete and connect with the tech community.</p>
              </div>
              <a href="#contact" className="text-link">Explore Events ↗</a>
            </div>

            <div className="events-grid">
              {events.map((event) => (
                <article className="event-card" key={event.number}>

                  <div className="event-card-top">
                    <span className="event-number">{event.number}</span>
                    <span className="event-icon">{event.icon}</span>
                  </div>

                  <span className="event-category">{event.type}</span>

                  <h3>{event.title}</h3>
                  <p>{event.description}</p>

                  <div className="event-footer">
                    <span>◷ {event.date}</span>
                    <a href="#contact">↗</a>
                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="container">

            <div className="stats-heading">
              <span className="eyebrow">OUR COMMUNITY</span>
              <h2>Small Steps. <span className="gradient-text">Big Impact.</span></h2>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>01</h3>
                <p>Ideas Start Here</p>
              </div>
              <div className="stat-item">
                <h3>∞</h3>
                <p>Learning Possibilities</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Passion for Tech</p>
              </div>
              <div className="stat-item">
                <h3>1</h3>
                <p>Growing Community</p>
              </div>
            </div>

          </div>
        </section>

        {/* TEAM */}
        <section className="section team-section" id="team">
          <div className="container">

            <div className="section-top">
              <div>
                <span className="eyebrow">— THE PEOPLE BEHIND IT</span>
                <h2>Meet Our <span className="gradient-text">Team.</span></h2>
                <p>Meet the minds who make things happen.</p>
              </div>
              <a href="#contact" className="text-link">Meet the team ↗</a>
            </div>

            <div className="team-grid">
              {team.map((member, index) => (
                <div className="team-card" key={member.name}>
                  <div className={`team-avatar avatar-${index + 1}`}>
                    {member.initials}
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                  <span className="team-arrow">↗</span>
                </div>
              ))}
            </div>

            <p className="placeholder-note">
              * Temporary placeholders. Official team details will be added later.
            </p>

          </div>
        </section>

        {/* GALLERY */}
        <section className="section gallery-section" id="gallery">
          <div className="container">

            <div className="section-heading">
              <span className="eyebrow">— MOMENTS THAT MATTER</span>
              <h2>Our <span className="gradient-text">Gallery.</span></h2>
              <p>
                A glimpse into the creativity, collaboration and experiences
                of our community.
              </p>
            </div>

            <div className="gallery-grid">
              <div className="gallery-card gallery-large">
                <div className="gallery-placeholder gallery-purple">
                  <span>&lt;/&gt;</span>
                  <p>BUILD. CREATE. INNOVATE.</p>
                </div>
                <div className="gallery-caption">01 / COMMUNITY ↗</div>
              </div>

              <div className="gallery-card">
                <div className="gallery-placeholder gallery-blue">
                  <span>⌘</span>
                  <p>THINK DIFFERENT</p>
                </div>
                <div className="gallery-caption">02 / LEARNING ↗</div>
              </div>

              <div className="gallery-card">
                <div className="gallery-placeholder gallery-pink">
                  <span>◈</span>
                  <p>BETTER TOGETHER</p>
                </div>
                <div className="gallery-caption">03 / COLLABORATION ↗</div>
              </div>
            </div>

            <p className="placeholder-note">
              * Actual club photographs will be added later.
            </p>

          </div>
        </section>

        {/* JOIN */}
        <section className="join-section" id="join">
          <div className="container">
            <div className="join-card">

              <div className="join-content">
                <span className="eyebrow">✦ YOUR NEXT CHAPTER STARTS HERE</span>

                <h2>
                  Don't Just Watch.
                  <br />
                  <span className="gradient-text">Build Something.</span>
                </h2>

                <p>
                  Have an idea? A passion for technology? Or just want
                  to explore the world of development?
                  There's a place for you here.
                </p>

                <a href="#contact" className="btn btn-primary">
                  Join Code2Chill →
                </a>
              </div>

              <div className="join-decoration">◉</div>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact-section" id="contact">
          <div className="container contact-grid">

            <div>
              <span className="eyebrow">— GET IN TOUCH</span>

              <h2>
                Let's Build
                <br />
                <span className="gradient-text">Something Together.</span>
              </h2>

              <p>
                Questions, ideas or collaboration opportunities?
                We'd love to hear from you.
              </p>

              <a href="mailto:code2chill@example.com" className="contact-link">
                ✉ Contact our team ↗
              </a>

              <div className="contact-detail">
                📍 Chitkara University, Punjab
              </div>
            </div>

            <div className="contact-box">
              <div className="contact-box-icon">&lt;/&gt;</div>
              <h3>Have something in mind?</h3>
              <p>
                Let's connect, exchange ideas and make technology
                a little more exciting.
              </p>
              <a href="mailto:code2chill@example.com">Say Hello ↗</a>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">

          <div className="footer-main">

            <div className="footer-brand">
              <a href="#home" className="brand">
                <span className="brand-icon">&lt;/&gt;</span>
                <span>Code<span className="gradient-text">2Chill</span></span>
              </a>
              <p>Where Ideas Turn Into Code.</p>
              <span>Think. Code. Collaborate.</span>
            </div>

            <div className="footer-links">
              <h4>EXPLORE</h4>
              <a href="#about">About Us</a>
              <a href="#events">Events</a>
              <a href="#team">Our Team</a>
              <a href="#gallery">Gallery</a>
            </div>

            <div className="footer-links">
              <h4>CONNECT</h4>
              <a href="#join">Join Community</a>
              <a href="#contact">Contact Us</a>
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

    </div>
  );
}

export default App;

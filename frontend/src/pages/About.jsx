
function About() {
  const features = [
    {
      icon: "</>",
      title: "Learn Together",
      description:
        "Explore programming languages, technologies and new concepts with fellow learners.",
    },
    {
      icon: "⚡",
      title: "Build Projects",
      description:
        "Turn creative ideas into real-world projects through practical experience.",
    },
    {
      icon: "🚀",
      title: "Grow Together",
      description:
        "Participate in competitions, workshops and collaborative tech activities.",
    },
  ];

  return (
    <main className="section about-page">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">WHO WE ARE</span>
          <h1>
            About <span className="gradient-text">Code2Chill</span>
          </h1>
          <p>
            Where curiosity meets creativity and ideas turn into code.
          </p>
        </div>

        <div className="about-page-intro">
          <h2>More Than Just a Coding Club.</h2>
          <p>
            Code2Chill is a technical community at Chitkara
            University where students come together to learn,
            create, collaborate and explore technology.
            We believe in learning by building and growing
            through teamwork.
          </p>
          <p>
            From coding sessions and workshops to competitions
            and innovative projects, we create opportunities
            for students to discover their potential.
          </p>
        </div>

        <div className="section-heading">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Our <span className="gradient-text">Mission</span></h2>
        </div>

        <div className="about-page-grid">
          {features.map((item) => (
            <div className="about-page-card" key={item.title}>
              <div className="about-page-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="about-page-quote">
          <h2>Think. Code. Collaborate.</h2>
          <p>Be curious. Keep building. Never stop learning.</p>
        </div>

      </div>
    </main>
  );
}

export default About;

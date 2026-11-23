
function Gallery() {
  const galleryItems = [
    {
      number: "01",
      title: "Coding Competitions",
      category: "COMPETITIONS",
      icon: "</>",
      className: "gallery-purple",
    },
    {
      number: "02",
      title: "Tech Workshops",
      category: "LEARNING",
      icon: "AI",
      className: "gallery-blue",
    },
    {
      number: "03",
      title: "Community Events",
      category: "COMMUNITY",
      icon: "{ }",
      className: "gallery-pink",
    },
    {
      number: "04",
      title: "Team Moments",
      category: "BEHIND THE SCENES",
      icon: "✦",
      className: "gallery-purple",
    },
    {
      number: "05",
      title: "Hackathons",
      category: "INNOVATION",
      icon: "</>",
      className: "gallery-blue",
    },
    {
      number: "06",
      title: "Club Activities",
      category: "OUR JOURNEY",
      icon: "✧",
      className: "gallery-pink",
    },
  ];

  return (
    <main className="section gallery-section">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">MOMENTS THAT MATTER</span>
          <h1>
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p>
            A glimpse into our coding sessions,
            workshops, competitions and community.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              className={`gallery-card ${item.className}`}
              key={item.number}
            >
              <div className="gallery-placeholder">
                <span className="gallery-number">
                  {item.number}
                </span>

                <span className="gallery-symbol">
                  {item.icon}
                </span>

                <div className="gallery-caption">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="placeholder-note">
          <p>
            Official Code2Chill event photographs
            will be added here soon.
          </p>
        </div>

      </div>
    </main>
  );
}

export default Gallery;

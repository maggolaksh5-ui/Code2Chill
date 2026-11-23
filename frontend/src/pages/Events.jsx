
import { Link } from "react-router-dom";

function Events() {
  const events = [
    {
      number: "01",
      category: "COMPETITION",
      title: "Code Sprint",
      description:
        "Challenge your coding skills, solve problems and compete with fellow developers.",
      date: "Date to be announced",
      venue: "Venue to be announced",
      icon: "</>",
    },
    {
      number: "02",
      category: "WORKSHOP",
      title: "AI & ML Workshop",
      description:
        "Explore Artificial Intelligence and Machine Learning through practical learning.",
      date: "Date to be announced",
      venue: "Venue to be announced",
      icon: "AI",
    },
    {
      number: "03",
      category: "COMMUNITY",
      title: "Tech Talk",
      description:
        "Connect with developers, exchange ideas and discover new technologies.",
      date: "Date to be announced",
      venue: "Venue to be announced",
      icon: "{ }",
    },
  ];

  return (
    <main className="section events-page">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">LEARN. BUILD. COMPETE.</span>
          <h1>
            Explore Our <span className="gradient-text">Events</span>
          </h1>
          <p>
            From coding competitions to tech workshops,
            discover what's happening at Code2Chill.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.number}>

              <div className="event-card-top">
                <span className="event-number">{event.number}</span>
                <span className="event-category">
                  {event.category}
                </span>
              </div>

              <div className="event-icon">
                {event.icon}
              </div>

              <h2>{event.title}</h2>

              <p>{event.description}</p>

              <div className="event-details">
                <span>📅 {event.date}</span>
                <span>📍 {event.venue}</span>
              </div>

              <div className="event-footer">
                <Link to="/join">
                  Join Community ↗
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Events;

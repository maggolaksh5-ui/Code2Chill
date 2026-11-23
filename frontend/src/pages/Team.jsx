
function Team() {
  
const teamMembers = [
  {
    name: "Club President",
    role: "Club Leadership",
    initials: "CP",
    number: "01",
  },
  {
    name: "Vice President",
    role: "Club Leadership",
    initials: "VP",
    number: "02",
  },
  {
    name: "Technical Head",
    role: "Technical Team",
    initials: "TH",
    number: "03",
  },
  {
    name: "Organising Team Head",
    role: "Event Management",
    initials: "OH",
    number: "04",
  },
  {
    name: "Social Media Team Head",
    role: "Social Media & Outreach",
    initials: "SM",
    number: "05",
  },
];


  return (
    <main className="section team-section">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">THE PEOPLE BEHIND THE CODE</span>
          <h1>
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p>
            A community of passionate minds building,
            learning and growing together.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.number}>

              <div className="team-avatar">
                <span>{member.initials}</span>
              </div>

              <div className="team-info">
                <span className="event-number">
                  {member.number}
                </span>

                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>

              <span className="team-arrow">↗</span>

            </div>
          ))}
        </div>

        <div className="placeholder-note">
          <p>
            Team profiles will be updated with official
            member names and photographs.
          </p>
        </div>

      </div>
    </main>
  );
}

export default Team;

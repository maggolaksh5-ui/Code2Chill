
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="section contact-section">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">LET'S CONNECT</span>
          <h1>
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p>
            Have a question, an idea or want to collaborate?
            We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-box">
            <h2>Let's Connect</h2>
            <p>
              Connect with the Code2Chill community
              and stay updated with our journey.
            </p>

            <div className="contact-detail">
              <span className="contact-box-icon">✉</span>
              <div>
                <h4>Email</h4>
                <p>Official email coming soon</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-box-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Chitkara University, Punjab</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-box-icon">✦</span>
              <div>
                <h4>Community</h4>
                <p>Think. Code. Collaborate.</p>
              </div>
            </div>
          </div>

          <form className="join-form" onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>

            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary">
              Send Message ↗
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}

export default Contact;

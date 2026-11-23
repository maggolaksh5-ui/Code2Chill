
import { useState } from "react";

function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    reason: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Your application has been submitted!");

    setFormData({
      name: "",
      email: "",
      branch: "",
      year: "",
      reason: "",
    });
  }

  return (
    <main className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">BECOME A MEMBER</span>
          <h1>Join <span className="gradient-text">Code2Chill</span></h1>
          <p>Think. Code. Collaborate. Be part of our community.</p>
        </div>

        <form className="join-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
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
            placeholder="Enter your college email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Branch</label>
          <input
            type="text"
            name="branch"
            placeholder="e.g. CSE, AIML, IT"
            value={formData.branch}
            onChange={handleChange}
            required
          />

          <label>Year of Study</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select your year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>

          <label>Why do you want to join?</label>
          <textarea
            name="reason"
            placeholder="Tell us about your interests..."
            value={formData.reason}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary">
            Submit Application ↗
          </button>
        </form>
      </div>
    </main>
  );
}

export default JoinUs;

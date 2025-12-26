import "./About.css";

function About() {
  return (
    <section id="about" className="about-section reveal">
      <div className="about-container">

        {/* LEFT SIDE IMAGE */}
        <div className="about-image">
          <img src="./icons/Profile.jpeg" alt="Profile" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          <h2>About Me</h2>

          <p>
            I’m a BCA graduate and Full Stack Developer with experience
            in React, Node.js, MongoDB, and modern web technologies.
            I enjoy building scalable and user-friendly web applications.
          </p>

          <div className="education">
            <h3>Education</h3>

            <div className="edu-card">
              <span>🎓</span>
              <div>
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <p>AISECT University</p>
                <small>2022 – 2025</small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

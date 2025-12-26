import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact reveal">
      <h2>Contact Me</h2>

      <div className="contact-box">
        <div className="contact-item">
          <span className="icon">✉️</span>
          <span>example@gmail.com</span>
        </div>

        <div className="contact-item">
          <span className="icon">in</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </section>
  );
}

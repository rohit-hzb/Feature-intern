import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h3>Rohit Kumar</h3>
          <p>
            Full Stack Developer | MERN Stack  
            <br />
            Building modern and scalable web applications.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#" title="GitHub">🐙</a>
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Twitter">𝕏</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rohit Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

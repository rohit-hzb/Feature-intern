import { useState } from "react";
import "./Navbar.css";

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Rohit.dev</h2>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button className="menu" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

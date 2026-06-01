import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ borderBottom: "2px solid var(--main-color, #00e6d0)" }}>
      <div className="container">
        <a href="#home" className="navbar-brand" style={{ fontWeight: 700, fontSize: "24px" }}>
          Muhammad <span style={{ color: "var(--main-color, #00e6d0)" }}>Islam</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item"><a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

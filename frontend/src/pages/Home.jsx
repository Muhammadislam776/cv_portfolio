import React from "react";

export default function Home() {
  return (
    <section id="home" className="hero-section py-5 container" style={{ marginTop: "80px" }}>
      <div className="row align-items-center gy-5">
        <div className="col-lg-6 col-md-12 hero-text">
          <h5 className="text-primary mb-3">Hello I&apos;m</h5>
          <h1 className="hero-title mb-3">
            Muhammad <span style={{ color: "var(--main-color, #00e6d0)" }}>Islam</span>
          </h1>
          <h3 className="mb-4 text-white" style={{ minHeight: "40px" }}>
            Full Stack Web Developer
          </h3>
          <p className="hero-description mb-4 text-muted">
            I design and develop scalable web applications using modern technologies including Node.js, Express, MongoDB and JavaScript frameworks.
          </p>
          <div className="hero-actions d-flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary hover-effect">View Projects</a>
            <a href="#contact" className="btn btn-outline-light hover-effect">Hire Me</a>
          </div>
        </div>
        
        <div className="col-lg-6 col-md-12 text-center position-relative">
          <div className="hero-image-wrapper">
            <div className="orbit-icons" aria-hidden="true" style={{ animation: "orbitRotate 20s linear infinite" }}>
              <div className="orbit-icon icon-1"><i className="bi bi-filetype-html" /></div>
              <div className="orbit-icon icon-2"><i className="bi bi-filetype-css" /></div>
              <div className="orbit-icon icon-3"><i className="bi bi-filetype-js" /></div>
              <div className="orbit-icon icon-4"><i className="bi bi-server" /></div>
              <div className="orbit-icon icon-5"><i className="bi bi-git" /></div>
              <div className="orbit-icon icon-6"><i className="bi bi-database" /></div>
            </div>
            <img 
              src="/images/profile.jpg" 
              className="hero-image img-fluid rounded-circle border border-primary" 
              alt="Profile" 
              style={{ width: "280px", height: "280px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

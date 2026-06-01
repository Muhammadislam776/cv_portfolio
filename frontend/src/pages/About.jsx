import React from "react";
import SkillCard from "../components/SkillCard";

export default function About() {
  const skills = [
    { name: "HTML5", icon: "bi-filetype-html" },
    { name: "CSS3", icon: "bi-filetype-css" },
    { name: "JavaScript", icon: "bi-filetype-js" },
    { name: "Node.js", icon: "bi-server" }
  ];

  return (
    <section id="about" className="about-section py-5 container">
      <div className="row align-items-center g-5">
        <div className="col-lg-5 col-md-12 text-center">
          <img 
            src="/images/profile.jpg" 
            className="about-main-img img-fluid rounded-circle border border-primary" 
            alt="Muhammad Islam" 
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-7 col-md-12">
          <h2 className="text-white fw-bold">Hi, I&apos;m Muhammad Islam</h2>
          <h4 className="text-primary mb-3">Full Stack Web Developer</h4>
          <p className="text-muted">
            I am a passionate web developer with strong experience in building modern, responsive, and user-friendly web applications.
          </p>
          <p className="text-muted">
            My expertise includes frontend and backend development using modern technologies like JavaScript, Node.js, Express, and MongoDB.
          </p>
          
          <div className="about-info mt-4 bg-dark-deep p-4 rounded-3 border">
            <div className="row g-3 text-white">
              <div className="col-md-6">
                <p className="mb-2"><strong>Name:</strong> Muhammad Islam</p>
                <p className="mb-2"><strong>Email:</strong> muhammadislam6590.i@gmail.com</p>
                <p className="mb-0"><strong>Location:</strong> Pakistan</p>
              </div>
              <div className="col-md-6">
                <p className="mb-2"><strong>Experience:</strong> 2+ Years</p>
                <p className="mb-2"><strong>Freelance:</strong> Available</p>
                <p className="mb-0"><strong>Languages:</strong> English</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section mt-5 pt-5">
        <h3 className="section-title text-center text-white mb-5">Technical Skills</h3>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 col-sm-6">
              <SkillCard name={skill.name} icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

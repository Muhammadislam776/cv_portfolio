import React from "react";

export default function ProjectCard({ title, description, image, techStack, demoUrl, githubUrl }) {
  return (
    <div className="project-card hover-effect position-relative overflow-hidden rounded-3 border">
      <img
        src={image || "/images/project6.png"}
        alt={title}
        className="img-fluid w-100"
        style={{ height: "260px", objectFit: "contain", objectPosition: "center", background: "transparent", padding: 0, transition: "all 0.4s ease" }}
      />
      <div className="project-overlay text-center p-3 d-flex flex-column justify-content-center align-items-center" style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
        background: "rgba(7, 24, 28, 0.9)", opacity: 0, transition: "opacity 0.4s ease"
      }}>
        <h4 className="text-white fw-bold mb-2">{title}</h4>
        <p className="small text-muted mb-3" style={{ color: "#a7b8c8" }}>{description}</p>
        
        <div className="project-tech d-flex flex-wrap justify-content-center gap-2 mb-3">
          {techStack && techStack.map((tech, index) => (
            <span key={index} className="badge bg-secondary text-primary" style={{ fontSize: "10px" }}>{tech}</span>
          ))}
        </div>
        
        <div className="project-buttons d-flex flex-wrap justify-content-center gap-2">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              <i className="bi bi-laptop me-1" /> Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light">
              <i className="bi bi-github me-1" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

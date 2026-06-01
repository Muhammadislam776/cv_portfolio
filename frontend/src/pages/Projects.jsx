import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../services/projectService";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        if (data && data.success) {
          setProjects(data.data);
        }
      } catch (err) {
        console.error("Failed to load projects:", err);
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    return project.categories && project.categories.includes(filter);
  });

  return (
    <section id="projects" className="projects-section py-5 container">
      <h2 className="section-title text-center text-white mb-5">Featured Work</h2>

      {/* Category Tabs */}
      <div className="project-filter text-center mb-5 d-flex justify-content-center flex-wrap gap-2">
        {["all", "web", "frontend", "fullstack"].map((category) => (
          <button 
            key={category}
            onClick={() => setFilter(category)} 
            className={`btn btn-sm ${filter === category ? "btn-primary" : "btn-outline-secondary"} text-capitalize`}
          >
            {category === "all" ? "All Work" : category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="row g-4 justify-content-center">
        {filteredProjects.map((project) => (
          <div key={project.id} className="col-lg-4 col-md-6">
            <ProjectCard 
              title={project.title}
              description={project.description}
              image={project.image_url}
              techStack={project.tech_stack}
              demoUrl={project.live_url}
              githubUrl={project.github_url}
            />
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <p className="text-center text-muted">No projects found for this category.</p>
        )}
      </div>
    </section>
  );
}

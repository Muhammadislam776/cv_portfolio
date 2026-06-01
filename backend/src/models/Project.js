// Project Model with Local mock database

const fallbackProjects = [
  {
    id: 8,
    title: "Smart Student Clearance & Degree Issuance System",
    description: "A student clearance workflow that manages departmental approvals, account status, and degree issuance tracking.",
    image: "/images/degree_clearance_system.svg",
    categories: ["web", "fullstack"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://degreeclearancesystem.onrender.com/",
    githubUrl: "https://github.com/Muhammadislam776/Clearance-Degree-Issuance-035-A"
  },
  {
    id: 7,
    title: "Weather App",
    description: "A real-time weather forecasting application providing current conditions and multi-day forecasts using a weather API.",
    image: "/images/weather_app_preview.png",
    categories: ["web", "frontend"],
    tech: ["Node.js", "Express", "EJS", "REST API", "JavaScript"],
    demoUrl: "https://weather-app-five-sandy-70.vercel.app",
    githubUrl: "https://github.com/Muhammadislam776/weather-app"
  },
  {
    id: 1,
    title: "Committee Management System",
    description: "A comprehensive platform to manage monthly committee registries, members, accounts, and payouts",
    image: "/images/committee_project.svg",
    categories: ["web", "fullstack"],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://comittee-management-system-ten.vercel.app/",
    githubUrl: "https://github.com/Muhammadislam776/comittee_management_system"
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "Full stack task management application with detailed collaborative workspaces",
    image: "/images/project2.png",
    categories: ["web", "fullstack"],
    tech: ["Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Muhammadislam776"
  },
  {
    id: 3,
    title: "E-Commerce UI",
    description: "Modern responsive ecommerce catalog with animated filters",
    image: "/images/project3.png",
    categories: ["frontend"],
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Muhammadislam776"
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Full stack blog platform with modular architecture and session authentication",
    image: "/images/project4.png",
    categories: ["fullstack"],
    tech: ["Node.js", "MongoDB", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/Muhammadislam776"
  },
  {
    id: 5,
    title: "Company Website",
    description: "Responsive business presentation site with multi-category portfolios",
    image: "/images/project5.png",
    categories: ["web"],
    tech: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/Muhammadislam776"
  },
  {
    id: 6,
    title: "Landing Page",
    description: "High performance corporate promotion landing page with keyframe timeline animations",
    image: "/images/project6.png",
    categories: ["frontend"],
    tech: ["HTML", "CSS", "JS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Muhammadislam776"
  }
];

class Project {
  static async getAll() {
    return fallbackProjects;
  }

  static async getById(id) {
    return fallbackProjects.find(p => p.id === parseInt(id)) || null;
  }

  static async create(projectData) {
    const newId = fallbackProjects.length + 1;
    const created = { id: newId, ...projectData };
    fallbackProjects.push(created);
    return created;
  }
}

module.exports = Project;


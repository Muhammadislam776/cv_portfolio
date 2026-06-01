// Project API Service
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export async function getProjects() {
  try {
    const response = await fetch(`${API_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    return await response.json();
  } catch (error) {
    console.error("API error getProjects:", error);
    // Return sample local project data as fallback for offline portfolios
    return {
      success: true,
      data: [
        {
          id: 3,
          title: "Smart Student Clearance & Degree Issuance System",
          description: "A student clearance workflow that manages departmental approvals, account status, and degree issuance tracking.",
          image_url: "/images/degree_clearance_system.svg",
          live_url: "https://degreeclearancesystem.onrender.com/",
          github_url: "https://github.com/Muhammadislam776/Clearance-Degree-Issuance-035-A",
          tech_stack: ["React", "Node.js", "Express", "MongoDB"],
          categories: ["web", "fullstack"]
        },
        {
          id: 1,
          title: "Committee Management System",
          description: "A comprehensive platform to manage monthly committee registries, members, accounts, and payouts.",
          image_url: "/images/committee_project.svg",
          live_url: "https://comittee-management-system-ten.vercel.app/",
          github_url: "https://github.com/Muhammadislam776/comittee_management_system",
          tech_stack: ["React", "Node.js", "Express", "MongoDB"],
          categories: ["web", "fullstack"]
        },
        {
          id: 2,
          title: "Weather App",
          description: "A real-time weather forecasting application providing current conditions and multi-day forecasts using a weather API.",
          image_url: "/images/weather_app_preview.png",
          live_url: "https://weather-app-five-sandy-70.vercel.app/",
          github_url: "https://github.com/Muhammadislam776/weather-app",
          tech_stack: ["Node.js", "Express", "EJS", "REST API", "JavaScript"],
          categories: ["web", "frontend"]
        },
      ]
    };
  }
}

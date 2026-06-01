import React from "react";

export default function SkillCard({ name, icon }) {
  return (
    <div className="skill-card p-4 hover-effect text-center rounded-3 border bg-dark-deep" style={{ cursor: "pointer", transition: "all 0.3s ease" }}>
      <i className={`bi ${icon || "bi-code-slash"} skill-icon`} style={{ fontSize: "40px", color: "var(--main-color, #00e6d0)" }}></i>
      <h5 className="mt-3 text-white fw-bold">{name}</h5>
    </div>
  );
}

import { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.css";

export function Projects() {
  const [numberShown, setNumberShown] = useState(Math.min(projects.length, 3));

  function showMore() {
    setNumberShown((current) => Math.min(current + 3, projects.length));
  }

  return (
    <section className="projects" id="projects">
      <div className="projects__heading">
        <p className="projects__eyebrow">Selected work</p>
        <h2>Projects</h2>
      </div>

      <ul className="projects__grid">
        {projects.slice(0, numberShown).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>

      {projects.length > 3 && numberShown < projects.length && (
        <button
          className="projects__show-more"
          type="button"
          onClick={showMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

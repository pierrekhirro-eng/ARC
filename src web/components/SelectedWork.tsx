import { projects } from "../data/site";
import { ArrowUpRight } from "lucide-react";

export function SelectedWork() {
  return (
    <section className="section work-section" id="work">
      <div className="section-topline">
        <div className="section-label">/ SELECTED WORK</div>
        <div className="section-index">Recent builds</div>
      </div>

      <div className="work-grid">
        {projects.map((project) => (
          <article className="project" key={project.index}>
            <div className="project-image">
              <img src={project.image} alt="" loading="lazy" />
              <div className="project-index">{project.index}</div>
            </div>
            <div className="project-info">
              <div>
                <span className="service-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-side">
                {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                <a href="#contact" aria-label={`Conhecer projeto ${project.title}`}><ArrowUpRight /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
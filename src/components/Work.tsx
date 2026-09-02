import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    type: "PRODUCT SYSTEM",
    title: "North / Operations",
    description:
      "A complex operation reorganized around one clear digital workspace.",
  },
  {
    number: "02",
    type: "COMMERCE",
    title: "Atelier / Commerce",
    description:
      "A commerce experience designed as a living brand system, not just a storefront.",
  },
];

export function Work() {
  return (
    <section className="section work" id="work">
      <div className="section-topline">
        <span>/ 05 — SELECTED WORK</span>
        <span>Selected systems</span>
      </div>

      <div className="work-header">
        <h2>
          Ideas are easy.
          <br />
          <em>Execution isn&apos;t.</em>
        </h2>
      </div>

      <div className="work-list">
        {projects.map((project) => (
          <article className="work-item" key={project.number}>
            <div
              className={`work-art work-art-${project.number}`}
              aria-hidden="true"
            >
              <div className="art-label">{project.type}</div>

              <div className="art-frame">
                <div className="art-block art-block-a" />
                <div className="art-block art-block-b" />
                <div className="art-block art-block-c" />
              </div>

              <span className="art-number">{project.number}</span>
            </div>

            <div className="work-info">
              <div className="work-copy">
                <span className="small-label">{project.type}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <a
                href="#contact"
                className="round-arrow"
                aria-label={`Conhecer o projeto ${project.title}`}
              >
                <ArrowUpRight size={18} strokeWidth={1.8} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
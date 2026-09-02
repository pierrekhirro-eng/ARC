import { ArrowUpRight, Check, Layers3, Zap } from "lucide-react";

interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  visual: "dashboard" | "commerce" | "automation";
}

const projects: Project[] = [
  {
    number: "01",
    category: "DIGITAL PLATFORM",
    title: "Operations OS",
    description:
      "Uma plataforma para organizar clientes, pedidos, comunicação, tarefas e entregas em um único ambiente.",
    metric: "+42%",
    metricLabel: "efficiency",
    tags: ["Platform", "Dashboard", "API"],
    visual: "dashboard",
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "Commerce System",
    description:
      "Uma experiência de compra conectada ao negócio, desde a descoberta até a operação.",
    metric: "3.4×",
    metricLabel: "conversion",
    tags: ["Store", "Checkout", "CRM"],
    visual: "commerce",
  },
  {
    number: "03",
    category: "AUTOMATION",
    title: "Connected Flow",
    description:
      "Um fluxo automatizado que conecta ferramentas, reduz tarefas manuais e mantém toda a operação sincronizada.",
    metric: "18",
    metricLabel: "automations",
    tags: ["Workflow", "Integrations", "AI"],
    visual: "automation",
  },
];

function DashboardVisual() {
  return (
    <div className="project-visual dashboard-visual">
      <div className="visual-window">
        <div className="visual-window-top">
          <span />
          <span />
          <span />
        </div>

        <div className="dashboard-layout">
          <aside className="dashboard-sidebar">
            <div className="dashboard-logo-mark">A</div>

            <span />
            <span />
            <span />
            <span />
          </aside>

          <div className="dashboard-content">
            <div className="dashboard-heading">
              <div className="visual-text-line long" />
              <div className="visual-text-line short" />
            </div>

            <div className="dashboard-stat-row">
              <div className="dashboard-stat">
                <small>Projects</small>
                <strong>128</strong>
              </div>

              <div className="dashboard-stat">
                <small>Active</small>
                <strong>24</strong>
              </div>

              <div className="dashboard-stat">
                <small>Growth</small>
                <strong>+42%</strong>
              </div>
            </div>

            <div className="dashboard-chart">
              <div className="chart-line chart-line-one" />
              <div className="chart-line chart-line-two" />
              <div className="chart-point chart-point-one" />
              <div className="chart-point chart-point-two" />
              <div className="chart-point chart-point-three" />
            </div>

            <div className="dashboard-bars">
              <span style={{ height: "42%" }} />
              <span style={{ height: "64%" }} />
              <span style={{ height: "54%" }} />
              <span style={{ height: "78%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "92%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="project-visual commerce-visual">
      <div className="commerce-orbit commerce-orbit-one" />
      <div className="commerce-orbit commerce-orbit-two" />

      <div className="commerce-product">
        <div className="commerce-product-top">
          <span />
          <span />
        </div>

        <div className="commerce-product-body">
          <div className="commerce-product-image" />

          <div className="commerce-product-info">
            <div className="visual-text-line medium" />
            <div className="visual-text-line small" />

            <div className="commerce-product-price">
              $249
            </div>

            <div className="commerce-product-button">
              ADD TO CART
            </div>
          </div>
        </div>
      </div>

      <div className="commerce-floating-card">
        <span>CHECKOUT</span>
        <strong>98.7%</strong>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="project-visual automation-visual">
      <div className="automation-grid" />

      <div className="automation-node automation-node-main">
        <Zap
          size={20}
          strokeWidth={1.6}
        />
      </div>

      <div className="automation-node automation-node-one">
        <span />
      </div>

      <div className="automation-node automation-node-two">
        <span />
      </div>

      <div className="automation-node automation-node-three">
        <span />
      </div>

      <div className="automation-node automation-node-four">
        <span />
      </div>

      <div className="automation-line automation-line-one" />
      <div className="automation-line automation-line-two" />
      <div className="automation-line automation-line-three" />
      <div className="automation-line automation-line-four" />

      <div className="automation-badge">
        <Check
          size={13}
          strokeWidth={2}
        />
        Flow active
      </div>
    </div>
  );
}

function ProjectVisual({
  type,
}: {
  type: Project["visual"];
}) {
  switch (type) {
    case "dashboard":
      return <DashboardVisual />;

    case "commerce":
      return <CommerceVisual />;

    case "automation":
      return <AutomationVisual />;

    default:
      return null;
  }
}

export function SelectedProjects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-intro">
          <div className="section-heading-block">
            <span className="section-label">
              04 / PROJETOS
            </span>

            <h2 className="section-title">
              Ideias diferentes.
              <br />
              <em>Soluções diferentes.</em>
            </h2>
          </div>

          <div className="section-intro-right">
            <p className="section-description">
              Alguns exemplos de sistemas que poderiam
              nascer a partir de uma única conversa.
            </p>

            <span className="section-hint">
              Explorar possibilidades
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
              />
            </span>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-showcase"
              key={project.number}
            >
              <div className="project-showcase-top">
                <div className="project-showcase-index">
                  {project.number}
                </div>

                <span className="project-showcase-category">
                  {project.category}
                </span>

                <span className="project-showcase-type">
                  <Layers3
                    size={14}
                    strokeWidth={1.5}
                  />
                  System
                </span>
              </div>

              <div className="project-showcase-body">
                <ProjectVisual type={project.visual} />

                <div className="project-showcase-info">
                  <div className="project-showcase-title">
                    <h3>{project.title}</h3>

                    <a
                      href="#project"
                      className="project-open"
                      aria-label={`Conhecer ${project.title}`}
                    >
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.6}
                      />
                    </a>
                  </div>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-showcase-footer">
                    <div className="project-metric">
                      <strong>
                        {project.metric}
                      </strong>

                      <span>
                        {project.metricLabel}
                      </span>
                    </div>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-bottom">
          <div className="projects-bottom-line" />

          <p>
            O seu projeto não precisa parecer com nenhum
            desses.
            <strong>
              {" "}
              Ele pode ser completamente diferente.
            </strong>
          </p>

          <a
            href="#project"
            className="projects-bottom-link"
          >
            Construir algo próprio
            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
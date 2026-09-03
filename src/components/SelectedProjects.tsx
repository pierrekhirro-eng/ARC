import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Layers3,
  MoveUpRight,
  Sparkles,
  Zap,
} from "lucide-react";
import "./SelectedProjects.css";

interface Project {
  number: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  stack: string[];
  status: string;
  accent: string;
  visual: "dashboard" | "commerce" | "automation";
}

const projects: Project[] = [
  {
    number: "01",
    category: "DIGITAL PLATFORM",
    title: "Operations OS",
    shortTitle: "Operations",
    description:
      "Uma plataforma central para organizar clientes, pedidos, comunicação, tarefas e entregas em um único ambiente operacional.",
    metric: "+42%",
    metricLabel: "EFFICIENCY",
    tags: ["Platform", "Dashboard", "API"],
    stack: ["CRM", "Analytics", "REST API"],
    status: "ONLINE",
    accent: "green",
    visual: "dashboard",
  },
  {
    number: "02",
    category: "E-COMMERCE",
    title: "Commerce System",
    shortTitle: "Commerce",
    description:
      "Uma experiência de compra conectada à operação, levando o usuário da descoberta ao checkout sem quebrar o fluxo.",
    metric: "3.4×",
    metricLabel: "CONVERSION",
    tags: ["Store", "Checkout", "CRM"],
    stack: ["Payments", "Catalog", "Orders"],
    status: "READY",
    accent: "green",
    visual: "commerce",
  },
  {
    number: "03",
    category: "AUTOMATION",
    title: "Connected Flow",
    shortTitle: "Automation",
    description:
      "Uma infraestrutura de automação que conecta ferramentas, reduz tarefas repetitivas e mantém toda a operação sincronizada.",
    metric: "18",
    metricLabel: "AUTOMATIONS",
    tags: ["Workflow", "Integrations", "AI"],
    stack: ["Triggers", "Agents", "Webhooks"],
    status: "RUNNING",
    accent: "green",
    visual: "automation",
  },
];

/* =========================================================================
   DASHBOARD
========================================================================= */

function DashboardVisual() {
  return (
    <div className="sp-visual sp-dashboard">
      <div className="sp-visual-grid" />

      <div className="sp-dashboard-window">
        <div className="sp-window-top">
          <div className="sp-browser-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="sp-window-url">
            operations.arc
          </div>

          <div className="sp-window-live">
            LIVE
          </div>
        </div>

        <div className="sp-dashboard-layout">
          <aside className="sp-dashboard-sidebar">
            <div className="sp-dashboard-logo">
              A
            </div>

            <div className="sp-side-item active" />
            <div className="sp-side-item" />
            <div className="sp-side-item" />
            <div className="sp-side-item" />
            <div className="sp-side-item" />

            <div className="sp-side-bottom" />
          </aside>

          <div className="sp-dashboard-content">
            <div className="sp-dashboard-toolbar">
              <div>
                <div className="sp-dashboard-kicker">
                  OPERATIONS / OVERVIEW
                </div>

                <div className="sp-dashboard-heading" />
              </div>

              <div className="sp-toolbar-pill">
                <span />
                Active
              </div>
            </div>

            <div className="sp-dashboard-stats">
              <div className="sp-stat">
                <small>Projects</small>
                <strong>128</strong>
                <span>+12.4%</span>
              </div>

              <div className="sp-stat">
                <small>Active</small>
                <strong>24</strong>
                <span>+8.1%</span>
              </div>

              <div className="sp-stat">
                <small>Growth</small>
                <strong>+42%</strong>
                <span>vs. last month</span>
              </div>
            </div>

            <div className="sp-chart-card">
              <div className="sp-chart-header">
                <span>PERFORMANCE</span>
                <small>30 DAYS</small>
              </div>

              <div className="sp-chart">
                <div className="sp-chart-grid" />

                <div className="sp-chart-line-main" />

                <i className="sp-chart-point point-1" />
                <i className="sp-chart-point point-2" />
                <i className="sp-chart-point point-3" />
                <i className="sp-chart-point point-4" />
              </div>
            </div>

            <div className="sp-dashboard-footer">
              <div className="sp-mini-card">
                <span>Tasks completed</span>
                <strong>94.8%</strong>
              </div>

              <div className="sp-mini-card">
                <span>Avg. response</span>
                <strong>1.2s</strong>
              </div>

              <div className="sp-mini-card">
                <span>Uptime</span>
                <strong>99.9%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-visual-badge">
        <span className="sp-badge-dot" />
        SYSTEM ONLINE
      </div>

      <div className="sp-visual-index">
        ARC / 001
      </div>
    </div>
  );
}

/* =========================================================================
   COMMERCE
========================================================================= */

function CommerceVisual() {
  return (
    <div className="sp-visual sp-commerce">
      <div className="sp-commerce-grid" />

      <div className="sp-commerce-orbit orbit-one" />
      <div className="sp-commerce-orbit orbit-two" />

      <div className="sp-commerce-glow" />

      <div className="sp-commerce-product">
        <div className="sp-product-top">
          <div className="sp-product-dots">
            <span />
            <span />
            <span />
          </div>

          <span>PRODUCT VIEW</span>
        </div>

        <div className="sp-product-layout">
          <div className="sp-product-image">
            <div className="sp-product-image-glow" />
            <div className="sp-product-object" />
            <div className="sp-product-object-shadow" />
          </div>

          <div className="sp-product-info">
            <span className="sp-product-label">
              FEATURED ITEM
            </span>

            <div className="sp-product-title-line" />
            <div className="sp-product-subtitle-line" />

            <div className="sp-product-price">
              $249
            </div>

            <div className="sp-product-actions">
              <button type="button">
                ADD TO CART
              </button>

              <span>
                ↗
              </span>
            </div>
          </div>
        </div>

        <div className="sp-product-bottom">
          <span>FREE SHIPPING</span>
          <span>IN STOCK</span>
          <span>02–04 DAYS</span>
        </div>
      </div>

      <div className="sp-commerce-floating">
        <span>CHECKOUT</span>

        <strong>
          98.7%
        </strong>

        <small>
          completion
        </small>
      </div>

      <div className="sp-commerce-cart">
        <div>
          <Sparkles
            size={12}
            strokeWidth={1.7}
          />
        </div>

        <span>
          CART
        </span>

        <strong>
          03
        </strong>
      </div>

      <div className="sp-visual-index">
        ARC / 002
      </div>
    </div>
  );
}

/* =========================================================================
   AUTOMATION
========================================================================= */

function AutomationVisual() {
  return (
    <div className="sp-visual sp-automation">
      <div className="sp-automation-grid" />

      <div className="sp-flow-header">
        <div>
          FLOW / ENGINE
        </div>

        <span>
          v2.8
        </span>
      </div>

      <div className="sp-flow-badge">
        <Check
          size={11}
          strokeWidth={2}
        />

        Flow active
      </div>

      <div className="sp-flow-line line-a" />
      <div className="sp-flow-line line-b" />
      <div className="sp-flow-line line-c" />
      <div className="sp-flow-line line-d" />
      <div className="sp-flow-line line-e" />

      <div className="sp-flow-node node-a">
        <div />
        <small>INPUT</small>
      </div>

      <div className="sp-flow-node node-b">
        <div />
        <small>TRIGGER</small>
      </div>

      <div className="sp-flow-center">
        <Zap
          size={20}
          strokeWidth={1.6}
        />

        <span>ACTION</span>
      </div>

      <div className="sp-flow-node node-c">
        <div />
        <small>DATA</small>
      </div>

      <div className="sp-flow-node node-d">
        <div />
        <small>OUTPUT</small>
      </div>

      <div className="sp-flow-node node-e">
        <div />
        <small>SYNC</small>
      </div>

      <div className="sp-flow-stats">
        <div>
          <small>RUNS</small>
          <strong>1,284</strong>
        </div>

        <div>
          <small>SUCCESS</small>
          <strong>99.4%</strong>
        </div>

        <div>
          <small>LATENCY</small>
          <strong>420ms</strong>
        </div>
      </div>

      <div className="sp-visual-index">
        ARC / 003
      </div>
    </div>
  );
}

/* =========================================================================
   VISUAL FACTORY
========================================================================= */

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

/* =========================================================================
   MAIN
========================================================================= */

export function SelectedProjects() {
  return (
    <section
      className="section selected-projects"
      id="projects"
    >
      <div className="container">

        <header className="sp-section-header">
          <div className="sp-header-left">
            <span className="sp-section-label">
              04 / PROJETOS
            </span>

            <h2>
              Ideias diferentes.
              <br />
              <em>
                Soluções diferentes.
              </em>
            </h2>
          </div>

          <div className="sp-header-right">
            <p>
              Alguns exemplos de sistemas que poderiam
              nascer a partir de uma única conversa.
            </p>

            <span className="sp-explore">
              Explorar possibilidades

              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
              />
            </span>
          </div>
        </header>

        <div className="sp-projects-list">
          {projects.map((project) => (
            <article
              className="sp-project"
              key={project.number}
            >
              <div className="sp-project-top">
                <div className="sp-project-number">
                  {project.number}
                </div>

                <div className="sp-project-category">
                  {project.category}
                </div>

                <div className="sp-project-system">
                  <Layers3
                    size={12}
                    strokeWidth={1.5}
                  />

                  SYSTEM
                </div>
              </div>

              <div className="sp-project-body">
                <ProjectVisual type={project.visual} />

                <div className="sp-project-info">
                  <div className="sp-info-top">
                    <div className="sp-status">
                      <span />
                      {project.status}
                    </div>

                    <div className="sp-info-id">
                      PROJECT / {project.number}
                    </div>
                  </div>

                  <div className="sp-project-main">
                    <div className="sp-project-heading">
                      <div>
                        <span className="sp-project-kicker">
                          SELECTED CASE
                        </span>

                        <h3>
                          {project.title}
                        </h3>
                      </div>

                      <a
                        href="#project"
                        className="sp-project-open"
                        aria-label={`Abrir projeto ${project.title}`}
                      >
                        <MoveUpRight
                          size={17}
                          strokeWidth={1.6}
                        />
                      </a>
                    </div>

                    <p className="sp-project-description">
                      {project.description}
                    </p>

                    <div className="sp-stack">
                      <span>
                        BUILT WITH
                      </span>

                      <div>
                        {project.stack.map((item) => (
                          <span key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="sp-project-footer">
                    <div className="sp-project-metric">
                      <div>
                        <strong>
                          {project.metric}
                        </strong>

                        <span>
                          {project.metricLabel}
                        </span>
                      </div>

                      <ChevronRight
                        size={13}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="sp-project-tags">
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

        <footer className="sp-projects-footer">
          <div>
            <span className="sp-footer-label">
              ARC / CUSTOM BUILD
            </span>

            <p>
              O seu projeto não precisa parecer com
              nenhum desses.
              <strong>
                {" "}
                Ele pode ser completamente diferente.
              </strong>
            </p>
          </div>

          <a href="#project">
            Construir algo próprio

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
            />
          </a>
        </footer>

      </div>
    </section>
  );
}

export default SelectedProjects;
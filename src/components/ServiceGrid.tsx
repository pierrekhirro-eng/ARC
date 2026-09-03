import {
  ArrowUpRight,
  Bot,
  Boxes,
  Database,
  Globe2,
  Layers3,
  Network,
  ShoppingBag,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import "./ServiceGrid.css";

type VisualType =
  | "website"
  | "system"
  | "commerce"
  | "automation"
  | "ai"
  | "custom";

interface Service {
  number: string;
  category: string;
  title: string;
  description: string;
  visual: VisualType;
  tags: string[];
}

const services: Service[] = [
  {
    number: "01",
    category: "WEB EXPERIENCE",
    title: "Websites",
    description:
      "Sites, landing pages e experiências digitais criadas para apresentar, posicionar e converter.",
    visual: "website",
    tags: ["UX/UI", "Responsive", "Performance"],
  },
  {
    number: "02",
    category: "DIGITAL SYSTEM",
    title: "Sistemas",
    description:
      "Plataformas, dashboards e ferramentas internas para transformar operações complexas em fluxos simples.",
    visual: "system",
    tags: ["Dashboard", "API", "Database"],
  },
  {
    number: "03",
    category: "COMMERCE",
    title: "E-commerce",
    description:
      "Experiências de compra completas, conectadas à operação e pensadas para vender.",
    visual: "commerce",
    tags: ["Checkout", "Payments", "Catalog"],
  },
  {
    number: "04",
    category: "AUTOMATION",
    title: "Automação",
    description:
      "Processos inteligentes que conectam ferramentas, eliminam tarefas repetitivas e ganham escala.",
    visual: "automation",
    tags: ["Workflow", "Integrations", "Triggers"],
  },
  {
    number: "05",
    category: "AI SOLUTIONS",
    title: "Inteligência Artificial",
    description:
      "IA integrada ao produto, atendimento ou operação para criar experiências mais rápidas e inteligentes.",
    visual: "ai",
    tags: ["AI", "Agents", "Automation"],
  },
  {
    number: "06",
    category: "CUSTOM BUILD",
    title: "Projetos personalizados",
    description:
      "Quando sua ideia não cabe em uma categoria, construímos a arquitetura certa para ela.",
    visual: "custom",
    tags: ["Strategy", "Architecture", "Build"],
  },
];

function WebsiteVisual() {
  return (
    <div className="service-visual service-visual-website">
      <div className="website-window">
        <div className="website-topbar">
          <span />
          <span />
          <span />
          <small>arc.studio</small>
        </div>

        <div className="website-body">
          <div className="website-sidebar">
            <i />
            <i />
            <i />
            <i />
          </div>

          <div className="website-content">
            <div className="website-heading">
              <b />
              <span />
              <span />
            </div>

            <div className="website-panels">
              <div className="website-panel active">
                <div />
                <div />
                <div />
              </div>

              <div className="website-panel">
                <div />
                <div />
              </div>
            </div>

            <div className="website-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="service-floating-chip">
        <Globe2 size={11} />
        <span>INTERFACE</span>
      </div>

      <div className="service-orbit-dot" />
    </div>
  );
}

function SystemVisual() {
  return (
    <div className="service-visual service-visual-system">
      <div className="system-orbit system-orbit-one" />
      <div className="system-orbit system-orbit-two" />

      <div className="system-core">
        <Layers3 size={26} strokeWidth={1.2} />
        <span>CORE</span>
      </div>

      <div className="system-node system-node-api">
        <Network size={13} />
        <span>API</span>
      </div>

      <div className="system-node system-node-db">
        <Database size={13} />
        <span>DB</span>
      </div>

      <div className="system-node system-node-app">
        <Boxes size={13} />
        <span>APP</span>
      </div>

      <div className="system-line system-line-left" />
      <div className="system-line system-line-right" />
      <div className="system-line system-line-bottom" />
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="service-visual service-visual-commerce">
      <div className="commerce-floor" />

      <div className="commerce-product">
        <div className="commerce-product-top">
          <span>ARC</span>
        </div>

        <div className="commerce-product-body">
          <ShoppingBag size={31} strokeWidth={1.15} />
        </div>

        <div className="commerce-product-bottom">
          <span>PRODUCT</span>
          <strong>R$249</strong>
        </div>
      </div>

      <div className="commerce-tag commerce-tag-left">
        <span>STORE</span>
        <b>01</b>
      </div>

      <div className="commerce-tag commerce-tag-right">
        <span>CHECKOUT</span>
        <b>READY</b>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="service-visual service-visual-automation">
      <div className="automation-grid" />

      <div className="automation-node automation-node-main">
        <Workflow size={21} strokeWidth={1.2} />
        <strong>FLOW</strong>
        <small>ACTIVE</small>
      </div>

      <div className="automation-node automation-node-one">
        <Zap size={13} />
      </div>

      <div className="automation-node automation-node-two">
        <Network size={13} />
      </div>

      <div className="automation-node automation-node-three">
        <ArrowUpRight size={13} />
      </div>

      <div className="automation-connector connector-one" />
      <div className="automation-connector connector-two" />
      <div className="automation-connector connector-three" />

      <span className="automation-status">REAL-TIME FLOW</span>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="service-visual service-visual-ai">
      <div className="ai-ring ai-ring-one" />
      <div className="ai-ring ai-ring-two" />
      <div className="ai-ring ai-ring-three" />

      <div className="ai-core">
        <Bot size={28} strokeWidth={1.15} />
      </div>

      <div className="ai-particle ai-particle-one" />
      <div className="ai-particle ai-particle-two" />
      <div className="ai-particle ai-particle-three" />
      <div className="ai-particle ai-particle-four" />

      <div className="ai-label">
        <span>MODEL</span>
        <strong>ONLINE</strong>
      </div>

      <div className="ai-scan" />
    </div>
  );
}

function CustomVisual() {
  return (
    <div className="service-visual service-visual-custom">
      <div className="custom-grid" />

      <div className="custom-core">
        <Sparkles size={24} strokeWidth={1.2} />
      </div>

      <div className="custom-module custom-module-one" />
      <div className="custom-module custom-module-two" />
      <div className="custom-module custom-module-three" />
      <div className="custom-module custom-module-four" />

      <div className="custom-connector custom-connector-one" />
      <div className="custom-connector custom-connector-two" />
      <div className="custom-connector custom-connector-three" />
      <div className="custom-connector custom-connector-four" />

      <span className="custom-label">CUSTOM ARCHITECTURE</span>
    </div>
  );
}

function ServiceVisualRenderer({
  type,
}: {
  type: VisualType;
}) {
  switch (type) {
    case "website":
      return <WebsiteVisual />;

    case "system":
      return <SystemVisual />;

    case "commerce":
      return <CommerceVisual />;

    case "automation":
      return <AutomationVisual />;

    case "ai":
      return <AIVisual />;

    case "custom":
      return <CustomVisual />;

    default:
      return null;
  }
}

export function ServiceGrid() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <div className="services-heading">
            <div className="services-kicker">
              <span className="services-kicker-dot" />
              <span>02 / SOLUÇÕES</span>
            </div>

            <h2>
              Nós construímos.
              <span>Você decide o que vem depois.</span>
            </h2>
          </div>

          <div className="services-intro">
            <p>
              Da primeira interface ao sistema completo por trás dela.
              Cada projeto parte da necessidade real e é construído
              sob medida.
            </p>

            <a href="#project" className="services-intro-link">
              <span>EXPLORE AS POSSIBILIDADES</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-category">
                  {service.category}
                </span>
              </div>

              <div className="service-card-visual">
                <ServiceVisualRenderer type={service.visual} />
              </div>

              <div className="service-card-content">
                <div>
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-card-bottom">
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    href="#project"
                    className="service-link"
                    aria-label={`Explorar ${service.title}`}
                  >
                    <span>VER SOLUÇÃO</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="services-footer">
          <div className="services-footer-left">
            <span className="services-footer-line" />
            <span>ARC / DIGITAL BUILD SYSTEM</span>
          </div>

          <span className="services-footer-right">
            06 SOLUÇÕES · 01 ARQUITETURA
          </span>
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;
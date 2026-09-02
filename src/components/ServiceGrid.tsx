import {
  ArrowUpRight,
  Bot,
  Boxes,
  Globe2,
  Layers3,
  MousePointer2,
  Network,
  ShoppingBag,
  Workflow,
} from "lucide-react";

interface Service {
  number: string;
  title: string;
  description: string;
  icon:
    | typeof Globe2
    | typeof Layers3
    | typeof ShoppingBag
    | typeof Workflow
    | typeof Bot
    | typeof Boxes;
  label: string;
  visual:
    | "browser"
    | "system"
    | "commerce"
    | "automation"
    | "ai"
    | "custom";
}

const services: Service[] = [
  {
    number: "01",
    title: "Websites",
    description:
      "Sites, landing pages e experiências digitais criadas para apresentar, posicionar e converter.",
    icon: Globe2,
    label: "WEB EXPERIENCE",
    visual: "browser",
  },
  {
    number: "02",
    title: "Sistemas",
    description:
      "Plataformas, dashboards e ferramentas internas para transformar operações complexas em fluxos simples.",
    icon: Layers3,
    label: "DIGITAL SYSTEM",
    visual: "system",
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Experiências de compra completas, conectadas à operação e pensadas para vender.",
    icon: ShoppingBag,
    label: "COMMERCE",
    visual: "commerce",
  },
  {
    number: "04",
    title: "Automação",
    description:
      "Integrações e fluxos inteligentes para reduzir tarefas manuais e ganhar velocidade.",
    icon: Workflow,
    label: "AUTOMATION",
    visual: "automation",
  },
  {
    number: "05",
    title: "Inteligência artificial",
    description:
      "IA aplicada onde ela realmente ajuda seu produto, sua operação ou seus clientes.",
    icon: Bot,
    label: "AI SOLUTIONS",
    visual: "ai",
  },
  {
    number: "06",
    title: "Projetos personalizados",
    description:
      "Uma solução criada do zero quando sua necessidade não cabe em uma categoria pronta.",
    icon: Boxes,
    label: "CUSTOM BUILD",
    visual: "custom",
  },
];

function BrowserVisual() {
  return (
    <div className="service-art service-art-browser">
      <div className="art-browser-glow" />

      <div className="art-browser">
        <div className="art-browser-top">
          <span />
          <span />
          <span />

          <div className="art-browser-address">
            arc.build
          </div>
        </div>

        <div className="art-browser-screen">
          <div className="art-browser-sidebar">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="art-browser-content">
            <div className="art-line art-line-lg" />
            <div className="art-line art-line-md" />

            <div className="art-browser-hero">
              <div className="art-browser-card" />
              <div className="art-browser-card art-browser-card-small" />
            </div>

            <div className="art-browser-bottom">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className="art-floating-tag">
        <MousePointer2 size={12} />
        Interface
      </div>
    </div>
  );
}

function SystemVisual() {
  return (
    <div className="service-art service-art-system">
      <div className="system-orbit system-orbit-main" />
      <div className="system-orbit system-orbit-small" />

      <div className="system-center">
        <Layers3 size={24} strokeWidth={1.3} />
      </div>

      <div className="system-node system-node-one">
        <span>API</span>
      </div>

      <div className="system-node system-node-two">
        <span>DB</span>
      </div>

      <div className="system-node system-node-three">
        <span>APP</span>
      </div>

      <div className="system-line system-line-one" />
      <div className="system-line system-line-two" />
      <div className="system-line system-line-three" />
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="service-art service-art-commerce">
      <div className="commerce-ring commerce-ring-one" />
      <div className="commerce-ring commerce-ring-two" />

      <div className="commerce-box">
        <div className="commerce-box-top">
          <span>ARC</span>
        </div>

        <div className="commerce-box-face">
          <ShoppingBag
            size={28}
            strokeWidth={1.3}
          />
        </div>
      </div>

      <div className="commerce-price">
        <span>PRODUCT</span>
        <strong>R$249</strong>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="service-art service-art-automation">
      <div className="automation-surface" />

      <div className="automation-path automation-path-one" />
      <div className="automation-path automation-path-two" />
      <div className="automation-path automation-path-three" />

      <div className="automation-point automation-point-one">
        <Workflow size={14} />
      </div>

      <div className="automation-point automation-point-two">
        <Network size={14} />
      </div>

      <div className="automation-point automation-point-three">
        <ArrowUpRight size={14} />
      </div>

      <div className="automation-main">
        <span />
        <strong>FLOW</strong>
        <small>ACTIVE</small>
      </div>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="service-art service-art-ai">
      <div className="ai-ring ai-ring-one" />
      <div className="ai-ring ai-ring-two" />
      <div className="ai-ring ai-ring-three" />

      <div className="ai-core">
        <Bot
          size={27}
          strokeWidth={1.3}
        />
      </div>

      <span className="ai-dot ai-dot-one" />
      <span className="ai-dot ai-dot-two" />
      <span className="ai-dot ai-dot-three" />

      <div className="ai-label">
        <span>MODEL</span>
        <strong>ONLINE</strong>
      </div>
    </div>
  );
}

function CustomVisual() {
  return (
    <div className="service-art service-art-custom">
      <div className="custom-grid" />

      <div className="custom-object custom-object-a" />
      <div className="custom-object custom-object-b" />
      <div className="custom-object custom-object-c" />
      <div className="custom-object custom-object-d" />

      <div className="custom-center">
        <Boxes
          size={25}
          strokeWidth={1.3}
        />
      </div>

      <div className="custom-label">
        CUSTOM SYSTEM
      </div>
    </div>
  );
}

function ServiceVisual({
  visual,
}: {
  visual: Service["visual"];
}) {
  switch (visual) {
    case "browser":
      return <BrowserVisual />;

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
    <section className="section services" id="services">
      <div className="container">
        <div className="section-intro services-intro">
          <div className="section-heading-block">
            <span className="section-label">
              01 / SERVIÇOS
            </span>

            <h2 className="section-title">
              Você explica.
              <br />
              <em>Nós construímos.</em>
            </h2>
          </div>

          <div className="section-intro-right">
            <p className="section-description">
              Website, sistema, loja, automação, IA ou algo
              completamente novo. A ARC transforma a
              necessidade em produto.
            </p>

            <span className="section-hint">
              Explore as possibilidades
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
              />
            </span>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >
                <div className="service-card-header">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-label">
                    {service.label}
                  </span>
                </div>

                <ServiceVisual
                  visual={service.visual}
                />

                <div className="service-card-content">
                  <div className="service-card-title-row">
                    <div>
                      <span className="service-icon-mobile">
                        <Icon
                          size={15}
                          strokeWidth={1.4}
                        />
                      </span>

                      <h3>{service.title}</h3>
                    </div>

                    <span className="service-mobile-icon">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>

                  <p>
                    {service.description}
                  </p>
                </div>

                <div className="service-card-footer">
                  <span>
                    Ver solução
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
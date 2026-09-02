import {
  ArrowUpRight,
  Bot,
  Boxes,
  Globe2,
  Layers3,
  ShoppingBag,
  Workflow,
} from "lucide-react";

interface Service {
  number: string;
  title: string;
  description: string;
  icon: typeof Globe2;
  label: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Websites",
    description:
      "Sites, landing pages e experiências digitais criadas para apresentar, posicionar e converter.",
    icon: Globe2,
    label: "WEB EXPERIENCE",
  },
  {
    number: "02",
    title: "Sistemas",
    description:
      "Plataformas, dashboards e ferramentas internas para transformar operações complexas em fluxos simples.",
    icon: Layers3,
    label: "DIGITAL SYSTEM",
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Experiências de compra completas, conectadas à operação e pensadas para vender.",
    icon: ShoppingBag,
    label: "COMMERCE",
  },
  {
    number: "04",
    title: "Automação",
    description:
      "Integrações e fluxos inteligentes para diminuir tarefas manuais e ganhar velocidade.",
    icon: Workflow,
    label: "AUTOMATION",
  },
  {
    number: "05",
    title: "Inteligência artificial",
    description:
      "IA aplicada onde ela realmente ajuda seu produto, sua operação ou seus clientes.",
    icon: Bot,
    label: "AI SOLUTIONS",
  },
  {
    number: "06",
    title: "Projetos personalizados",
    description:
      "Uma solução criada do zero quando sua necessidade não cabe em uma categoria pronta.",
    icon: Boxes,
    label: "CUSTOM BUILD",
  },
];

function ServiceVisual({
  index,
  Icon,
}: {
  index: number;
  Icon: typeof Globe2;
}) {
  return (
    <div className={`service-visual service-visual-${index}`}>
      <div className="service-visual-grid" />

      <div className="service-orbit service-orbit-one" />
      <div className="service-orbit service-orbit-two" />

      <div className="service-core">
        <Icon size={28} strokeWidth={1.4} />
      </div>

      <span className="service-visual-code">
        ARC / {String(index).padStart(2, "0")}
      </span>
    </div>
  );
}

export function ServiceGrid() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-intro">
          <div className="section-heading-block">
            <span className="section-label">
              01 / SERVIÇOS
            </span>

            <h2 className="section-title">
              Você explica.
              <br />
              <em>Nós estruturamos.</em>
            </h2>
          </div>

          <div className="section-intro-right">
            <p className="section-description">
              Você não precisa chegar sabendo exatamente
              qual tecnologia precisa. Conte o problema,
              a ideia ou o objetivo.
            </p>

            <span className="section-hint">
              Escolha uma solução para explorar
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </span>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
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
                  index={index + 1}
                  Icon={Icon}
                />

                <div className="service-card-content">
                  <div className="service-card-title-row">
                    <h3>{service.title}</h3>

                    <span className="service-mobile-icon">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>

                  <p>{service.description}</p>
                </div>

                <div className="service-card-footer">
                  <span>
                    Explorar solução
                  </span>

                  <ArrowUpRight
                    size={17}
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
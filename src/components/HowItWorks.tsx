import {
  ArrowDown,
  ArrowRight,
  Check,
  FileSearch,
  MessageSquareText,
  Rocket,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: typeof MessageSquareText;
  detail: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Você conta",
    description:
      "Explique sua ideia, necessidade ou problema do jeito que conseguir.",
    icon: MessageSquareText,
    detail: "IDEA / BRIEF",
  },
  {
    number: "02",
    title: "Nós analisamos",
    description:
      "Organizamos as informações, entendemos o cenário e identificamos o que precisa ser construído.",
    icon: FileSearch,
    detail: "ANALYSIS / SCOPE",
  },
  {
    number: "03",
    title: "Você recebe",
    description:
      "Montamos uma proposta personalizada com escopo, etapas, investimento e próximos passos.",
    icon: Check,
    detail: "PROPOSAL / REVIEW",
  },
  {
    number: "04",
    title: "Começamos",
    description:
      "Depois da aprovação, o projeto entra oficialmente em produção.",
    icon: Rocket,
    detail: "BUILD / LAUNCH",
  },
];

export function HowItWorks() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="process-top">
          <div className="process-heading">
            <span className="section-label">
              02 / COMO FUNCIONA
            </span>

            <h2 className="section-title">
              Da sua ideia
              <br />
              <em>até a execução.</em>
            </h2>
          </div>

          <div className="process-intro-copy">
            <p className="section-description">
              Você não precisa saber como construir o projeto.
              Precisa apenas saber o que está tentando resolver.
            </p>

            <div className="process-scroll-hint">
              <span>4 etapas simples</span>
              <ArrowDown
                size={15}
                strokeWidth={1.6}
              />
            </div>
          </div>
        </div>

        <div className="process-system">
          <div className="process-track" aria-hidden="true">
            <span className="process-track-progress" />
          </div>

          <div className="process-steps">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  className={`process-step ${
                    index === 0 ? "process-step-active" : ""
                  }`}
                  key={step.number}
                >
                  <div className="process-step-head">
                    <div className="process-step-number">
                      {step.number}
                    </div>

                    <div className="process-step-status">
                      {index === 0 ? "START" : "NEXT"}
                    </div>
                  </div>

                  <div className="process-step-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="process-step-content">
                    <span className="process-step-detail">
                      {step.detail}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>

                  <div className="process-step-footer">
                    <span>
                      Etapa {step.number}
                    </span>

                    {index < steps.length - 1 ? (
                      <ArrowRight
                        size={17}
                        strokeWidth={1.6}
                      />
                    ) : (
                      <Check
                        size={17}
                        strokeWidth={1.8}
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="process-bottom">
          <div className="process-bottom-line" />

          <div className="process-bottom-content">
            <span className="process-bottom-label">
              E depois?
            </span>

            <p>
              Com o projeto aprovado, você acompanha o
              desenvolvimento, recebe atualizações e sabe
              exatamente em que etapa estamos.
            </p>

            <a href="#project" className="process-bottom-link">
              Quero começar meu projeto
              <ArrowRight
                size={16}
                strokeWidth={1.6}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import {
  ArrowRight,
  Check,
  ChevronRight,
  FileText,
  MessageSquare,
  Rocket,
  Search,
} from "lucide-react";
import { useState } from "react";
import "./HowItWorks.css";

interface ProcessStep {
  number: string;
  code: string;
  label: string;
  title: string;
  description: string;
  icon: typeof MessageSquare;
  status: string;
  detail: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    code: "DISCOVERY",
    label: "IDEIA / BRIEF",
    title: "Você conta.",
    description:
      "Explique sua ideia, necessidade ou problema do jeito que fizer mais sentido para você.",
    icon: MessageSquare,
    status: "INPUT RECEBIDO",
    detail:
      "Você não precisa conhecer tecnologia, arquitetura ou programação. Basta explicar o que precisa existir.",
  },
  {
    number: "02",
    code: "ANALYSIS",
    label: "ANALYSIS / SCOPE",
    title: "Nós analisamos.",
    description:
      "Organizamos as informações, entendemos o cenário e identificamos o que precisa ser construído.",
    icon: Search,
    status: "ESCOPO EM ANÁLISE",
    detail:
      "Transformamos sua ideia em uma visão clara de produto, funcionalidades, estrutura e próximos passos.",
  },
  {
    number: "03",
    code: "PROPOSAL",
    label: "PROPOSAL / REVIEW",
    title: "Você recebe.",
    description:
      "Montamos uma proposta personalizada com escopo, etapas, investimento e próximos passos.",
    icon: FileText,
    status: "PROPOSTA PRONTA",
    detail:
      "Você recebe uma proposta transparente para entender exatamente o que será desenvolvido antes de começar.",
  },
  {
    number: "04",
    code: "BUILD",
    label: "BUILD / LAUNCH",
    title: "Começamos.",
    description:
      "Depois da aprovação, o projeto entra oficialmente em produção.",
    icon: Rocket,
    status: "BUILD INICIADO",
    detail:
      "A partir daqui, transformamos o planejamento aprovado em produto, acompanhando a evolução do projeto.",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section className="process-section" id="how-it-works">
      <div className="process-container">
        <header className="process-header">
          <div className="process-heading">
            <div className="process-kicker">
              <span className="process-kicker-dot" />
              <span>03 / COMO FUNCIONA</span>
            </div>

            <h2>
              Da sua ideia
              <span>até a execução.</span>
            </h2>
          </div>

          <div className="process-intro">
            <p>
              Você não precisa saber como construir o projeto.
              Precisa apenas saber o que está tentando resolver.
            </p>

            <div className="process-intro-meta">
              <span>04 ETAPAS</span>
              <span className="process-intro-line" />
              <span>01 OBJETIVO</span>
            </div>
          </div>
        </header>

        <div className="process-stage">
          <div className="process-stage-top">
            <div className="process-stage-index">
              <span>PROCESS FLOW</span>
              <strong>
                {active.number} / {String(steps.length).padStart(2, "0")}
              </strong>
            </div>

            <div className="process-stage-status">
              <span className="process-live-dot" />
              <span>{active.status}</span>
            </div>
          </div>

          <div className="process-main-grid">
            <div className="process-preview">
              <div className="process-preview-grid" />

              <div className="process-preview-orbit process-preview-orbit-one" />
              <div className="process-preview-orbit process-preview-orbit-two" />

              <div className="process-preview-core">
                <div className="process-preview-core-inner">
                  <ActiveIcon
                    size={31}
                    strokeWidth={1.25}
                  />

                  <span>{active.number}</span>
                </div>
              </div>

              <div className="process-preview-node process-preview-node-one">
                <span>INPUT</span>
              </div>

              <div className="process-preview-node process-preview-node-two">
                <span>PROCESS</span>
              </div>

              <div className="process-preview-node process-preview-node-three">
                <span>OUTPUT</span>
              </div>

              <div className="process-preview-line process-preview-line-one" />
              <div className="process-preview-line process-preview-line-two" />
              <div className="process-preview-line process-preview-line-three" />

              <div className="process-preview-info">
                <span>ACTIVE STEP</span>
                <strong>{active.code}</strong>
              </div>

              <div className="process-preview-corner process-preview-corner-tl" />
              <div className="process-preview-corner process-preview-corner-tr" />
              <div className="process-preview-corner process-preview-corner-bl" />
              <div className="process-preview-corner process-preview-corner-br" />
            </div>

            <div className="process-detail">
              <div className="process-detail-header">
                <span>{active.label}</span>

                <div className="process-detail-number">
                  <strong>{active.number}</strong>
                  <span>/ 04</span>
                </div>
              </div>

              <h3 key={active.number}>{active.title}</h3>

              <p className="process-detail-description">
                {active.description}
              </p>

              <div className="process-detail-divider" />

              <div className="process-detail-row">
                <span>O QUE ACONTECE</span>

                <p>{active.detail}</p>
              </div>

              <div className="process-detail-row">
                <span>STATUS</span>

                <div className="process-status-badge">
                  <span className="process-live-dot" />
                  <strong>{active.status}</strong>
                </div>
              </div>

              <a
                className="process-detail-link"
                href="#project"
              >
                <span>COMEÇAR MEU PROJETO</span>
                <ArrowRight size={15} strokeWidth={1.7} />
              </a>
            </div>
          </div>

          <div className="process-navigation">
            <div className="process-track">
              <div className="process-track-line">
                <span
                  style={{
                    width: `${((activeStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>

              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                  <button
                    type="button"
                    key={step.number}
                    className={`process-step ${
                      isActive ? "is-active" : ""
                    } ${isComplete ? "is-complete" : ""}`}
                    onClick={() => setActiveStep(index)}
                    aria-label={`Ver etapa ${step.number}: ${step.title}`}
                  >
                    <div className="process-step-top">
                      <span>{step.number}</span>

                      <span>
                        {isComplete
                          ? "DONE"
                          : isActive
                            ? "ACTIVE"
                            : "NEXT"}
                      </span>
                    </div>

                    <div className="process-step-icon">
                      {isComplete ? (
                        <Check size={17} strokeWidth={1.8} />
                      ) : (
                        <StepIcon
                          size={17}
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    <div className="process-step-content">
                      <span>{step.label}</span>
                      <strong>{step.title}</strong>
                    </div>

                    <div className="process-step-arrow">
                      <ChevronRight
                        size={14}
                        strokeWidth={1.5}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <footer className="process-footer">
          <div className="process-footer-note">
            <span className="process-footer-label">
              E DEPOIS?
            </span>

            <p>
              Com o projeto aprovado, você acompanha o
              desenvolvimento, recebe atualizações e sabe
              exatamente em que etapa estamos.
            </p>
          </div>

          <a
            href="#project"
            className="process-footer-cta"
          >
            <span>QUERO COMEÇAR MEU PROJETO</span>
            <ArrowRight
              size={15}
              strokeWidth={1.5}
            />
          </a>
        </footer>
      </div>
    </section>
  );
}

export default HowItWorks;
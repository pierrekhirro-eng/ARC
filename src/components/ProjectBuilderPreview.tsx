import { useMemo, useState, type ChangeEvent } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Database,
  FileText,
  Globe2,
  Layers3,
  Network,
  Paperclip,
  Rocket,
  ShoppingBag,
  Sparkles,
  Smartphone,
  Upload,
  Workflow,
  X,
  Zap,
} from "lucide-react";

import {
  ProjectPreview3D,
  type ProjectVisualType,
} from "./ProjectPreview3D";

import "./ProjectBuilderPreview.css";

type Step = 1 | 2 | 3 | 4;

interface ProjectData {
  type: ProjectVisualType;
  requirements: string[];
  description: string;
  files: File[];
}

interface ProjectTypeConfig {
  type: ProjectVisualType;
  code: string;
  category: string;
  title: string;
  shortDescription: string;
  environment: string;
  status: string;
  statusLabel: string;
  icon: typeof Globe2;
  metrics: string[];
}

const projectTypes: ProjectTypeConfig[] = [
  {
    type: "Website",
    code: "WEB-01",
    category: "WEB / EXPERIENCE",
    title: "Digital interface",
    shortDescription:
      "Uma experiência web pensada para apresentar, posicionar ou converter.",
    environment: "INTERFACE ACTIVE",
    status: "LIVE PREVIEW",
    statusLabel: "WEB ENGINE",
    icon: Globe2,
    metrics: ["UX/UI", "RESPONSIVE", "WEB"],
  },
  {
    type: "Sistema",
    code: "SYS-02",
    category: "SYSTEM / ARCHITECTURE",
    title: "Connected system",
    shortDescription:
      "Uma plataforma digital para organizar sua operação e facilitar processos.",
    environment: "ARCHITECTURE ACTIVE",
    status: "SYSTEM ONLINE",
    statusLabel: "SYSTEM CORE",
    icon: Layers3,
    metrics: ["API", "DATABASE", "CORE"],
  },
  {
    type: "E-commerce",
    code: "COM-03",
    category: "COMMERCE / ENGINE",
    title: "Commerce system",
    shortDescription:
      "Uma experiência de compra conectada ao seu negócio.",
    environment: "COMMERCE ACTIVE",
    status: "STORE ONLINE",
    statusLabel: "COMMERCE CORE",
    icon: ShoppingBag,
    metrics: ["STORE", "CHECKOUT", "PAYMENTS"],
  },
  {
    type: "Automação",
    code: "AUT-04",
    category: "AUTOMATION / FLOW",
    title: "Process engine",
    shortDescription:
      "Fluxos inteligentes para reduzir tarefas manuais e conectar processos.",
    environment: "AUTOMATION ACTIVE",
    status: "FLOW ACTIVE",
    statusLabel: "FLOW ENGINE",
    icon: Workflow,
    metrics: ["TRIGGER", "FLOW", "OUTPUT"],
  },
  {
    type: "IA",
    code: "AI-05",
    category: "AI / INTELLIGENCE",
    title: "Intelligence core",
    shortDescription:
      "Inteligência artificial integrada ao produto, operação ou atendimento.",
    environment: "INTELLIGENCE ACTIVE",
    status: "MODEL ONLINE",
    statusLabel: "AI ENGINE",
    icon: Bot,
    metrics: ["MODEL", "AGENT", "REALTIME"],
  },
  {
    type: "Aplicativo",
    code: "APP-06",
    category: "MOBILE / PRODUCT",
    title: "Mobile product",
    shortDescription:
      "Um produto mobile pensado para seus usuários e objetivos.",
    environment: "MOBILE ACTIVE",
    status: "APP ONLINE",
    statusLabel: "MOBILE CORE",
    icon: Smartphone,
    metrics: ["MOBILE", "UI", "DEVICE"],
  },
  {
    type: "Custom",
    code: "CUS-07",
    category: "CUSTOM / ARCHITECTURE",
    title: "Custom system",
    shortDescription:
      "Uma solução criada especialmente para sua necessidade.",
    environment: "CUSTOM ACTIVE",
    status: "BUILD ACTIVE",
    statusLabel: "CUSTOM CORE",
    icon: Sparkles,
    metrics: ["CUSTOM", "MODULES", "BUILD"],
  },
];

const requirements = [
  {
    label: "Login",
    icon: Network,
  },
  {
    label: "Pagamentos",
    icon: Zap,
  },
  {
    label: "Dashboard",
    icon: Activity,
  },
  {
    label: "Chat",
    icon: Bot,
  },
  {
    label: "Banco de dados",
    icon: Database,
  },
  {
    label: "Integrações",
    icon: Layers3,
  },
];

const stepLabels = [
  "Escolha o projeto",
  "Defina as funções",
  "Explique a ideia",
  "Revise tudo",
];

const stepDescriptions = [
  "Escolha o formato que mais se aproxima daquilo que você quer construir.",
  "Adicione as funcionalidades que você considera importantes para o projeto.",
  "Você não precisa conhecer tecnologia. Explique o problema, objetivo ou ideia.",
  "Confira as informações antes de enviar o projeto para análise.",
];

const typeDescriptions: Record<
  ProjectVisualType,
  string
> = Object.fromEntries(
  projectTypes.map((item) => [
    item.type,
    item.shortDescription,
  ]),
) as Record<ProjectVisualType, string>;

export function ProjectBuilderPreview() {
  const [step, setStep] = useState<Step>(1);

  const [project, setProject] =
    useState<ProjectData>({
      type: "Website",
      requirements: [],
      description: "",
      files: [],
    });

  const selectedConfig = useMemo(
    () =>
      projectTypes.find(
        (item) => item.type === project.type,
      ) ?? projectTypes[0],
    [project.type],
  );

  const selectedDescription = useMemo(
    () => typeDescriptions[project.type],
    [project.type],
  );

  const SelectedIcon = selectedConfig.icon;

  const progress = `${step} / 04`;
  const progressPercent = `${step * 25}%`;

  function selectType(type: ProjectVisualType) {
    setProject((current) => ({
      ...current,
      type,
    }));
  }

  function toggleRequirement(
    requirement: string,
  ) {
    setProject((current) => {
      const exists =
        current.requirements.includes(
          requirement,
        );

      return {
        ...current,
        requirements: exists
          ? current.requirements.filter(
              (item) =>
                item !== requirement,
            )
          : [
              ...current.requirements,
              requirement,
            ],
      };
    });
  }

  function updateDescription(
    value: string,
  ) {
    if (value.length > 1200) {
      return;
    }

    setProject((current) => ({
      ...current,
      description: value,
    }));
  }

  function addFiles(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const selectedFiles = Array.from(
      event.target.files ?? [],
    );

    setProject((current) => ({
      ...current,
      files: [
        ...current.files,
        ...selectedFiles,
      ].slice(0, 8),
    }));

    event.target.value = "";
  }

  function removeFile(index: number) {
    setProject((current) => ({
      ...current,
      files: current.files.filter(
        (_, fileIndex) =>
          fileIndex !== index,
      ),
    }));
  }

  function canContinue() {
    if (step === 1) {
      return Boolean(project.type);
    }

    if (step === 2) {
      return project.requirements.length > 0;
    }

    if (step === 3) {
      return (
        project.description.trim().length >=
        12
      );
    }

    return true;
  }

  function nextStep() {
    if (!canContinue()) {
      return;
    }

    setStep((current) =>
      current < 4
        ? ((current + 1) as Step)
        : current,
    );
  }

  function previousStep() {
    setStep((current) =>
      current > 1
        ? ((current - 1) as Step)
        : current,
    );
  }

  function goToStep(targetStep: Step) {
    if (targetStep > step) {
      return;
    }

    setStep(targetStep);
  }

  function submitProject() {
    const payload = {
      type: project.type,
      requirements: project.requirements,
      description:
        project.description.trim(),
      files: project.files.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
    };

    console.log(
      "ARC PROJECT PAYLOAD:",
      payload,
    );

    setStep(4);
  }

  return (
    <section
      className="section project-section"
      id="project"
    >
      <div className="container">
        <div className="project-section-top">
          <div className="project-section-heading">
            <span className="section-label">
              03 / SEU PROJETO
            </span>

            <h2 className="section-title">
              Sua ideia.
              <br />
              <em>Agora podemos ver.</em>
            </h2>
          </div>

          <div className="project-section-copy">
            <p className="section-description">
              Monte seu projeto em algumas
              etapas. O resultado acompanha
              suas escolhas em tempo real.
            </p>

            <div className="project-trust">
              <span>
                <Check size={13} />
                Análise personalizada
              </span>

              <span>
                <Check size={13} />
                Sem compromisso
              </span>
            </div>
          </div>
        </div>

        <div
          className={`builder-layout builder-layout-${project.type
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`}
        >
          {/* =================================================
              LEFT PANEL
          ================================================= */}

          <aside className="builder-info-panel">
            <div className="builder-info-top">
              <span className="builder-eyebrow">
                PROJECT BUILDER
              </span>

              <div className="builder-live">
                <span />
                Live
              </div>
            </div>

            <div className="builder-progress">
              <div className="builder-progress-header">
                <span>
                  {stepLabels[step - 1]}
                </span>

                <span>{progress}</span>
              </div>

              <div className="builder-progress-bar">
                <span
                  style={{
                    width: progressPercent,
                  }}
                />
              </div>
            </div>

            <div className="builder-info-main">
              <span className="builder-small-label">
                Etapa atual
              </span>

              <h3>
                {step === 1 && (
                  <>
                    Comece pelo
                    <br />
                    essencial.
                  </>
                )}

                {step === 2 && (
                  <>
                    Defina o que
                    <br />
                    precisa acontecer.
                  </>
                )}

                {step === 3 && (
                  <>
                    Conte a ideia
                    <br />
                    do seu jeito.
                  </>
                )}

                {step === 4 && (
                  <>
                    Tudo pronto
                    <br />
                    para revisar.
                  </>
                )}
              </h3>

              <p>
                {stepDescriptions[step - 1]}
              </p>
            </div>

            <div className="builder-info-list">
              {stepLabels.map(
                (label, index) => {
                  const itemStep =
                    (index + 1) as Step;

                  const active =
                    itemStep === step;

                  const completed =
                    itemStep < step;

                  return (
                    <button
                      type="button"
                      key={label}
                      className={`builder-info-list-item ${
                        active
                          ? "active"
                          : ""
                      } ${
                        completed
                          ? "completed"
                          : ""
                      }`}
                      onClick={() =>
                        goToStep(itemStep)
                      }
                      disabled={
                        itemStep > step
                      }
                    >
                      <span>
                        {completed ? (
                          <Check size={12} />
                        ) : (
                          `0${itemStep}`
                        )}
                      </span>

                      <p>{label}</p>

                      {active && (
                        <span className="builder-step-marker">
                          ACTIVE
                        </span>
                      )}
                    </button>
                  );
                },
              )}
            </div>

            <div className="builder-current-selection">
              <div className="builder-current-selection-top">
                <span>
                  Projeto atual
                </span>

                <span className="builder-current-code">
                  {selectedConfig.code}
                </span>
              </div>

              <div className="builder-current-project">
                <div className="builder-current-icon">
                  <SelectedIcon
                    size={18}
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <strong>
                    {project.type}
                  </strong>

                  <p>
                    {selectedDescription}
                  </p>
                </div>
              </div>

              <div className="builder-current-metrics">
                {selectedConfig.metrics.map(
                  (metric) => (
                    <span key={metric}>
                      {metric}
                    </span>
                  ),
                )}
              </div>
            </div>
          </aside>

          {/* =================================================
              RIGHT WORKSPACE
          ================================================= */}

          <div
            className={`builder-workspace builder-workspace-${project.type
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
          >
            <div className="workspace-header">
              <div className="workspace-header-main">
                <div className="workspace-header-icon">
                  <SelectedIcon
                    size={17}
                    strokeWidth={1.35}
                  />
                </div>

                <div>
                  <span className="workspace-label">
                    {selectedConfig.category}
                  </span>

                  <h3>
                    {selectedConfig.title}
                  </h3>
                </div>
              </div>

              <div className="workspace-status">
                <span />

                {selectedConfig.status}
              </div>
            </div>

            <div className="workspace-environment">
              <div className="environment-rail environment-rail-left">
                <span>ARC</span>
                <strong>
                  {selectedConfig.code}
                </strong>
              </div>

              <div className="environment-rail environment-rail-right">
                <span>BUILD</span>
                <strong>LIVE</strong>
              </div>

              <div className="environment-crosshair environment-crosshair-one" />
              <div className="environment-crosshair environment-crosshair-two" />

              <div className="environment-data environment-data-top">
                <span>
                  ENVIRONMENT
                </span>

                <strong>
                  {selectedConfig.environment}
                </strong>
              </div>

              <div className="environment-data environment-data-bottom">
                <span>
                  ACTIVE MODULE
                </span>

                <strong>
                  {selectedConfig.statusLabel}
                </strong>
              </div>

              <ProjectPreview3D
                type={project.type}
              />

              <div className="environment-side-meter environment-side-meter-left">
                <span>01</span>
                <i />
                <span>06</span>
              </div>

              <div className="environment-side-meter environment-side-meter-right">
                <span>ARC</span>
                <i />
                <span>SYS</span>
              </div>
            </div>

            <div className="workspace-caption">
              <div className="workspace-caption-primary">
                <span className="workspace-caption-dot" />

                <span>
                  {step === 1 &&
                    `Selecione uma categoria para reconfigurar o ambiente ${project.type}.`}

                  {step === 2 &&
                    `A estrutura ${project.type} está recebendo novas funções.`}

                  {step === 3 &&
                    `A direção visual está sincronizada com sua ideia.`}

                  {step === 4 &&
                    `Prévia final de ${project.type} pronta para revisão.`}
                </span>
              </div>

              <div className="workspace-caption-metrics">
                {selectedConfig.metrics.map(
                  (metric) => (
                    <span key={metric}>
                      {metric}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            FORM
        ================================================= */}

        <div className="builder-form-card">
          {step === 1 && (
            <div className="builder-form-section">
              <div className="builder-form-header">
                <div>
                  <span className="builder-form-label">
                    ETAPA 01
                  </span>

                  <h3>
                    O que você quer criar?
                  </h3>

                  <p>
                    Escolha o tipo de projeto.
                  </p>
                </div>

                <div className="builder-form-icon">
                  <Sparkles
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div className="builder-question">
                <span>01</span>

                <div>
                  <strong>
                    Tipo de projeto
                  </strong>

                  <small>
                    Clique para trocar o
                    ambiente e a visualização
                    3D.
                  </small>
                </div>
              </div>

              <div className="builder-type-grid">
                {projectTypes.map(
                  (item) => {
                    const active =
                      project.type ===
                      item.type;

                    const Icon =
                      item.icon;

                    return (
                      <button
                        type="button"
                        key={item.type}
                        className={`builder-type ${
                          active
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          selectType(
                            item.type,
                          )
                        }
                        aria-pressed={active}
                      >
                        <div className="builder-type-icon">
                          <Icon
                            size={15}
                            strokeWidth={
                              1.35
                            }
                          />
                        </div>

                        <div className="builder-type-content">
                          <span>
                            {item.type}
                          </span>

                          <small>
                            {item.code}
                          </small>
                        </div>

                        {active && (
                          <Check
                            size={14}
                            strokeWidth={2}
                          />
                        )}
                      </button>
                    );
                  },
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="builder-form-section">
              <div className="builder-form-header">
                <div>
                  <span className="builder-form-label">
                    ETAPA 02
                  </span>

                  <h3>
                    O que ele precisa
                    fazer?
                  </h3>

                  <p>
                    Você pode selecionar
                    várias opções.
                  </p>
                </div>

                <div className="builder-form-icon">
                  <FileText
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div className="builder-question">
                <span>02</span>

                <div>
                  <strong>
                    Funcionalidades
                  </strong>

                  <small>
                    Selecione tudo o que
                    fizer sentido.
                  </small>
                </div>
              </div>

              <div className="builder-requirements">
                {requirements.map(
                  (item) => {
                    const active =
                      project.requirements.includes(
                        item.label,
                      );

                    const Icon =
                      item.icon;

                    return (
                      <button
                        type="button"
                        key={item.label}
                        className={`builder-requirement ${
                          active
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          toggleRequirement(
                            item.label,
                          )
                        }
                        aria-pressed={active}
                      >
                        <div className="builder-requirement-main">
                          <Icon
                            size={14}
                            strokeWidth={
                              1.4
                            }
                          />

                          <span>
                            {item.label}
                          </span>
                        </div>

                        {active ? (
                          <Check
                            size={13}
                            strokeWidth={2}
                          />
                        ) : (
                          <span className="requirement-plus">
                            +
                          </span>
                        )}
                      </button>
                    );
                  },
                )}
              </div>

              <div className="builder-selection-summary">
                <span>
                  Funcionalidades
                  selecionadas
                </span>

                <strong>
                  {String(
                    project
                      .requirements
                      .length,
                  ).padStart(2, "0")}
                </strong>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="builder-form-section">
              <div className="builder-form-header">
                <div>
                  <span className="builder-form-label">
                    ETAPA 03
                  </span>

                  <h3>
                    Conte sobre a
                    ideia.
                  </h3>

                  <p>
                    Escreva com suas
                    próprias palavras.
                  </p>
                </div>

                <div className="builder-form-icon">
                  <FileText
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div className="builder-question">
                <span>03</span>

                <div>
                  <strong>
                    Contexto do projeto
                  </strong>

                  <small>
                    Explique o problema,
                    objetivo ou resultado
                    esperado.
                  </small>
                </div>
              </div>

              <textarea
                className="builder-textarea"
                value={
                  project.description
                }
                onChange={(event) =>
                  updateDescription(
                    event.target.value,
                  )
                }
                placeholder="Ex.: preciso de uma plataforma para minha empresa onde meus clientes possam..."
                rows={7}
              />

              <div className="builder-character-count">
                <span>
                  Mínimo recomendado:
                  12 caracteres
                </span>

                <span>
                  {project.description.length}
                  {" / 1200"}
                </span>
              </div>

              <div className="builder-upload">
                <div className="builder-upload-icon">
                  <Paperclip
                    size={16}
                    strokeWidth={1.6}
                  />
                </div>

                <div className="builder-upload-copy">
                  <strong>
                    Possui arquivos de
                    referência?
                  </strong>

                  <span>
                    Imagens, briefing,
                    PDF, documentos ou
                    referências visuais.
                  </span>
                </div>

                <label className="builder-upload-button">
                  <Upload
                    size={13}
                    strokeWidth={1.6}
                  />

                  Adicionar

                  <input
                    type="file"
                    hidden
                    multiple
                    onChange={addFiles}
                    accept="image/*,.pdf,.doc,.docx,.txt"
                  />
                </label>
              </div>

              {project.files.length >
                0 && (
                <div className="builder-files">
                  {project.files.map(
                    (
                      file,
                      index,
                    ) => (
                      <div
                        className="builder-file"
                        key={`${file.name}-${index}`}
                      >
                        <div>
                          <FileText
                            size={14}
                            strokeWidth={
                              1.5
                            }
                          />

                          <span>
                            {file.name}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removeFile(
                              index,
                            )
                          }
                          aria-label={`Remover ${file.name}`}
                        >
                          <X
                            size={14}
                            strokeWidth={
                              1.7
                            }
                          />
                        </button>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="builder-form-section">
              <div className="builder-form-header">
                <div>
                  <span className="builder-form-label">
                    ETAPA 04
                  </span>

                  <h3>
                    Revise seu projeto.
                  </h3>

                  <p>
                    Tudo certo? Agora
                    podemos enviar para
                    análise.
                  </p>
                </div>

                <div className="builder-form-icon">
                  <Check
                    size={19}
                    strokeWidth={1.7}
                  />
                </div>
              </div>

              <div className="builder-review">
                <div className="builder-review-item">
                  <span>Tipo</span>

                  <strong>
                    {project.type}
                  </strong>

                  <button
                    type="button"
                    onClick={() =>
                      goToStep(1)
                    }
                  >
                    Editar
                  </button>
                </div>

                <div className="builder-review-item">
                  <span>
                    Funcionalidades
                  </span>

                  <strong>
                    {project.requirements
                      .length
                      ? project.requirements.join(
                          " · ",
                        )
                      : "Nenhuma selecionada"}
                  </strong>

                  <button
                    type="button"
                    onClick={() =>
                      goToStep(2)
                    }
                  >
                    Editar
                  </button>
                </div>

                <div className="builder-review-item">
                  <span>Descrição</span>

                  <strong>
                    {project.description ||
                      "Sem descrição"}
                  </strong>

                  <button
                    type="button"
                    onClick={() =>
                      goToStep(3)
                    }
                  >
                    Editar
                  </button>
                </div>

                <div className="builder-review-item">
                  <span>Arquivos</span>

                  <strong>
                    {project.files
                      .length === 0
                      ? "Nenhum arquivo"
                      : `${
                          project.files
                            .length
                        } arquivo${
                          project.files
                            .length > 1
                            ? "s"
                            : ""
                        }`}
                  </strong>

                  <button
                    type="button"
                    onClick={() =>
                      goToStep(3)
                    }
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="builder-form-footer">
            <div className="builder-form-status">
              {step > 1 ? (
                <button
                  type="button"
                  className="builder-back-button"
                  onClick={
                    previousStep
                  }
                >
                  <ArrowLeft
                    size={14}
                    strokeWidth={1.7}
                  />

                  Voltar
                </button>
              ) : (
                <>
                  <FileText
                    size={14}
                    strokeWidth={1.5}
                  />

                  Etapa {step} de 4
                </>
              )}
            </div>

            {step < 4 ? (
              <button
                type="button"
                className="builder-continue"
                onClick={nextStep}
                disabled={
                  !canContinue()
                }
              >
                Continuar

                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                />
              </button>
            ) : (
              <button
                type="button"
                className="builder-continue"
                onClick={submitProject}
              >
                Enviar projeto

                <Rocket
                  size={16}
                  strokeWidth={1.7}
                />
              </button>
            )}
          </div>

          {!canContinue() &&
            step < 4 && (
              <div className="builder-validation">
                {step === 2 &&
                  "Selecione pelo menos uma funcionalidade para continuar."}

                {step === 3 &&
                  "Conte um pouco mais sobre a sua ideia para continuar."}
              </div>
            )}
        </div>

        <div className="builder-bottom-note">
          <span>
            Você poderá revisar tudo antes
            de enviar.
          </span>

          <span>
            ARC / PROJECT INTAKE
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProjectBuilderPreview;
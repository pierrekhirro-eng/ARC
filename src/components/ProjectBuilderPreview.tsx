import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  FileText,
  Paperclip,
  Sparkles,
} from "lucide-react";

import {
  ProjectPreview3D,
  type ProjectVisualType,
} from "./ProjectPreview3D";

const projectTypes: ProjectVisualType[] = [
  "Website",
  "Sistema",
  "E-commerce",
  "Automação",
  "IA",
  "Aplicativo",
];

const requirements = [
  "Login",
  "Pagamentos",
  "Dashboard",
  "Chat",
  "Banco de dados",
  "Integrações",
];

const typeDescriptions: Record<ProjectVisualType, string> = {
  Website:
    "Uma experiência web pensada para apresentar, posicionar ou converter.",
  Sistema:
    "Uma plataforma digital para organizar sua operação e facilitar processos.",
  "E-commerce":
    "Uma experiência de compra conectada ao seu negócio.",
  Automação:
    "Fluxos inteligentes para reduzir tarefas manuais e conectar processos.",
  IA:
    "Inteligência artificial integrada ao produto, operação ou atendimento.",
  Aplicativo:
    "Um produto mobile pensado para seus usuários e objetivos.",
  Custom:
    "Uma solução criada especialmente para sua necessidade.",
};

export function ProjectBuilderPreview() {
  const [selectedType, setSelectedType] =
    useState<ProjectVisualType>("Website");

  const [selectedRequirements, setSelectedRequirements] =
    useState<string[]>(["Login", "Dashboard"]);

  const [description, setDescription] = useState("");

  const selectedDescription = useMemo(
    () => typeDescriptions[selectedType],
    [selectedType],
  );

  function toggleRequirement(requirement: string) {
    setSelectedRequirements((current) => {
      if (current.includes(requirement)) {
        return current.filter((item) => item !== requirement);
      }

      return [...current, requirement];
    });
  }

  return (
    <section className="section project-section" id="project">
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
              Escolha o tipo de projeto, adicione o que ele
              precisa fazer e conte sua ideia. A visualização
              muda enquanto você monta.
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

        <div className="builder-layout">
          <div className="builder-info-panel">
            <div className="builder-info-top">
              <span className="builder-eyebrow">
                PROJECT BUILDER
              </span>

              <div className="builder-live">
                <span />
                Interactive
              </div>
            </div>

            <div className="builder-progress">
              <div className="builder-progress-header">
                <span>Seu projeto</span>
                <span>01 / 04</span>
              </div>

              <div className="builder-progress-bar">
                <span />
              </div>
            </div>

            <div className="builder-info-main">
              <span className="builder-small-label">
                Visualização em tempo real
              </span>

              <h3>
                Monte a ideia.
                <br />
                Veja a estrutura.
              </h3>

              <p>
                Cada escolha muda a representação do projeto
                ao lado. Assim você consegue visualizar a
                direção antes mesmo de começarmos a construir.
              </p>
            </div>

            <div className="builder-info-list">
              <div className="builder-info-list-item active">
                <span>01</span>
                <p>Escolha o tipo de projeto</p>
              </div>

              <div className="builder-info-list-item">
                <span>02</span>
                <p>Defina as funcionalidades</p>
              </div>

              <div className="builder-info-list-item">
                <span>03</span>
                <p>Explique sua ideia</p>
              </div>

              <div className="builder-info-list-item">
                <span>04</span>
                <p>Envie para análise</p>
              </div>
            </div>

            <div className="builder-current-selection">
              <span>Selecionado</span>

              <strong>{selectedType}</strong>

              <p>{selectedDescription}</p>
            </div>
          </div>

          <div className="builder-workspace">
            <div className="workspace-header">
              <div>
                <span className="workspace-label">
                  LIVE PREVIEW
                </span>

                <h3>
                  {selectedType}
                </h3>
              </div>

              <div className="workspace-status">
                <span />
                3D
              </div>
            </div>

            <ProjectPreview3D
              type={selectedType}
            />

            <div className="workspace-caption">
              <span>
                Arraste para explorar
              </span>

              <span>
                Rotação automática
              </span>
            </div>
          </div>
        </div>

        <div className="builder-form-card">
          <div className="builder-form-header">
            <div>
              <span className="builder-form-label">
                ETAPA 01
              </span>

              <h3>
                O que você quer criar?
              </h3>

              <p>
                Escolha a opção que mais se aproxima
                da sua ideia.
              </p>
            </div>

            <div className="builder-form-icon">
              <Sparkles
                size={18}
                strokeWidth={1.5}
              />
            </div>
          </div>

          <div className="builder-form-section">
            <div className="builder-question">
              <span>01</span>

              <div>
                <strong>
                  Tipo de projeto
                </strong>

                <small>
                  Clique para trocar a visualização 3D.
                </small>
              </div>
            </div>

            <div className="builder-type-grid">
              {projectTypes.map((type) => {
                const active = selectedType === type;

                return (
                  <button
                    type="button"
                    className={`builder-type ${
                      active ? "active" : ""
                    }`}
                    key={type}
                    onClick={() => setSelectedType(type)}
                    aria-pressed={active}
                  >
                    <span>{type}</span>

                    {active ? (
                      <Check
                        size={14}
                        strokeWidth={2}
                      />
                    ) : (
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="builder-form-section">
            <div className="builder-question">
              <span>02</span>

              <div>
                <strong>
                  O que o projeto precisa fazer?
                </strong>

                <small>
                  Selecione quantas funcionalidades quiser.
                </small>
              </div>
            </div>

            <div className="builder-requirements">
              {requirements.map((requirement) => {
                const active =
                  selectedRequirements.includes(requirement);

                return (
                  <button
                    type="button"
                    className={`builder-requirement ${
                      active ? "active" : ""
                    }`}
                    key={requirement}
                    onClick={() =>
                      toggleRequirement(requirement)
                    }
                    aria-pressed={active}
                  >
                    <span>{requirement}</span>

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
              })}
            </div>
          </div>

          <div className="builder-form-section">
            <div className="builder-question">
              <span>03</span>

              <div>
                <strong>
                  Conte sobre a ideia
                </strong>

                <small>
                  Não precisa escrever de forma técnica.
                </small>
              </div>
            </div>

            <textarea
              className="builder-textarea"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder={
                "Ex.: preciso de uma plataforma para minha empresa..."
              }
              rows={5}
              aria-label="Descrição do projeto"
            />

            <div className="builder-character-count">
              <span>
                Quanto mais contexto, melhor.
              </span>

              <span>
                {description.length} / 1200
              </span>
            </div>
          </div>

          <div className="builder-upload">
            <div className="builder-upload-icon">
              <Paperclip
                size={16}
                strokeWidth={1.6}
              />
            </div>

            <div>
              <strong>
                Já possui arquivos?
              </strong>

              <span>
                Briefing, referências, documentos ou imagens.
              </span>
            </div>

            <button
              type="button"
              className="builder-upload-button"
            >
              Adicionar
            </button>
          </div>

          <div className="builder-form-footer">
            <div className="builder-form-status">
              <FileText
                size={14}
                strokeWidth={1.5}
              />

              <span>
                Etapa 1 de 4
              </span>
            </div>

            <button
              type="button"
              className="builder-continue"
            >
              Continuar

              <ArrowRight
                size={16}
                strokeWidth={1.7}
              />
            </button>
          </div>
        </div>

        <div className="builder-bottom-note">
          <span>
            Você poderá revisar tudo antes de enviar.
          </span>

          <span>
            ARC / PROJECT INTAKE
          </span>
        </div>
      </div>
    </section>
  );
}
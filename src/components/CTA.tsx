import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MoveUpRight,
} from "lucide-react";
import "./CTA.css";

const benefits = [
  "Análise individual do projeto",
  "Escopo pensado para sua necessidade",
  "Proposta clara e personalizada",
];

export function CTA() {
  return (
    <section className="arc-cta" id="project">
      <div className="arc-cta-bg-grid" />
      <div className="arc-cta-bg-glow" />
      <div className="arc-cta-noise" />

      <div className="arc-cta-orbit arc-cta-orbit-01" />
      <div className="arc-cta-orbit arc-cta-orbit-02" />
      <div className="arc-cta-orbit arc-cta-orbit-03" />

      <div className="arc-cta-particle particle-01" />
      <div className="arc-cta-particle particle-02" />
      <div className="arc-cta-particle particle-03" />
      <div className="arc-cta-particle particle-04" />
      <div className="arc-cta-particle particle-05" />

      <div className="container arc-cta-container">

        {/* =====================================================
           HEADER
        ====================================================== */}

        <header className="arc-cta-header">
          <div className="arc-cta-header-left">
            <span className="arc-cta-section-number">
              05
            </span>

            <span className="arc-cta-section-label">
              PRÓXIMO PASSO
            </span>
          </div>

          <div className="arc-cta-status">
            <span className="arc-cta-status-dot" />
            <span>NOVOS PROJETOS ABERTOS</span>
          </div>
        </header>

        {/* =====================================================
           MAIN
        ====================================================== */}

        <div className="arc-cta-main">

          <div className="arc-cta-copy">

            <span className="arc-cta-kicker">
              START WITH THE IDEA
            </span>

            <h2>
              Tem algo que
              <br />
              <em>precisa existir?</em>
            </h2>

            <div className="arc-cta-description">

              <div className="arc-cta-description-item">
                <span className="arc-cta-description-index">
                  01
                </span>

                <p>
                  Não precisa chegar com tudo definido.
                  Conte o que você está tentando construir,
                  o que precisa acontecer e para quem.
                </p>
              </div>

              <div className="arc-cta-description-item">
                <span className="arc-cta-description-index">
                  02
                </span>

                <p>
                  A partir daí, transformamos sua ideia
                  em uma proposta clara, com escopo,
                  estratégia e próximos passos.
                </p>
              </div>

            </div>

          </div>

          {/* =================================================
             VISUAL
          ================================================== */}

          <div className="arc-cta-visual">

            <div className="arc-cta-visual-frame">

              <div className="arc-cta-frame-top">
                <span>
                  ARC / PROJECT INTAKE
                </span>

                <span>
                  05.01
                </span>
              </div>

              <div className="arc-cta-frame-center">

                <div className="arc-cta-scan-line" />

                <div className="arc-cta-crosshair">
                  <span />
                  <span />
                </div>

                <div className="arc-cta-ring ring-outer" />
                <div className="arc-cta-ring ring-middle" />
                <div className="arc-cta-ring ring-inner" />

                <div className="arc-cta-core">
                  <div className="arc-cta-core-center" />
                </div>

                <div className="arc-cta-axis axis-x" />
                <div className="arc-cta-axis axis-y" />

                <span className="arc-cta-node node-top" />
                <span className="arc-cta-node node-right" />
                <span className="arc-cta-node node-bottom" />
                <span className="arc-cta-node node-left" />

                <span className="arc-cta-coord coord-top">
                  00 / 01
                </span>

                <span className="arc-cta-coord coord-right">
                  02 / 04
                </span>

                <span className="arc-cta-coord coord-bottom">
                  04 / 04
                </span>

                <span className="arc-cta-coord coord-left">
                  01 / 04
                </span>

              </div>

              <div className="arc-cta-frame-bottom">
                <span>
                  IDEA
                  <b>→</b>
                  STRATEGY
                </span>

                <span>
                  READY
                </span>
              </div>

              <div className="arc-cta-frame-corner corner-tl" />
              <div className="arc-cta-frame-corner corner-tr" />
              <div className="arc-cta-frame-corner corner-bl" />
              <div className="arc-cta-frame-corner corner-br" />

            </div>

          </div>
        </div>

        {/* =====================================================
           BENEFITS
        ====================================================== */}

        <div className="arc-cta-benefits-row">

          <div className="arc-cta-benefits">

            {benefits.map((benefit, index) => (
              <div
                className="arc-cta-benefit"
                key={benefit}
              >
                <span className="arc-cta-benefit-index">
                  0{index + 1}
                </span>

                <span className="arc-cta-check">
                  <Check
                    size={11}
                    strokeWidth={2}
                  />
                </span>

                <span className="arc-cta-benefit-text">
                  {benefit}
                </span>
              </div>
            ))}

          </div>

          <div className="arc-cta-meta">

            <span>SEM COMPROMISSO</span>
            <span>PRIMEIRA ANÁLISE</span>
            <span>100% PERSONALIZADO</span>

          </div>

        </div>

        {/* =====================================================
           ACTION
        ====================================================== */}

        <div className="arc-cta-action">

          <a
            href="#project"
            className="arc-cta-button"
          >
            <span>
              COMEÇAR MEU PROJETO
            </span>

            <ArrowRight
              size={17}
              strokeWidth={1.7}
            />
          </a>

          <div className="arc-cta-action-note">

            <span className="arc-cta-action-icon">
              <MoveUpRight
                size={14}
                strokeWidth={1.5}
              />
            </span>

            <div>
              <small>
                ARC / PROJECT INTAKE
              </small>

              <strong>
                Vamos colocar a ideia em movimento.
              </strong>
            </div>

          </div>

        </div>

        {/* =====================================================
           BOTTOM
        ====================================================== */}

        <footer className="arc-cta-footer">

          <span>
            LIVE / PROJECT INTAKE
          </span>

          <div className="arc-cta-footer-center">
            <span />
            ARC
          </div>

          <span>
            05 / 05
          </span>

        </footer>

      </div>
    </section>
  );
}

export default CTA;
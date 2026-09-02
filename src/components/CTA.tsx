import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const benefits = [
  "Análise individual do projeto",
  "Escopo pensado para sua necessidade",
  "Proposta clara e personalizada",
];

export function CTA() {
  return (
    <section className="final-cta" id="contact">
      <div className="container">
        <div className="final-cta-shell">
          <div className="final-cta-orbit final-cta-orbit-one" />
          <div className="final-cta-orbit final-cta-orbit-two" />

          <div className="final-cta-content">
            <div className="final-cta-top">
              <span className="section-label final-cta-label">
                05 / PRÓXIMO PASSO
              </span>

              <span className="final-cta-status">
                <span className="final-cta-status-dot" />
                Novos projetos abertos
              </span>
            </div>

            <div className="final-cta-heading">
              <span className="final-cta-kicker">
                START WITH THE IDEA
              </span>

              <h2>
                Tem algo que
                <br />
                <em>precisa existir?</em>
              </h2>
            </div>

            <div className="final-cta-grid">
              <div className="final-cta-description">
                <p>
                  Não precisa chegar com tudo definido.
                  Conte o que você está tentando construir,
                  o que precisa acontecer e para quem.
                </p>

                <p>
                  A partir daí, transformamos sua ideia em
                  uma proposta clara, com escopo e próximos
                  passos.
                </p>
              </div>

              <div className="final-cta-benefits">
                {benefits.map((benefit) => (
                  <div
                    className="final-cta-benefit"
                    key={benefit}
                  >
                    <Check
                      size={15}
                      strokeWidth={2}
                    />

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="final-cta-action">
              <a
                href="#project"
                className="final-cta-button"
              >
                Começar meu projeto

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                />
              </a>

              <span className="final-cta-note">
                Leva poucos minutos para começar.
              </span>
            </div>
          </div>

          <div className="final-cta-side">
            <div className="final-cta-side-icon">
              <Sparkles
                size={19}
                strokeWidth={1.5}
              />
            </div>

            <div className="final-cta-side-copy">
              <span>ARC / PROJECT</span>
              <strong>Idea → Proposal</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
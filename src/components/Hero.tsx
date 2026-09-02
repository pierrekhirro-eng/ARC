import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { animateHero } from "../lib/motion";
import { HeroScene3D } from "./HeroScene3D";

export function Hero() {
  useEffect(() => {
    animateHero();
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-top">
          <div className="hero-badge hero-reveal">
            <span className="hero-badge-dot" />
            Projetos digitais sob medida
          </div>

          <span className="hero-counter hero-reveal">
            ARC / 001
          </span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-eyebrow hero-reveal">
              Da ideia ao produto
            </p>

            <h1 className="hero-title">
              <span className="hero-line hero-reveal">
                O que você
              </span>

              <span className="hero-line hero-line-accent hero-reveal">
                quer construir?
              </span>
            </h1>

            <p className="hero-description hero-reveal">
              Explique sua ideia, necessidade ou problema.
              A ARC transforma isso em uma solução digital
              clara, planejada e pronta para ser construída.
            </p>

            <div className="hero-actions hero-reveal">
              <a
                href="#project"
                className="primary-button"
              >
                Descrever meu projeto

                <ArrowRight
                  size={17}
                  strokeWidth={1.9}
                />
              </a>

              <a
                href="#services"
                className="secondary-link"
              >
                Ver soluções

                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                />
              </a>
            </div>
          </div>

          <div className="hero-panel-wrap hero-reveal">
            <div className="hero-panel-header-custom">
              <div>
                <span>ARC / DIGITAL SYSTEM</span>

                <strong>
                  Build something real.
                </strong>
              </div>

              <Sparkles
                size={17}
                strokeWidth={1.5}
              />
            </div>

            <HeroScene3D />

            <div className="hero-panel-footer-custom">
              <span>WEB</span>
              <span>API</span>
              <span>AI</span>
              <span>DATA</span>

              <span>
                01 / 04
              </span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>Website</span>
          <span>Software</span>
          <span>Automation</span>
          <span>AI</span>
          <span>E-commerce</span>
          <span>Integrations</span>

          <span className="hero-bottom-grow" />

          <span>
            Scroll para explorar ↓
          </span>
        </div>
      </div>
    </section>
  );
}
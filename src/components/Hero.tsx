import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import HeroScene3D from "./HeroScene3D";
import { animateHero } from "../lib/motion";
import "./Hero.css";

export function Hero() {
  useEffect(() => {
    animateHero();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />

      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="hero-inner">
        <div className="hero-topline">
          <div className="hero-index">
            <span className="hero-index-dot" />
            <span>01</span>
            <span>/</span>
            <span>DIGITAL STUDIO</span>
          </div>

          <div className="hero-status">
            <span className="hero-status-pulse" />
            <span>SISTEMA ONLINE</span>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-kicker">
              <Sparkles size={13} strokeWidth={1.7} />
              <span>PROJETOS DIGITAIS SOB MEDIDA</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line hero-title-white">
                Transformamos
              </span>

              <span className="hero-title-line hero-title-muted">
                ideias em
              </span>

              <span className="hero-title-line hero-title-accent">
                produtos reais.
              </span>
            </h1>

            <p className="hero-description">
              Sua ideia começa aqui. A ARC transforma problemas,
              operações e oportunidades em experiências digitais
              pensadas para funcionar de verdade.
            </p>

            <div className="hero-actions">
              <a className="hero-primary-button" href="#project">
                <span>DESCREVER MEU PROJETO</span>
                <ArrowRight size={16} strokeWidth={1.8} />
              </a>

              <a className="hero-secondary-button" href="#services">
                <span>EXPLORAR SOLUÇÕES</span>
                <ArrowDownRight size={16} strokeWidth={1.8} />
              </a>
            </div>

            <div className="hero-microcopy">
              <span>SEM TEMPLATE</span>
              <span className="hero-micro-divider" />
              <span>SEM LIMITES</span>
              <span className="hero-micro-divider" />
              <span>FEITO SOB MEDIDA</span>
            </div>
          </div>

          <div className="hero-visual-column">
            <div className="hero-visual-label hero-visual-label-top">
              <span>ARC / 001</span>
              <span>LIVE PREVIEW</span>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-frame">
                <div className="hero-visual-corner hero-visual-corner-tl" />
                <div className="hero-visual-corner hero-visual-corner-tr" />
                <div className="hero-visual-corner hero-visual-corner-bl" />
                <div className="hero-visual-corner hero-visual-corner-br" />

                <div className="hero-system-header">
                  <div>
                    <span className="hero-system-label">
                      ARC / DIGITAL SYSTEM
                    </span>

                    <strong>Build something real.</strong>
                  </div>

                  <div className="hero-system-icon">
                    <Sparkles size={15} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="hero-scene">
                  <HeroScene3D />
                </div>

                <div className="hero-system-status">
                  <div className="hero-system-live">
                    <span className="hero-system-live-dot" />
                    <span>CONNECTED</span>
                  </div>

                  <span>3D ENGINE</span>
                </div>

                <div className="hero-system-footer">
                  <span>WEB</span>
                  <span>API</span>
                  <span>AI</span>
                  <span>DATA</span>

                  <span className="hero-system-page">01 / 04</span>
                </div>
              </div>

              <div className="hero-floating-card hero-floating-card-top">
                <span>ACTIVE</span>
                <strong>01</strong>
              </div>

              <div className="hero-floating-card hero-floating-card-bottom">
                <span>PROJECT TYPE</span>
                <strong>DIGITAL PRODUCT</strong>
              </div>
            </div>

            <div className="hero-visual-label hero-visual-label-bottom">
              <span>INTERACTIVE SYSTEM</span>

              <div className="hero-label-line" />

              <span>SCROLL TO EXPLORE</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-tags">
            <span>WEBSITE</span>
            <span>SOFTWARE</span>
            <span>AUTOMATION</span>
            <span>AI</span>
            <span>E-COMMERCE</span>
            <span>INTEGRATIONS</span>
          </div>

          <div className="hero-scroll">
            <span>EXPLORE</span>
            <ArrowDownRight size={14} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
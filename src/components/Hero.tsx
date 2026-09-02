import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { animateHero } from "../lib/motion";

export function Hero() {
  useEffect(() => animateHero(), []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-meta hero-kicker">
          <span>ARC / 001</span>
          <span>Digital product studio</span>
        </div>

        <div className="hero-copy">
          <div className="eyebrow hero-kicker">WE BUILD WHAT MATTERS</div>
          <h1 className="hero-title">
            <span className="hero-title-line">Good ideas</span>
            <span className="hero-title-line hero-title-offset">need good</span>
            <span className="hero-title-line">execution.</span>
          </h1>
          <p className="hero-description">
            Estratégia, design e tecnologia para transformar uma intenção em um produto digital que funciona de verdade.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Start a project <ArrowUpRight size={17} />
            </a>
            <a className="button button-quiet" href="#work">
              See selected work <ArrowDown size={17} />
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-image">
            <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85" alt="Arquitetura contemporânea" />
          </div>
          <div className="art-note">
            <span className="dot" />
            <span>Strategy / Design / Technology</span>
          </div>
          <div className="art-stamp">ARC<br />STUDIO</div>
        </div>
      </div>
    </section>
  );
}
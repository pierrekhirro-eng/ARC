import { useEffect } from "react";
import { animateIntro } from "../lib/motion";

export function Intro() {
  useEffect(() => animateIntro(), []);

  return (
    <section className="section intro-section">
      <div className="section-label arc-reveal">/ THE IDEA</div>
      <div className="intro-grid">
        <h2 className="display-medium arc-reveal">
          We make complexity
          <em> feel simple.</em>
        </h2>
        <div className="intro-body arc-reveal">
          <p>
            A ARC nasce entre estratégia, direção de arte e engenharia. Entramos quando a ideia ainda está aberta e saímos quando existe algo concreto, usável e pronto para crescer.
          </p>
          <p>
            Sem fórmulas prontas. Sem tecnologia usada como enfeite. Cada decisão precisa existir por um motivo.
          </p>
        </div>
      </div>
    </section>
  );
}
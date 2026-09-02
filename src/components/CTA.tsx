import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-grid">
        <span className="section-label">/ NEXT</span>
        <div>
          <h2>Got an idea<br /><em>worth building?</em></h2>
          <p>Conte o que você está tentando criar. A gente descobre o próximo movimento.</p>
          <a href="mailto:hello@arcstudio.example" className="button button-light">
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
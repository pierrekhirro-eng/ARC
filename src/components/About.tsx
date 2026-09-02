export function About() {
  return (
    <section className="section about" id="about">
      <div className="section-marker">/ 06</div>

      <div className="about-grid">
        <div className="about-heading">
          <p className="small-label">About ARC</p>

          <h2>
            Small team.
            <br />
            <em>Big attention.</em>
          </h2>
        </div>

        <div className="about-copy">
          <p className="lead">
            A ARC é um estúdio independente para projetos que pedem mais
            pensamento e menos fórmula.
          </p>

          <p>
            Trabalhamos próximos de quem decide: entendemos a operação,
            questionamos o briefing, desenhamos a experiência e construímos o
            produto.
          </p>

          <p>
            O resultado é uma solução digital com personalidade, clareza e
            espaço para evoluir.
          </p>

          <div className="about-meta">
            <span>Independent studio</span>
            <span>Strategy × Design × Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
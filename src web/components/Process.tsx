import { process } from "../data/site";

export function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="section-label">/ PROCESS</div>
      <div className="process-head">
        <h2 className="display-small">From a blank page<br /><em>to something real.</em></h2>
        <p>O processo é flexível, mas nunca improvisado.</p>
      </div>

      <div className="process-flow">
        {process.map(([number, title, text], index) => (
          <div className="process-step" key={number}>
            <div className="process-number">{number}</div>
            <div className="process-line" />
            <h3>{title}</h3>
            <p>{text}</p>
            {index < process.length - 1 && <span className="process-arrow">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
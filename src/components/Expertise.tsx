import { ArrowUpRight } from "lucide-react";

const expertiseItems = [
  {
    number: "01",
    title: "Digital products",
    description:
      "Websites, platforms and interfaces built around a real product strategy.",
  },
  {
    number: "02",
    title: "Systems",
    description:
      "Operational products, dashboards and internal tools that make complex work clearer.",
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Connected workflows that remove repetition and create room for better work.",
  },
  {
    number: "04",
    title: "Applied AI",
    description:
      "Useful intelligence woven into products, operations and customer experiences.",
  },
];

export function Expertise() {
  return (
    <section className="section expertise" id="expertise">
      <div className="section-topline">
        <span>/ 03 — EXPERTISE</span>
        <span>What we build</span>
      </div>

      <div className="section-heading split-heading">
        <h2>
          Four disciplines.
          <br />
          <em>One standard.</em>
        </h2>

        <p>
          Não fazemos tudo. Fazemos aquilo que transforma uma ideia em
          produto.
        </p>
      </div>

      <div className="expertise-list">
        {expertiseItems.map((item) => (
          <article className="expertise-row" key={item.number}>
            <span className="expertise-number">{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <span className="expertise-action" aria-hidden="true">
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
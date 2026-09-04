import { services } from "../data/site";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="section-topline">
        <div className="section-label">/ EXPERTISE</div>
        <div className="section-index">04 disciplines</div>
      </div>

      <div className="services-intro">
        <h2 className="display-small">One studio.<br /><em>Four ways to move.</em></h2>
        <p>Escolhemos poucos campos e os tratamos com profundidade.</p>
      </div>

      <div className="service-list">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div className="service-main">
              <span className="service-tag">{service.tag}</span>
              <h3>{service.title}</h3>
            </div>
            <p>{service.text}</p>
            <ArrowUpRight className="service-arrow" size={23} />
          </article>
        ))}
      </div>
    </section>
  );
}
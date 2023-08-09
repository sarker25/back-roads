import { services } from "../../data";
import Title from "../Title";

const Service = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((item) => (
          <article className="service" key={item.id}>
            <span className="service-icon">
              <i className={item.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{item.title}</h4>
              <p className="service-text">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Service;

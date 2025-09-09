
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section services">
      <h2>Our Services</h2>
      <div className="services__grid">
        <div className="card">
          <h3>UI/UX Design</h3>
          <p>Beautiful, user-friendly interfaces that engage and inspire.</p>
        </div>
        <div className="card">
          <h3>Web Development</h3>
          <p>Modern, responsive, and fast websites tailored for growth.</p>
        </div>
        <div className="card">
          <h3>Brand Strategy</h3>
          <p>Helping businesses create impactful digital identities.</p>
        </div>
      </div>
    </section>
  );
}

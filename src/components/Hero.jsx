


import WordRotator from "./WordRotator";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1>
          We Create <WordRotator words={["Experiences", "Brands", "Products", "Stories"]} />
        </h1>
        <p>Design-led digital agency crafting impactful products and brands.</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>
    </section>
  );
}

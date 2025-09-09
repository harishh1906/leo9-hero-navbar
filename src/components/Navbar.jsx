
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="nav__brand" aria-label="Brand home">
        <img src="/favicon.svg" alt="Brand logo" className="brand-logo" />
        LEOX
      </a>
      <ul className="navbar__links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

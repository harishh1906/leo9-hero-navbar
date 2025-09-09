import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./App.css";

/*Main App Layou*/
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />  
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

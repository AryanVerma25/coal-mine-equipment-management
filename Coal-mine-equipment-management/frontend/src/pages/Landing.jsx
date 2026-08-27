import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import EquipmentShowcase from "../components/EquipmentShowcase";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <EquipmentShowcase />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
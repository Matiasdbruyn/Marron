import Header from "./sections/Header/Header.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Ribbon from "./sections/Ribbon/Ribbon.jsx";
import Products from "./sections/Products/Products.jsx";
import About from "./sections/About/About.jsx";
import HowToBuy from "./sections/HowToBuy/HowToBuy.jsx";
import Instagram from "./sections/Instagram/Instagram.jsx";
import Footer from "./sections/Footer/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat.jsx";
import { useReveal } from "./hooks/useReveal.js";

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ribbon />
        <Products />
        <About />
        <HowToBuy />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

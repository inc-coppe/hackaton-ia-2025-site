import Cronograma from "../../sections/Cronograma";
import Desafios from "../../sections/Desafios";
import HomePage from "../../sections/Home";
import SobrePage from "../../sections/Sobre";
import Problemas from "../../sections/Problemas";
import CTA from "../../sections/CTA";
import Patrocinadores from "../../sections/Patrocinadores";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        // scroll suave
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (location.state?.scrollTarget === "top") {
        // Scrolla até o topo da página
        window.scrollTo({ top: 0});
    }
  }, [location]);
  
  return (
    <Container>
      <Header />
      <HomePage />
      <SobrePage />
      <Cronograma />
      <Problemas />
      <Desafios />
      <CTA />
      <Patrocinadores />
      <Footer />
    </Container>
  );
};

export default Landing;

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

const Landing = () => {
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

import Cronograma from "../../sections/Cronograma";
import Desafios from "../../sections/Desafios";
import HomePage from "../../sections/Home";
import SobrePage from "../../sections/Sobre";
import Problemas from "../../sections/Problemas";
import CTA from "../../sections/CTA";
import Patrocinadores from "../../sections/Patrocinadores";
import Header from "../../components/Header";

const Landing = () => {
  return (
    <>
      <Header />
      <HomePage />
      <SobrePage />
      <Cronograma />
      <Problemas />
      <Desafios />
      <CTA />
      <Patrocinadores />
    </>
  );
};

export default Landing;

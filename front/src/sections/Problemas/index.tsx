import React from "react";
import CustomCarousel from "../../components/CustomCarousel";

// Importando todos os estilos necessários do arquivo local
import {
  Container,
  SectionSubtitle,
  TitleDiv,
  Title,
  Body,
  Texts,
  CustomCarouselWrapper,
} from "./style";

const Desafios = () => {
  return (
    <Container>
      <Texts>
        <TitleDiv>
          <SectionSubtitle>BORA RESOLVER PROBLEMAS DE VERDADE?</SectionSubtitle>
          <Title>ENCARANDO O QUE IMPORTA, CRIANDO O QUE TRANSFORMA.</Title>
        </TitleDiv>

        <Body>
          Durante o evento, você pode encarar desafios reais de empresas
          parceiras ou até propor o seu próprio. São problemas que pedem
          criatividade, visão de futuro e, claro, muita colaboração.
        </Body>
      </Texts>

      <CustomCarouselWrapper>
        <CustomCarousel />
      </CustomCarouselWrapper>
    </Container>
  );
};

export default Desafios;

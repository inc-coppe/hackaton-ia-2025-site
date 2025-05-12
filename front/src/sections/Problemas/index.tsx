import React from "react";
import { Container, Cards, TitleDiv } from "./style";
import { Texts } from "../CTA/style";
import { SectionSubtitle, Title } from "../Desafios/style";
import { Body } from "../Sobre/style";
import CustomCarousel from "../../components/CustomCarousel";

const Desafios = () => {
  return (
    <Container>
      <Texts style={{ marginBottom: "4rem" }}>
        <TitleDiv>
          <SectionSubtitle style={{ color: "#0F0F21" }}>
            BORA RESOLVER PROBLEMAS DE VERDADE?{" "}
          </SectionSubtitle>
          <Title style={{ color: "#0F0F21", width: "70vw" }}>
            QUEM APOIA A INOVAÇÃO, MOVE O MUNDO.
          </Title>

          <Body style={{ textAlign: "left" }}>
            Durante o evento, você pode encarar desafios reais de empresas
            parceiras ou até propor o seu próprio. São problemas que pedem
            criatividade, visão de futuro e, claro, muita colaboração.
          </Body>
        </TitleDiv>
      </Texts>

      <CustomCarousel />
    </Container>
  );
};

export default Desafios;

import React from "react";
import { Container, SectionSubtitle, Cards, TitleDiv, Title, Body, Texts } from "./style";
//import { Texts } from "../CTA/style";
//import { Title } from "../Desafios/style";
//import { Body } from "../Sobre/style";
import CustomCarousel from "../../components/CustomCarousel";

const Desafios = () => {
  return (
    <Container>
      <Texts style={{ marginBottom: "4rem" , width: "70vw"}}>
        <TitleDiv>
          <SectionSubtitle>
            BORA RESOLVER PROBLEMAS DE VERDADE?{" "}
          </SectionSubtitle>
           <Title style={{ color: "#0F0F21", width: "70vw" }}>
            ENCARANDO O QUE IMPORTA, CRIANDO O QUE TRANSFORMA.
          </Title>

          <Body style={{ textAlign: "left", width: "60vw" }}>
            Durante o evento, você pode encarar desafios reais de empresas
            parceiras ou até propor o seu próprio.
            São problemas que pedem criatividade, visão de futuro e, claro, muita colaboração.
          </Body>

          <CustomCarousel />

        </TitleDiv>
      </Texts>

      
    </Container>
  );
};

//<CustomCarousel />

/*style={{ width: "70vw" } 
{ textAlign: "left", width: "60vw" }
<Texts style={{ marginBottom: "4rem" , width: "70vw"}}>
 */

export default Desafios;

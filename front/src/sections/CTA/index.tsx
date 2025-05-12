import React from "react";
import { Container, Highlight, Texts, Title, Body, Button } from "./style";

const CTA = () => {
  return (
    <Container>
      <Highlight>
        <Texts>
          <Title>JUNTE-SE A QUEM ESTÁ FAZENDO A DIFERENÇA COM IA.</Title>
          <Body>
            Inscreva-se e embarque em uma jornada de inovação, conexões reais e
            soluções que transformam.
          </Body>
        </Texts>

        <Button>Inscreva-se</Button>
      </Highlight>
    </Container>
  );
};

export default CTA;

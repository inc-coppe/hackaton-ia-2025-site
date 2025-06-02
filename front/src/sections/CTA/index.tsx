import React from "react";
import { Container, Highlight, Texts, Title, Body, Button } from "./style";

const CTA = () => {
  return (
    <Container>
      <Highlight>
        <Texts>
          <Title>JUNTE-SE A QUEM ESTÁ FAZENDO A DIFERENÇA COM IA.</Title>
          <Body>
            Venha criar soluções que importam — colaborativas, em código aberto e com potencial de impacto real.
          </Body>
        </Texts>

        <Button>Inscreva-se</Button>
      </Highlight>
    </Container>
  );
};

export default CTA;

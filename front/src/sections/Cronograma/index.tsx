import React from "react";
import { Container, ContainerCarousel, Margin, WhiteOverlay } from "./style";
import TimelineCarousel from "../../components/TimelineCarousel";
import { Title } from "../Cronograma/style";

const Cronograma = () => {
  return (
    <Container>
      <WhiteOverlay /> {/* White overlay at the bottom */}
      <Margin>
        <Title>PREPARE-SE PARA CADA MOMENTO HAHAHAHA.</Title>
      </Margin>
      <ContainerCarousel>
        <TimelineCarousel />
      </ContainerCarousel>
    </Container>
  );
};
//<TimelineCarousel />
export default Cronograma;

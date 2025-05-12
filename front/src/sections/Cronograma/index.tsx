import React from "react";
import { Container, Margin, WhiteOverlay } from "./style";
import TimelineCarousel from "../../components/TimelineCarousel";
import { Title } from "../Desafios/style";

const Cronograma = () => {
  return (
    <Container>
      <WhiteOverlay /> {/* White overlay at the bottom */}
      <Margin>
        <Title style={{ marginBottom: "4rem" }}>
          PREPARE-SE PARA CADA MOMENTO.
        </Title>
        <TimelineCarousel />
      </Margin>
    </Container>
  );
};

export default Cronograma;

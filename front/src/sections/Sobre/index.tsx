import React from "react";
import Card from "../../components/Card";
import { SobreContainer, Text, Line, Body, Title } from "./style";
import Img1 from "../../assets/branco.png";
import Img2 from "../../assets/branco.png";
import Img3 from "../../assets/branco.png";

const SobrePage = () => {
  return (
    <SobreContainer>
      <Text>
        <Title>EXPLORE. CRIE. CONQUISTE.</Title>
        <Body>
          Mergulhe em um fim de semana imersivo com foco em inovação e Inteligência Artificial. 
          Enfrente desafios reais, troque ideias com especialistas e desenvolva soluções de impacto ao lado de talentos de diversas áreas! Tudo que for construído aqui será compartilhado com o mundo, em código aberto, para ir ainda mais longe.
        </Body>
      </Text>
      <Line>
        <Card
          image={Img1}
          text={"Aprenda com especialistas de referência em IA e inovação"}
        />
        <Card
          image={Img2}
          text={"Conecte-se com talentos e mentores do ecossistema tec"}
        />
        <Card
          image={Img3}
          text={"Dispute prêmios e destaque-se diante de grandes organizações"}
        />
      </Line>
    </SobreContainer>
  );
};

export default SobrePage;

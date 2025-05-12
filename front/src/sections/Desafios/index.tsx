import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Body, Title } from "../CTA/style";
import { Container, Text, TitleDiv, Button, Frame } from "./style";
import { SectionSubtitle } from "../Patrocinadores/style";
import SectionCardComponent from "../../components/SectionCard";

const Desafios = () => {
  return (
    <Container>
      {/* Left Side: Text Content */}
      <Text>
        <TitleDiv>
          <SectionSubtitle style={{ color: "white" }}>
            AQUECIMENTO!
          </SectionSubtitle>
          <Title style={{ textAlign: "left" }}>
            TUDO O QUE É PRECISO PARA CHEGAR COM CONFIANÇA.
          </Title>
        </TitleDiv>
        <Body style={{ textAlign: "left" }}>
          Antes do hackathon começar, você terá acesso a uma seleção de
          materiais exclusivos — webinars, trilhas de estudo e guias práticos —
          desenvolvidos com o apoio de grandes nomes da tecnologia e da
          pesquisa.
        </Body>
      </Text>

      {/* Right Side: Sections and Button */}
      <Frame>
        {/* Section Cards */}
        <SectionCardComponent
          title="NOME DO RESPONSÁVEL PELO CONTEÚDO"
          subtitle="_Título"
          description="Uma descrição breve do que é."
        />
        <SectionCardComponent
          title="NOME DO RESPONSÁVEL PELO CONTEÚDO"
          subtitle="_Título"
          description="Uma descrição breve do que é."
        />
        <SectionCardComponent
          title="NOME DO RESPONSÁVEL PELO CONTEÚDO"
          subtitle="_Título"
          description="Uma descrição breve do que é."
        />
        {/* Button */}
        <Button>
          ACESSE TODOS OS MATERIAIS <ArrowRightOutlined />
        </Button>
      </Frame>
    </Container>
  );
};

export default Desafios;

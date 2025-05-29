import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionCardComponent from "../../components/SectionCard"; // Supondo que o caminho está correto

// Importando TODOS os estilos do arquivo local
import {
  Container,
  Text,
  TitleDiv,
  Button,
  Frame,
  SectionSubtitle,
  Title,
  Body,
} from "./style";

const Aquecimento = () => {
  // Renomeei para refletir o conteúdo
  return (
    <Container>
      {/* Lado Esquerdo: Conteúdo de Texto */}
      <Text>
        <TitleDiv>
          <SectionSubtitle>AQUECIMENTO!</SectionSubtitle>
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

      {/* Lado Direito: Seções e Botão */}
      <Frame>
        {/* Cards de Seção */}
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
        {/* Botão */}
        <Button>
          ACESSE TODOS OS MATERIAIS <ArrowRightOutlined />
        </Button>
      </Frame>
    </Container>
  );
};

export default Aquecimento;

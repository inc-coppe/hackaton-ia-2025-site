import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionCardComponent from "../../components/SectionCard"; // Supondo que o caminho está correto
import { NavLink, useNavigate } from "react-router-dom";
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
  LinkButton,
} from "./style";
import { ButtonWrapper} from "../../components/CustomCarousel/style";

const Aquecimento = () => {
  // Renomeei para refletir o conteúdo
  
  const navigate = useNavigate();
  
  const handleClickMaterial = (index: number) => {
    navigate("/materiais", { state: { scrollTo: `scroll-material-${index}` } });
  };

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
        <button
              onClick={() => handleClickMaterial(1)}
              style={{
                background: "none",
                border: "none",
                display: "block",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.9rem",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "left",
                width: "100%",
                padding: 0,
                margin: 0,
              }}
            >
          <SectionCardComponent
            title="Webinar de Rapids"
            subtitle="Webinar de Rapids"
            description="Descubra como acelerar pipelines de Data Science usando GPUs com as bibliotecas open source do Rapids. Veja como essa tecnologia se integra a ferramentas populares e potencializa o desempenho em projetos analíticos."
          />
        </button>

        <button
              onClick={() => handleClickMaterial(2)}
              style={{
                background: "none",
                border: "none",
                display: "block",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.9rem",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "left",
                width: "100%",
                padding: 0,
                margin: 0,
              }}
            >
            <SectionCardComponent
              title="Agentic AI"
              subtitle="RAG"
              description="Entenda como a técnica de Retrieval-Augmented Generation amplia a capacidade dos agentes de IA ao combinar geração de linguagem com recuperação de informações externas."
            />

        </button>


        <button
              onClick={() => handleClickMaterial(3)}
              style={{
                background: "none",
                border: "none",
                display: "block",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.9rem",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "left",
                width: "100%",
                padding: 0,
                margin: 0,
              }}
            >

        <SectionCardComponent
          title="Agentic AI"
          subtitle="Material CrewAI"
          description="Aprenda como coordenar equipes de agentes autônomos com o curso da CrewAI, que mostra na prática como integrar múltiplos LLMs em fluxos de trabalho complexos."
        />
        </button>

        {/* Botão */}
        <ButtonWrapper>
          <NavLink
            to="/materiais"
            style={{ inherit: "None", textDecoration: "None" }}
          >
          
            <LinkButton>
              ACESSE TODOS OS MATERIAIS 
              <ArrowRightOutlined />
            </LinkButton>
          </NavLink>
        </ButtonWrapper>
        
      </Frame>
    </Container>
  );
};

export default Aquecimento;

import React, { useRef, useState } from "react";
import setaIcon from "../../assets/seta_figma.png";
import {
  CarouselContainer,
  CardsWrapper,
  CardItem,
  ButtonWrapper,
  LinkButton,
  PageControl,
  Dot,
  CardSugerido,
  CardTitulo,
  CardDescricao,
  SetaIcon,
  CardHeaderSeta,
  SetaWrapper,
} from "./style";
import { ArrowRightOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

const HorizontalCarousel = () => {
  const cardData = [
    {
      id: 1,
      sugerido_por: "",
      titulo: "Análise Preditiva e Gestão de Recursos em Saúde",
      descricao:
        "Construa modelos capazes de prever faltas em consultas, superlotação e sobrecarga de recursos na saúde pública. O objetivo é antecipar demandas e otimizar a alocação de recursos.",
    },

    {
      id: 2,
      sugerido_por: "",
      titulo: "RAG e Diálogo com Dados em Linguagem Natural",
      descricao:
        "Desenvolva sistemas que usem RAG e linguagem natural para transformar dados em respostas claras, apoiando decisões na saúde com inteligência, transparência e usabilidade.",
    },

    {
      id: 3,
      sugerido_por: "",
      titulo: "Desafio Aberto – Explorando Desafios Emergentes",
      descricao:
        "Explore o Data Lake da Saúde do Rio de Janeiro para descobrir padrões, propor soluções inéditas e inovar além dos desafios propostos. Um convite à criatividade e à investigação de problemas latentes na saúde pública.",
    },
  ];

  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToIndex = (index) => {
    if (wrapperRef.current) {
      const cardWidth = wrapperRef.current.offsetWidth;
      wrapperRef.current.scrollLeft = index * cardWidth;
      setCurrentPage(index);
    }
  };


  const handleClickDesafioDesafio = (index: number) => {
    navigate("/desafios", { state: { scrollTo: `scroll-desafio-${index}` } });
  };

  return (
    <CarouselContainer>
      <CardsWrapper ref={wrapperRef}>
        {cardData.map((item, index) => (
          <button
              onClick={() => handleClickDesafioDesafio(index)}
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
          <CardItem key={item.id}>
            <CardHeaderSeta>
              <CardSugerido>{item.sugerido_por}</CardSugerido>
              <SetaWrapper>
                <SetaIcon src={setaIcon} alt="Seta" />
              </SetaWrapper>
            </CardHeaderSeta>
            <CardTitulo>{item.titulo}</CardTitulo>
            <CardDescricao>{item.descricao}</CardDescricao>
          </CardItem>
          </button>
        ))}
      </CardsWrapper>

      <PageControl>
        {[...Array(2)].map((_, index) => (
          <Dot
            key={index}
            active={currentPage === index}
            onClick={() => scrollToIndex(index)}
            role="button"
            tabIndex={0}
            aria-label={`Ir para página ${index + 1}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                scrollToIndex(index);
              }
            }}
          />
        ))}
      </PageControl>

      <ButtonWrapper>
        <NavLink
          to="/desafios"
          style={{ inherit: "None", textDecoration: "None" }}
          state={{ scrollTarget: "top" }}
        >
          <LinkButton>
            Conheça todos os desafios
            <ArrowRightOutlined />
          </LinkButton>
        </NavLink>
      </ButtonWrapper>
    </CarouselContainer>
  );
};

export default HorizontalCarousel;

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

const HorizontalCarousel = () => {
  const cardData = [
    { id: 1, sugerido_por: "" , titulo: "Em Breve", descricao: "Aqui você encontrará a descrição completa deste desafio. Estamos preparando tudo para garantir uma experiência incrível — volte em breve para conferir!"}, 
    
    { id: 2, sugerido_por: "" , titulo: "Em Breve", descricao: "Aqui você encontrará a descrição completa deste desafio. Estamos preparando tudo para garantir uma experiência incrível — volte em breve para conferir!" }, 
    
    { id: 3, sugerido_por: "" , titulo: "Em Breve", descricao: "Aqui você encontrará a descrição completa deste desafio. Estamos preparando tudo para garantir uma experiência incrível — volte em breve para conferir!" },
  
    
  ];

  const wrapperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToIndex = (index) => {
    if (wrapperRef.current) {
      const cardWidth = wrapperRef.current.offsetWidth ;
      wrapperRef.current.scrollLeft = index * cardWidth;
      setCurrentPage(index);
    }
  };

  return (
    <CarouselContainer>
      <CardsWrapper ref={wrapperRef}>
        {cardData.map((item) => (
          <CardItem key={item.id}>
            <CardHeaderSeta>
              <CardSugerido>{item.sugerido_por}</CardSugerido>
              <SetaWrapper>
                <SetaIcon src = {setaIcon} alt="Seta"/>
              </SetaWrapper>
            </CardHeaderSeta>
            <CardTitulo>{item.titulo}</CardTitulo>
            <CardDescricao>{item.descricao}</CardDescricao> 
          </CardItem>
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
        
        <LinkButton href="#desafios">
          Conheça todos os desafios
          <ArrowRightOutlined />
        </LinkButton>
      </ButtonWrapper>
    </CarouselContainer>
  );
};

export default HorizontalCarousel;


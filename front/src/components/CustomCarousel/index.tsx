import React, { useRef, useState } from "react";
import {
  CarouselContainer,
  CardsWrapper,
  CardItem,
  ButtonWrapper,
  LinkButton,
  PageControl,
  Dot,
} from "./style";
import { ArrowRightOutlined } from "@ant-design/icons";

const HorizontalCarousel = () => {
  const cardData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const wrapperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToIndex = (index) => {
    if (wrapperRef.current) {
      const cardWidth = (378.75 + 32) / 2; // Largura do card + margem
      wrapperRef.current.scrollLeft = index * cardWidth;
      setCurrentPage(index);
    }
  };

  return (
    <CarouselContainer>
      <CardsWrapper ref={wrapperRef}>
        {cardData.map((item) => (
          <CardItem key={item.id}>{item.content}</CardItem>
        ))}
      </CardsWrapper>

      <PageControl>
        {cardData.map((_, index) => (
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
        <div />
        <LinkButton href="#desafios">
          Conheça todos os desafios
          <ArrowRightOutlined />
        </LinkButton>
      </ButtonWrapper>
    </CarouselContainer>
  );
};

export default HorizontalCarousel;

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
import Img1 from "../../assets/Pre.png";
import Img2 from "../../assets/Dia1.png";
import Img3 from "../../assets/Dia2.png";
import Img4 from "../../assets/Pré mobile.png";
import Img5 from "../../assets/Dia 1 mobile.png";
import Img6 from "../../assets/Dia 2 mobile.png";


const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
const isMobile = window.matchMedia("(max-width: 48rem)").matches;



const HorizontalCarousel = () => {
  const cardData = [
    { id: 1, image: Img1 },
    { id: 2, image: Img2 },
    { id: 3, image: Img3 },
    { id: 4, image: Img4 },
    { id: 5, image: Img5 },
    { id: 6, image: Img6 },
  ];

  const displayedCards = isMobile ? cardData.slice(3, 6) : cardData.slice(0, 3);

  const wrapperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToIndex = (index) => {
    if (wrapperRef.current) {
      const cardWidth = wrapperRef.current.offsetWidth ; // Largura do card + margem
      wrapperRef.current.scrollLeft = index * cardWidth;
      setCurrentPage(index);
    }
  };

  return (
    <CarouselContainer>
      <CardsWrapper ref={wrapperRef}>
        {displayedCards.map((item) => (
          <CardItem key={item.id}>
            <img src={item.image} alt={`Image ${item.id}`} />
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
        <div />
        <LinkButton href="#desafios">
          CONFIRA O CRONOGRAMA COMPLETO
          <ArrowRightOutlined />
        </LinkButton>
      </ButtonWrapper>
    </CarouselContainer>
  );
};

export default HorizontalCarousel;

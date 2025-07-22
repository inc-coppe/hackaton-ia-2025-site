import React, { useRef, useState } from "react";
import {
  CarouselContainer,
  CardsWrapper,
  CardItem,
  ButtonWrapper,
  LinkButton,
  PageControl,
  Dot,
  ContainerButton,
} from "./style";
import { ArrowRightOutlined } from "@ant-design/icons";
import Img1 from "../../assets/Pré novo (1).png";
import Img2 from "../../assets/Sexta novo (1).png";
import Img3 from "../../assets/Sabado novo (1).png";
import Img4 from "../../assets/Domingo novo (1).png";

import Img5 from "../../assets/Pré novo mobile (1).png";
import Img6 from "../../assets/Sexta novo mobile (1).png";
import Img7 from "../../assets/Sabado novo mobile (2).png";
import Img8 from "../../assets/Domingo novo mobile (1).png";
import { NavLink } from "react-router-dom";

const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
const isMobile = window.matchMedia("(max-width: 48rem)").matches;

const HorizontalCarousel = () => {
  const cardData = [
    { id: 1, image: Img1 },
    { id: 2, image: Img2 },
    { id: 3, image: Img3 },
    { id: 4, image: Img4},
    { id: 5, image: Img5 },
    { id: 6, image: Img6 },
    { id: 7, image: Img7 },
    { id: 8, image: Img8 },
  ];

  const displayedCards = isMobile ? cardData.slice(4, 8) : cardData.slice(0, 4);

  const wrapperRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToIndex = (index) => {
    if (wrapperRef.current) {
      const cardWidth = wrapperRef.current.offsetWidth; // Largura do card + margem
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
      <ContainerButton>
        <ButtonWrapper>
          <div />
          <NavLink
            to="/cronograma"
            style={{ inherit: "None", textDecoration: "None" }}
            state={{ scrollTarget: "top" }}
          >
            <LinkButton>
              CONFIRA O CRONOGRAMA COMPLETO
              <ArrowRightOutlined />
            </LinkButton>
          </NavLink>
        </ButtonWrapper>
      </ContainerButton>
    </CarouselContainer>
  );
};

export default HorizontalCarousel;

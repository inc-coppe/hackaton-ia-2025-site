import React, { useEffect, useRef } from "react";
import {
  HomePageContainer,
  LogoContainer,
  HomeImage,
  Gradient,
  TextContainer,
  Text,
  Title,
  SmallerTitle,
  TitleNoBg,
  SolidButton,
  LeftContainer,
  CarouselContainer,
  CarouselTrack,
  CarouselItem,
  Subtitle,
  PlaceContainerLeft,
  PlaceContainerRight,
  SubtitleLeft,
  SmallerTitleLeft,
  SubtitleRight,
  SmallerTitleRight,
} from "./style";
import LogoHackaton from "../../assets/Logo1.png";
import GradientWpp from "../../assets/gradientewpp.png";

import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import c7 from "../../assets/c7.png";
import c8 from "../../assets/c8.png";
import c9 from "../../assets/c9.png";

import { Flex } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => {
  const carouselImages = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
  // Duplicate images to create seamless loop
  const allImages = [...carouselImages, ...carouselImages];

  return (
    <>
      <HomePageContainer>
        <Gradient src={GradientWpp} alt="Gradiente" />
        <LeftContainer>
          <TextContainer>
            <Text>20 E 21 DE SETEMBRO</Text>
            <Title>HACKATHON</Title>
            <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
              <TitleNoBg>IA</TitleNoBg>
              <Title> 2025</Title>
            </div>
          </TextContainer>
          <SolidButton type="button">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/register"
            >
              INSCREVA-SE JÁ!
            </Link>
          </SolidButton>
        </LeftContainer>
        <Flex>
          <LogoContainer>
            <HomeImage src={LogoHackaton} alt="Hackathon IA 2025" />
          </LogoContainer>
        </Flex>

        <PlaceContainerLeft>
          <SubtitleLeft>RIO DE JANEIRO:</SubtitleLeft>
          <SmallerTitleLeft>PRESENCIAL NO PORTO MARAVALLEY</SmallerTitleLeft>
        </PlaceContainerLeft>

        <PlaceContainerRight>
          <SubtitleRight>SÃO PAULO:</SubtitleRight>
          <SmallerTitleRight>ONLINE COM COORDENAÇÃO DA USP</SmallerTitleRight>
        </PlaceContainerRight>

        <CarouselContainer>
          <CarouselTrack>
            {allImages.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  style={{ width: "auto", height: "auto" }}
                  src={image}
                  alt={`Carousel item ${index + 1}`}
                />
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselContainer>
      </HomePageContainer>
    </>
  );
};

export default HomePage;

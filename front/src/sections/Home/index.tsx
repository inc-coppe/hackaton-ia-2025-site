import React, { useEffect, useRef, useState } from "react";
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
import GradientWppMobile from "../../assets/background-home-mob.png";
import IA from "../../assets/ia.png";

import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/maravalley p (1).png"; //maravalley
import c7 from "../../assets/c7.png";
import c8 from "../../assets/c8.png";
import c9 from "../../assets/ca2_logo_resized (1).png";
import c10 from "../../assets/logo_carousel_gray_60px.png";

import c11 from "../../assets/MOSO logo cinza.png";
import c12 from "../../assets/inova HC logo cinza (1).png";

import c13 from "../../assets/marcafiocruz_horizontal_POSITIVA home sem fundo (1).png";
import c14 from "../../assets/Logo_PCRJ (3).png";
import c15 from "../../assets/Logo MCTI sem fundo branco 120x120.png";
import c16 from "../../assets/logo-secretaria-rj redimensionada (1).png";
import c17 from "../../assets/Logo Lemobs Melhorada Cinza 120x64 Sem Fundo.png";
import c18 from "../../assets/iplan_simples_branca (1).png";
import c19 from "../../assets/Logo IIA vertical maior branca redimensionada (1).png";
import c20 from "../../assets/Logo_visagio_branca_sf_rd.png";

import { Flex } from "antd";
import { Link } from "react-router-dom";
import AnimatedBlobs from "../../components/AnimatedBlobs";

const HomePage = () => {
  const carouselImages = [c1, c2, c3, c4, c5, c19, c6, c7, c8, c17, c10, c11, c9, c12, c13, c14, c15, c20, c16, c18];
  const allImages = [...carouselImages, ...carouselImages];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
  const preloadImages = [LogoHackaton, GradientWpp, GradientWppMobile];
    preloadImages.forEach((src) => {
    const img = new Image();
    img.src = src;
    });
    }, []);


  return (
    <>
      <HomePageContainer>
        <AnimatedBlobs />
        <LeftContainer>
          <TextContainer>
            <Text>10 A 12 DE OUTUBRO</Text>
            <Title>HACKATHON</Title>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <img
                style={{
                  height: isMobile ? "2.25rem" : "3.75rem",
                  width: "auto",
                  objectFit: "contain",
                  zIndex: 2,
                }}
                src={IA}
                alt="IA"
              />
              <Title>2025</Title>
            </div>
          </TextContainer>
          <SolidButton type="button" style={{ zIndex: 2 }}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/register"
            >
              INSCRIÇÕES ENCERRADAS
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
        <PlaceContainerRight style={{ display: "None" }}>
          <SubtitleRight>SÃO PAULO:</SubtitleRight>
          <SmallerTitleRight>ONLINE COM COORDENAÇÃO DA USP</SmallerTitleRight>
        </PlaceContainerRight>
        <CarouselContainer>
          <CarouselTrack>
            {allImages.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt={`Carousel item ${index + 1}`} style={{
          filter: image === c6 || image === c13 ? "invert(100%)" : "none"}}/>
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselContainer>{" "}
      </HomePageContainer>
    </>
  );
};

export default HomePage;

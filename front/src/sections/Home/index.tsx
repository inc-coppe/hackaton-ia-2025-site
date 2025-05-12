import React from "react";
import { HomePageContainer, LogoContainer, HomeImage, Gradient } from "./style";
import LogoHackaton from "../../assets/Logo1.png";
import GradientWpp from "../../assets/gradientewpp.png";

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <Gradient src={GradientWpp} alt="Gradiente" />
        <LogoContainer>
          <HomeImage src={LogoHackaton} alt="Hackathon IA 2025" />
        </LogoContainer>
      </HomePageContainer>
    </>
  );
};

export default HomePage;

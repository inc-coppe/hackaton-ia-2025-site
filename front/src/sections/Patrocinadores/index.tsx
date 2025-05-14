import React from "react";
import { Space, Skeleton } from "antd";
import {
  Container,
  SponsorsContainer,
  SectionTitle,
  SectionSubtitle,
  SectionText,
  SponsorButton,
  TierTitle,
  SponsorLogoContainer,
  SponsorLogo,
  Resize,
} from "./style";
import apoio1 from "../../assets/apoio1.png";
import apoio2 from "../../assets/apoio2.png";
import apoio3 from "../../assets/apoio3.png";
import apoio4 from "../../assets/apoio4.png";
import apoio5 from "../../assets/apoio5.png";
import apoio6 from "../../assets/apoio6.png";
import apoio7 from "../../assets/apoio7.png";
import apoio8 from "../../assets/apoio8.png";
import apoio9 from "../../assets/apoio9.png";
import realizacao1 from "../../assets/realizacao1.png";
import realizacao2 from "../../assets/realizacao2.png";
import realizacao3 from "../../assets/realizacao3.png";
import realizacao4 from "../../assets/realizacao4.png";
import { ArrowRightOutlined } from "@ant-design/icons";

// Mock data for sponsors
const sponsorsData = {
  ouro: [],
  prata: [],
  bronze: [],
  apoio: [
    apoio1,
    apoio2,
    apoio3,
    apoio4,
    apoio5,
    apoio6,
    apoio7,
    apoio8,
    apoio9,
  ],
  realizacao: [realizacao1, realizacao2, realizacao3, realizacao4],
};

const SponsorsSection: React.FC = () => {
  return (
    <Container>
      <Resize>
        <SectionSubtitle>
          NOSSOS PATROCINADORES E PARCEIROS SÃO PARTE ESSENCIAL DESSA JORNADA.
        </SectionSubtitle>

        <SectionTitle>QUEM APOIA A INOVAÇÃO, MOVE O MUNDO.</SectionTitle>

        <SectionText>
          Com o apoio de empresas engajadas, criamos um ambiente onde inovação,
          tecnologia e impacto social se encontram. Explore quem já está
          impulsionando o futuro com a gente.
        </SectionText>
      </Resize>

      <SponsorButton>
        SEJA PATROCINADOR
        <ArrowRightOutlined />
      </SponsorButton>

      <SponsorsContainer>
        <TierTitle>OURO</TierTitle>
        <SponsorLogoContainer>
          <Space
            size={12}
            style={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {[1, 2, 3].map((index) => (
              <Skeleton.Image
                key={index}
                active
                style={{
                  width: window.innerWidth <= 448 ? 60 : 180, // 60px for mobile
                  height: window.innerWidth <= 448 ? 30 : 90, // 30px for mobile
                }}
              />
            ))}
          </Space>{" "}
        </SponsorLogoContainer>

        <TierTitle>PRATA</TierTitle>
        <SponsorLogoContainer>
          <Space
            size={12}
            style={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <Skeleton.Image
                key={index}
                active
                style={{
                  width: window.innerWidth <= 448 ? 60 : 160, // 60px for mobile
                  height: window.innerWidth <= 448 ? 30 : 80, // 30px for mobile
                }}
              />
            ))}
          </Space>{" "}
        </SponsorLogoContainer>

        <TierTitle>BRONZE</TierTitle>
        <SponsorLogoContainer>
          <Space
            size={12}
            style={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <Skeleton.Image
                key={index}
                active
                style={{
                  width: window.innerWidth <= 448 ? 60 : 140, // 60px for mobile
                  height: window.innerWidth <= 448 ? 30 : 70, // 30px for mobile
                }}
              />
            ))}
          </Space>{" "}
        </SponsorLogoContainer>

        <TierTitle>APOIO</TierTitle>
        <SponsorLogoContainer>
          {sponsorsData.apoio.map((logoUrl, index) => (
            <SponsorLogo key={index} imageUrl={logoUrl} />
          ))}
        </SponsorLogoContainer>

        <TierTitle>REALIZAÇÃO</TierTitle>
        <SponsorLogoContainer style={{ marginBottom: "1rem" }}>
          {sponsorsData.realizacao.map((logoUrl, index) => (
            <SponsorLogo key={index} imageUrl={logoUrl} />
          ))}
        </SponsorLogoContainer>
      </SponsorsContainer>
    </Container>
  );
};

export default SponsorsSection;

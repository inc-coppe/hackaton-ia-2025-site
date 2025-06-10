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
  Resize,
  SponsorsContainerDefinidos,
  Section,

} from "./style";
import SponsorCard from "../../components/SponsorCard";
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

const sponsorsData = {
  ouro: [],
  prata: [],
  bronze: [],
  apoio: [
    { image: apoio1, title: "Distrito" },
    { image: apoio2, title: "Hub Digital da COPPE/UFRJ" },
    { image: apoio3, title: "Abstartups – Associação Brasileira de Startups" },
    { image: apoio4, title: "NVIDIA" },
    {
      image: apoio5,
      title: "LNCC – Laboratório Nacional de Computação Científica",
    },
    { image: apoio6, title: "Porto Maravalley" },
    { image: apoio7, title: "WOW Aceleradora de Startups" },
    { image: apoio8, title: "EloGroup" },
    { image: apoio9, title: "CA² Consulting" },
  ],
  realizacao: [
    { image: realizacao1, title: "Incubadora de Empresas COPPE/UFRJ" },
    {
      image: realizacao2,
      title: "Centro de Inovação, Empreendedorismo e Tecnologia",
    },
    { image: realizacao3, title: "FAPERJ" },
    { image: realizacao4, title: "Instituto Reditus" },
  ],
};

const SponsorsSection: React.FC = () => {
  return (
    <Section id="secao-patrocinadores">
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
        <SponsorsContainerDefinidos>
          <TierTitle>OURO</TierTitle>
          <SponsorLogoContainer>
            {[1, 2, 3].map((index) => (
              <SponsorCard
                key={index}
                imageUrl=""
                title={`Patrocinador Ouro ${index}`}
                isLoading
              />
            ))}
          </SponsorLogoContainer>

          <TierTitle>PRATA</TierTitle>
          <SponsorLogoContainer>
            {[1, 2, 3, 4, 5].map((index) => (
              <SponsorCard
                key={index}
                imageUrl=""
                title={`Patrocinador Prata ${index}`}
                isLoading
              />
            ))}
          </SponsorLogoContainer>

          <TierTitle>BRONZE</TierTitle>
          <SponsorLogoContainer>
            {[1, 2, 3, 4, 5].map((index) => (
              <SponsorCard
                key={index}
                imageUrl=""
                title={`Patrocinador Bronze ${index}`}
                isLoading
              />
            ))}
          </SponsorLogoContainer>
        </SponsorsContainerDefinidos>
          <TierTitle>APOIO</TierTitle>
          <SponsorLogoContainer>
            {sponsorsData.apoio.map((sponsor, index) => (
              <SponsorCard
                key={index}
                imageUrl={sponsor.image}
                title={sponsor.title}
              />
            ))}
          </SponsorLogoContainer>

        <TierTitle>REALIZAÇÃO</TierTitle>
        <SponsorLogoContainer style={{ marginBottom: "1rem" }}>
          {sponsorsData.realizacao.map((sponsor, index) => (
            <SponsorCard
              key={index}
              imageUrl={sponsor.image}
              title={sponsor.title}
            />
          ))}
        </SponsorLogoContainer>
      </SponsorsContainer>
    </Container>
    </Section>
  );
};

export default SponsorsSection;

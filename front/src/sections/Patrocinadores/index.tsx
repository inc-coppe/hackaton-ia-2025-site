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
import apoio1 from "../../assets/Distrito nova logo.png";
import apoio2 from "../../assets/hub digital nova logo.png";
import apoio3 from "../../assets/abstartups nova logo.png";
import apoio4 from "../../assets/nvidia_logo_cortado_transparente.png";
import apoio5 from "../../assets/LNCC nova logo.png";
import apoio6 from "../../assets/maravalley p.png";
import apoio7 from "../../assets/wow-aceleradora-de-startups-nova-logo.png";
import apoio8 from "../../assets/elogroup nova logo.png";
import apoio9 from "../../assets/CA2_marca-nova-logo (1).png";
import apoio10 from "../../assets/aws logo (1) (1).png";

import apoio11 from "../../assets/MOSO logo centralizada.png";
import apoio12 from "../../assets/inova HC logo (2).png";
import apoio13 from "../../assets/Logo MCTI.png";
import apoio14 from "../../assets/Logo Secretaria de Estado sem fundo (2).png";
import apoio15 from "../../assets/secretaria de saúde 3.png";
import apoio16 from "../../assets/Logo Lemobs Melhorada.png";
import apoio17 from "../../assets/iplan_simples_preta.png";
import apoio18 from "../../assets/cietec preto (1).png";

import realizacao1 from "../../assets/nova logo incubadora coppe.png";
import realizacao2 from "../../assets/Logo Coppe (3).png";
import realizacao3 from "../../assets/realizacao3.png";
import realizacao4 from "../../assets/realizacao4.png";

import p_ouro1 from "../../assets/marcafiocruz_horizontal_POSITIVA ouro1.png";

import { ArrowRightOutlined } from "@ant-design/icons";
import {
  ButtonWrapper,
  LinkButton,
} from "../../components/CustomCarousel/style";
import { NavLink } from "react-router-dom";

const sponsorsData = {
  ouro: [
    { image: realizacao3, title: "FAPERJ" },
    { image: realizacao4, title: "Reditus" },
    { image: p_ouro1, title: "Fiocruz" },
  ],
  prata: [],
  bronze: [],
  apoio: [
    { image: apoio6, title: "Porto Maravalley" },
    
    { image: apoio9, title: "CA² Consulting" },
    { image: apoio4, title: "NVIDIA" },
    { image: apoio5, title: "LNCC – Laboratório Nacional de Computação Científica" },
    { image: apoio10, title: "AWS" },
    { image: apoio16, title: "Lemobs"},

    { image: apoio12, title: "Inova HC"},
    
    { image: apoio11, title: "MOSO"},
    { image: apoio8, title: "EloGroup" },

    { image: apoio15, title: "Secretaria Municipal de Saúde do Rio de Janeiro"},
    { image: apoio14, title: "Secretaria de Estado de Saúde do Rio de Janeiro"},

    { image: apoio1, title: "Distrito" },
    { image: apoio3, title: "Abstartups – Associação Brasileira de Startups" },
    { image: apoio2, title: "Hub Digital da COPPE/UFRJ" },
    { image: apoio7, title: "WOW Aceleradora de Startups" },

    { image: apoio13, title: "MCTI"},
    { image: apoio17, title: "IplanRio"},
    
    
  ],
  realizacao: [
    { image: realizacao1, title: "Incubadora de Empresas COPPE/UFRJ" },
    { image: realizacao2, title: "Coppe" },
    { image: apoio18, title: "CIETEC" },   
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
            Com o apoio de empresas engajadas, criamos um ambiente onde
            inovação, tecnologia e impacto social se encontram. Explore quem já
            está impulsionando o futuro com a gente.
          </SectionText>
        </Resize>

        <ButtonWrapper>
          <NavLink
            to="/patrocinador"
            style={{ inherit: "None", textDecoration: "None" }}
            state={{ scrollTarget: "top" }}
          >
            <LinkButton>
              SEJA PATROCINADOR
              <ArrowRightOutlined />
            </LinkButton>
          </NavLink>
        </ButtonWrapper>

        <SponsorsContainer>
          <TierTitle>PATROCINADORES</TierTitle>
          <SponsorLogoContainer>
            {sponsorsData.ouro.map((sponsor, index) => (
              <SponsorCard
                key={index}
                imageUrl={sponsor.image}
                title={sponsor.title}
              />
            ))}
          </SponsorLogoContainer>

          <SponsorsContainerDefinidos>
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

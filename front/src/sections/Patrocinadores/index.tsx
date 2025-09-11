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
import apoio19 from "../../assets/Logo IIA vertical maior (1) (1) (1).jpg";

import realizacao1 from "../../assets/nova logo incubadora coppe.png";
import realizacao2 from "../../assets/Logo Coppe (3).png";
import realizacao3 from "../../assets/realizacao3.png";
import realizacao4 from "../../assets/realizacao4.png";

import p_ouro1 from "../../assets/marcafiocruz_horizontal_POSITIVA ouro1.png";
import p_ouro2 from "../../assets/Logo_visagio_padrao.png"

import { ArrowRightOutlined } from "@ant-design/icons";
import {
  ButtonWrapper,
  LinkButton,
} from "../../components/CustomCarousel/style";
import { NavLink } from "react-router-dom";

const sponsorsData = {
  ouro: [
    { image: p_ouro2, title: "Visagio", website: "https://www.visagio.com/"},
    { image: p_ouro1, title: "Fiocruz", website: "https://fiocruz.br/"},
    { image: realizacao3, title: "FAPERJ", website: "https://www.faperj.br/" },
    { image: realizacao4, title: "Reditus", website: "https://www.reditus.org.br/" },
  ],
  prata: [],
  bronze: [],
  apoio: [
    { image: apoio6, title: "Porto Maravalley", website: "https://www.maravalley.rio/" },
    
    { image: apoio9, title: "CA² Consulting", website: "https://ca2consulting.com.br/" },
    { image: apoio4, title: "NVIDIA", website: "https://www.nvidia.com/pt-br/"},
    { image: apoio5, title: "LNCC – Laboratório Nacional de Computação Científica", website: "https://www.gov.br/lncc/pt-br" },
    { image: apoio19, title: "Instituto de Inteligência Artificial", website: "https://instituto.ia.lncc.br/pt" },
    { image: apoio10, title: "AWS", website: "https://aws.amazon.com/pt/" },
    { image: apoio16, title: "Lemobs", website: "https://lemobs.com.br/"},

    { image: apoio12, title: "Inova HC", website: "https://inovahc.com.br/"},
    
    { image: apoio11, title: "MOSO", website: "https://www.moso.ac/"},
    { image: apoio8, title: "EloGroup", website: "https://elogroup.com/" },

    { image: apoio15, title: "Secretaria Municipal de Saúde do Rio de Janeiro", website: "https://saude.prefeitura.rio/"},
    { image: apoio14, title: "Secretaria de Estado de Saúde do Rio de Janeiro", website: "https://www.rj.gov.br/saude/"},

    { image: apoio1, title: "Distrito", website: "https://distrito.me/" },
    { image: apoio3, title: "Abstartups – Associação Brasileira de Startups" , website: "https://abstartups.com.br/"},
    { image: apoio2, title: "Hub Digital da COPPE/UFRJ", website: "https://hub-digital.coppe.ufrj.br/" },
    { image: apoio7, title: "WOW Aceleradora de Startups", website: "https://www.wow.ac/" },

    { image: apoio13, title: "MCTI", website: "https://www.gov.br/mcti/pt-br"},
    { image: apoio17, title: "IplanRio", website: "https://iplanrio.prefeitura.rio/"},
    
    
  ],
  realizacao: [
    { image: realizacao1, title: "Incubadora de Empresas COPPE/UFRJ", website: "https://incubadora.coppe.ufrj.br/index.php/pt/" },
    { image: realizacao2, title: "Coppe", website: "https://coppe.ufrj.br/" },
    { image: apoio18, title: "CIETEC", website: "https://cietec.org.br/" },   
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
                key={sponsor.title}
                imageUrl={sponsor.image}
                title={sponsor.title}
                link={sponsor.website} 
                lazyLoad
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
                key={sponsor.title}
                imageUrl={sponsor.image}
                title={sponsor.title}
                link={sponsor.website}  
                lazyLoad
              />
            ))}
          </SponsorLogoContainer>

          <TierTitle>REALIZAÇÃO</TierTitle>
          <SponsorLogoContainer style={{ marginBottom: "1rem" }}>
            {sponsorsData.realizacao.map((sponsor, index) => (
              <SponsorCard
                key={sponsor.title}
                imageUrl={sponsor.image}
                title={sponsor.title}
                link={sponsor.website}  
                lazyLoad
              />
              ))}
          </SponsorLogoContainer>
        </SponsorsContainer>
      </Container>
    </Section>
  );
};

export default SponsorsSection;

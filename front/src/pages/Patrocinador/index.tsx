import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { LinkButton } from "../../components/TimelineCarousel/style";

import {
  SponsorContainer,
  HighlightSection,
  HighlightTextContainer,
  HighlightTitleGroup,
  HighlightPreamble,
  HighlightMainTitle,
  HighlightDescription,
  HighlightButtonContainer, // Novo container para o botão do topo
  AboutSection,
  AboutTextContainer, // Novo container para o texto do About
  AboutTitle,
  AboutDescription,
  CardsContainer,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  CTASection,
  CTAContainer,
  CTAWrapper, // Para layout lado a lado no CTA
  CTATextContainer,
  CTATitle,
  CTADescription, // Reutilizaremos para as duas descrições no CTA
  BenefitsContainer,
  BenefitBox,
  BenefitBoxTitle,
  ActionButton, // Componente de botão reutilizado
  ActionButtonText,
  MainTitleContainer, // Texto do botão reutilizado
} from "./style";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";

const icons = {
  groups: b1,
  newspaper: b2,
  brand_awareness: b3,
  handshake: b4,
  communication: b5,
  network_intelligence: b6,
};

const benefitsData = [
  { iconKey: "groups", title: "Acessar talentos altamente qualificados" },
  {
    iconKey: "newspaper",
    title: "Ter presença em todos os materiais do evento",
  },
  {
    iconKey: "brand_awareness",
    title: "Divulgar sua marca para participantes e stakeholders",
  },
  {
    iconKey: "handshake",
    title:
      "Fortalecer sua atuação em inovação aberta e responsabilidade social",
  },
  {
    iconKey: "communication",
    title:
      "Participar de momentos estratégicos como mentorias e sessões de networking",
  },
  {
    iconKey: "network_intelligence",
    title:
      "Associar sua marca a um dos temas mais estratégicos da década: a inteligência artificial",
  },
];

const ctaBenefitsData = [
  "Divulgação da marca em materiais e redes oficiais",
  "Acesso ao report completo do evento",
  "Espaço para ações promocionais e distribuição de brindes",
  "Participação em atividades presenciais no lounge de ativação",
  "Contato com participantes interessados em oportunidades de carreira",
];

function Sponsor() {
  // const navigate = useNavigate(); // Não usado atualmente
  const location = useLocation();

  const handleContact = () => {
    window.location.href = "mailto:contato@contato.com.br"; // Ou formulário de contato
  };

  useEffect(() => {
    if (location.state?.scrollTarget === "top") {
        // Scrolla até o topo da página
        window.scrollTo({ top: 0});
    }
  }, [location]);

  return (
    <>
      <Header />
      <SponsorContainer>
        <HighlightSection>
          <HighlightTextContainer>
            <HighlightTitleGroup>
              <HighlightPreamble>
                IMPULSIONE TALENTOS, CONSTRUA O FUTURO E DEIXE A SUA MARCA.
              </HighlightPreamble>
              <MainTitleContainer>
                <HighlightMainTitle>
                  QUEM APOIA A INOVAÇÃO,
                </HighlightMainTitle>
                <HighlightMainTitle>
                  MOVE O MUNDO.
                </HighlightMainTitle>
              </MainTitleContainer>
            </HighlightTitleGroup>
            <HighlightDescription>
              O Hackathon de IA é mais que um evento: é uma jornada coletiva
              para resolver desafios reais com criatividade, tecnologia e
              colaboração. Patrocinar esse movimento é participar do avanço da
              inteligência artificial no Brasil, apoiar a formação de talentos e
              impulsionar um ecossistema de inovação com impacto social e
              econômico duradouro.
            </HighlightDescription>
            <HighlightButtonContainer>
              <LinkButton
                  as="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd9hIGGNXmNJPO00E-tZOQBG9Bf0USTtbRQfBS-VnMGh76wpg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <ActionButton>
                  <ActionButtonText>Quero Patrocinar</ActionButtonText>
                </ActionButton>
                
              </LinkButton>
            </HighlightButtonContainer>
          </HighlightTextContainer>
        </HighlightSection>

        <AboutSection>
          <AboutTextContainer>
            <AboutTitle>VISIBILIDADE, CONEXÕES E IMPACTO REAL.</AboutTitle>
            <AboutDescription>
              Ao se tornar patrocinador, sua marca se posiciona ao lado de
              universidades líderes como UFRJ, USP e instituições como a
              Incubadora de Empresas COPPE/UFRJ – participando ativamente da
              transformação tecnológica no Brasil.
            </AboutDescription>
            <AboutDescription>
              Como parceiro, você poderá:
            </AboutDescription>
          </AboutTextContainer>
          <CardsContainer>
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon
                  src={icons[benefit.iconKey as keyof typeof icons]}
                  alt=""
                />{" "}
                {/* Ícone primeiro */}
                <BenefitTitle>{benefit.title}</BenefitTitle>
              </BenefitCard>
            ))}
          </CardsContainer>
        </AboutSection>

        <CTASection>
          <CTAContainer>
            <CTAWrapper>
              <CTATextContainer>
                <CTATitle>
                  PATROCINADORES TÊM ACESSO A UMA SÉRIE DE BENEFÍCIOS!
                </CTATitle>
                <CTADescription>
                  Os detalhes sobre níveis e cotas são apresentados ao entrar em
                  contato com nossa equipe.
                </CTADescription>
                <CTADescription>
                  {" "}
                  {/* Figma tem dois parágrafos aqui */}O próximo passo é seu.
                  Bora construir isso juntos?
                </CTADescription>
              </CTATextContainer>
              <BenefitsContainer>
                {ctaBenefitsData.map((benefit, index) => (
                  <BenefitBox key={index}>
                    <BenefitBoxTitle>{benefit}</BenefitBoxTitle>
                  </BenefitBox>
                ))}
              </BenefitsContainer>
            </CTAWrapper>
            
            <LinkButton
                  as="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd9hIGGNXmNJPO00E-tZOQBG9Bf0USTtbRQfBS-VnMGh76wpg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <ActionButton>
                  <ActionButtonText>Quero Patrocinar</ActionButtonText>
                </ActionButton>
                
            </LinkButton>
          </CTAContainer>
        </CTASection>
      </SponsorContainer>
      <Footer />
    </>
  );
}

export default Sponsor;

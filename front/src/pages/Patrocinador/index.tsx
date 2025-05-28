import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  SponsorContainer,
  HighlightSection,
  TextContainer,
  Title,
  Subtitle,
  Description,
  Button,
  ButtonText,
  AboutSection,
  AboutTitle,
  AboutDescription,
  CardsContainer,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  CTASection,
  CTAContainer,
  CTATextContainer,
  CTATitle,
  CTADescription,
  CTAQuestion,
  BenefitsContainer,
  BenefitBox,
  BenefitBoxTitle,
  ButtonContainer,
  CTAWrapper,
} from "./style";
import { useNavigate } from "react-router-dom";

function Sponsor() {
  const navigate = useNavigate();

  const handleContact = () => {
    // Replace with actual contact functionality
    window.location.href = "mailto:contato@contato.com.br";
  };

  return (
    <>
      <Header />
      
      <SponsorContainer>
        
        <HighlightSection>
          <TextContainer>
            <Title>
              <Subtitle>
                IMPULSIONE TALENTOS, CONSTRUA O FUTURO E DEIXE A SUA MARCA.
              </Subtitle>
              QUEM APOIA A INOVAÇÃO, MOVE O MUNDO.
            </Title>
            <Description>
              O Hackathon de IA é mais que um evento: é uma jornada coletiva
              para resolver desafios reais com criatividade, tecnologia e
              colaboração. Patrocinar esse movimento é participar do avanço da
              inteligência artificial no Brasil, apoiar a formação de talentos e
              impulsionar um ecossistema de inovação com impacto social e
              econômico duradouro.
            </Description>
            
            <ButtonContainer>
              <Button onClick={handleContact}>
                <ButtonText>SEJA UM PATROCINADOR</ButtonText>
              </Button>
            </ButtonContainer>

          </TextContainer>
        </HighlightSection>

        <AboutSection>
          <AboutTitle>VISIBILIDADE, CONEXÕES E IMPACTO REAL.</AboutTitle>
          <AboutDescription>
            Ao se tornar patrocinador, sua marca se posiciona ao lado de
            universidades líderes como UFRJ, USP e instituições como a
            Incubadora de Empresas COPPE/UFRJ – participando ativamente da
            transformação tecnológica no Brasil. Como parceiro, você poderá:
          </AboutDescription>
          
          <CardsContainer>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon src={benefit.icon} alt={benefit.title} />
                <BenefitTitle>{benefit.title}</BenefitTitle>
              </BenefitCard>
            ))}
          </CardsContainer>
        </AboutSection>

        <CTASection>
          <CTAContainer>
            <CTAWrapper>
              <CTATextContainer>
                <CTATitle>PATROCINADORES TÊM ACESSO A BENEFÍCIOS COMO:</CTATitle>

                <CTADescription>
                  Os detalhes sobre níveis e cotas são apresentados ao entrar em
                  contato com nossa equipe. 
                </CTADescription>

                <CTAQuestion>O próximo passo é seu. Bora construir isso juntos?</CTAQuestion>
              </CTATextContainer>

              <BenefitsContainer>
                {ctaBenefits.map((benefit, index) => (
                  <BenefitBox key={index}>
                    <BenefitBoxTitle>{benefit}</BenefitBoxTitle>
                  </BenefitBox>
                ))}
              </BenefitsContainer>
            </CTAWrapper>
                
            <ButtonContainer>
              <Button onClick={handleContact}>
                <ButtonText>SEJA UM PATROCINADOR</ButtonText>
              </Button>
            </ButtonContainer>
          </CTAContainer>  
        </CTASection>


      </SponsorContainer>
      <Footer />
    </>
  );
}

const benefits = [
  {
    icon: "groups_icon.svg",
    title: "Acessar talentos altamente qualificados",
  },
  {
    icon: "newspaper_icon.svg",
    title: "Ter presença em todos os materiais do evento",
  },
  {
    icon: "brand_awareness_icon.svg",
    title: "Divulgar sua marca para participantes e stakeholders",
  },
  {
    icon: "handshake_icon.svg",
    title:
      "Fortalecer sua atuação em inovação aberta e responsabilidade social",
  },
  {
    icon: "communication_icon.svg",
    title:
      "Participar de momentos estratégicos como mentorias e sessões de networking",
  },
  {
    icon: "network_intelligence_icon.svg",
    title:
      "Associar sua marca a um dos temas mais estratégicos da década: a inteligência artificial",
  },
];

const ctaBenefits = [
  "Divulgação da marca em materiais e redes oficiais",
  "Acesso ao report completo do evento",
  "Espaço para ações promocionais e distribuição de brindes",
  "Participação em atividades presenciais no lounge de ativação",
  "Contato com participantes interessados em oportunidades de carreira",
];

export default Sponsor;

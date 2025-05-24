import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  MaterialsContainer,
  HighlightSection,
  TextContainer,
  Title,
  Subtitle,
  Description,
  MainContent,
  IntroText,
  MaterialsSection,
  SideMenu,
  MenuTitle,
  MenuSelected,
  ContentArea,
  ChapterSection,
  ChapterTitle,
  ChapterAuthor,
  ChapterDescription,
  VideoContainer,
  SubtitleSection,
  SubtitleTitle,
  SubtitleText,
} from "./style";

function Materials() {
  const menuItems = [
    "Introdução à IA",
    "Fundamentos de Machine Learning",
    "Deep Learning",
    "Processamento de Linguagem Natural",
    "Visão Computacional",
    "Ética em IA",
    "Cases Práticos",
  ];

  return (
    <>
      <Header />
      <MaterialsContainer>
        <HighlightSection>
          <TextContainer>
            <Title>
              <Subtitle>AQUECIMENTO!</Subtitle>
              TUDO O QUE É PRECISO PARA CHEGAR COM CONFIANÇA.
            </Title>
            <Description>
              Antes do hackathon começar, você tem acesso a uma seleção de
              materiais exclusivos — webinars, trilhas de estudo e guias
              práticos — desenvolvidos com o apoio de [COLOCAR AQUI O NOME DAS
              EMPRESAS], grandes nomes da tecnologia e da pesquisa.
            </Description>
          </TextContainer>
        </HighlightSection>

        <MainContent>
          <IntroText>
            Escolha por onde começar, aprenda no seu ritmo e aproveite cada
            recurso para chegar com mais preparo — e mais inspiração.
          </IntroText>

          <MaterialsSection>
            <SideMenu>
              {menuItems.map((item, index) => (
                <MenuTitle key={index} active={index === 0}>
                  {item}
                </MenuTitle>
              ))}
              <MenuSelected />
            </SideMenu>

            <ContentArea>
              {[1, 2, 3].map((_, index) => (
                <ChapterSection key={index}>
                  <ChapterTitle>_TÍTULO DO CAPÍTULO/MÓDULO</ChapterTitle>
                  <ChapterAuthor>
                    POR [NOME DO CRIADOR DO CONTEÚDO]
                  </ChapterAuthor>
                  <ChapterDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </ChapterDescription>
                  <VideoContainer />
                  <ChapterDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </ChapterDescription>
                  <SubtitleSection>
                    <SubtitleTitle>Subtítulo</SubtitleTitle>
                    <SubtitleText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </SubtitleText>
                  </SubtitleSection>
                </ChapterSection>
              ))}
            </ContentArea>
          </MaterialsSection>
        </MainContent>
      </MaterialsContainer>
      <Footer />
    </>
  );
}

export default Materials;

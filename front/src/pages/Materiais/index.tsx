import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  PageContainer,
  HighlightSection,
  HighlightTextWrapper,
  HighlightTitleGroup,
  HighlightPreamble,
  HighlightTitle,
  HighlightDescription,
  MainContentWrapper,
  IntroText,
  MaterialsLayoutContainer,
  SideMenu,
  MenuLink,
  ContentArea,
  ChapterSectionWrapper,
  ChapterTitleWrapper,
  ChapterTitle,
  ChapterAuthor,
  ChapterParagraph,
  VideoPlaceholder,
  ChapterSubtitleSection,
  ChapterSubtitleTitle,
} from "./style";

// Mock de dados para os capítulos/seções
const materialChapters = [
  {
    id: "introducao-ia",
    menuTitle: "Introdução à IA",
    chapterTitle: "_TÍTULO DO CAPÍTULO: INTRODUÇÃO À IA",
    author: "POR [NOME DO CRIADOR DO CONTEÚDO]",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    videoAvailable: true,
    description2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    subsections: [
      {
        title: "Subtítulo da Seção 1.1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: "fundamentos-ml",
    menuTitle: "Fundamentos de Machine Learning",
    chapterTitle: "_TÍTULO DO CAPÍTULO: FUNDAMENTOS DE ML",
    author: "POR [OUTRO CRIADOR]",
    description1:
      "Aprenda os conceitos básicos de Machine Learning, algoritmos e como eles funcionam.",
    videoAvailable: true,
    description2: "Mais detalhes e exemplos práticos serão abordados.",
    subsections: [],
  },
  // Adicione mais capítulos aqui conforme necessário
];

interface ScrollTrackerProps {
  MateriaisRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ScrollTracker: React.FC<ScrollTrackerProps> = ({
  MateriaisRefs,
  setActiveIndex,
}) => {
  // ... (lógica do ScrollTracker - sem alterações)
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let currentClosestIndex = 0;
    let smallestDistance = Infinity;

    MateriaisRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const distanceToTop = Math.abs(rect.top - 80);

        if (distanceToTop < smallestDistance) {
          smallestDistance = distanceToTop;
          currentClosestIndex = index;
        }
      }
    });
    setActiveIndex(currentClosestIndex);
  }, [scrollY, MateriaisRefs, setActiveIndex]);

  return null;
};

function Materials() {
  const MateriaisRefs = useRef<(HTMLElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleClick = (index: number) => {
      // ... (lógica do handleClick - sem alterações)
      const sectionRef = MateriaisRefs.current[index];
      const headerOffset = 80;
      if (sectionRef) {
        const elementPosition =
          sectionRef.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const menuData = materialChapters.map((material, index) => ({
      id: material.id || `material-${index}`,
      title: materialChapters[index] || material.menuTitle,
  }));

  return (
    <>
      <Header />
      <PageContainer>
        <HighlightSection>
          <HighlightTextWrapper>
            <HighlightTitleGroup>
              <HighlightPreamble>AQUECIMENTO!</HighlightPreamble>
              <HighlightTitle>
                TUDO O QUE É PRECISO PARA CHEGAR COM CONFIANÇA.
              </HighlightTitle>
            </HighlightTitleGroup>
            <HighlightDescription>
              Antes do hackathon começar, você tem acesso a uma seleção de
              materiais exclusivos — webinars, trilhas de estudo e guias
              práticos — desenvolvidos com o apoio de [COLOCAR AQUI O NOME DAS
              EMPRESAS], grandes nomes da tecnologia e da pesquisa.
            </HighlightDescription>
          </HighlightTextWrapper>
        </HighlightSection>

        <MainContentWrapper>
          <IntroText style={{ textAlign: "left" }}>
            Escolha por onde começar, aprenda no seu ritmo e aproveite cada
            recurso para chegar com mais preparo — e mais inspiração.
          </IntroText>

          <MaterialsLayoutContainer>
            <SideMenu>
              {menuData.map((item, index) => (
                <MenuLink
                  key={item.id}
                  $active={activeIndex === index}
                  onClick={() => handleClick(index)}
                >
                  {item.title.menuTitle}
                </MenuLink>
              ))}
            </SideMenu>

            <ContentArea>
              {materialChapters.map((chapter, index) => (
                <ChapterSectionWrapper 
                  key={chapter.id || index} 
                  id={chapter.id || `desafio-${index}`}
                  ref={(el) => (MateriaisRefs.current[index] = el)}
                  >                                    
                  <ChapterTitleWrapper>
                    <ChapterTitle>{chapter.chapterTitle}</ChapterTitle>
                    <ChapterAuthor>{chapter.author}</ChapterAuthor>
                  </ChapterTitleWrapper>

                  <ChapterParagraph>{chapter.description1}</ChapterParagraph>
                  {chapter.videoAvailable && <VideoPlaceholder />}
                  {chapter.description2 && (
                    <ChapterParagraph>{chapter.description2}</ChapterParagraph>
                  )}
                  {chapter.subsections?.map((sub, subIndex) => (
                    <ChapterSubtitleSection key={subIndex}>
                      <ChapterSubtitleTitle>{sub.title}</ChapterSubtitleTitle>
                      <ChapterParagraph>{sub.text}</ChapterParagraph>
                    </ChapterSubtitleSection>
                  ))}
                </ChapterSectionWrapper>
              ))}
            </ContentArea>
          
          <ScrollTracker
              MateriaisRefs={MateriaisRefs}
              setActiveIndex={setActiveIndex}
            />
          </MaterialsLayoutContainer>
        </MainContentWrapper>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Materials;

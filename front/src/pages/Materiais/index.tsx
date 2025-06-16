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
  ChapterSubParagraph,
  Section,
} from "./style";
import { useLocation } from "react-router-dom";

// Mock de dados para os capítulos/seções
const materialChapters = [
  {
    id: "introducao-ia",
    menuTitle: "Data Science com GPU",
    chapterTitle: "Data Science com GPU",
    author: "",
    description1:
      "O uso de GPUs (Unidades de Processamento Gráfico) vem revolucionando a área de ciência de dados, permitindo o processamento massivo de informações com maior velocidade e eficiência. Nesta trilha, os participantes terão acesso a conteúdos e ferramentas que exploram o potencial das GPUs na análise de grandes volumes de dados.",
      
    videoAvailable: false,
    description2: "A proposta é capacitar os participantes a aplicar técnicas de alto desempenho em seus projetos durante o hackathon, explorando desde conceitos básicos de paralelização até o uso prático de bibliotecas otimizadas para GPU. Essa trilha é ideal para quem busca elevar o nível técnico das soluções com recursos computacionais de ponta.",
    subsections: [
      {
        title: "Webinar de Rapids",
        text: ["Neste webinário, os participantes serão introduzidos ao Rapids, um conjunto de bibliotecas open source desenvolvidas pela NVIDIA que permite a execução de pipelines completos de Data Science e Analytics diretamente em GPUs, utilizando Python. A proposta é demonstrar como essa tecnologia pode acelerar significativamente o processamento de dados e o treinamento de modelos, aproveitando ao máximo o poder computacional das GPUs.",
        "Durante a apresentação, será explorada a arquitetura do Rapids, com destaque para suas principais bibliotecas — compatíveis com ferramentas amplamente utilizadas como Pandas, Scikit-learn e NumPy/SciPy. Além disso, os participantes aprenderão como realizar a instalação e dar os primeiros passos com a plataforma, preparando-se para desenvolver soluções de alto desempenho em ambientes com múltiplas GPUs.",
        ]
      },
      {
        title: "Material da NVIDIA",
        text: ["Para aprofundar seus conhecimentos e explorar as possibilidades do uso de GPUs em Data Science, recomendamos a leitura do material oficial da NVIDIA sobre o ecossistema Rapids. No site, você encontrará tutoriais, exemplos práticos e documentações completas sobre as bibliotecas que compõem essa poderosa plataforma de aceleração de dados.",
          <>
            <a href="https://rapids.ai/" target="_blank" rel="noopener noreferrer" style={{color: "#3161E8", textDecoration: "none", fontWeight: "bold" }}>
               RAPIDS.AI
          </a>
          </>
        ]
      },
    ],
  },
  {
    id: "introducao-ia",
    menuTitle: "Agentic AI",
    chapterTitle: "Agentic AI",
    author: "",
    description1:
      "O avanço dos modelos de linguagem natural abriu espaço para o desenvolvimento de sistemas cada vez mais autônomos e interativos, dando origem a uma nova geração de agentes inteligentes. A trilha de Agentic AI explora como construir soluções baseadas em agentes que tomam decisões, executam tarefas complexas e interagem com usuários e sistemas de forma dinâmica.",
    videoAvailable: false,
    description2: "Nesta trilha, os participantes terão acesso a materiais que abordam os fundamentos da inteligência artificial agentiva, frameworks modernos para criação de agentes e exemplos práticos de como utilizar essas tecnologias para resolver desafios do mundo real. A ideia é mostrar como a combinação entre modelos de linguagem e raciocínio programável pode abrir novas possibilidades para a automação inteligente e adaptativa.",
    subsections: [
      {
        title: "Webminar de Agentic AI",
        text: ["Neste webinar, os participantes serão apresentados aos princípios práticos da inteligência artificial baseada em agentes, com foco no desenvolvimento de sistemas que combinam modelos de linguagem com capacidade de raciocínio, tomada de decisão e execução autônoma de tarefas. A sessão abordará as diferenças entre aplicações tradicionais de IA e abordagens agentivas, destacando os cenários em que agentes inteligentes se tornam mais eficazes do que simples chamadas a modelos.",
        
        "Será demonstrado como utilizar frameworks modernos para orquestrar fluxos de interação entre agentes e fontes de dados externas, permitindo que os sistemas aprendam, se adaptem e colaborem com humanos e outros agentes. Além dos conceitos, o webinar trará exemplos práticos e arquiteturas que servem como base para o desenvolvimento de soluções avançadas no contexto do hackathon."

        ]
      },
      {
        title: "Material CrewAI",
        text: ["Para entender como diferentes agentes podem colaborar de forma coordenada em tarefas complexas, o curso da DeepLearning.AI sobre sistemas multiagentes com CrewAI é uma excelente referência. Ele apresenta os fundamentos da construção de equipes de agentes autônomos, mostrando como orquestrar fluxos de trabalho com múltiplos modelos de linguagem interagindo entre si.",

        "O conteúdo explora tanto os conceitos por trás da abordagem agentiva quanto sua implementação prática, oferecendo exemplos claros de como configurar, especializar e integrar agentes com papéis distintos em um mesmo sistema. É uma ótima oportunidade para aprofundar o conhecimento em Agentic AI e aplicar esses aprendizados diretamente nos desafios do hackathon.",

        <>
            <a href="https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/" target="_blank" rel="noopener noreferrer" style={{color: "#3161E8", textDecoration: "none", fontWeight: "bold" }}>
               CrewAI
          </a>
          </>
        ]
      },
      {
        title: "RAG",
        text: ['A técnica de Retrieval-Augmented Generation (RAG) representa um avanço importante na inteligência artificial ao combinar modelos de linguagem com mecanismos de recuperação de informações relevantes a partir de grandes bases de dados. Essa abordagem permite que os agentes não apenas gerem respostas baseadas no que "sabem" internamente, mas também consultem dados externos atualizados e específicos, ampliando sua capacidade de oferecer respostas precisas e contextualizadas.',

        "Nesta seção, disponibilizamos links para cursos da NVIDIA que exploram os fundamentos e aplicações práticas do RAG, proporcionando uma base sólida para quem deseja entender como integrar essa técnica em projetos de IA avançada. Os conteúdos são ideais para quem quer aprofundar o conhecimento e aplicar RAG em desafios reais, incluindo os do hackathon.",
        
        <>
            <a href="https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-15+V1" target="_blank" rel="noopener noreferrer" style={{color: "#3161E8", textDecoration: "none", fontWeight: "bold" }}>
               Building RAG Agents with LLMs
            </a>.
            
        </>,

        <>
            <a href="https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-16+V1" target="_blank" rel="noopener noreferrer" style={{color: "#3161E8", textDecoration: "none", fontWeight: "bold" }}>
               Augment your LLM Using Retrieval Augmented Generation
            </a>.
            
        </>
        ]
      },
    ],
  },
  /*{
    id: "fundamentos-ml",
    menuTitle: "Em Breve",
    chapterTitle: "Em Breve",
    author: "",
    description1:
      "Aqui você encontrará acesso a todos os materiais do programa: webinars, trilhas de estudo e guias práticos. Estamos finalizando os últimos detalhes para oferecer a melhor experiência possível — volte em breve para conferir!",
    videoAvailable: false,
    description2: "",
    subsections: [],
  },*/
  // Adicione mais capítulos aqui conforme necessário
];

const remToPx = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

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
  const location = useLocation();
  const MateriaisRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
  const scrollToId = location.state?.scrollTo;
  if (scrollToId) {
    const element = document.getElementById(scrollToId);
    if (element) {
      const remOffset = 5; // exemplo: 5rem
      const headerOffset = remToPx(remOffset);
       // ajuste conforme a altura real do seu menu
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
}, [location]);
  

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

  const getSectionIndex = (title: string): number => {
    if (title === "Webinar de Rapids") return 1;
    if (title === "RAG") return 2;
    if (title === "Material CrewAI") return 3;
    return 0;
  };

  return (
    <>
      <Header />
      <PageContainer>
        <HighlightSection>
          <HighlightTextWrapper>
            <HighlightTitleGroup>
              <HighlightPreamble>AQUECIMENTO!</HighlightPreamble>
              <HighlightTitle>
                SUA PREPARAÇÃO PARA CHEGAR COM CONFIANÇA.
              </HighlightTitle>
            </HighlightTitleGroup>
            <HighlightDescription>
              Antes do hackathon começar, você tem acesso a uma seleção de
              materiais exclusivos — webinars, trilhas de estudo e guias
              práticos — desenvolvidos com o apoio de grandes empresas.
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
                  {chapter.subsections?.map((sub, subIndex) => {
                    const isTarget =
                      sub.title === "Webinar de Rapids" ||
                      sub.title === "RAG" ||
                      sub.title === "Material CrewAI";

                    return (
                      <ChapterSubtitleSection
                        key={subIndex}
                        id={isTarget ? `scroll-material-${getSectionIndex(sub.title)}` : undefined}
                      >
                        <ChapterSubtitleTitle>{sub.title}</ChapterSubtitleTitle>
                        {sub.text?.map((subText, textIndex) => (
                          <ChapterSubParagraph key={textIndex}>{subText}</ChapterSubParagraph>
                        ))}
                      </ChapterSubtitleSection>
                    );
                  })}
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

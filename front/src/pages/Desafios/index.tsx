import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  DesafiosPageContainer,
  DesafiosIntroContainer,
  HighlightTextWrapper,
  TitleGroup,
  IntroSubtitle,
  IntroTitle,
  IntroDescription,
  DesafiosBodyContainer,
  PreDivisionText,
  DesafiosBodyPrincipalContainer,
  MenuContainer,
  MenuText,
  ConteudoDesafiosContainer,
  ChallengeItemContainer,
  ChallengeTitleGroup,
  ChallengeAuthor,
  ChallengeMainTitle,
  ChallengeParagraph,
  ImagemWrapper,
  ChallengeMediaLayout,
  TextNextToMedia,
  PontoDesafio,
  PreDivisionContainer,
  Section,
} from "./style";
import { useLocation } from "react-router-dom";

import Img_predicao_faltas from "../../assets/imagem desafio - Modelo Preditivo para Faltas em Consultas.png";
import Img_desafio_regulacao_IA_RAG from "../../assets/imagem desafio - Automatizando a Regulação com IA e RAG.png";
import Img_desafio_triagem_automatica from "../../assets/imagem desafio - Protótipo de Triagem Automática com IA para Regulação em Saúde.png";

const cardData = [
  { id: 1, image: Img_predicao_faltas },
  { id: 2, image: Img_desafio_regulacao_IA_RAG },
  { id: 3, image: Img_desafio_triagem_automatica },
];

// Seus dados mockados (mantidos como no seu exemplo)
const desafios_menu = [
  "Análise Preditiva e Gestão de Recursos em Saúde",
  "RAG e Diálogo com Dados em Linguagem Natural",
  "Explorando Desafios Emergentes",
  // ... (restante dos itens do menu)
];

const desafios_explicados = [
  {
    image: Img_predicao_faltas,
    id: "predicao-faltas",
    titulo: "Desafio 1 – Análise Preditiva e Gestão de Recursos em Saúde",
    sugerido_por: "",
    descricao: [
      "O sistema de saúde pública enfrenta desafios contínuos de alocação eficiente de recursos, superlotação e longas filas de espera. A análise preditiva é uma ferramenta poderosa para ajudar a antecipar demandas e melhorar a gestão.",
      // Este segundo parágrafo só será usado se textoAoLadoDaImagem não existir e imagem for true
      // Ou se imagem for false, ele será o segundo parágrafo normal.
      "Os participantes serão desafiados a construir modelos preditivos a partir de dados históricos de atendimentos e faltas (no-shows), com foco nas seguintes áreas:",
      "● Previsão de no-show: Desenvolver modelos que identifiquem padrões de absenteísmo, ajudando na reprogramação de atendimentos e alocação eficiente de recursos.",
      "● Previsão de superlotação: Criar sistemas que prevejam sobrecargas nas unidades de saúde, possibilitando a gestão proativa de filas e o encaminhamento adequado dos pacientes",
      "● Identificação de sobrecarga de equipamentos e profissionais: Detectar equipamentos e profissionais com alta demanda, para otimizar a alocação de recursos e evitar o desgaste",
      "● Segmentação de perfis de pacientes: Analisar dados para identificar grupos de risco com maior probabilidade de faltar ao atendimento ou de necessitar de atenção especial.",
      "● Simulação de cenários: Testar diferentes políticas e estratégias de alocação de recursos, como ampliação de horários ou redistribuição de profissionais, para avaliar os impactos na gestão de filas e na qualidade do atendimento.",
      "● Detecção de anomalias: Identificar comportamentos fora do padrão, como subutilização de recursos ou problemas pontuais em determinadas regiões ou unidades.",
      "Este desafio visa fornecer ferramentas para uma gestão mais inteligente e eficaz dos recursos de saúde, reduzindo custos e melhorando a qualidade do atendimento.",
    ],
    imagem: false,
    textoAoLadoDaImagem: "hihihi ha",
  },
  {
    image: Img_desafio_regulacao_IA_RAG,
    id: "desafio-regulacao-IA-RAG",
    titulo: "Desafio 2 – RAG e Diálogo com Dados em Linguagem Natural",
    sugerido_por: "",
    descricao: [
      "O grande volume de dados gerados pelo sistema de saúde só é útil quando transformado em insights acionáveis. Este desafio convida os participantes a desenvolver soluções que utilizem RAG (Retrieval-Augmented Generation) e interfaces de linguagem natural para facilitar a interação com os dados e gerar informações valiosas.",
      "Os participantes deverão criar sistemas que permitam:",
      "● Geração automática de insights: Desenvolver algoritmos capazes de extrair padrões e informações relevantes dos dados brutos, oferecendo recomendações para gestores e profissionais de saúde.",
      "● Consultas em linguagem natural: Construir interfaces que permitam que usuários façam perguntas em linguagem simples e obtenham respostas precisas a partir dos dados de saúde disponíveis.",
      "● Interfaces de diálogo e análise: Criar plataformas conversacionais e visuais que democratizem o acesso a análises avançadas, facilitando a interação dos gestores e profissionais de saúde com os dados.",
      "● Multimodalidade de dados: Integrar dados estruturados e não estruturados, como registros clínicos e relatórios administrativos, para fornecer uma análise completa.",
      "● Suporte à decisão clínica e gerencial: Desenvolver sistemas que ajudem na tomada de decisões, combinando dados históricos com políticas públicas e evidências científicas.",
      "● Explicabilidade e transparência: Garantir que os modelos gerem respostas explicáveis e que os usuários possam entender os critérios utilizados para a geração dos insights.",
      "● Acessibilidade e usabilidade: Construir interfaces inclusivas e de fácil uso, capazes de atender a diversos perfis de usuários, desde gestores a cidadãos comuns.",
      "● Segurança e ética nos dados: Aplicar boas práticas de anonimização e controle de acesso, assegurando que os dados sensíveis sejam protegidos e utilizados de forma ética.",
      "Este desafio busca transformar os dados em recursos acessíveis e acionáveis para todos os envolvidos na gestão da saúde pública.",
    ],
    imagem: false,
    textoAoLadoDaImagem:
      "Aqui você encontrará a descrição completa deste desafio. Estamos preparando tudo para garantir uma experiência incrível — volte em breve para conferir!",
  },
  {
    image: Img_desafio_triagem_automatica,
    id: "desafio-triagem-automatica",
    titulo: "Explorando Desafios Emergentes",
    sugerido_por: "",
    descricao: [
      "Além dos desafios propostos, incentivamos os participantes a explorar um Data Lake de Saúde, identificar padrões ocultos e propor soluções para problemas latentes que não foram explicitamente mencionados nos desafios. O hackathon é um espaço para inovação aberta, onde a criatividade, aliada aos dados, pode revelar novas oportunidades para transformar a saúde pública.",
    ],
    imagem: false,
    textoAoLadoDaImagem: "",
  },
  // ... mais desafios
];

interface ScrollTrackerProps {
  challengesRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ScrollTracker: React.FC<ScrollTrackerProps> = ({
  challengesRefs,
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

    challengesRefs.current.forEach((ref, index) => {
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
  }, [scrollY, challengesRefs, setActiveIndex]);

  return null;
};

const Desafios = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        // scroll suave
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (location.state?.scrollTarget === "top") {
      // Scrolla até o topo da página
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  const challengesRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    // ... (lógica do handleClick - sem alterações)
    const sectionRef = challengesRefs.current[index];
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

  const menuData = desafios_explicados.map((desafio, index) => ({
    id: desafio.id || `desafio-${index}`,
    title: desafios_menu[index] || desafio.titulo,
  }));

  return (
    <>
      <Header />
      <DesafiosPageContainer>
        <DesafiosIntroContainer>
          <HighlightTextWrapper>
            <TitleGroup>
              <IntroSubtitle>BORA RESOLVER PROBLEMAS DE VERDADE?</IntroSubtitle>
              <IntroTitle>
                ENCARANDO O QUE IMPORTA, CRIANDO O QUE TRANSFORMA.
              </IntroTitle>
            </TitleGroup>

            <IntroDescription>
              Durante o evento, você pode encarar desafios reais de empresas
              parceiras ou até propor o seu próprio. Lembrando que as ideias não
              param no evento – os projetos serão publicados em código aberto
              (open source) e poderão seguir ganhando vida!
            </IntroDescription>
          </HighlightTextWrapper>
        </DesafiosIntroContainer>

        <DesafiosBodyContainer>
          <PreDivisionContainer>
            <PreDivisionText style={{ textAlign: "left" }}>
              Neste hackathon, os participantes terão acesso a um Data Lake de
              Saúde, um vasto repositório de dados sobre atendimentos, unidades,
              profissionais e equipamentos do SUS, além de contar com o poder de
              processamento do supercomputador Santos Dumont, um dos mais
              avançados da América Latina. Os desafios apresentados visam
              utilizar a inteligência artificial para otimizar a gestão de
              recursos e transformar dados brutos em insights valiosos para a
              saúde pública.
            </PreDivisionText>

            <PreDivisionText style={{ textAlign: "left" }}>
              Abaixo, reunimos todas as sugestões disponíveis para inspirar sua
              jornada. Explore, escolha o que mais te motiva e venha construir
              soluções com a gente.
            </PreDivisionText>
          </PreDivisionContainer>

          <DesafiosBodyPrincipalContainer>
            <MenuContainer>
              {menuData.map((item, index) => (
                <MenuText
                  key={item.id}
                  $active={activeIndex === index}
                  onClick={() => handleClick(index)}
                >
                  {item.title}
                </MenuText>
              ))}
            </MenuContainer>

            <ConteudoDesafiosContainer>
              {desafios_explicados.map((info, index) => (
                <Section
                  id={`scroll-desafio-${index}`}
                  key={`section-${index}`}
                >
                  <ChallengeItemContainer
                    key={info.id || index}
                    id={info.id || `desafio-${index}`}
                    ref={(el) => (challengesRefs.current[index] = el)}
                  >
                    <ChallengeTitleGroup>
                      <ChallengeAuthor>{info.sugerido_por}</ChallengeAuthor>
                      <ChallengeMainTitle>{info.titulo}</ChallengeMainTitle>
                    </ChallengeTitleGroup>

                    {/* PARTE CORRIGIDA ABAIXO */}
                    {/* Renderiza o primeiro parágrafo da descrição, se existir */}
                    {Array.isArray(info.descricao) && info.descricao[0] && (
                      <ChallengeParagraph>
                        {info.descricao[0]}
                      </ChallengeParagraph>
                    )}

                    {/* Se for um desafio com imagem, renderiza o layout de mídia */}
                    {info.imagem && (
                      <ChallengeMediaLayout>
                        <ImagemWrapper>
                          <img
                            src={info.image}
                            alt={`Imagem para ${info.titulo}`}
                          />
                        </ImagemWrapper>
                        {/* Renderiza o textoAoLadoDaImagem se existir */}
                        {info.textoAoLadoDaImagem && (
                          <TextNextToMedia>
                            <ChallengeParagraph>
                              {info.textoAoLadoDaImagem}
                            </ChallengeParagraph>
                          </TextNextToMedia>
                        )}
                      </ChallengeMediaLayout>
                    )}

                    {/* Se NÃO for um desafio com imagem, renderiza o restante da descrição (se houver) */}
                    {!info.imagem &&
                      Array.isArray(info.descricao) &&
                      info.descricao.length > 1 &&
                      info.descricao
                        .slice(info.imagem ? 1 : 1)
                        .map((paragrafo, idx) => {
                          if (
                            typeof paragrafo === "string" &&
                            paragrafo.trim().startsWith("●")
                          ) {
                            const textoLimpo = paragrafo.replace(/^●\s*/, "");
                            return (
                              <PontoDesafio
                                key={`list-${index}-${idx}`}
                                texto={textoLimpo}
                              />
                            );
                          }

                          return (
                            <ChallengeParagraph key={`para-${index}-${idx}`}>
                              {paragrafo}
                            </ChallengeParagraph>
                          );
                        })}
                    {/* Se a descrição não for um array e não tiver imagem */}
                    {!info.imagem &&
                      !Array.isArray(info.descricao) &&
                      typeof info.descricao === "string" && (
                        <ChallengeParagraph>
                          {info.descricao}
                        </ChallengeParagraph>
                      )}

                    {/* Renderiza o segundo parágrafo (ou mais) se for item com imagem e não usou textoAoLadoDaImagem para o segundo parágrafo */}
                    {info.imagem &&
                      Array.isArray(info.descricao) &&
                      info.descricao[1] &&
                      !info.textoAoLadoDaImagem && (
                        <ChallengeParagraph>
                          {info.descricao[1]}
                        </ChallengeParagraph>
                      )}
                    {/* E assim por diante para info.descricao[2], etc., se necessário */}
                  </ChallengeItemContainer>
                </Section>
              ))}
            </ConteudoDesafiosContainer>
            <ScrollTracker
              challengesRefs={challengesRefs}
              setActiveIndex={setActiveIndex}
            />
          </DesafiosBodyPrincipalContainer>
        </DesafiosBodyContainer>
      </DesafiosPageContainer>
      <Footer />
    </>
  );
};

export default Desafios;

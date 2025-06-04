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
} from "./style";

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
  "Em Breve",
  "Em Breve",
  "Em Breve",
  // ... (restante dos itens do menu)
];

const desafios_explicados = [
  {
    image: Img_predicao_faltas,
    id: "predicao-faltas",
    titulo: "Em Breve",
    sugerido_por: "",
    descricao: [
      "Aqui você encontrará a descrição completa deste desafio. Estamos preparando tudo para garantir uma experiência incrível — volte em breve para conferir!",
      // Este segundo parágrafo só será usado se textoAoLadoDaImagem não existir e imagem for true
      // Ou se imagem for false, ele será o segundo parágrafo normal.
      "",
    ],
    imagem: false,
    textoAoLadoDaImagem:
      "",
  },
  {
    image: Img_desafio_regulacao_IA_RAG,
    id: "desafio-regulacao-IA-RAG",
    titulo: "Em Breve",
    sugerido_por: "",
    descricao: [
      "Aqui você encontrará a descrição completa deste desafio. Estamos preparando tudo para garantir uma experiência incrível — volte em breve para conferir!",
    ],
    imagem: false,
    textoAoLadoDaImagem:
      "Aqui você encontrará a descrição completa deste desafio. Estamos preparando tudo para garantir uma experiência incrível — volte em breve para conferir!",
  },
  {
    image: Img_desafio_triagem_automatica,
    id: "desafio-triagem-automatica",
    titulo: "Em Breve",
    sugerido_por: "",
    descricao: [
      "Aqui você encontrará a descrição completa deste desafio. Estamos preparando tudo para garantir uma experiência incrível — volte em breve para conferir!",
    ],
    imagem: false,
    textoAoLadoDaImagem:
      "",
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
          <PreDivisionText style={{ textAlign: "left" }}>
            Abaixo, reunimos todas as sugestões disponíveis para inspirar sua
            jornada. Explore, escolha o que mais te motiva e venha construir
            soluções com a gente.
          </PreDivisionText>

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
                    <ChallengeParagraph>{info.descricao[0]}</ChallengeParagraph>
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
                    Array.isArray(info.descricao) && info.descricao.length <1 &&
                    info.descricao.slice(info.imagem ? 1 : 0).map(
                      (
                        paragrafo,
                        idx, // Se não tem imagem, começa do 0, se tem imagem e já renderizou o [0], começaria do 1.
                      ) => (
                        // Simplificando: se não tem imagem, renderiza todos. Se tem imagem, o [0] já foi renderizado acima.
                        // A lógica acima já renderiza info.descricao[0] se info.imagem for true.
                        // Então, se não for imagem, precisa renderizar todos. Se for imagem, renderiza o resto (a partir do [1]).
                        <ChallengeParagraph key={`para-${index}-${idx}`}>
                          {paragrafo}
                        </ChallengeParagraph>
                      ),
                    )}
                  {/* Se a descrição não for um array e não tiver imagem */}
                  {!info.imagem &&
                    !Array.isArray(info.descricao) &&
                    typeof info.descricao === "string" && (
                      <ChallengeParagraph>{info.descricao}</ChallengeParagraph>
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

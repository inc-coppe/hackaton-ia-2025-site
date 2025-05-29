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

// Seus dados mockados (mantidos como no seu exemplo)
const desafios_menu = [
  "Otimização de Rotas de Entrega com IA",
  "Detecção Precoce de Doenças em Plantas",
  "Chatbot Inteligente para Suporte ao Cliente",
  // ... (restante dos itens do menu)
];

const desafios_explicados = [
  {
    id: "desafio-rotas",
    titulo: "Otimização de Rotas de Entrega com IA",
    sugerido_por: "LOGÍSTICA BRASIL S.A.",
    descricao: [
      "Desenvolver um sistema que utilize inteligência artificial para otimizar as rotas de uma frota de veículos de entrega, considerando variáveis como tráfego em tempo real, janelas de entrega, capacidade dos veículos e custos operacionais. O objetivo é reduzir o tempo total de percurso, o consumo de combustível e as emissões de CO2, aumentando a eficiência e a satisfação do cliente.",
      // Este segundo parágrafo só será usado se textoAoLadoDaImagem não existir e imagem for true
      // Ou se imagem for false, ele será o segundo parágrafo normal.
      "A solução deve apresentar uma interface clara para o gestor da frota e, idealmente, fornecer feedback em tempo real para os motoristas.",
    ],
    imagem: true,
    textoAoLadoDaImagem:
      "A plataforma deverá permitir o cadastro de novos pontos de entrega e a reconfiguração dinâmica das rotas em caso de imprevistos, como acidentes ou bloqueios de vias. A escalabilidade para um grande número de veículos e entregas é um diferencial importante.",
  },
  {
    id: "desafio-plantas",
    titulo: "Detecção Precoce de Doenças em Plantas",
    sugerido_por: "AGROTECH SOLUTIONS",
    descricao: [
      "Criar uma solução baseada em IA, preferencialmente utilizando visão computacional, para identificar sinais precoces de doenças e pragas em plantações agrícolas a partir de imagens capturadas por drones ou smartphones. O sistema deve classificar o tipo de problema e, se possível, indicar o nível de infestação, auxiliando agricultores na tomada de decisão rápida para tratamento e minimização de perdas.",
      "Considerar a variação de iluminação, tipos de cultura e a qualidade das imagens como desafios a serem superados. A interface deve ser intuitiva para usuários com pouca familiaridade tecnológica.",
    ],
    imagem: false,
  },
  {
    id: "desafio-chatbot",
    titulo: "Chatbot Inteligente para Suporte",
    sugerido_por: "CLIENT CARE INC.",
    descricao: [
      "Desenvolver um chatbot avançado para atendimento ao cliente, capaz de compreender linguagem natural, resolver problemas comuns e escalar para atendentes humanos de forma eficiente quando necessário.",
      "O chatbot deve aprender com interações passadas e ser personalizável para diferentes segmentos de negócio.",
    ],
    imagem: false,
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
                          src={`https://picsum.photos/506/270`}
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

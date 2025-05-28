import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ChallengesContainer,
  ChallengesSubTitle,
  ChallengesTitle,
  ConteudoDesafiosContainer,
  DesafiosBodyContainer,
  DesafiosBodyPrincipalContainer,
  DesafiosIntroContainer,
  MenuContainer,
  MenuText,
  Paragraph,
  PreDivisionText,
  Title,
  Titulo_info,
  SubTitle,
} from "./style";
import { useEffect, useState, useRef } from "react";
import { TitleBody } from "../Cronograma/style";

const desafios_menu = [
  "Título de um desafio",
  "Título maior de um desafio",
  "Título de um desafio",
  "Título de um desafio",
  "Título maior de um desafio",
  "Título maior de um desafio",
  "Título de um desafio",
  "Título de um desafio",
  "Título de um desafio",
  "Título de um desafio",
  "Título de um desafio",
  "Título de um desafio",
  "Título maior grande de um desafio",
  "Título de um desafio",
  "Título de um desafio",
];

const desafios_explicados = [
  {
    titulo: "_TÍTULO DO DESAFIO",
    sugerido_por: "NOME DE QUEM SUGERIU O DESAFIO",
    descricao: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },

  {
    titulo: "_TÍTULO DO DESAFIO",
    sugerido_por: "NOME DE QUEM SUGERIU O DESAFIO",
    descricao: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    titulo: "_TÍTULO DO DESAFIO",
    sugerido_por: "NOME DE QUEM SUGERIU O DESAFIO",
    descricao: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    titulo: "_TÍTULO DO DESAFIO",
    sugerido_por: "NOME DE QUEM SUGERIU O DESAFIO",
    descricao: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    titulo: "_TÍTULO DO DESAFIO",
    sugerido_por: "NOME DE QUEM SUGERIU O DESAFIO",
    descricao: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    titulo: "_TÍTULO DO DESAFIO",
    sugerido_por: "NOME DE QUEM SUGERIU O DESAFIO",
    descricao: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    titulo: "_TÍTULO DO DESAFIO",
    sugerido_por: "NOME DE QUEM SUGERIU O DESAFIO",
    descricao: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    titulo: "_TÍTULO DO DESAFIO",
    sugerido_por: "NOME DE QUEM SUGERIU O DESAFIO",
    descricao: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
];

interface ScrollTrackerProps {
  challengesRefs: React.RefObject<HTMLElement[]>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ScrollTracker: React.FC<ScrollTrackerProps> = ({ challengesRefs, setActiveIndex }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // limpeza
    };
  }, []);

  useEffect(() => {
    let index = 0;

    for (let i = 0; i < challengesRefs.current.length; i++) {
      const elTop = challengesRefs.current[i]?.offsetTop || 0;

      if (scrollY >= elTop - 150) { 
        index = i;
      } else {
        break;
      }
    }

    setActiveIndex(index);
  }, [scrollY, challengesRefs, setActiveIndex]);


  return null;
};


function handleClick(index: number, refs: (HTMLElement | null)[]) {
  const sectionRef = refs[index];
  const offset = 70; // para deixar um pouco antes de onde de fato está sendo marcado o começo da sessão.
  
  if (sectionRef) {
    const elementTop = sectionRef.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementTop - offset,
      behavior: 'smooth',
    });
  }
}

const Desafios = () => {
  const challengesRefs = useRef<HTMLElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Header />
      <DesafiosIntroContainer>
        <SubTitle>Bora resolver problemas de verdade?</SubTitle>

        <Title>Encarando o que importa, criando o que transforma.</Title>

        <TitleBody>
          Durante o evento, você pode encarar desafios reais de empresas parceiras ou até propor o seu próprio. Lembrando que as ideias não param no evento – os projetos serão publicados em código aberto (open source) e poderão seguir ganhando vida!
        </TitleBody>
      </DesafiosIntroContainer>

      <DesafiosBodyContainer>
        <PreDivisionText>
          Abaixo, reunimos todas as sugestões disponíveis para inspirar sua
          jornada. Explore, escolha o que mais te motiva e venha construir
          soluções com a gente.
        </PreDivisionText>

        <DesafiosBodyPrincipalContainer>
          <MenuContainer>
            {desafios_menu.map((desafio, index) => (
              <MenuText
                key={index}
                className={activeIndex === index ? "active" : ""}
              >
                <span onClick={() => handleClick(index, challengesRefs.current)}>{desafio}</span>
              </MenuText>
            ))}
          </MenuContainer>

          <ConteudoDesafiosContainer>
            {desafios_explicados.map((info, index) => (
              <ChallengesContainer key={index}
              ref={(el) => {
                if (el) challengesRefs.current[index] = el;
              }}>
              
                <Titulo_info>
                  <ChallengesSubTitle>{info.sugerido_por}</ChallengesSubTitle>

                  <ChallengesTitle>{info.titulo}</ChallengesTitle>
                </Titulo_info>

                {Array.isArray(info.descricao) ? (
                  info.descricao.map((paragrafo, idx) => (
                    <Paragraph key={idx}>{paragrafo} </Paragraph>
                  ))
                ) : (
                  <Paragraph>{info.descricao} </Paragraph>
                )}
              </ChallengesContainer>
            ))}
            
          </ConteudoDesafiosContainer>

          <ScrollTracker challengesRefs={challengesRefs} setActiveIndex={setActiveIndex}/>
        
        </DesafiosBodyPrincipalContainer>
      </DesafiosBodyContainer>
      <Footer />
    </>
  );
};

export default Desafios;


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
} from "./style";
import { useEffect, useState } from "react";
import { SubTitle, TitleBody } from "../Cronograma/style";

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

let activeIndex = 0;

const ScrollTracker = () => {
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

  let index = 0;
  for (let i = 0; i < pre_desafios.length; i++) {
    if (scrollY / 16 >= pre_desafios[i] / 16) {
      index = i;
    } else {
      break; // otimização: parou quando passou do valor
    }
  }

  activeIndex = index;

  return;
};

const pos_desafios = [500, 929, 1354, 1775, 2211, 2637, 3057, 3457];
const pre_desafios = [500, 800, 1200, 1600, 2000, 2400, 2900, 3300];

function handleClick(rem_destino: number) {
  rem_destino = pos_desafios[rem_destino] / 16;
  const remInPx = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  window.scrollTo({
    top: rem_destino * remInPx,
    behavior: "smooth",
  });
}

const Desafios = () => {
  return (
    <>
      <Header />
      <DesafiosIntroContainer>
        <SubTitle>Bora resolver problemas de verdade?</SubTitle>

        <Title>Encarando o que importa, criando o que transforma.</Title>

        <TitleBody>
          Durante o evento, você pode encarar desafios reais de empresas
          parceiras ou até propor o seu próprio.
        </TitleBody>
      </DesafiosIntroContainer>
      {ScrollTracker()}

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
                <span onClick={() => handleClick(index)}>{desafio}</span>
              </MenuText>
            ))}
          </MenuContainer>

          <ConteudoDesafiosContainer>
            {desafios_explicados.map((info, index) => (
              <ChallengesContainer key={index}>
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
            ;
          </ConteudoDesafiosContainer>
        </DesafiosBodyPrincipalContainer>
      </DesafiosBodyContainer>
      <Footer />
    </>
  );
};

export default Desafios;


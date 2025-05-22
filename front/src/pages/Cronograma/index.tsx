import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  PreDivisionText,
  Circle,
  CronogramaBodyContainer,
  CronogramaDayContainer,
  CronogramaTitle,
  DataLugarText,
  EventoBody,
  EventoContainer,
  EventoTitle,
} from "./style";
import { CronogramaIntroContainer } from "./style";
import { SubTitle } from "./style";
import { TitleBody } from "./style";
import { Title } from "./style";

const eventos_pre = [
  {
    dataLugar: "DD/MM A DD/MM • [LUGAR]",
    titulo: "Webinars Preparatórios",
    descricao: "Um pequeno texto explicativo sobre os webinars...",
  },
  {
    dataLugar: "",
    titulo: "Se houver outro tópico para a mesma data e hora",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "DD/MM E DD/MM ÀS 19H • DISCORD",
    titulo: "Workshops Técnicos com a NVIDIA",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "DD/MM ÀS 19H • DISCORD",
    titulo: "Orientações Gerais sobre a Dinâmica do Hackathon",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "DD/MM ÀS 19H • DISCORD",
    titulo: "Apresentação dos Desafios",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "DD/MM ÀS 19H • DISCORD",
    titulo: "Sessões de Q&A",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const eventos_sab = [
  {
    dataLugar: "09H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Evento Oficial de Abertura",
    descricao: "Abertura oficial, com sessão de disseminação de conhecimento.",
  },
  {
    dataLugar: "",
    titulo: "Networking e Formação de Equipes",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "10H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Início da Fase de Ideação",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "12H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Almoço",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "14H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Criação de MVP",
    descricao:
      "Momento reservado para discussões de abordagens e estratégias com mentores especializados.Participação especial dos mentores Nome do Mentor (Parceria) e Nome do Mentor (Parceria) que ficaram à disposição pelo espaço para atender às equipes.",
  },
  {
    dataLugar: "17H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Snacks",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "18H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Sessões de Mentoria",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const eventos_dom = [
  {
    dataLugar: "09H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Evento Oficial de Abertura",
    descricao: "Abertura oficial, com sessão de disseminação de conhecimento.",
  },
  {
    dataLugar: "",
    titulo: "Networking e Formação de Equipes",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "10H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Início da Fase de Ideação",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "12H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Almoço",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "14H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Criação de MVP",
    descricao:
      "Momento reservado para discussões de abordagens e estratégias com mentores especializados. Participação especial dos mentores Nome do Mentor (Parceria) e Nome do Mentor (Parceria) que ficaram à disposição pelo espaço para atender às equipes.",
  },
  {
    dataLugar: "17H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Snacks",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    dataLugar: "18H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "Sessões de Mentoria",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const Cronograma = () => {
  return (
    <>
      <Header />
      <CronogramaIntroContainer>
        <SubTitle>cada etapa importa:</SubTitle>

        <Title>prepare-se para cada momento.</Title>

        <TitleBody>
          Aqui você encontra tudo o que precisa para se organizar durante o
          evento. Do aquecimento à entrega, cada fase foi pensada para te ajudar
          a criar, colaborar e brilhar com sua solução.
        </TitleBody>
      </CronogramaIntroContainer>
      <CronogramaBodyContainer>
        <PreDivisionText>
          Confira a agenda e já vai se preparando para aproveitar cada passo
          dessa experiência.
        </PreDivisionText>

        <CronogramaTitle>/Pré-evento</CronogramaTitle>

        <CronogramaDayContainer>
          {eventos_pre.map((evento, index) => (
            <EventoContainer key={index}>
              <DataLugarText>{evento.dataLugar}</DataLugarText>

              <EventoTitle>
                <Circle />
                {evento.titulo}
              </EventoTitle>

              <EventoBody>{evento.descricao}</EventoBody>
            </EventoContainer>
          ))}
        </CronogramaDayContainer>

        <CronogramaTitle>/sábado, 20/09</CronogramaTitle>

        <CronogramaDayContainer>
          {eventos_sab.map((evento, index) => (
            <EventoContainer key={index}>
              <DataLugarText>{evento.dataLugar}</DataLugarText>

              <EventoTitle>
                <Circle />
                {evento.titulo}
              </EventoTitle>

              <EventoBody>{evento.descricao}</EventoBody>
            </EventoContainer>
          ))}
        </CronogramaDayContainer>

        <CronogramaTitle>/domingo, 21/09</CronogramaTitle>

        <CronogramaDayContainer>
          {eventos_dom.map((evento, index) => (
            <EventoContainer key={index}>
              <DataLugarText>{evento.dataLugar}</DataLugarText>

              <EventoTitle>
                <Circle />
                {evento.titulo}
              </EventoTitle>

              <EventoBody>{evento.descricao}</EventoBody>
            </EventoContainer>
          ))}
        </CronogramaDayContainer>
      </CronogramaBodyContainer>
      <Footer />
    </>
  );
};

export default Cronograma;


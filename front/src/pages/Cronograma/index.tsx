import HeaderPerfil from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
  InfoBodyContainer,
} from "./style";
import { CronogramaIntroContainer } from "./style";
import { SubTitle } from "./style";
import { TitleBody } from "./style";
import { Title } from "./style";

const eventos_pre = [
  {
    dataLugar: "Mês anterior • Online",
    titulo: "_Treinamento",
    descricao:
      "Treinamento online da NVIDIA para todos os inscritos, com webinars sobre Rapids e Agentic AI, materiais gravados e conteúdos complementares. Os participantes terão acesso ao Discord para suporte e troca de experiências, e receberão certificado de conclusão.",
  },
  {
    dataLugar: "",
    titulo: "_Seleção de candidatos",
    descricao: "Com base nos critérios definidos no regulamento.",
  },
  {
    dataLugar: "",
    titulo: "_Escolha da trilha",
    descricao:
      "Realizada pelos candidatos de forma a selecionarem os desafios que irão resolver. Neste momento, os inscritos também escolhem a trilha temática que desejam seguir no Hackathon.",
  },
  {
    dataLugar: "",
    titulo: "_Curso preparatório",
    descricao:
      "Curso obrigatório de introdução ao Santos Dumont oferecido pelo LNCC. ",
  },
];

const eventos_sex = [
  {
    dataLugar: "17:00 - 18:00 • PORTO MARAVALLEY (RJ)",
    titulo: "_Credenciamento e recepção.",
    descricao: "Recepção dos participantes e credenciamento no local do evento, com um momento inicial de integração e acolhimento.",
  },
  {
    dataLugar: "18:00 - 19:00",
    titulo: "_Abertura oficial",
    descricao:
      "Abertura oficial com representantes de instituições parceiras e apresentação dos objetivos e orientações iniciais sobre o Hackathon.",
  },
  
  {
    dataLugar: "19:00 - 20:00",
    titulo: "_Formação de equipes",
    descricao:
      "Dinâmica de integração entre os participantes e formação das equipes faltantes.",
  },

  {
    dataLugar: "20:00 - 21:00",
    titulo: "_Início das Atividades",
    descricao: "Encontro das equipes com apoio de mentores para condução de uma sessão de brainstorming e definição das primeiras ideias. Haverá um intervalo para coffee break durante a atividade.",
  },
];

const eventos_sab = [
  {
    dataLugar: "08:00 - 10:00 • PORTO MARAVALLEY (RJ)",
    titulo: "_Mentoria técnica",
    descricao:
      "Sessões de mentoria com especialistas em desafios de saúde e tecnologia para esclarecer dúvidas e orientar o desenvolvimento das soluções.",
  },
  {
    dataLugar: "08:00 - 12:00",
    titulo: "_Desenvolvimento",
    descricao: "Avanço no desenvolvimento das soluções com apoio contínuo dos mentores.",
  },
  {
    dataLugar: "12:00",
    titulo: "_Checkpoint de definição das ideias",
    descricao: "Este é o prazo limite para que as equipes definam as ideias principais das suas soluções, sendo um ponto de verificação da evolução do desenvolvimento.",
  },

  {
    dataLugar: "14:00 - 17:00",
    titulo: "_Desenvolvimento livre",
    descricao:
      "Período dedicado ao avanço livre no desenvolvimento das soluções.",
  },
  {
    dataLugar: "17:00",
    titulo: "_Checkpoint de programação",
    descricao: "Prazo limite para equipes apresentarem as ideias já postas em prática.",
  },

  {
    dataLugar: "17:30 - 18:30",
    titulo: "_Mentoria de pitch",
    descricao: "Workshop de pitch para capacitar os participantes a apresentarem suas soluções de maneira eficaz, seguido por sessões de mentoria de negócios.",
  },
];

const eventos_dom = [
  {
    dataLugar: "08:00 - 14:00 • PORTO MARAVALLEY (RJ)",
    titulo: "_Desenvolvimento e mentorias",
    descricao: "As equipes continuarão o desenvolvimento de suas soluções, com todas as mentorias disponíveis para tirar dúvidas pontuais.",
  },

  {
    dataLugar: "14:00",
    titulo: "_Checkpoint de apresentação",
    descricao: "Última oportunidade para revisão e validação das soluções antes da apresentação.",
  },

  {
    dataLugar: "15:45",
    titulo: "_Submissão das soluções",
    descricao: "Prazo limite para a submissão das soluções desenvolvidas pelas equipes. As apresentações finais ocorrerão logo após o encerramento da submissão.",
  },

  {
    dataLugar: "16:00 - 17:30",
    titulo: "_Apresentações",
    descricao:
      "Cada equipe fará uma apresentação de 5 minutos das soluções desenvolvidas. ",
  },
  {
    dataLugar: "17:30 - 18:00",
    titulo: "_Avaliação dos projetos",
    descricao: "Processo de avaliação das soluções apresentadas pela banca, considerando os critérios expostos no regulamento.",
  },
  {
    dataLugar: "18:00 - 19:00",
    titulo: "_Cerimônia de encerramento e premiação",
    descricao:
      "Encerramento oficial do evento e premiação das melhores soluções. ",
  },

];

const Cronograma = () => {
  const location = useLocation();

  useEffect(() => {
  
    if (location.state?.scrollTarget === "top") {
        // Scrolla até o topo da página
        window.scrollTo({ top: 0});
    }
  }, [location]);
  
  return (
    <>
      <HeaderPerfil />
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

              <InfoBodyContainer>
                <EventoTitle>
                  <Circle />
                  {evento.titulo}
                </EventoTitle>

                <EventoBody>{evento.descricao}</EventoBody>
              </InfoBodyContainer>
            </EventoContainer>
          ))}
        </CronogramaDayContainer>

        <CronogramaTitle>/sexta, 17/10</CronogramaTitle>

        <CronogramaDayContainer>
          {eventos_sex.map((evento, index) => (
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

        <CronogramaTitle>/sábado, 18/10</CronogramaTitle>

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

        <CronogramaTitle>/domingo, 19/10</CronogramaTitle>

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


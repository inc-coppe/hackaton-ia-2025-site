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
      "Treinamento online da NVIDIA para todos os inscritos com Webinar de Rapids, Webinar de Agentic AI e materiais gravados.",
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
      "Realizada pelos candidatos de forma a selecionarem os desafios que irão resolver. ",
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
    dataLugar: "PORTO MARAVALLEY (RJ)",
    titulo: "_Credenciamento e recepção.",
    descricao: "",
  },
  {
    dataLugar: "Tarde • PORTO MARAVALLEY (RJ)",
    titulo: "_Abertura oficial",
    descricao:
      "Apresentação inicial com principais parceiros e objetivos do evento.",
  },
  
  {
    dataLugar: "",
    titulo: "_Sessão de conhecimento",
    descricao:
      "Sessão de disseminação de conhecimento. ",
  },

  
  {
    dataLugar: "",
    titulo: "_Formação de equipes",
    descricao:
      "Organização de equipes multidisciplinares e espaço destinado para networking. ",
  },

  {
    dataLugar: "Noite • PORTO MARAVALLEY (RJ)",
    titulo: "_Ideação",
    descricao: "Primeiro encontro das equipes para dar início ao processo de ideação. ",
  },
];

const eventos_sab = [
  {
    dataLugar: "Manhã • PORTO MARAVALLEY (RJ)",
    titulo: "_Planejamento estratégico com mentoria",
    descricao:
      "Discussão de abordagens e estratégias com suporte de mentores especializados.",
  },
  {
    dataLugar: "",
    titulo: "_Desenvolvimento",
    descricao: "Avanço no desenvolvimento das soluções. ",
  },
  {
    dataLugar: "",
    titulo: "_Checkpoint",
    descricao: "Avaliação parcial do progresso das equipes, com feedback sobre os primeiros resultados. ",
  },

  {
    dataLugar: "Tarde • PORTO MARAVALLEY (RJ)",
    titulo: "_Mentorias de modelagem de negócios",
    descricao:
      "Sessões intensivas de mentoria para revisão e refinamento das soluções no que diz respeito à modelagem de negócios. ",
  },
  {
    dataLugar: "",
    titulo: "_Desenvolvimento",
    descricao: "Avanço no desenvolvimento técnico das soluções com IA. ",
  },

  {
    dataLugar: "Noite • PORTO MARAVALLEY (RJ)",
    titulo: "_Desenvolvimento",
    descricao: "Continuação do desenvolvimento das soluções. ",
  },
  {
    dataLugar: "",
    titulo: "_Checkpoint",
    descricao: "Avaliação parcial do progresso das equipes, com feedback sobre os primeiros resultados. ",
  },
];

const eventos_dom = [
  {
    dataLugar: "Manhã • PORTO MARAVALLEY (RJ)",
    titulo: "_Finalização técnica das soluções",
    descricao: "Últimos ajustes e finalização das soluções com IA.",
  },

  {
    dataLugar: "",
    titulo: "_Checkpoint",
    descricao: "Checkpoint final para revisão e validação das soluções antes da apresentação.",
  },


  {
    dataLugar: "Tarde • PORTO MARAVALLEY (RJ)",
    titulo: "_Apresentação",
    descricao:
      "Exposição das soluções para um painel de jurados composto por parceiros. ",
  },
  {
    dataLugar: "",
    titulo: "_Avaliação",
    descricao: "Processo de avaliação das soluções apresentadas pela banca, considerando os critérios expostos no regulamento.",
  },
  {
    dataLugar: "Noite • PORTO MARAVALLEY (RJ)",
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


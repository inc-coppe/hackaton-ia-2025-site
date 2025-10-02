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
    dataLugar: "Pré-evento • Online",
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
    dataLugar: "14:30 - 15:30 • PORTO MARAVALLEY (RJ)",
    titulo: "_Credenciamento e recepção.",
    descricao: "Os participantes serão recepcionados com um café e biscoitos enquanto fazem o credenciamento para o evento. Será fornecido um Welcome Coffee para a recepção. ",
  },
  {
    dataLugar: "16:00 - 17:30",
    titulo: "_Abertura oficial",
    descricao:
      "A cerimônia de abertura contará com a participação da Incubadora COPPE/UFRJ e de representantes de alguns de nossos parceiros, que compartilharão suas expectativas em relação ao evento. Também haverá um momento dedicado a orientações práticas sobre o uso das plataformas e os desafios que serão trabalhados ao longo do Hackathon.",
  },
  
  {
    dataLugar: "17:30",
    titulo: "_Coffee p/ patrocinadores",
    descricao:
      "",
  },

  {
    dataLugar: "17:30 - 18:30",
    titulo: "_Dinâmica de formação das equipes ",
    descricao: "Dinâmica de integração entre os participantes e formação das equipes faltantes. A ideia é separar os participantes em equipes (para os que não estão formados) e eles começarão a discutir os desafios. Será disponibilizado um coffee para os participantes. ",
  },

  {
    dataLugar: "18:30 - 20:00",
    titulo: "_Início das Atividades ",
    descricao: "Os participantes terão acesso ao link de entrada e serão guiados por mentores durante uma sessão de brainstorming, para gerar ideias iniciais para as soluções. Um coffee break estará disponível para os participantes que desejarem.",
  },
];

const eventos_sab = [
  {
    dataLugar: "08:00 - 12:00 • PORTO MARAVALLEY (RJ)",
    titulo: "_Mentoria Técnica e Desenvolvimento das Soluções",
    descricao:
      "Os participantes seguirão no desenvolvimento de suas soluções, contando com o apoio contínuo de mentores especializados em saúde e tecnologia para esclarecer dúvidas e orientar o progresso das equipes ao longo do Hackathon. Será servido um Welcome Coffee no início às 8hrs. Às 10hrs um lanche estará disponível um lanche para os participantes.",
  },
  {
    dataLugar: "12:00",
    titulo: "_Checkpoint de Definição de Ideias",
    descricao: "Este é o prazo limite para que as equipes definam as ideias principais das suas soluções, sendo um ponto de verificação da evolução do desenvolvimento.",
  },
  {
    dataLugar: "13:00",
    titulo: "_Almoço",
    descricao: "Período dedicado ao almoço dos participantes.",
  },

  {
    dataLugar: "14:00 - 18:00",
    titulo: "_Desenvolvimento livre",
    descricao:
      "Durante a tarde, as equipes têm total liberdade para continuar o desenvolvimento das suas soluções, com checkpoint de programação às 17:00, para monitoramento do progresso. Um coffee break será oferecido às 16:30 para os participantes.",
  },
  {
    dataLugar: "17:00",
    titulo: "_Checkpoint de Programação",
    descricao: "Prazo limite para equipes apresentarem as ideias já postas em prática.",
  },

  {
    dataLugar: "17:30 - 18:30",
    titulo: "_Mentoria de pitch",
    descricao: "Workshop de pitch para capacitar os participantes a apresentarem suas soluções de maneira eficaz, seguido por sessões de mentoria de negócios.",
  },

  {
    dataLugar: "18:30 - 20:00",
    titulo: "_Desenvolvimento Livre",
    descricao: "Durante o resto do dia, as equipes têm total liberdade para continuar o desenvolvimento das suas soluções.",
  },
];

const eventos_dom = [
  {
    dataLugar: "08:00 - 14:00 • PORTO MARAVALLEY (RJ)",
    titulo: "_Desenvolvimento livre",
    descricao: "As equipes continuarão o desenvolvimento de suas soluções. Será servido um Welcome Coffee no início às 8hrs. Um coffee break será oferecido às 10:00 para os participantes.",
  },

  {
    dataLugar: "13:00",
    titulo: "_Almoço",
    descricao: "Intervalo para o almoço.",
  },

  {
    dataLugar: "14:00",
    titulo: "_Checkpoint de Apresentação",
    descricao: "As equipes terão uma última oportunidade para revisar e finalizar suas apresentações.",
  },

  {
    dataLugar: "15:30",
    titulo: "_Submissão das Soluções",
    descricao:
      "Prazo limite para a submissão das soluções desenvolvidas pelas equipes. As apresentações finais ocorrerão logo após o encerramento da submissão. Serão entregues: Pitch, github e endpoint da(s) API(s). Enquanto a banca avaliadora irá assistir as apresentações, teremos profissionais verificando o funcionamento da parte de programação.",
  },

  {
    dataLugar: "16:00 - 17:30",
    titulo: "_Apresentações",
    descricao: "Cada equipe fará uma apresentação de 5 minutos das soluções desenvolvidas. O feedback será dado por meio de formulários/planilhas de avaliação. Um coffee break será fornecido enquanto isso.",
  },
  {
    dataLugar: "17:30 - 18:00",
    titulo: "_Avaliação dos projetos",
    descricao:
      "Durante a avaliação final, um mini lanche será disponibilizado aos avaliadores. ",
  },

  {
    dataLugar: "18:00 - 19:00",
    titulo: "_Cerimônia de Encerramento",
    descricao:
      "A cerimônia de encerramento incluirá a premiação das soluções vencedoras e o agradecimento a todos os participantes e colaboradores.",
  },

  {
    dataLugar: "19:00",
    titulo: "_Coffee Break Formal",
    descricao:
      "Após a cerimônia, será servido um coffee break formal para encerrar o evento.",
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

        <CronogramaTitle>/sexta, 10/10</CronogramaTitle>

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

        <CronogramaTitle>/sábado, 11/10</CronogramaTitle>

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

        <CronogramaTitle>/domingo, 12/10</CronogramaTitle>

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


import Header from "../../components/Header";
import HeaderPerfil from "../../components/HeaderPerfil";
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
  InfoBodyContainer,
} from "./style";
import { CronogramaIntroContainer } from "./style";
import { SubTitle } from "./style";
import { TitleBody } from "./style";
import { Title } from "./style";

const eventos_pre = [
  {
    dataLugar: "01/09 a 29/09 • Online",
    titulo: "_Treinamento NVIDIA",
    descricao: "Online para todos os inscritos lhes fornecendo uma base técnica sobre os desfios a serem solucionados.",
  },
  {
    dataLugar: "",
    titulo: "_Seleção de candidatos",
    descricao:
      "Baseada na análise de currículos e desempenho no treinamento. ",
  },
  {
    dataLugar: "",
    titulo: "_Escolha da trilha",
    descricao:
      "Pelos candidatos de forma a selecionarem os desafios que irão resolver. ",
  },
];

const eventos_sex = [
  {
    dataLugar: "16H00 às 17H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Credenciamento e recepção.",
    descricao: "",
  },
  {
    dataLugar: "18H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Abertura oficial",
    descricao: "Apresentação inicial com os principais parceiros do objetivo do evento.",
  },
  {
    dataLugar: "19H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Formação de equipes",
    descricao:
      "Organização de equipes multidisciplinares e espaço destinado para networking. ",
  },
  {
    dataLugar: "21H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Ideação",
    descricao:
      "Encontro das equipes para o começo do processo de ideação. ",
  },
];

const eventos_sab = [
  {
    dataLugar: "Manhã • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_ Discussão de abordagens",
    descricao: "Exploração de estratégias e abordagens com o suporte de mentores especializados.",
  },
  {
    dataLugar: "",
    titulo: "_Desenvolvimento",
    descricao:
      "Avanço no desenvolvimento das soluções. ",
  },
  {
    dataLugar: "Tarde • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Sessões de mentoria sob demanda",
    descricao:
      "Sessões específicas para revisão e refinamento das soluções, especialmente na modelagem de negócios. ",
  },
  {
    dataLugar: "",
    titulo: "_Desenvolvimento",
    descricao:
      "Avanço no desenvolvimento das soluções. ",
  },
  {
    dataLugar: "Noite • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Desenvolvimento",
    descricao:
      "Avanço no desenvolvimento das soluções. ",
  },
  {
    dataLugar: "",
    titulo: "_Checkpoint",
    descricao:
      "Checkpoint para avaliação do progesso e ajustes necessários. ",
  },
];


const eventos_dom = [
  {
    dataLugar: "Manhã • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_ Desenvolvimento",
    descricao: "Avanço no desenvolvimento das soluções. ",
  },
  {
    dataLugar: "16H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Apresentação",
    descricao:
      "Exposição das soluções para um painel de jurados composto por parceiros. ",
  },
  {
    dataLugar: "17H30 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Avaliação",
    descricao:
      "Processo de avaliação das soluções apresentadas ",
  },
  {
    dataLugar: "18H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
    titulo: "_Cerimônia de encerramento e premiação",
    descricao:
      "Encerramento oficial do evento e premiação das melhores soluções. ",
  },
  {
    dataLugar: "",
    titulo: "_Checkpoint",
    descricao:
      "Checkpoint para avaliação do progesso e ajustes necessários. ",
  },
];


const Cronograma = () => {
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
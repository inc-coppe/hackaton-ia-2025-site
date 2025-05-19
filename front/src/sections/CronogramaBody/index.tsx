import React from "react";

import { Circle, CronogramaBodyContainer, CronogramaDayContainer, CronogramaTitle, DataLugarText, EventoBody, EventoContainer, EventoTitle } from "./style";
import { PreDivisionText } from "../CronogramaIntro/style";

const eventos_pre = [
    {
        dataLugar: "DD/MM A DD/MM • [LUGAR]",
        titulo: "Webinars Preparatórios",
        descricao: "Um pequeno texto explicativo sobre os webinars..."
  },
    {
        dataLugar: "",
        titulo: "Se houver outro tópico para a mesma data e hora",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
        dataLugar: "DD/MM E DD/MM ÀS 19H • DISCORD",
        titulo: "Workshops Técnicos com a NVIDIA",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
        dataLugar: "DD/MM ÀS 19H • DISCORD",
        titulo: "Orientações Gerais sobre a Dinâmica do Hackathon",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
        dataLugar: "DD/MM ÀS 19H • DISCORD",
        titulo: "Apresentação dos Desafios",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
        dataLugar: "DD/MM ÀS 19H • DISCORD",
        titulo: "Sessões de Q&A",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
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
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        dataLugar: "10H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Início da Fase de Ideação",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        dataLugar: "12H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Almoço",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        dataLugar: "14H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Criação de MVP",
        descricao: "Momento reservado para discussões de abordagens e estratégias com mentores especializados.Participação especial dos mentores Nome do Mentor (Parceria) e Nome do Mentor (Parceria) que ficaram à disposição pelo espaço para atender às equipes.",
    },
    {
        dataLugar: "17H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Snacks",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        dataLugar: "18H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Sessões de Mentoria",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
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
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",    
  },
    {
        dataLugar: "10H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Início da Fase de Ideação",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",    
  },
    {
        dataLugar: "12H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Almoço",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",    
  },
  {
        dataLugar: "14H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Criação de MVP",
        descricao: "Momento reservado para discussões de abordagens e estratégias com mentores especializados. Participação especial dos mentores Nome do Mentor (Parceria) e Nome do Mentor (Parceria) que ficaram à disposição pelo espaço para atender às equipes.",    
  },
    {
        dataLugar: "17H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Snacks",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",    
  },
    {
        dataLugar: "18H00 • PORTO MARAVALLEY (RJ), DISCORD (SP)",
        titulo: "Sessões de Mentoria",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",    
  },
];

const CronogramaBody = () => {
    return (
        <>
            <CronogramaBodyContainer>
                <PreDivisionText>
                    Confira a agenda e já vai se preparando para aproveitar cada passo dessa experiência.
                </PreDivisionText>
            
                <CronogramaTitle>
                    /Pré-evento
                </CronogramaTitle>
                
                <CronogramaDayContainer>
                    {eventos_pre.map((evento, index) => (
                        <EventoContainer key={index}>
                            <DataLugarText>
                                {evento.dataLugar}
                            </DataLugarText>

                            <EventoTitle>
                                <Circle />
                                {evento.titulo}
                            </EventoTitle>

                            <EventoBody>
                                {evento.descricao}
                            </EventoBody>
                        </EventoContainer>
                    ))}
                </CronogramaDayContainer>

                <CronogramaTitle>
                    /sábado, 20/09
                </CronogramaTitle>

                <CronogramaDayContainer>
                    {eventos_sab.map((evento, index) => (
                        <EventoContainer key={index}>
                            <DataLugarText>
                                {evento.dataLugar}
                            </DataLugarText>

                            <EventoTitle>
                                <Circle />
                                {evento.titulo}
                            </EventoTitle>

                            <EventoBody>
                                {evento.descricao}
                            </EventoBody>
                        </EventoContainer>
                    ))}
                </CronogramaDayContainer>

            <CronogramaTitle>
                    /domingo, 21/09
                </CronogramaTitle>

                <CronogramaDayContainer>
                    {eventos_dom.map((evento, index) => (
                        <EventoContainer key={index}>
                            <DataLugarText>
                                {evento.dataLugar}
                            </DataLugarText>

                            <EventoTitle>
                                <Circle />
                                {evento.titulo}
                            </EventoTitle>

                            <EventoBody>
                                {evento.descricao}
                            </EventoBody>
                        </EventoContainer>
                    ))}
                </CronogramaDayContainer>

            </CronogramaBodyContainer>

        </>
    );
};

export default CronogramaBody;
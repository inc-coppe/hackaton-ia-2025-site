import React from "react";
import { Body, DescricaoBody, Paragraph, RegulamentoBodyContainer, RegulemantoInfoContainer, SubTitle, Title } from "./style";

const regulamento = [
    {
        titulo: "1. Estilo de título",
        subtitulo: "1.1. Estilo de subtítulo",
        body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    },

    {
        titulo: "2. Estilo de título",
        subtitulo: "2.1. Estilo de subtítulo",
        body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    },
];


const RegulamentoBody = () => {
    return(
        <>                                                                                                        
            <RegulamentoBodyContainer>
                <DescricaoBody>
                    Este regulamento contém as informações a respeito do evento e todas as regras aplicáveis ao HACKATHON IA 2025 e colocamos a disposição dos candidatos e futuros participantes para entendimento e direcionamento de toda realização do evento. Portanto, os candidatos/participantes, no ato de seu cadastro e inscrição aderem integralmente a todas as suas disposições, declarando que aceitam todos os termos deste regulamento. 
                </DescricaoBody>

                <DescricaoBody>
                    O presente evento é promovido por [completar].
                </DescricaoBody>

                <DescricaoBody>
                    Mantendo a relação de transparência entre organizador e participantes, ressaltamos que essa é uma versão atualizada do regulamento disponibilizado no dia DD de MM de 2025.
                </DescricaoBody>

                
                {regulamento.map((info, index) => (
                    <RegulemantoInfoContainer key={index}>
                        <Title>
                            {info.titulo}
                        </Title>

                        <SubTitle>
                            {info.subtitulo}
                        </SubTitle>

                        {Array.isArray(info.body) ? (
                            info.body.map((paragrafo, idx) => (
                                < Paragraph key={idx}>{paragrafo}</Paragraph>
                            ))
                        ) : (
                                <Paragraph>{info.body}</Paragraph>
                        )}

                    </RegulemantoInfoContainer>
                ))}
                
                    
            </RegulamentoBodyContainer>            
        </>
    );
};

export default RegulamentoBody;
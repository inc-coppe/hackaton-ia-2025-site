import React from "react";
import { DesafiosIntroContainer, Title } from "./style";
import { SubTitle, TitleBody } from "../CronogramaIntro/style";

const DesafiosIntro = () => {
    return(
        <>
            <DesafiosIntroContainer>
                <SubTitle>
                    Bora resolver problemas de verdade?
                </SubTitle>

                <Title>
                    Encarando o que importa, criando o que transforma.
                </Title>

                <TitleBody>
                    Durante o evento, você pode encarar desafios reais de empresas parceiras ou até propor o seu próprio.
                </TitleBody>

            </DesafiosIntroContainer>
        </>
    );
};

export default DesafiosIntro;
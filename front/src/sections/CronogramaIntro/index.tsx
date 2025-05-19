import React from "react";
import { Title, CronogramaIntroContainer, Gradient, SubTitle, TitleBody } from "./style";

import GradientWpp from "../../assets/gradientewpp.png";
import GradientWppMobile from "../../assets/background-home-mob.png";

const CronogramaIntro = () => {
    return (
        <>
            <CronogramaIntroContainer>
                
                    <SubTitle>
                        cada etapa importa:
                    </SubTitle>
                    
                    <Title>
                        prepare-se para cada momento.
                    </Title>

                    <TitleBody>
                        Aqui você encontra tudo o que precisa para se organizar durante o evento. Do aquecimento à entrega, cada fase foi pensada para te ajudar a criar, colaborar e brilhar com sua solução.
                    </TitleBody>
            </CronogramaIntroContainer>
        </>
    );
};

//<Gradient src={GradientWpp} alt="Gradiente" />{" "}

export default CronogramaIntro;
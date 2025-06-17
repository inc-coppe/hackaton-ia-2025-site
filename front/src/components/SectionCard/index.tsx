import React from "react";
import setaIcon from "../../assets/seta_figma_preta.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  SectionCard,
  CardContent,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardHeaderSeta,
  SetaIcon,
  SetaWrapper,
} from "./style";

interface SectionCardProps {
  title: string;
  subtitle: string;
  description: string;
  isSecondCard?: boolean;
}

const SectionCardComponent: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  description,
  isSecondCard = false,
}) => {

  return (
    <SectionCard $isSecondCard={isSecondCard}>     
      <CardContent>
        <CardHeaderSeta>
          <CardTitle>{title}</CardTitle>
          <SetaWrapper>
            <SetaIcon src={setaIcon} alt="Seta" />
          </SetaWrapper>
        </CardHeaderSeta>
        <CardHeader>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardHeader>
        <CardDescription $isSecondCard={isSecondCard}>
          {description}
        </CardDescription>
      </CardContent>

    </SectionCard>
  );
};

export default SectionCardComponent;

import React from "react";
import {
  SectionCard,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardDescription,
} from "./style";

interface SectionCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const SectionCardComponent: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <SectionCard>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
    </SectionCard>
  );
};

export default SectionCardComponent;

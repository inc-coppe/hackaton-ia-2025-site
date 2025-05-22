import React from "react";
import { Skeleton } from "antd";
import { CardContainer, LogoContainer, TitleContainer } from "./style";

interface SponsorCardProps {
  imageUrl: string;
  title: string;
  isLoading?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  imageUrl,
  title,
  isLoading,
}) => {
  return (
    <CardContainer>
      <LogoContainer>
        {isLoading ? (
          <Skeleton.Image
            active
            style={{
              width: "182px",
              height: "91px",
            }}
          />
        ) : (
          <img src={imageUrl} alt={title} />
        )}
      </LogoContainer>
      <TitleContainer>
        <span>{title}</span>
      </TitleContainer>
    </CardContainer>
  );
};

export default SponsorCard;

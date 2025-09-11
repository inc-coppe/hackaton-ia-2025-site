import React, { CSSProperties } from "react";
import { Skeleton } from "antd";
import { CardContainer, LogoContainer, TitleContainer } from "./style";

interface SponsorCardProps {
  imageUrl: string;
  title: string;
  isLoading?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  imageUrl,
  title,
  isLoading,
  onClick,
  style,
}) => {
  return (
    <CardContainer onClick={onClick} style={style}>
      <LogoContainer>
        {isLoading ? (
          <Skeleton.Image
            active
            style={{
              width: window.innerWidth <= 448 ? "127px" : "182px",
              height: window.innerWidth <= 448 ? "63.5px" : "91px",
            }}
          />
        ) : (
          <img src={imageUrl} alt={title} loading="lazy" />
        )}
      </LogoContainer>
      <TitleContainer>
        <span>{title}</span>
      </TitleContainer>
    </CardContainer>
  );
};

export default SponsorCard;

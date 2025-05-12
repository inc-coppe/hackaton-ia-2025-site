import React from "react";
import { CardContainer, CardImage, CardText } from "./style";

const Card = ({ image, text }: { image: string; text: string }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt="Card Image" />
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;

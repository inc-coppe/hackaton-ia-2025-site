import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 4rem;
  height: 4rem;
  border: 2px solid #0f0f21;
`;

export const CardText = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */
  text-align: center;

  color: #0f0f21;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

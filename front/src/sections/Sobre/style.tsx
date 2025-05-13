import styled from "styled-components";

export const SobreContainer = styled.div`
  padding: 7.5rem;
  gap: 4rem;
`;

export const Text = styled.div`
  gap: 2rem;
`;

export const Line = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 61px;
  /* identical to box height */
  text-align: center;

  color: #0f0f21;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Body = styled.p`
  
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
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

import styled from "styled-components";

export const Container = styled.div`
  gap: 4rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Highlight = styled.div`
  background: linear-gradient(58.59deg, #53167f 5.91%, #2e2989 100%);
  display: flex;
  width: 85%;
  height: 75%;
  border-radius: 0.5rem;
  padding: 7.5rem;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const Texts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 61px;
  /* identical to box height */
  text-align: center;

  color: #ffffff;

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
  margin-bottom: 3rem;

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: #ffffff;
  color: #3161e8;
  border-radius: 0.2rem;
  padding: 0.75rem 1.25rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

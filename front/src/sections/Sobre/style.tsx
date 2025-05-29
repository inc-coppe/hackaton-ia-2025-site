import styled from "styled-components";

export const SobreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* era flex-star mas isso estava deixando alinhado à esquerda */
  padding: 7.5rem;
  gap: 4rem;

  @media (max-width: 28rem) {
    padding: 3.75rem 1.5rem; // 60px 24px
    gap: 2.5rem; // 40px
    height: auto; // retirada a altura fixa de 65.375rem (1046px)
    
    align-items: center;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 28rem) {
    padding: 0;
    gap: 1.5rem; // 24px
    width: auto; // 342px
    height: auto; // 202px
    align-self: stretch;

    align-items: center;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 6rem;

  @media (max-width: 28rem) {
    flex-direction: column;
    padding: 0;
    gap: 1.5rem; // 24px
    width: auto; // alterado para ficar centralizado, era 21.375rem (342px)
    height: 42.75rem; // 684px
    margin-top: 0;
    align-self: stretch;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem; // 50px
  line-height: 3.8125rem; // 61px
  text-align: center;
  color: #0f0f21;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 28rem) {
    font-size: 2rem; // 32px
    line-height: 2.4375rem; // 39px
    width: auto; // alterado para ficar centralizado, era 21.375rem (342px)
    height: 4.875rem; // 78px
  }
`;

export const Body = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  text-align: center;
  color: #0f0f21;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
    width: auto; // alterado para ficar centralizado, era 21.375rem (342px)
    height: auto; // alterado para ficar centralizado, era 6.25rem (100px)
  }
`;

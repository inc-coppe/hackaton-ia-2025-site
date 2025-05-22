import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7.5rem 7.5rem 5rem;
  gap: 4rem;

  @media (max-width: 28rem) {
    padding: 3.75rem 1.5rem 2.5rem; // 60px 24px 40px
    gap: 4rem; // 64px
    width: 24.375rem; // 390px
    height: 33.625rem; // 538px
    align-self: stretch;
  }
`;

export const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7.5rem;
  gap: 4rem;
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);
  border-radius: 0.5rem; // 8px

  @media (max-width: 28rem) {
    width: 21.375rem; // 342px
    height: 27.375rem; // 438px
    padding: 2.5rem 1rem; // 40px 16px
    gap: 2.5rem; // 40px
    align-self: stretch;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 2rem;
  width: 100%;

  @media (max-width: 28rem) {
    width: 19.375rem; // 310px
    height: 17.4375rem; // 279px
    gap: 1.5rem; // 24px
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
  color: #ffffff;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 28rem) {
    width: 19.375rem; // 310px
    height: 12.1875rem; // 195px
    font-size: 2rem; // 32px
    line-height: 2.4375rem; // 39px
  }
`;

export const Body = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin-bottom: 3rem;

  @media (max-width: 28rem) {
    width: 19.375rem; // 310px
    height: 3.75rem; // 60px
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
  gap: 0.5rem;
  background-color: #ffffff;
  border-radius: 0.125rem;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem; // 15px
  line-height: 0.9375rem; // 15px
  text-transform: uppercase;
  color: #3161e8;

  @media (max-width: 28rem) {
    width: 9.125rem; // 146px
    height: 2.4375rem; // 39px
    padding: 0.75rem 1.25rem; // 12px 20px
    gap: 0.5rem; // 8px

    span {
      width: 6.625rem; // 106px
      height: 0.9375rem; // 15px
    }
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

import styled from "styled-components";

export const SectionSubtitle = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.563rem; // 25px
  color: #ffffff;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3.75rem 6.25rem;
  background: linear-gradient(243.99deg, #2e2989 32.82%, #3161e8 100.02%);
  width: 100%;
  min-height: 100vh;
  gap: 4rem;

  @media (max-width: 28rem) {
    flex-direction: column;
    align-items: flex-start;
    padding: 3.75rem 1.5rem;
    gap: 2.5rem;
    height: 67.25rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1.5rem;
  width: 45%;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 19.125rem;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  gap: 0.25rem;
  width: 100%;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 11.375rem;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3rem;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;

  @media (max-width: 28rem) {
    font-size: 2rem;
    line-height: 2.438rem;
    width: 21.375rem;
    height: 9.75rem;
  }
`;

export const Body = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #ffffff;
  margin: 0;

  @media (max-width: 28rem) {
    font-size: 1rem;
    line-height: 1.25rem;
    width: 21.375rem;
    height: 6.25rem;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 45%;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 38.125rem;
    gap: 2rem;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  gap: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 0.125rem;
  width: fit-content;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.938rem;
  line-height: 0.938rem;
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  .anticon {
    width: 1.5rem;
    height: 1.5rem;
    color: #ffffff;
  }

  @media (max-width: 28rem) {
    width: 21rem;
    height: 2.5rem;
  }
`;

export const SectionSubtitle = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.563rem; // 25px
  color: #ffffff;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
  }
`;
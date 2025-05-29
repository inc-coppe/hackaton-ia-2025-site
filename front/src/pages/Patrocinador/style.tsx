import styled from "styled-components";

export const SponsorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #ffffff;
`;

export const HighlightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9.125rem 7.5rem 5rem;
  margin-top: 4rem;
  gap: 4rem;
  width: 100%;
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);

  @media (max-width: 48rem) {
    padding: 3.75rem 1.5rem;
    gap: 2.5rem;
  }
`;

export const HighlightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  max-width: 81rem;

  @media (max-width: 48rem) {
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

export const HighlightTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

export const HighlightPreamble = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const HighlightMainTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2rem;
    line-height: 2.4375rem;
  }
`;

export const HighlightDescription = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const HighlightButtonContainer = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48rem) {
    justify-content: center;
    padding-top: 1rem;
  }
`;

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7.5rem;
  gap: 4rem;
  width: 100%;
  background: #ffffff;

  @media (max-width: 48rem) {
    padding: 2.5rem 1.5rem;
    gap: 2rem;
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  width: 100%;
  max-width: 81rem;
`;

export const AboutTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  color: #0f0f21;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2rem;
    line-height: 2.4375rem;
  }
`;

export const AboutDescription = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #0f0f21;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem; /* Desktop: 32px */
  width: 100%;
  max-width: 81rem; /* Desktop: 1296px */
  margin: 0 auto;

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center; /* Centraliza os cards empilhados no mobile */
    gap: 1.5rem; /* Mobile: 24px */
  }
`;

export const BenefitCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem 2rem;
  gap: 0.625rem;
  width: calc((100% - 4rem) / 3);
  border: 0.125rem solid #c1d0f8;
  border-radius: 0.5rem;

  @media (max-width: 48rem) {
    width: 100%; /* Ocupa a largura total no mobile, empilhando */
    max-width: 21.375rem; /* Limita a largura máxima no mobile */
    padding: 1.25rem;
  }
`;

export const BenefitIcon = styled.img`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

export const BenefitTitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #0f0f21;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

// ... (CTASection, CTAContainer, etc. - estilos anteriores sem alteração) ...
export const CTASection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7.5rem 7.5rem;
  width: 100%;

  @media (max-width: 48rem) {
    padding: 2.5rem 1.5rem 3.75rem;
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  gap: 5rem;
  width: 100%;
  max-width: 81rem;
  background: linear-gradient(243.99deg, #2e2989 32.82%, #3161e8 100.02%);
  border-radius: 0.5rem;

  @media (max-width: 48rem) {
    padding: 2.5rem 1rem;
    gap: 2.5rem;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;

  @media (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`;

export const CTATextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 32.5rem;
  flex-shrink: 0;

  @media (max-width: 48rem) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

export const CTATitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2rem;
    line-height: 2.4375rem;
  }
`;

export const CTADescription = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  max-width: 34.5rem;

  @media (max-width: 48rem) {
    align-items: center;
  }
`;

export const BenefitBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #0f0f21;
  border-radius: 0.5rem;
  width: 100%;
`;

export const BenefitBoxTitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
  gap: 0.5rem;
  width: 13rem;
  background: #ffffff;
  border-radius: 0.125rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f0f0f0;
  }
`;

export const ActionButtonText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 0.9375rem;
  text-transform: uppercase;
  color: #3161e8;
`;

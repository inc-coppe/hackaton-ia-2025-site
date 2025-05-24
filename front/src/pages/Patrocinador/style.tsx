import styled from "styled-components";

export const SponsorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  isolation: isolate;
  position: relative;
  width: 100%;
  background: #ffffff;

  @media (max-width: 48rem) {
    // 768px
    width: 24.375rem; // 390px
    height: 168.625rem; // 2698px
  }
`;

export const HighlightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.125rem 7.5rem 5rem; // 146px 120px 80px
  gap: 4rem; // 64px
  width: 100%;
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);

  @media (max-width: 48rem) {
    padding: 5rem 1.5rem; // 80px 24px
    height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 2rem; // 32px
  width: 81rem; // 1296px
  max-width: 100%;

  @media (max-width: 48rem) {
    width: 100%;
    gap: 1.5rem; // 24px
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem; // 4px
  width: 100%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem; // 50px
  line-height: 3.8125rem; // 61px
  color: #ffffff;

  @media (max-width: 48rem) {
    font-size: 2rem; // 32px
    line-height: 2.4375rem; // 39px
  }
`;

export const Subtitle = styled.h2`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.5625rem; // 25px
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
  }
`;

export const Description = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem; // 12px 20px
  gap: 0.5rem; // 8px
  width: 13rem; // 208px
  height: 2.4375rem; // 39px
  background: #ffffff;
  border-radius: 0.125rem; // 2px
  border: none;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

export const ButtonText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9375rem; // 15px
  line-height: 0.9375rem; // 15px
  text-transform: uppercase;
  color: #3161e8;
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.5rem; // 120px
  gap: 4rem; // 64px
  width: 100%;

  @media (max-width: 48rem) {
    padding: 2.5rem 1.5rem; // 40px 24px
  }
`;

export const AboutTitle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem; // 50px
  line-height: 3.8125rem; // 61px
  text-align: center;
  color: #0f0f21;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2rem; // 32px
    line-height: 2.4375rem; // 39px
  }
`;

export const AboutDescription = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  text-align: center;
  color: #0f0f21;
  margin: 0;
  max-width: 81rem; // 1296px

  @media (max-width: 48rem) {
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem; // 32px
  max-width: 81rem; // 1296px
  margin: 0 auto;

  @media (max-width: 48rem) {
    gap: 1rem; // 16px
  }
`;

export const BenefitCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem 2rem; // 24px 32px
  gap: 1.5rem; // 24px
  width: 25.625rem; // 410px
  border: 0.125rem solid #c1d0f8; // 2px
  border-radius: 0.5rem; // 8px

  @media (max-width: 48rem) {
    width: 100%;
    padding: 1.25rem; // 20px
  }
`;

export const BenefitIcon = styled.img`
  width: 2rem; // 32px
  height: 2rem; // 32px
`;

export const BenefitTitle = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.5625rem; // 25px
  color: #0f0f21;
  margin: 0;
`;

export const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7.5rem 7.5rem; // 0px 120px 120px
  gap: 4rem; // 64px
  width: 100%;

  @media (max-width: 48rem) {
    padding: 0 1.5rem 2.5rem; // 0px 24px 40px
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5rem; // 80px
  gap: 4rem; // 64px
  width: 100%;
  background: linear-gradient(243.99deg, #2e2989 32.82%, #3161e8 100.02%);
  border-radius: 0.5rem; // 8px

  @media (max-width: 48rem) {
    flex-direction: column;
    padding: 2.5rem 1.5rem; // 40px 24px
    gap: 2rem; // 32px
  }
`;

export const CTATextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; // 32px
  width: 32.5rem; // 520px

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const CTATitle = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem; // 50px
  line-height: 3.8125rem; // 61px
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2rem; // 32px
    line-height: 2.4375rem; // 39px
  }
`;

export const CTADescription = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
  }
`;

export const CTAQuestion = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; // 24px
  width: 34.5rem; // 552px

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const BenefitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1.5rem; // 16px 24px
  background: #0f0f21;
  border-radius: 0.5rem; // 8px
`;

export const BenefitBoxTitle = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.5625rem; // 25px
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
  }
`;

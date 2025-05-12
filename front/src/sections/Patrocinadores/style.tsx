import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  background-color: #ffffff;

  @media (max-width: 48rem) {
    /* 768px / 16 */
    padding: 3.75rem 1.25rem; /* 60px / 16, 20px / 16 */
  }
`;

export const Resize = styled.div`
  width: 63vw;
`;

export const SponsorsContainer = styled.div`
  align-items: center;
  justify-content: center;
  gap: 7.5rem;
`;

// Title styles
export const SectionTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem; /* 50px / 16 */
  line-height: 3.8125rem; /* 61px / 16 */
  color: #0f0f21;

  @media (max-width: 48rem) {
    /* 768px / 16 */
    font-size: 2.25rem; /* 36px / 16 */
  }
`;

// Subtitle styles
export const SectionSubtitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem; /* 18px / 16 */
  line-height: 1.5625rem; /* 25px / 16 */
  color: #0f0f21;

  @media (max-width: 48rem) {
    /* 768px / 16 */
    font-size: 1rem; /* 16px / 16 */
  }
`;

// Description text styles
export const SectionText = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem; /* 20px / 16 */
  line-height: 1.5rem; /* 24px / 16 */
  color: #0f0f21;

  @media (max-width: 48rem) {
    /* 768px / 16 */
    font-size: 1rem; /* 16px / 16 */
  }
`;

// Button styles
export const SponsorButton = styled.button`
  display: flex;
  padding: 0.5rem 0rem; /* 8px / 16, 0px / 16 */
  gap: 0.5rem; /* 8px / 16 */
  width: 12.875rem; /* 206px / 16 */
  height: 2.5rem; /* 40px / 16 */
  border-radius: 0.125rem; /* 2px / 16 */
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem; /* 15px / 16 */
  line-height: 0.9375rem; /* 15px / 16 */
  text-transform: uppercase;
  color: #3161e8;

  &:hover {
    opacity: 0.8;
  }
`;

// Tier title styles (Ouro, Prata, Bronze, etc.)
export const TierTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 1.25rem; /* 20px / 16 */
  line-height: 1.5rem; /* 24px / 16 */
  align-self: center;
  text-align: center;
  color: #0f0f21;
  margin-top: 5rem; /* 80px / 16 */

  @media (max-width: 48rem) {
    /* 768px / 16 */
    font-size: 1.125rem; /* 18px / 16 */
  }
`;

// Sponsor logo container
export const SponsorLogoContainer = styled.div`
  display: flex;
  margin-bottom: 8rem;
  margin-top: 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.25rem; /* 20px / 16 */
  flex-wrap: wrap;
  padding: 0rem 10rem; /* 0px / 16, 160px / 16 */

  @media (max-width: 48rem) {
    /* 768px / 16 */
    padding: 0rem 1.25rem; /* 0px / 16, 20px / 16 */
  }
`;

// Individual sponsor logo
export const SponsorLogo = styled.div<{ imageUrl: string }>`
  width: 7.5rem; /* 120px / 16 */
  height: 3.75rem; /* 60px / 16 */
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: contain;
  border-radius: 0.5rem; /* 8px / 16 */
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1rem; // Reduced further from 2rem to 1rem
  width: calc(100% - 15rem);
  /*max-width: 1296px; -> comentado porque estava desalinhando*/ 
  height: auto;
  position: relative;
  z-index: 1;
  margin: 0 7.5rem;
  margin-bottom: 7.5rem;

  @media (max-width: 28rem) {    
    margin: 0;
    padding: 3.75rem 1.5rem;
    width: 100%;
    gap: 1.5rem; // Consistent gap for mobile
    //margin: 0 1.5rem;
  }
`;

export const Resize = styled.div`
  width: 100%;
  /*max-width: 800px; -> comentado porque estava limitando o Sectiontext */
  display: flex;
  flex-direction: column;
  gap: 0.75rem; // Add small gap between text elements

  @media (max-width: 28rem) {
    width: 100%;
    gap: 0.5rem; // Slightly smaller gap for mobile
    text-align: left;
    margin-left: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  color: #0f0f21;
  text-align: left;
  margin: 0; // Remove default margins

  max-width: 800px;

  @media (max-width: 28rem) {
    font-size: 2rem;
    line-height: 2.4375rem;
    text-align: left;
  }
`;

export const SectionSubtitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #0f0f21;
  text-align: left;
  margin: 0; // Remove default margins

  @media (max-width: 28rem) {
    font-size: 1rem;
    line-height: 1.25rem;
    text-align: left;
  }
`;

export const SectionText = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #0f0f21;
  text-align: left;
  margin: 0; // Remove default margins

  @media (max-width: 28rem) {
    font-size: 1rem;
    line-height: 1.25rem;
    text-align: left;
  }
`;

export const SponsorButton = styled.button`
  display: flex;
  padding: 0.5rem 0;
  gap: 0.5rem;
  width: 12.875rem;
  height: 2.5rem;
  border-radius: 0.125rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 0.9375rem;
  text-transform: uppercase;
  color: #3161e8;
  align-items: center;
  margin-top: 0.5rem; // Reduced from 1rem
  margin-bottom: 2rem; // Reduced from 3rem

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 28rem) {
    padding: 0;
    width: 100%;
    margin-top: 0.25rem; // Even smaller gap for mobile
    margin-bottom: 1.5rem;
  }
`;

export const SponsorLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0;
  gap: 32px;
  width: 100%;
  max-width: 1296px;
  margin: 32px auto 0;
  position: relative;
  z-index: 1;
  background: #ffffff;

  @media (max-width: 28rem) {
    gap: 24px;
    margin-top: 24px;
    justify-content: flex-start;
    width: 342px; 
  }
`;

export const SponsorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;
  gap: 4rem;
  position: relative;
  z-index: 1;
  margin-top: -1rem; // Pull the sponsors section up slightly

  @media (max-width: 28rem) {
    
    gap: 1.5rem;
    width:100%;
    margin-top: -0.5rem;
  }
`;

export const SponsorLogo = styled.div<{ imageUrl: string }>`
  width: 7.5rem;
  height: 3.75rem;
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: contain;
  border-radius: 0.5rem;

  @media (max-width: 28rem) {
    width: 4.375rem; // 70px - smaller size
    height: 2.1875rem; // 35px - smaller size
  }
`;

export const TierTitle = styled.h4`
  width: 100%;
  height: 39px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #0f0f21;
  margin: 0;
  position: relative;
  z-index: 2;
  background: #ffffff;

  @media (max-width: 28rem) {
    margin-top: 2rem;
    font-size: 20px;
    line-height: 24px;
    height: 24px;
    width: 100%;
  }
`;

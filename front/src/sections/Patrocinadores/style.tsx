import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  background-color: #ffffff;

  @media (max-width: 28rem) {
    padding: 3.75rem 1.5rem;
    gap: 2.5rem;
    width: 100%;
  }
`;

export const Resize = styled.div`
  width: 63vw;

  @media (max-width: 28rem) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left; // Keep text alignment left on mobile
    margin-left: 0; // Reset margin for mobile
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  color: #0f0f21;
  text-align: left;

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
  width: 12.875rem; // 206px
  height: 2.5rem; // 40px
  border-radius: 0.125rem; // 2px
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem; // 15px
  line-height: 0.9375rem; // 15px
  text-transform: uppercase;
  color: #3161e8;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 28rem) {
    width: 100%;
  }
`;

export const SponsorLogoContainer = styled.div`
  display: flex;
  margin-bottom: 8rem;
  margin-top: 2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  padding: 0 10rem;

  @media (max-width: 28rem) {
    padding: 0 1rem;
    margin-bottom: 2.5rem;
    margin-top: 1.5rem;
    gap: 0.75rem; // Reduced gap for tighter layout

    .ant-space {
      flex-wrap: wrap !important;
      justify-content: center !important;
      gap: 0.75rem !important; // Reduced gap between skeletons
    }

    .ant-skeleton-image {
      width: 6.25rem !important; // 100px - smaller size
      height: 3.125rem !important; // 50px - smaller size
    }
  }
`;

export const SponsorsContainer = styled.div`
  align-items: center;
  justify-content: center;
  gap: 7.5rem;
  width: 100%;

  @media (max-width: 28rem) {
    gap: 2.5rem; // 40px
    padding: 0;
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
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  align-self: center;
  text-align: center;
  color: #0f0f21;
  margin-top: 5rem; // 80px

  @media (max-width: 28rem) {
    font-size: 1.125rem; // 18px
    margin-top: 2.5rem; // 40px
    width: 100%;
  }
`;

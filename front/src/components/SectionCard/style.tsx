import styled from "styled-components";

export const SectionCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem 2rem; // 24px 32px
  gap: 0.75rem; // 12px
  height: 8.188rem; // 131px
  background: none;
  width: fit-content;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4rem); // Subtracting space for the arrow
    height: 100%;
    background: #ffffff;
    border-radius: 0.5rem; // 8px
    z-index: 0;
  }

  @media (max-width: 28rem) {
    height: 8.188rem; // 131px
    padding: 1.5rem 2rem;
    width: 21.375rem; // 342px

    &::before {
      width: 100%;
    }

    &:nth-of-type(2) {
      height: 14.25rem; // 228px
    }
  }

  &:hover::before {
    background-color: #c1d0f8;
  }
`;

export const CardHeaderSeta = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 0.625rem; // 10px
  height: 1.5rem; // 24px
  z-index: 1;

  @media (max-width: 28rem) {
    width: 17.375rem; // 278px
    height: 1.5rem; // 24px
  }
`;

export const SetaWrapper = styled.div`
  height: 1.5rem; // 24px
  display: flex;
`;

export const SetaIcon = styled.img`
  width: 1.5rem; // 24px
  height: 1.5rem; // 24px
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.125rem; // 2px
  width: 34.5rem; // 552px
  height: 3.188rem; // 51px
  z-index: 1;

  @media (max-width: 28rem) {
    width: 17.375rem; // 278px
    height: 3rem; // 48px
  }
`;

export const CardTitle = styled.h3`
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 0.75rem; // 12px
  line-height: 1.5rem; // 24px
  color: rgba(15, 15, 33, 0.6);
  height: 1.5rem; // 24px
  margin: 0;
  z-index: 1;

  @media (max-width: 28rem) {
    height: 1.5rem; // 24px
  }
`;

export const CardSubtitle = styled.h4`
  position: relative;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.563rem; // 25px
  color: #0f0f21;
  height: 1.563rem; // 25px
  margin: 0;
  z-index: 1;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
    height: 1.375rem; // 22px
  }
`;

export const CardDescription = styled.p`
  position: relative;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem; // 16px
  line-height: 1.25rem; // 20px
  color: #0f0f21;
  width: 34.5rem; // 552px
  height: 1.25rem; // 20px
  margin: 0;
  z-index: 1;

  @media (max-width: 28rem) {
    width: 17.375rem; // 278px
    height: ${(props) =>
      props.$isSecondCard ? "7.5rem" : "1.25rem"}; // 120px or 20px
  }
`;

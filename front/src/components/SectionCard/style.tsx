import styled from "styled-components";

export const SectionCard = styled.div<{ $isSecondCard?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1.5rem 2rem; // 24px 32px
  gap: 0.75rem; // 12px
  width: 100%; // Changed from fixed width to 100%
  max-width: 38.5rem; // 616px as max-width instead
  height: ${(props) =>
    props.$isSecondCard ? "10.688rem" : "8.188rem"}; // 171px or 131px
  background: #ffffff;
  border-radius: 0.5rem; // 8px

  @media (max-width: 28rem) {
    width: 21.375rem; // 342px
    height: ${(props) =>
      props.$isSecondCard ? "14.25rem" : "8.188rem"}; // 228px or 131px
    padding: 1.5rem 2rem;
  }

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c1d0f8;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem; // 12px
  width: 100%; // Changed from fixed width to 100%
  max-width: 34.5rem; // 552px as max-width instead

  @media (max-width: 28rem) {
    width: 17.375rem; // 278px
  }
`;

export const CardHeaderSeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 0.625rem; // 10px
  width: 100%;
  height: 1.5rem; // 24px
`;

export const SetaWrapper = styled.div`
  width: 1.5rem; // 24px
  height: 1.5rem; // 24px
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SetaIcon = styled.img`
  width: 1.5rem; // 24px
  height: 1.5rem; // 24px
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.125rem; // 2px
  width: 100%;
  height: 1.563rem; // 25px
`;

export const CardTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 0.75rem; // 12px
  line-height: 1.5rem; // 24px
  color: rgba(15, 15, 33, 0.6);
  margin: 0;
`;

export const CardSubtitle = styled.h4`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.563rem; // 25px
  color: #0f0f21;
  margin: 0;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
  }
`;

export const CardDescription = styled.p<{ $isSecondCard?: boolean }>`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem; // 16px
  line-height: 1.25rem; // 20px
  color: #0f0f21;
  width: 100%; // Changed from fixed width to 100%
  margin: 0;

  @media (max-width: 28rem) {
    height: ${(props) =>
      props.$isSecondCard ? "7.5rem" : "1.25rem"}; // 120px or 20px
  }
`;

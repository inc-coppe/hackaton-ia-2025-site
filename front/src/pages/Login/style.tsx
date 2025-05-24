import styled from "styled-components";

export const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 18.75rem; // 300px
  width: 100%;
  height: 58.375rem; // 934px
  background: #110249;
  overflow: hidden;
`;

export const LoginCard = styled.div`
  /* Estilo desktop original */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2.5rem; // 40px
  gap: 4rem; // 64px
  position: absolute;
  width: 49.83625rem; // 797.38px
  height: 21.3125rem; // 341px
  left: 50%;
  top: 15.375rem; // 246px
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 0.5rem; // 8px

  @media (max-width: 50rem) {
    /* Sobrescreve para o estilo mobile */
    flex-direction: column;
    width: 354px;
    height: 470px;
    padding: 24px 16px;
    gap: 32px;
    left: 18px;
    top: 106px;
    border-radius: 8px;
    transform: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 4rem; // 64px
  width: 24.9375rem; // 399px
  height: 16.3125rem; // 261px

  @media (max-width: 50rem) {
    width: 322px;
    height: 175px;
    gap: 32px;
    align-items: center;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1rem; // 16px
  width: 24.9375rem; // 399px
  height: 9.3125rem; // 149px

  @media (max-width: 50rem) {
    width: 322px;
    height: 95px;
    align-items: center;
    gap: 16px;
  }
`;

export const Title = styled.h1`
  width: 24.9375rem; // 399px
  height: 3.8125rem; // 61px
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem; // 50px
  line-height: 3.8125rem; // 61px
  text-align: left;
  color: #0f0f21;
  margin: 0;

  @media (max-width: 50rem) {
    width: 322px;
    height: 39px;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  width: 24.9375rem; // 399px
  height: 4.5rem; // 72px
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  color: rgba(15, 15, 33, 0.6);
  margin: 0;

  @media (max-width: 50rem) {
    width: 322px;
    height: 40px;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
`;

export const GoogleButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem; // 12px 20px
  gap: 1rem; // 16px
  width: 20.125rem; // 322px
  height: 3rem; // 48px
  border: 0.125rem solid #3161e8; // 2px
  border-radius: 0.125rem; // 2px
  position: relative;

  & > div {
    transform: none !important;
    width: 100% !important;

    & > div {
      width: 100% !important;
      font-family: "Montserrat" !important;
      font-weight: 700 !important;
      font-size: 0.9375rem !important; // 15px
      line-height: 0.9375rem !important; // 15px
      text-transform: uppercase !important;
      color: #3161e8 !important;
      background: transparent !important;
      padding: 0 !important;
      border: none !important;
      box-shadow: none !important;

      & > div {
        padding: 0 !important;
        background: transparent !important;

        & > svg {
          width: 1.5rem !important; // 24px
          height: 1.5rem !important; // 24px
          margin-right: 1rem !important; // 16px
        }

        & > span {
          font-family: "Montserrat" !important;
          font-weight: 700 !important;
          font-size: 0.9375rem !important; // 15px
          line-height: 0.9375rem !important; // 15px
          text-transform: uppercase !important;
          color: #3161e8 !important;
          width: 15.125rem !important; // 242px
          height: 0.9375rem !important; // 15px
          padding: 0 !important;
        }
      }
    }
  }

  @media (max-width: 50rem) {
    width: 322px;
    height: 48px;
    padding: 12px 20px;
    gap: 16px;
    border-radius: 2px;
    border: 2px solid #3161e8;
  }
`;

export const Logo = styled.img`
  width: 15.89875rem; // 254.38px
  height: 16.3125rem; // 261px
  object-fit: contain;

  @media (max-width: 50rem) {
    width: 209.55px;
    height: 215px;
    order: -1;
    margin-bottom: 1rem;
  }
`;
export const ErrorMessage = styled.div`
  color: #ff4d4d;
  font-family: "Montserrat", sans-serif;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  background-color: rgba(255, 77, 77, 0.1);
  border: 0.0625rem solid rgba(255, 77, 77, 0.2);
  width: 100%;
`;

export const CustomGoogleButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.25rem;
  gap: 1rem;
  width: 20.125rem; // 322px
  height: 3rem; // 48px
  background: transparent;
  border: 0.125rem solid #3161e8;
  border-radius: 0.125rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(49, 97, 232, 0.05);
  }
`;

export const GoogleIcon = styled.img`
  width: 1.5rem; // 24px
  height: 1.5rem; // 24px
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ButtonText = styled.span`
  width: 15.125rem; // 242px
  height: 0.9375rem; // 15px
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9375rem; // 15px
  line-height: 0.9375rem; // 15px
  text-transform: uppercase;
  color: #3161e8;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// SponsorCard/style.tsx
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 230px;
  min-width: 0;
  height: 300px;
  background: transparent;

  @media (max-width: 28rem) {
    width: 159px;
    height: 223px;
    max-width: 159px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
  padding: 0 24px;
  background: #ffffff;
  border-width: 2px 2px 0 2px;
  border-style: solid;
  border-color: #c1d0f8;
  border-radius: 8px 8px 0 0;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 28rem) {
    height: 159px;
    padding: 0 16px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 16px;
  background: #2e2989;
  border-radius: 0 0 8px 8px;

  span {
    font-family: "Nunito Sans";
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    text-align: center;
    width: 198px;
    height: 38px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-word;
  }

  ${CardContainer}:hover & {
    background: #110249;
  }

  @media (max-width: 28rem) {
    height: 64px;
    padding: 16px;

    span {
      width: 127px;
      height: 32px;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

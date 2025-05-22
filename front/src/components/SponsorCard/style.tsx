import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 180px;
  min-width: 0;
  height: 260px;
  background: transparent;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background: #ffffff;
  border-width: 2px 2px 0 2px;
  border-style: solid;
  border-color: #c1d0f8;
  border-radius: 8px 8px 0 0;

  img {
    width: 90%;
    max-width: 150px;
    height: 80px;
    object-fit: contain;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #2e2989;
  border-radius: 0 0 8px 8px;

  span {
    font-family: "Nunito Sans";
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    text-align: center;
    width: 100%;
    white-space: normal;
    word-break: break-word;
    display: block;
  }

  ${CardContainer}:hover & {
    background: #110249;
  }
`;

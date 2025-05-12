import styled from "styled-components";

export const Container = styled.div`
  background: #0f0f21;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 60vh;
  padding: 4rem 7.5rem 1.5rem;
  gap: 4rem;
  background: #0f0f21;
  flex: none;
  order: 7;
  flex-grow: 0;
  z-index: 7;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 4rem;
`;

export const MapSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 3rem;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  position: relative; /* Enables positioning for child elements */
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 4rem 0px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 17rem; /* Fixes the width of the first column to 17rem */
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  gap: 0.3rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Logo = styled.img`
  flex: none;
  order: 0;
  flex-grow: 0;
  max-width: 100%; /* Ensures the logo is responsive */
  height: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
  flex: none;
  order: 1;
  flex-grow: 1; /* Ensures other columns take up available space */
`;

export const Subtitle = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.51;
  text-align: center;
  color: #ffffff;
`;

export const BodyText = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.15rem;
  line-height: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
`;

export const FooterNote = styled.div`
  width: 100%; /* Adapts to the screen width */
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.15rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  background: #0f0f21;
  height: 5vh;
  margin-bottom: 1.5rem;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

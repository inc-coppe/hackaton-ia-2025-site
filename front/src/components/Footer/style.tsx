import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 7.5rem 1.5rem;
  gap: 4rem;
  width: 100%;
  background: #0f0f21;

  @media (max-width: 28rem) {
    padding: 3.75rem 1.5rem 1.5rem;
    gap: 2.5rem;
    min-height: 38rem; // 608px
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 13.489rem; // 215.83px
  height: 15.173rem; // 242.77px
  mix-blend-mode: luminosity;

  @media (max-width: 28rem) {
    width: 7.266rem; // 116.25px
    height: 8.172rem; // 130.76px
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.563rem; // 25px
  text-align: center;
  color: #ffffff;
  text-decoration: none;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
  }
`;

export const Subtitle = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.563rem; // 25px
  color: #ffffff;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
    width: 100%;
  }
`;

export const BodyText = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  margin-bottom: 0;
  line-height: 1.5rem; // 24px
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
    width: 100%;
  }
`;

export const MapSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 3rem;
  width: 100%;
  max-width: 81rem;

  @media (max-width: 28rem) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4rem 0 0;
  gap: 0.625rem;
  height: 15.875rem;

  @media (max-width: 28rem) {
    padding: 0;
    width: 7.5rem;
    height: 8.407rem;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.305rem;
  gap: 0.305rem;
  width: 15.875rem;
  height: 15.875rem;

  @media (max-width: 28rem) {
    padding: 0.117rem;
    gap: 0.117rem;
    width: 7.5rem;
    height: 8.407rem;
  }
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
  height: 14.375rem;
  margin-right: 5rem;
  margin-left: -1rem;

  @media (max-width: 28rem) {
    margin-left: 0;
    margin-right: 0;
    gap: 0.75rem;
    width: calc(100% - 9rem); // Accounting for logo space
    height: auto;
    order: 2;
  }
`;

export const RealizacaoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.75rem;
  height: 12.063rem;

  @media (max-width: 28rem) {
    height: auto;
    order: 3;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.75rem;
  height: 3.813rem;

  @media (max-width: 28rem) {
    width: calc(100% - 9rem); // Accounting for logo space
    height: auto;
    order: 4; // Changed from 1 to 4
    left: 0;
    text-align: left;
  }
`;

export const FooterNote = styled.div`
  width: 100%;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);

  @media (max-width: 28rem) {
    padding: 0 1.5rem;
    height: auto;
    min-height: 2.5rem;
  }
`;

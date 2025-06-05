import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: #11034a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 5rem;
  z-index: 1000;

  @media (max-width: 28rem) {
    padding: 0.75rem 1rem;
  }
`;

export const Logo = styled.img`
  user-select: none;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 28rem) {
    display: none;
  }
`;

export const MobileNavigation = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 28rem) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 4rem);
    background: #11034a;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 0.25rem;
    }
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1.5rem;
  gap: 1.5rem;
  justify-content: center;
  position: relative;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;

const mobileLinkStyles = css`
  font-size: 1.25rem;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const NavLink = styled(Link)<{ $isMobile?: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:hover {
    color: #c1d0f8;
  }

  ${({ $isMobile }) => $isMobile && mobileLinkStyles}
`;

export const NavButton = styled.button<{ $isMobile?: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
  background: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0;

  &:hover {
    color: #c1d0f8;
  }

  ${({ $isMobile }) => $isMobile && mobileLinkStyles}
`;

export const AuthContainer = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ $isMobile }) =>
    $isMobile &&
    css`
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      margin-top: 2rem;
      align-items: center;
    `}

  @media (max-width: 28rem) {
    ${({ $isMobile }) => !$isMobile && "display: none;"}
  }
`;

export const LoginButton = styled.button<{ $isMobile?: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "auto")};

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const SignUpButton = styled(LoginButton)`
  background: #ffffff;
  color: #3161e8;

  &:hover {
    background: #f0f0f0;
  }
`;

export const UserContainer = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.25rem;
  padding: 0.75rem 1rem;
  border-radius: ${({ $isMobile }) => ($isMobile ? "0.2rem" : "2rem")};
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "auto")};
  justify-content: ${({ $isMobile }) => ($isMobile ? "center" : "flex-start")};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 28rem) {
    ${({ $isMobile }) => !$isMobile && "display: none;"}
  }
`;

export const ProfilePicture = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;

  ${UserContainer}:hover & {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const UserName = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
  text-transform: uppercase;
`;

export const BurgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 28rem) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    span {
      width: 2rem;
      height: 0.188rem;
      background: #ffffff;
      border-radius: 0.625rem;
      transition: all 0.3s ease-in-out;
      position: relative;
      transform-origin: 1px;

      &:first-child {
        transform: ${({ $isOpen }) =>
          $isOpen ? "rotate(45deg)" : "rotate(0)"};
      }

      &:nth-child(2) {
        opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
        transform: ${({ $isOpen }) =>
          $isOpen ? "translateX(20px)" : "translateX(0)"};
      }

      &:nth-child(3) {
        transform: ${({ $isOpen }) =>
          $isOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;

export const TimestampContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
`;

export const Timestamp = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  text-align: center;
`;

export const UserInfo = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  text-align: center;
`;

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Dropdown } from 'antd';

const pxToRem = (px: number) => `${px / 16}rem`;

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

    align-items: flex-start;
    padding-left: 1.5rem;
    text-align: left;
    gap: 1.25rem;
    
    top: 4rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 4rem);
    background: #11034a;
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    & a, & button {
      text-align: left !important;
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      color: #ffffff;
      font-weight: 700;
      font-size: 0.9rem;
      font-family: "Montserrat", sans-serif;
      display: block;
      width: 100%;
    }

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

  position: relative;

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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
`;

export const TelaBranca = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  background-color: #ffffff;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 70vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const BuscaContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  gap: 1.5rem;
`;

export const BuscaTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  overflow-y: auto;
  padding-right: 1rem;
`;

export const LupaWrapper = styled.img`
  max-width: 2rem;
  max-height: 2rem;
`;

export const XWrapper = styled.img`
  max-width: 1.5rem;
  max-height: 1.5rem;
`;

export const BotaoX = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BotaoLupa = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BuscaPrincipalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PesquisaTitulo = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 2rem;
  color: #000000;
  
  margin: 0;

  padding-top: 4rem;

  @media (max-width: 28rem) {
    padding-top: 0.1rem;
    font-size: 1.5rem;
  }
`;

export const BuscaBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PesquisaSubTitulo = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #0f0f21;
  margin: 0;
`;

export const PesquisaBody = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #0f0f2199;
  margin: 0;

  @media (max-width: 30rem) {
    padding-bottom: 0.5rem;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  gap: 1rem;
  width: 100%;
  @media (max-width: 30rem) {
    padding-bottom: 0.5rem;

  }
`;

export const SearchField = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  flex-grow: 1;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #a0a0a0;
  }

  @media (max-width: 30rem) {
    padding: 0.6rem 0.5rem;
  }
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(8)} ${pxToRem(20)};
  gap: ${pxToRem(8)};
  height: ${pxToRem(42)};
  border-radius: ${pxToRem(4)};
  background-color: #3161e8;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(15)};
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    background-color: #2e2989;
  }
`;

export const SearchButton = styled(AddButton)`
  height: auto;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const FormError = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: ${pxToRem(14)};
  color: red;
  margin-top: ${pxToRem(4)};
`;

export const UserResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 30rem) {
    gap: 1rem;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${pxToRem(32)};
  gap: ${pxToRem(24)};
  background: rgba(193, 208, 248, 0.2);
  border-radius: ${pxToRem(8)};
  width: 100%;
`;

export const UserCard = styled(InfoCard)`
  align-items: center;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const UserDisplayName = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 0.5rem;
`;

export const UserDetailText = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.3rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: ${pxToRem(16)};
  align-self: stretch;
`;

export const UserTagsContainer = styled(TagsContainer)`
  justify-content: center;
  margin-top: 0.5rem;
  gap: ${pxToRem(8)};
`;

export const CloseIcon = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const TagPill = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${pxToRem(8)} ${pxToRem(12)};
  gap: ${pxToRem(12)};
  background: #2e2989;
  border-radius: ${pxToRem(4)};
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(16)};
`;

export const UserTagPill = styled(TagPill)`
  background-color: #e2f0ff;
  color: #007bff;
  border: 1px solid #007bff;
  cursor: default;
  font-size: 0.85rem;
  padding: 0.3rem 0.6rem;
  gap: 0;

  ${CloseIcon} {
    display: none;
  }
`;

export const NoResultsMessage = styled.p`
  text-align: center;
  color: #888;
  font-size: 1.1rem;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px dashed #e0e0e0;
`;

export const MobileSearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
`;

export const MobileSearchHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

export const ExitSearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 30rem) {
    padding: 0rem 0rem;
  }
`;

export const AuthPlaceholder = styled.div`
  width: 180px;
  height: 38px;
  @media (max-width: 28rem) {
    width: 100%;
  }
`;


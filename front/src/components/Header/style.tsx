import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #11034a;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 0.75rem 5rem;
  gap: 1rem;
  flex-wrap: nowrap;
  height: 4rem;

  & > *:nth-child(1) {
    flex: 0 0 auto; // Logo section
  }

  & > div:nth-child(2) {
    flex: 1; // Navigation section
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & > *:nth-child(3) {
    flex: 0 0 auto; // User section
  }

  @media (max-width: 1280px) {
    padding: 0.75rem 1.5rem;
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    gap: 0.5rem;
  }
`;

export const NavigationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 1280px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const Logo = styled.img`
  width: auto;
  user-drag: none;
  -webkit-user-drag: none;
`;

export const NavLink = styled.a`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #cccccc;
  }

  @media (max-width: 1280px) {
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const NavButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #cccccc;
  }

  @media (max-width: 1280px) {
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const SolidButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: #ffffff;
  color: #3161e8;
  border-radius: 0.2rem;
  padding: 0.6rem 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 1280px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
  }
`;

export const LoginButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  border: 2px solid #ffffff;
  cursor: pointer;
  text-transform: uppercase;
  background: transparent;
  color: #ffffff;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1280px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: 2rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1280px) {
    padding: 0.4rem 0.6rem;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.5rem;
    gap: 0.4rem;
  }
`;

export const ProfilePicture = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;

  ${UserContainer}:hover & {
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1280px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const UserName = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;
  transition: color 0.2s ease;

  ${UserContainer}:hover & {
    color: #cccccc;
  }

  @media (max-width: 1280px) {
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1280px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

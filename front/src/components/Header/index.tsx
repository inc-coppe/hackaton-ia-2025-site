import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import LogoHackaton from "../../assets/Logo.png";
import {
  HeaderContainer,
  Logo,
  NavigationContainer,
  MobileNavigation,
  NavLink,
  NavButton,
  AuthContainer,
  LoginButton,
  SignUpButton,
  UserContainer,
  ProfilePicture,
  UserName,
  BurgerButton,
  MobileMenuContent,
  TimestampContainer,
  Timestamp,
  UserInfo,
  NavSection,
} from "./style";

interface User {
  id: string;
  name: string;
  email: string;
  profile_picture_url: string;
}

const sponsorItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.sponsor1.com"
      >
        Patrocinador 1
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.sponsor2.com"
      >
        Patrocinador 2
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.sponsor3.com"
      >
        Patrocinador 3
      </a>
    ),
  },
];

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const response = await fetch("http://localhost:8000/api/auth/user/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            const profileUrl = data.id
              ? `http://localhost:8000/api/profile-picture/${data.id}/`
              : null;
            setUser({ ...data, profile_picture_url: profileUrl });
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleUserClick = () => {
    navigate("/profile");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navigation = ({ isMobile = false }) => (
    <>
      <NavLink href="#inicio" $isMobile={isMobile}>
        Início
      </NavLink>
      <NavLink href="#cronograma" $isMobile={isMobile}>
        Cronograma
      </NavLink>
      <NavLink href="#desafios" $isMobile={isMobile}>
        Desafios
      </NavLink>
      <NavLink href="#materiais" $isMobile={isMobile}>
        Materiais
      </NavLink>
      <NavLink href="#regulamento" $isMobile={isMobile}>
        Regulamento
      </NavLink>
      <Dropdown menu={{ items: sponsorItems }} trigger={["hover"]}>
        <NavButton type="button" $isMobile={isMobile}>
          <Space>
            Patrocinadores
            <DownOutlined />
          </Space>
        </NavButton>
      </Dropdown>
    </>
  );

  const AuthSection = ({ isMobile = false }) =>
    user ? (
      <UserContainer onClick={handleUserClick} $isMobile={isMobile}>
        <ProfilePicture
          src={user.profile_picture_url}
          alt={`${user.name}'s profile`}
        />
        <UserName>{user.name.split(" ")[0]}</UserName>
      </UserContainer>
    ) : (
      <AuthContainer $isMobile={isMobile}>
        <LoginButton $isMobile={isMobile}>
          <Link to="/login">LOGIN</Link>
        </LoginButton>
        <SignUpButton $isMobile={isMobile}>
          <Link to="/register">INSCREVA-SE</Link>
        </SignUpButton>
      </AuthContainer>
    );

  return (
    <HeaderContainer>
      <Logo src={LogoHackaton} alt="Hackathon IA 2025" />

      <NavigationContainer>
        <Navigation />
      </NavigationContainer>

      <AuthSection />

      <BurgerButton onClick={toggleMenu} $isOpen={isMenuOpen}>
        <span />
        <span />
        <span />
      </BurgerButton>

      <MobileNavigation $isOpen={isMenuOpen}>
        <MobileMenuContent>
          <NavSection>
            <NavLink href="#inicio" $isMobile>
              Início
            </NavLink>
            <NavLink href="#cronograma" $isMobile>
              Cronograma
            </NavLink>
            <NavLink href="#desafios" $isMobile>
              Desafios
            </NavLink>
            <NavLink href="#materiais" $isMobile>
              Materiais
            </NavLink>
            <NavLink href="#regulamento" $isMobile>
              Regulamento
            </NavLink>
            <Dropdown menu={{ items: sponsorItems }} trigger={["click"]}>
              <NavButton type="button" $isMobile>
                <Space>
                  Patrocinadores
                  <DownOutlined />
                </Space>
              </NavButton>
            </Dropdown>
          </NavSection>
          <AuthSection isMobile />
          <TimestampContainer>
            <Timestamp>2025-05-14 02:09:44 UTC</Timestamp>
            <UserInfo>Login: franciscoflorencio</UserInfo>
          </TimestampContainer>
        </MobileMenuContent>
      </MobileNavigation>
    </HeaderContainer>
  );
};

export default Header;

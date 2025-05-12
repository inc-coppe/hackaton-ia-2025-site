import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  Logo,
  NavLink,
  NavButton,
  SolidButton,
  LoginButton,
  ProfilePicture,
  UserName,
  UserContainer,
  NavigationSection,
  AuthButtons,
} from "./style";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import LogoHackaton from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
  profile_picture: string;
}

const sponsorItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
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
        href="https://www.aliyun.com"
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
        href="https://www.luohanacademy.com"
      >
        Patrocinador 3
      </a>
    ),
  },
];

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
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
            // Construct the proxied URL
            const profileUrl = data.id
              ? `http://localhost:8000/api/profile-picture/${data.id}/`
              : null;
            setUser({
              ...data,
              profile_picture_url: profileUrl,
            });
            console.log("User data:", data);
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
  };

  return (
    <HeaderContainer>
      <Logo src={LogoHackaton} alt="Hackathon IA 2025" />

      <NavigationSection>
        <NavLink href="#inicio">Início</NavLink>
        <NavLink href="#cronograma">Cronograma</NavLink>
        <NavLink href="#desafios">Desafios</NavLink>
        <NavLink href="#materiais">Materiais</NavLink>
        <NavLink href="#regulamento">Regulamento</NavLink>
        <Dropdown menu={{ items: sponsorItems }} trigger={["hover"]}>
          <NavButton type="button">
            <Space>
              Patrocinadores
              <DownOutlined />
            </Space>
          </NavButton>
        </Dropdown>
      </NavigationSection>

      {user ? (
        <UserContainer onClick={handleUserClick}>
          <ProfilePicture
            src={user.profile_picture_url}
            alt={`${user.name}'s profile`}
          />
          <UserName>{user.name.split(" ")[0]}</UserName>
        </UserContainer>
      ) : (
        <AuthButtons>
          <LoginButton type="button">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/login"
            >
              Login
            </Link>
          </LoginButton>
          <SolidButton type="button">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/register"
            >
              Inscreva-se
            </Link>
          </SolidButton>
        </AuthButtons>
      )}
    </HeaderContainer>
  );
};

export default Header;

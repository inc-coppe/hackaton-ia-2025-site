import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Space, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import LogoHackaton from "../../assets/Logo.png";
import img from "../../assets/Lupa.png";
import img2 from "../../assets/Fechar.png";
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
  BurgerButton,
  MobileMenuContent,
  NavSection,
  BotaoLupa,
  LupaWrapper,
  Overlay,
  TelaBranca,
  BuscaContainer,
  BuscaPrincipalContainer,
  PesquisaTitulo,
  BotaoX,
  XWrapper,
  BuscaTextContainer,
  BuscaBodyContainer,
  PesquisaSubTitulo,
  PesquisaBody,
  SearchInputContainer,
  SearchField,
  SearchButton,
  FormError,
  UserResultsContainer,
  UserCard,
  UserAvatar,
  UserDisplayName,
  UserDetailText,
  UserTagsContainer,
  UserTagPill,
  NoResultsMessage,
  AddButton,
} from "./style";
import { FaSearch, FaRegUser } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  email: string;
  profile_picture_url: string;
}

interface SearchUserData {
  user_id: number;
  user_name: string;
  full_name: string | null;
  profile_picture_url: string;
  area_of_expertise: string | null;
  tags: string[];
  linkedin_profile: string | null;
  github_profile: string | null;
  email: string | null;
}

const AuthSection = ({
  isMobile = false,
  user,
  onUserClick,
  onSearchClick,
}: {
  isMobile?: boolean;
  user: User | null;
  onUserClick: () => void;
  onSearchClick: () => void;
}) =>
  user ? (
    <UserContainer $isMobile={isMobile}>
      <BotaoLupa onClick={onSearchClick}>
        <LupaWrapper src={img} alt="Buscar Participantes" />
      </BotaoLupa>
      <ProfilePicture
        src={user.profile_picture_url}
        alt={`${user.name}'s profile`}
        onClick={onUserClick}
      />
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

const sponsorItems: MenuProps["items"] = [
  { key: "1", label: <Link to="/patrocinador">Nossos Patrocinadores</Link> },
  { type: "divider" },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Patrocinador 2
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Patrocinador 3
      </a>
    ),
  },
];

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchUserData[] | null>(
    null,
  );
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchUsers = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setSearchResults(null);
      return;
    }

    setSearchLoading(true);
    setSearchError(null);
    setSearchResults(null);

    const token = localStorage.getItem("access_token");
    if (!token) {
      setSearchError("Token de acesso não encontrado para realizar a busca.");
      setSearchLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/users/search/?search=${encodeURIComponent(
          searchTerm,
        )}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (response.ok) {
        const data: SearchUserData[] = await response.json();
        setSearchResults(data);
      } else {
        const errorData = await response.json();
        setSearchError(errorData.detail || "Falha ao buscar usuários.");
        setSearchResults([]);
      }
    } catch (err) {
      console.error("Erro na busca de usuários:", err);
      setSearchError("Ocorreu um erro de rede ao buscar usuários.");
    } finally {
      setSearchLoading(false);
    }
  };

  const openUserProfile = (userId: number) => {
    setIsSearchModalOpen(false);
    navigate(`/profile/${userId}`);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const response = await fetch("http://localhost:8000/api/auth/user/", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.ok) {
            const data = await response.json();
            const profileUrl = data.id
              ? `http://localhost:8000/api/profile-picture/${data.id}/`
              : "";
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

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
    setSearchTerm("");
    setSearchResults(null);
    setSearchError(null);
  };

  const NavigationLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
      <NavLink to="/" onClick={onLinkClick}>
        Início
      </NavLink>
      <NavLink to="/cronograma" onClick={onLinkClick}>
        Cronograma
      </NavLink>
      <NavLink to="/desafios" onClick={onLinkClick}>
        Desafios
      </NavLink>
      <NavLink to="/materiais" onClick={onLinkClick}>
        Materiais
      </NavLink>
      <NavLink to="/regulamento" onClick={onLinkClick}>
        Regulamento
      </NavLink>
      <Dropdown menu={{ items: sponsorItems }} trigger={["hover"]}>
        <NavButton type="button">
          <Space>
            Patrocinadores <DownOutlined />
          </Space>
        </NavButton>
      </Dropdown>
    </>
  );

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo src={LogoHackaton} alt="Hackathon IA 2025" />
        </Link>

        <NavigationContainer>
          <NavigationLinks />
        </NavigationContainer>

        <AuthSection
          user={user}
          onUserClick={handleUserClick}
          onSearchClick={() => setIsSearchModalOpen(true)}
        />

        <BurgerButton onClick={toggleMenu} $isOpen={isMenuOpen}>
          <span />
          <span />
          <span />
        </BurgerButton>

        <MobileNavigation $isOpen={isMenuOpen}>
          <MobileMenuContent>
            <NavSection>
              <NavigationLinks onLinkClick={toggleMenu} />
            </NavSection>
            <AuthSection
              isMobile
              user={user}
              onUserClick={handleUserClick}
              onSearchClick={() => setIsSearchModalOpen(true)}
            />
          </MobileMenuContent>
        </MobileNavigation>
      </HeaderContainer>

      {isSearchModalOpen && (
        <Overlay onClick={closeSearchModal}>
          <TelaBranca onClick={(e) => e.stopPropagation()}>
            <BuscaContainer>
              <BuscaPrincipalContainer>
                <PesquisaTitulo>/BUSCAR</PesquisaTitulo>
                <BotaoX onClick={closeSearchModal}>
                  <XWrapper src={img2} alt="Fechar" />
                </BotaoX>
              </BuscaPrincipalContainer>

              <BuscaTextContainer>
                <BuscaBodyContainer>
                  <PesquisaSubTitulo>
                    Toda jornada é melhor quando é compartilhada.
                  </PesquisaSubTitulo>
                  <PesquisaBody>
                    Busque por nomes ou interesses e descubra pessoas.
                  </PesquisaBody>
                </BuscaBodyContainer>

                <form onSubmit={handleSearchUsers} style={{ width: "100%" }}>
                  <SearchInputContainer>
                    <SearchField
                      type="text"
                      placeholder="Buscar por nome, área ou tags..."
                      value={searchTerm}
                      onChange={handleSearchTermChange}
                      autoFocus
                    />
                    <SearchButton type="submit" disabled={searchLoading}>
                      {searchLoading ? (
                        "Buscando..."
                      ) : (
                        <>
                          <FaSearch /> Buscar
                        </>
                      )}
                    </SearchButton>
                  </SearchInputContainer>
                </form>

                {searchError && <FormError>{searchError}</FormError>}

                <UserResultsContainer>
                  {searchResults &&
                    searchResults.length > 0 &&
                    searchResults.map((foundUser) => (
                      <UserCard
                        key={foundUser.user_id}
                        onClick={() => openUserProfile(foundUser.user_id)}
                      >
                        <UserAvatar
                          src={foundUser.profile_picture_url || undefined}
                          alt={`Foto de ${foundUser.user_name}`}
                        />
                        <UserDisplayName>{foundUser.user_name}</UserDisplayName>
                        {foundUser.full_name && (
                          <UserDetailText>{foundUser.full_name}</UserDetailText>
                        )}
                        {foundUser.tags && foundUser.tags.length > 0 && (
                          <UserTagsContainer>
                            {foundUser.tags.map((tag) => (
                              <UserTagPill key={tag}>{tag}</UserTagPill>
                            ))}
                          </UserTagsContainer>
                        )}
                        <AddButton
                          style={{ marginTop: "1rem", width: "auto" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            openUserProfile(foundUser.user_id);
                          }}
                        >
                          <FaRegUser style={{ marginRight: "0.5rem" }} /> Ver
                          Perfil
                        </AddButton>
                      </UserCard>
                    ))}
                </UserResultsContainer>

                {searchResults &&
                  searchResults.length === 0 &&
                  !searchLoading && (
                    <NoResultsMessage>
                      Nenhum usuário encontrado com o termo "{searchTerm}".
                    </NoResultsMessage>
                  )}
                {searchResults === null && !searchLoading && !searchError && (
                  <NoResultsMessage>
                    Digite algo para encontrar outros participantes.
                  </NoResultsMessage>
                )}
              </BuscaTextContainer>
            </BuscaContainer>
          </TelaBranca>
        </Overlay>
      )}
    </>
  );
};

export default Header;

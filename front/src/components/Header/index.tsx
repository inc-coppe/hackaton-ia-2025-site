import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
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
  MobileSearchContainer,
  MobileSearchHeader,
  ExitSearchButton,
  AuthPlaceholder,
} from "./style";

const eMobile = window.innerWidth <= 768;

interface User {
  id: string;
  name: string;
  email: string;
  profile_picture: string;
  profile_picture_url: string;
  google_profile_picture_url?: string;
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

const getAvatarUrl = (user: User | null): string => {
  if (!user) return "/default-avatar.png";
  if (user.profile_picture_url) return user.profile_picture_url;
  if (
    user.profile_picture &&
    user.profile_picture.startsWith("http") &&
    user.profile_picture.includes("googleusercontent")
  )
    return user.profile_picture;
  if (user.google_profile_picture_url) return user.google_profile_picture_url;
  return "/default-avatar.png";
};

const AuthSection = ({
  isMobile = false,
  user,
  authLoading,
  onUserClick,
  onSearchClick,
}: {
  isMobile?: boolean;
  user: User | null;
  authLoading: boolean;
  onUserClick: () => void;
  onSearchClick: () => void;
}) => {
  if (authLoading) {
    return <AuthPlaceholder />;
  }

  return user ? (
    <UserContainer $isMobile={isMobile}>
      <BotaoLupa onClick={onSearchClick}>
        <LupaWrapper src={img} alt="Buscar Participantes" />
      </BotaoLupa>
      <ProfilePicture
        src={getAvatarUrl(user)}
        alt={`${user.name}'s profile`}
        onClick={onUserClick}
        style={{
          cursor: "pointer",
        }}
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
};

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchUserData[] | null>(
    null,
  );
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Refetch user on mount and whenever the profile page triggers a change (using a storage event)
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
            setUser({
              ...data,
              profile_picture_url:
                data.profile_picture_url || data.profile_picture || "",
              google_profile_picture_url: data.google_profile_picture_url,
            });
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        } finally {
          setAuthLoading(false);
        }
      } else {
        setAuthLoading(false);
      }
    };

    fetchUser();

    // Listen for profile image update event (using localStorage)
    const onStorage = (e: StorageEvent) => {
      if (e.key === "profile_picture_updated") {
        fetchUser();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

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
      setSearchError("Token de acesso não encontrado.");
      setSearchLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/users/search/?search=${encodeURIComponent(searchTerm)}`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      if (response.ok) {
        setSearchResults(await response.json());
      } else {
        const errorData = await response.json();
        setSearchError(errorData.detail || "Falha ao buscar usuários.");
        setSearchResults([]);
      }
    } catch (err) {
      setSearchError("Ocorreu um erro de rede.");
    } finally {
      setSearchLoading(false);
    }
  };

  const cleanUpSearch = () => {
    setSearchTerm("");
    setSearchResults(null);
    setSearchError(null);
  };

  const openUserProfile = (userId: number) => {
    setIsDesktopSearchOpen(false);
    setIsMobileSearchActive(false);
    cleanUpSearch();
    navigate(`/profile/${userId}`);
  };

  const handleUserClick = () => {
    navigate("/profile");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openMobileSearch = () => {
    setIsMenuOpen(false);
    setIsMobileSearchActive(true);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchActive(false);
    cleanUpSearch();
  };

  const closeDesktopSearch = () => {
    setIsDesktopSearchOpen(false);
    cleanUpSearch();
  };

  const handleClickPatrocinador = () => {
    navigate("/", { state: { scrollTo: "secao-patrocinadores" } });
  };

  const NavigationLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
      <NavLink to="/" onClick={onLinkClick} state={{ scrollTarget: "top" }}>
        Início
      </NavLink>
      <NavLink
        to="/cronograma"
        onClick={onLinkClick}
        state={{ scrollTarget: "top" }}
      >
        Cronograma
      </NavLink>
      <NavLink
        to="/desafios"
        onClick={onLinkClick}
        state={{ scrollTarget: "top" }}
      >
        Desafios
      </NavLink>
      <NavLink
        to="/materiais"
        onClick={onLinkClick}
        state={{ scrollTarget: "top" }}
      >
        Materiais
      </NavLink>
      <NavLink
        to="/regulamento"
        onClick={onLinkClick}
        state={{ scrollTarget: "top" }}
      >
        Regulamento
      </NavLink>
      <Dropdown
        trigger={[eMobile ? "click" : "hover"]}
        onOpenChange={(open) => setIsDropdownOpen(open)}
        dropdownRender={() => (
          <div
            style={{
              top: "100%",
              backgroundColor: "#110249E5",
              borderRadius: 8,
              padding: "1.5rem 2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "3rem",
            }}
          >
            <NavLink to="/patrocinador" onClick={onLinkClick}>
              SEJA UM PATROCINADOR
            </NavLink>
            <button
              onClick={handleClickPatrocinador}
              style={{
                background: "none",
                border: "none",
                display: "block",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.9rem",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "left",
                width: "100%",
                padding: 0,
                margin: 0,
              }}
            >
              PATROCINADORES DO EVENTO
            </button>
          </div>
        )}
      >
        <NavButton
          type="button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
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
          authLoading={authLoading}
          onUserClick={handleUserClick}
          onSearchClick={() => setIsDesktopSearchOpen(true)}
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
              authLoading={authLoading}
              onUserClick={handleUserClick}
              onSearchClick={openMobileSearch}
            />
          </MobileMenuContent>
        </MobileNavigation>
      </HeaderContainer>

      {isDesktopSearchOpen && (
        <Overlay onClick={closeDesktopSearch}>
          <TelaBranca onClick={(e) => e.stopPropagation()}>
            <BuscaContainer>
              <BuscaPrincipalContainer>
                <PesquisaTitulo>/BUSCAR</PesquisaTitulo>
                <BotaoX onClick={closeDesktopSearch}>
                  <XWrapper src={img2} alt="Fechar" />
                </BotaoX>
              </BuscaPrincipalContainer>
              <BuscaTextContainer>
                <SearchInterface
                  searchTerm={searchTerm}
                  onSearchTermChange={handleSearchTermChange}
                  onSearchSubmit={handleSearchUsers}
                  searchLoading={searchLoading}
                  searchError={searchError}
                  searchResults={searchResults}
                  onUserProfileClick={openUserProfile}
                />
              </BuscaTextContainer>
            </BuscaContainer>
          </TelaBranca>
        </Overlay>
      )}

      {isMobileSearchActive && (
        <MobileSearchContainer>
          <MobileSearchHeader>
            <ExitSearchButton onClick={closeMobileSearch}>
              <IoArrowBack />
            </ExitSearchButton>
            <PesquisaTitulo>Buscar Participantes</PesquisaTitulo>
          </MobileSearchHeader>
          <SearchInterface
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
            onSearchSubmit={handleSearchUsers}
            searchLoading={searchLoading}
            searchError={searchError}
            searchResults={searchResults}
            onUserProfileClick={openUserProfile}
          />
        </MobileSearchContainer>
      )}
    </>
  );
};

const SearchInterface = (props: {
  searchTerm: string;
  onSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: FormEvent) => void;
  searchLoading: boolean;
  searchError: string | null;
  searchResults: SearchUserData[] | null;
  onUserProfileClick: (userId: number) => void;
}) => (
  <>
    <BuscaBodyContainer>
      <PesquisaSubTitulo>
        Toda jornada é melhor quando é compartilhada.
      </PesquisaSubTitulo>
      <PesquisaBody>
        Busque por nomes ou interesses e descubra pessoas.
      </PesquisaBody>
    </BuscaBodyContainer>

    <form onSubmit={props.onSearchSubmit} style={{ width: "100%" }}>
      <SearchInputContainer>
        <SearchField
          type="text"
          placeholder="Buscar por nome, área ou tags..."
          value={props.searchTerm}
          onChange={props.onSearchTermChange}
          autoFocus
        />
        <SearchButton type="submit" disabled={props.searchLoading}>
          {props.searchLoading ? (
            "Buscando..."
          ) : (
            <div
              style={{
                padding: "0rem 0rem",
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
              }}
            >
              <FaSearch /> Buscar
            </div>
          )}
        </SearchButton>
      </SearchInputContainer>
    </form>

    {props.searchError && <FormError>{props.searchError}</FormError>}

    <UserResultsContainer>
      {props.searchResults?.length > 0 &&
        props.searchResults.map((foundUser) => (
          <UserCard
            key={foundUser.user_id}
            onClick={() => props.onUserProfileClick(foundUser.user_id)}
          >
            <UserAvatar
              src={foundUser.profile_picture_url || undefined}
              alt={`Foto de ${foundUser.user_name}`}
            />
            <UserDisplayName>{foundUser.user_name}</UserDisplayName>
            {foundUser.full_name && (
              <UserDetailText>{foundUser.full_name}</UserDetailText>
            )}
            {foundUser.tags?.length > 0 && (
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
                props.onUserProfileClick(foundUser.user_id);
              }}
            >
              <FaRegUser style={{ marginRight: "0.5rem" }} /> Ver Perfil
            </AddButton>
          </UserCard>
        ))}
    </UserResultsContainer>

    {props.searchResults?.length === 0 && !props.searchLoading && (
      <NoResultsMessage>
        Nenhum usuário encontrado com o termo "{props.searchTerm}".
      </NoResultsMessage>
    )}
    {props.searchResults === null &&
      !props.searchLoading &&
      !props.searchError && (
        <NoResultsMessage>
          Digite algo para encontrar outros participantes.
        </NoResultsMessage>
      )}
  </>
);

export default Header;

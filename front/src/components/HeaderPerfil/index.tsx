import React, {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
} from "react";

import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Space, MenuProps } from "antd"; // Importar MenuProps para tipagem
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
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
  UserName,
  BurgerButton,
  MobileMenuContent,
  TimestampContainer,
  Timestamp,
  UserInfo,
  NavSection,
  LupaWrapper,
  estiloTela,
  BotaoLupa,
  Overlay,
  TelaBranca,
  BuscaContainer,
  PesquisaTitulo,
  BuscaTextContainer,
  PesquisaSubTitulo,
  PesquisaBody,
  BuscaBodyContainer,
  XWrapper,
  BotaoX,
  BuscaPrincipalContainer,
  AvatarPesquisado,
  UsuarioDisplayNome,
} from "./style";
import { SearchButton, SearchField, SearchInputContainer } from "../../pages/Profile/style";
import { FaSearch } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  email: string;
  profile_picture_url: string;
}

// Tipagem para os itens do menu do Ant Design
const sponsorItems: MenuProps["items"] = [
  // Adicionando tipagem
  {
    key: "1", // Chave única para o novo item
    label: (
      // Link para a sua página interna /patrocinador
      <Link to="/patrocinador">Nossos Patrocinadores</Link>
    ),
  },
  {
    type: "divider", // Adiciona um separador visual
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

import { FaRegUser } from "react-icons/fa6";
import {FormError, UserResultsContainer, UserCard, UserAvatar, UserDisplayName, UserDetailText,UserTagsContainer,
  NoResultsMessage, AddButton, UserTagPill,
  
} from '../../pages/Profile/style';
interface SearchUserData {
  user_id: number;
  user_name: string;
  full_name: string | null;
  profile_picture_url: string;
  area_of_expertise: string | null;
  tags: string[];
  linkedin_profile: string | null; // Adicionado
  github_profile: string | null; // Adicionado
  email: string | null; // Adicionado, será null se share_contacts for false
}

const HeaderPerfil = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

    
  const [aberto, setAberto] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchUserData[] | null>(
      null, );
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [selectedUser, setSelectedUser] = useState<SearchUserData | null>(null);

  const abrirTela = () => {
      setAberto(true);
  };

  const fecharTela = () => {
      setAberto(false);
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
          `http://localhost:8000/api/users/search/?search=${encodeURIComponent(searchTerm)}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (response.ok) {
          const data: SearchUserData[] = await response.json();
          setSearchResults(data);
        } else {
          const errorData = await response.json();
          setSearchError(
            errorData.detail || "Falha ao buscar usuários. Tente novamente.",
          );
          setSearchResults([]);
        }
      } catch (err) {
        console.error("Erro na busca de usuários:", err);
        setSearchError("Ocorreu um erro de rede ao buscar usuários.");
      } finally {
        setSearchLoading(false);
      }
    };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
      };

  const openUserProfileModal = async (userId: number) => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("Você precisa estar logado para ver perfis.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/users/${userId}/profile/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.ok) {
        const data: SearchUserData = await response.json();
        setSelectedUser(data); // Define o usuário para ser exibido no modal
      } else {
        const errorData = await response.json();
        alert(
          `Erro ao carregar perfil: ${errorData.detail || "Perfil não encontrado."}`,
        );
      }
    } catch (error) {
      console.error("Erro ao buscar perfil para modal:", error);
      alert("Erro de rede ao carregar o perfil.");
    }
  };
        

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

  const Navigation = () => (
    <>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/cronograma">Cronograma</NavLink>
      <NavLink to="/desafios">Desafios</NavLink>
      <NavLink to="/materiais">Materiais</NavLink>
      <NavLink to="/regulamento">Regulamento</NavLink>
      <Dropdown menu={{ items: sponsorItems }} trigger={["hover"]}>
        <NavButton type="button">
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
        <SearchOutlined style={{ color: "white", fontSize: "1.5rem" }} />
        <ProfilePicture
          src={user.profile_picture_url}
          alt={`${user.name}'s profile`}
        />
      </UserContainer>
    ) : (
      <AuthContainer $isMobile={isMobile}>
        
        <BotaoLupa onClick={abrirTela}>
            <LupaWrapper src={img} alt="Card Image" />
        </BotaoLupa>

        {aberto && (        
          <>
            <Overlay>
                <TelaBranca>
                    <BuscaContainer>
                        <BuscaTextContainer>
                            <BuscaPrincipalContainer>
                                <PesquisaTitulo>
                                    /BUSCAR PARTICIPANTES
                                </PesquisaTitulo>   
                                <BotaoX onClick={fecharTela}>
                                    <XWrapper src={img2} alt="Fechar Card" />
                                </BotaoX>                             
                            </BuscaPrincipalContainer>                     

                            <BuscaBodyContainer>
                                <PesquisaSubTitulo>
                                    Toda jornada é melhor quando é compartilhada.
                                </PesquisaSubTitulo>
                                <PesquisaBody>
                                    Busque por nomes ou interesses e descubra pessoas com quem você pode trocar, aprender e crescer junto.
                                </PesquisaBody>
                            </BuscaBodyContainer>

                            <form onSubmit={handleSearchUsers} style={{ width: "100% "}}>
                              <SearchInputContainer>
                                <SearchField
                                  type="text"
                                  placeholder="Buscar por nome, área ou tags..."
                                  value={searchTerm}
                                  onChange={handleSearchTermChange}                                                                
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

                            {searchResults && searchResults.length > 0 && (
                              <UserResultsContainer>
                                {searchResults.map((user) => (
                                  <UserCard style={{ gap: '1rem' }}
                                    key={user.user_id}
                                    onClick={() => openUserProfileModal(user.user_id)}
                                  >
                                    <AvatarPesquisado>
                                      src={user.profile_picture_url || undefined}
                                      alt={`Foto de perfil de ${user.user_name}`}
                                    </AvatarPesquisado>
                                    <UserDisplayName>{user.user_name}</UserDisplayName>
                                    {user.full_name && (
                                      <UsuarioDisplayNome>{user.full_name}</UsuarioDisplayNome>
                                    )}                                  
                                    {user.tags && user.tags.length > 0 && (
                                      <UserTagsContainer>
                                        {user.tags.map((tag) => (
                                          <UserTagPill key={tag}>{tag}</UserTagPill>
                                        ))}
                                      </UserTagsContainer>
                                    )}
                                    {/* Removido o botão de seguir */}
                                    <AddButton
                                      style={{ marginTop: "1rem", width: "auto" }}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        openUserProfileModal(user.user_id);
                                      }}
                                    >
                                      <FaRegUser style={{ marginRight: "0.5rem" }} /> Ver
                                      Perfil
                                    </AddButton>
                                  </UserCard>
                                ))}
                              </UserResultsContainer>
                            )}
            
                            {searchResults &&
                              searchResults.length === 0 &&
                              !searchLoading &&
                              !searchError && (
                                <NoResultsMessage>
                                  Nenhum usuário encontrado com o termo de busca "
                                  {searchTerm}".
                                </NoResultsMessage>
                              )}
                            {searchResults === null &&
                              !searchLoading &&
                              !searchError &&
                              searchTerm === "" && (
                                <NoResultsMessage>
                                  Digite algo na barra de busca acima para encontrar
                                  usuários.
                                </NoResultsMessage>
                              )}

                        </BuscaTextContainer>       
                    </BuscaContainer>
                </TelaBranca>
            </Overlay>
          </>
        )}

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
      <Link to="/">
        <Logo src={LogoHackaton} alt="Hackathon IA 2025" />
      </Link>

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
            <NavLink to="/" onClick={toggleMenu} $isMobile>
              Início
            </NavLink>
            <NavLink to="/cronograma" onClick={toggleMenu} $isMobile>
              Cronograma
            </NavLink>
            <NavLink to="/desafios" onClick={toggleMenu} $isMobile>
              Desafios
            </NavLink>
            <NavLink to="/materiais" onClick={toggleMenu} $isMobile>
              Materiais
            </NavLink>
            <NavLink to="/regulamento" onClick={toggleMenu} $isMobile>
              Regulamento
            </NavLink>
            {/* O Dropdown agora está diretamente aqui, sem o NavLink em volta */}
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
        </MobileMenuContent>
      </MobileNavigation>
    </HeaderContainer>
  );
};

export default HeaderPerfil;

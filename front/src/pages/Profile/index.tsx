// index.tsx
import React, {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
} from "react";
// Adicionado FaRegUser para ícone de perfil na busca, FaExternalLink para links
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSearch,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoClose, IoPencil } from "react-icons/io5";

import {
  PerfilContainer,
  ProfileBanner,
  ProfileImage,
  TitleContainer,
  UserName,
  ButtonsContainer,
  SocialButton,
  PageContent,
  InfoCard,
  TextContent,
  CardTitle,
  TextBlock,
  CardBodyText,
  AddTagContainer,
  TagInput,
  AddButton,
  TagsContainer,
  TagPill,
  CloseIcon,
  EditButton,
  FormRow,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  ActionButtonsContainer,
  SaveButton,
  FormError,
  SearchInputContainer,
  SearchField,
  SearchButton,
  UserResultsContainer,
  UserCard,
  UserAvatar,
  UserDisplayName,
  UserDetailText,
  UserTagsContainer,
  UserTagPill,
  NoResultsMessage,
  // Novos imports para o modal de perfil público
  ModalOverlay,
  ModalContent,
  CloseModalButton,
  PublicProfileSocialLink,
  PublicProfileHeader,
  PublicProfileInfoSection,
  PublicProfileSectionTitle,
  PublicProfileDetail,
} from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaRegUser } from "react-icons/fa6";

// Definindo a interface para os dados do perfil do USUÁRIO LOGADO
interface UserProfileData {
  email: string;
  user_name: string; // Corresponde a 'name' do CustomUser no backend
  user_profile_picture_url: string;
  full_name: string | null;
  birth_date: string | null;
  linkedin_profile: string | null;
  github_profile: string | null;
  education_level: string | null;
  education_level_display: string | null;
  institution: string | null;
  phone: string | null;
  area_of_expertise: string | null;
  portfolio_url: string | null;
  special_needs: string | null;
  motivation: string[];
  accepted_terms: boolean;
  share_contacts: boolean; // Importante para controlar a visibilidade do email/telefone
  tags: string[];
  followers_count: number; // Mantenha para o perfil próprio, mas será desconsiderado na busca
  following_count: number; // Mantenha para o perfil próprio, mas será desconsiderado na busca
  form_completed?: boolean;
}

// Interface para os resultados da busca (UserSearchSerializer)
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

const EDUCATION_CHOICES = [
  { value: "EMI", label: "Ensino Médio Incompleto" },
  { value: "EMC", label: "Ensino Médio Completo" },
  { value: "GC", label: "Graduação Completa" },
  { value: "GI", label: "Graduação Incompleta" },
  { value: "PGC", label: "Pós-Graduação Completa" },
  { value: "PGI", label: "Pós-Graduação Incompleta" },
  { value: "MC", label: "Mestrado Completo" },
  { value: "MI", label: "Mestrado Incompleto" },
  { value: "DC", label: "Doutorado Completo" },
  { value: "DI", label: "Doutorado Incompleto" },
  { value: "PDC", label: "Pós-Doutorado Completo" },
  { value: "PDI", label: "Pós-Doutorado Incompleto" },
];

function Profile() {
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const [editableProfile, setEditableProfile] = useState<
    Partial<UserProfileData>
  >({});
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchUserData[] | null>(
    null,
  );
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Estado para controlar o modal de perfil público
  const [selectedUser, setSelectedUser] = useState<SearchUserData | null>(null);

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setError("Token de acesso não encontrado.");
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/profile/me/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data: UserProfileData = await response.json();
        setUserProfile(data);
        setEditableProfile({ ...data });
        setTags(data.tags || []);
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Falha ao buscar os dados do perfil.");
      }
    } catch (err) {
      setError("Ocorreu um erro de rede.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleInputChange = (
    e: ChangeChangeEvemChangeEventType<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setEditableProfile((prev) => ({ ...prev, [name]: checked }));
    } else {
      setEditableProfile((prev) => ({ ...prev, [name]: value }));
    }
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!editableProfile.user_name?.trim())
      errors.user_name = "Nome de usuário (exibição) é obrigatório.";
    if (!editableProfile.full_name?.trim())
      errors.full_name = "Nome completo é obrigatório.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const token = localStorage.getItem("access_token");
    if (!userProfile || !token) return;

    const profileDataToUpdate: Partial<UserProfileData> = {
      ...editableProfile,
      tags,
    };

    const user_name_to_send = profileDataToUpdate.user_name;
    delete profileDataToUpdate.user_name;

    delete profileDataToUpdate.email;
    delete profileDataToUpdate.user_profile_picture_url;
    delete profileDataToUpdate.education_level_display;
    delete profileDataToUpdate.followers_count;
    delete profileDataToUpdate.following_count;
    delete profileDataToUpdate.form_completed;
    // @ts-ignore
    delete profileDataToUpdate.created_at;
    // @ts-ignore
    delete profileDataToUpdate.updated_at;

    try {
      const response = await fetch("http://localhost:8000/api/profile/me/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...profileDataToUpdate,
          user_name: user_name_to_send,
        }),
      });

      const responseData = await response.json();
      console.log("Response from profile update:", responseData);

      if (response.ok) {
        const updatedData: UserProfileData = responseData;
        setUserProfile(updatedData);
        setEditableProfile({ ...updatedData });
        setTags(updatedData.tags || []);
        setIsEditing(false);
        setFormErrors({});
        alert("Perfil atualizado com sucesso!");
      } else {
        if (responseData && typeof responseData === "object") {
          const backendErrors: Record<string, string> = {};
          for (const key in responseData) {
            if (Array.isArray(responseData[key])) {
              backendErrors[key] = responseData[key].join(" ");
            } else {
              backendErrors[key] = String(responseData[key]);
            }
          }
          setFormErrors(backendErrors);
        }
        alert(
          `Falha ao atualizar o perfil: ${
            responseData.detail || JSON.stringify(responseData)
          }`,
        );
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro de rede ao atualizar o perfil.");
    }
  };

  const handleUpdateTagsOnly = async (newTagsList: string[]) => {
    const token = localStorage.getItem("access_token");
    if (!userProfile || !token) return;

    const originalTags = [...tags];
    setTags(newTagsList);

    try {
      const response = await fetch("http://localhost:8000/api/profile/me/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ tags: newTagsList }),
      });
      if (response.ok) {
        const updatedData: UserProfileData = await response.json();
        setUserProfile((prev) => ({ ...prev!, tags: updatedData.tags }));
        setEditableProfile((prev) => ({ ...prev, tags: updatedData.tags }));
      } else {
        setTags(originalTags);
        alert("Não foi possível salvar suas tags. Tente novamente.");
      }
    } catch (error) {
      setTags(originalTags);
      console.error("Erro ao atualizar tags:", error);
      alert("Erro de rede ao atualizar as tags.");
    }
  };

  const handleAddTag = () => {
    const trimmedTag = newTag.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      const newTagsList = [...tags, trimmedTag];
      setNewTag("");
      if (isEditing) {
        setTags(newTagsList);
        setEditableProfile((prev) => ({ ...prev, tags: newTagsList }));
      } else {
        handleUpdateTagsOnly(newTagsList);
      }
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const newTagsList = tags.filter((tag) => tag !== tagToRemove);
    if (isEditing) {
      setTags(newTagsList);
      setEditableProfile((prev) => ({ ...prev, tags: newTagsList }));
    } else {
      handleUpdateTagsOnly(newTagsList);
    }
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTag();
    }
  };

  const toggleEditMode = () => {
    if (isEditing && userProfile) {
      setEditableProfile({ ...userProfile });
      setTags(userProfile.tags || []);
      setFormErrors({});
    }
    setIsEditing(!isEditing);
  };

  // Funções para a busca de usuários
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

  // Funções para o modal de perfil público
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

  const closeUserProfileModal = () => {
    setSelectedUser(null); // Limpa o usuário selecionado para fechar o modal
  };

  if (loading) return <p>Carregando perfil...</p>;
  if (error || !userProfile)
    return <p>{error || "Não foi possível carregar o perfil."}</p>;

  const displayProfile = isEditing ? editableProfile : userProfile;

  return (
    <>
      <Header />
      <PerfilContainer>
        <ProfileBanner>
          <ProfileImage
            src={displayProfile.user_profile_picture_url || undefined}
            alt={`Foto de perfil de ${displayProfile.user_name}`}
          />
          <TitleContainer>
            <UserName>
              {displayProfile.user_name || userProfile.user_name}
            </UserName>
            <ButtonsContainer>
              {isEditing ? (
                <EditButton onClick={toggleEditMode}>
                  Cancelar Edição
                </EditButton>
              ) : (
                <EditButton onClick={toggleEditMode}>
                  <IoPencil style={{ marginRight: "0.5rem" }} /> Editar Perfil
                </EditButton>
              )}
              {displayProfile.linkedin_profile && !isEditing && (
                <SocialButton
                  href={displayProfile.linkedin_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> <span>LinkedIn</span>
                </SocialButton>
              )}
              {displayProfile.github_profile && !isEditing && (
                <SocialButton
                  href={displayProfile.github_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> <span>GitHub</span>
                </SocialButton>
              )}
              {!isEditing && (
                <SocialButton href={`mailto:${displayProfile.email}`}>
                  <FaEnvelope /> <span>Email</span>
                </SocialButton>
              )}
            </ButtonsContainer>
          </TitleContainer>
        </ProfileBanner>

        <PageContent>
          {isEditing ? (
            <InfoCard
              as="form"
              onSubmit={handleUpdateProfile}
              style={{ width: "100%" }}
            >
              <CardTitle>/EDITAR PERFIL</CardTitle>
              <FormRow>
                <FormLabel htmlFor="user_name">
                  Nome de Usuário (Exibição):
                </FormLabel>
                <FormInput
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={editableProfile.user_name || ""}
                  onChange={handleInputChange}
                />
                {formErrors.user_name && (
                  <FormError>{formErrors.user_name}</FormError>
                )}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="full_name">Nome Completo:</FormLabel>
                <FormInput
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={editableProfile.full_name || ""}
                  onChange={handleInputChange}
                />
                {formErrors.full_name && (
                  <FormError>{formErrors.full_name}</FormError>
                )}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="linkedin_profile">
                  LinkedIn Profile URL:
                </FormLabel>
                <FormInput
                  type="url"
                  id="linkedin_profile"
                  name="linkedin_profile"
                  value={editableProfile.linkedin_profile || ""}
                  onChange={handleInputChange}
                />
                {formErrors.linkedin_profile && (
                  <FormError>{formErrors.linkedin_profile}</FormError>
                )}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="github_profile">
                  GitHub Profile URL:
                </FormLabel>
                <FormInput
                  type="url"
                  id="github_profile"
                  name="github_profile"
                  value={editableProfile.github_profile || ""}
                  onChange={handleInputChange}
                />
                {formErrors.github_profile && (
                  <FormError>{formErrors.github_profile}</FormError>
                )}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="area_of_expertise">
                  Área de Especialidade:
                </FormLabel>
                <FormInput
                  type="text"
                  id="area_of_expertise"
                  name="area_of_expertise"
                  value={editableProfile.area_of_expertise || ""}
                  onChange={handleInputChange}
                />
                {formErrors.area_of_expertise && (
                  <FormError>{formErrors.area_of_expertise}</FormError>
                )}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="education_level">
                  Nível de Escolaridade:
                </FormLabel>
                <FormSelect
                  id="education_level"
                  name="education_level"
                  value={editableProfile.education_level || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione...</option>
                  {EDUCATION_CHOICES.map((choice) => (
                    <option key={choice.value} value={choice.value}>
                      {choice.label}
                    </option>
                  ))}
                </FormSelect>
                {formErrors.education_level && (
                  <FormError>{formErrors.education_level}</FormError>
                )}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="institution">
                  Instituição de Ensino:
                </FormLabel>
                <FormInput
                  type="text"
                  id="institution"
                  name="institution"
                  value={editableProfile.institution || ""}
                  onChange={handleInputChange}
                />
                {formErrors.institution && (
                  <FormError>{formErrors.institution}</FormError>
                )}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="phone">Telefone:</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={editableProfile.phone || ""}
                  onChange={handleInputChange}
                />
                {formErrors.phone && <FormError>{formErrors.phone}</FormError>}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="portfolio_url">URL do Portfólio:</FormLabel>
                <FormInput
                  type="url"
                  id="portfolio_url"
                  name="portfolio_url"
                  value={editableProfile.portfolio_url || ""}
                  onChange={handleInputChange}
                />
                {formErrors.portfolio_url && (
                  <FormError>{formErrors.portfolio_url}</FormError>
                )}
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="special_needs">
                  Necessidades Especiais (opcional):
                </FormLabel>
                <FormTextarea
                  id="special_needs"
                  name="special_needs"
                  value={editableProfile.special_needs || ""}
                  onChange={handleInputChange}
                />
              </FormRow>
              <FormRow>
                <FormLabel htmlFor="share_contacts">
                  <input
                    type="checkbox"
                    id="share_contacts"
                    name="share_contacts"
                    checked={editableProfile.share_contacts || false}
                    onChange={handleInputChange}
                  />
                  Compartilhar contatos (email, telefone) no perfil público
                </FormLabel>
              </FormRow>
              <ActionButtonsContainer>
                <SaveButton type="submit">Salvar Alterações</SaveButton>
              </ActionButtonsContainer>
            </InfoCard>
          ) : (
            <>
              <InfoCard>
                <TextContent>
                  <CardTitle>/INTERESSES</CardTitle>
                  <TextBlock>
                    <CardBodyText>
                      Adicione tags ao seu perfil para destacar seus interesses,
                      conhecimentos ou áreas que quer explorar durante o evento.
                    </CardBodyText>
                    <CardBodyText secondary>
                      Elas facilitam conexões com pessoas que compartilham dos
                      mesmos temas.
                    </CardBodyText>
                  </TextBlock>
                </TextContent>
                <AddTagContainer>
                  <TagInput
                    type="text"
                    placeholder="Digite uma tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={handleInputKeyPress}
                  />
                  <AddButton onClick={handleAddTag}>Adicionar</AddButton>
                </AddTagContainer>
                <TagsContainer>
                  {tags.map((tag) => (
                    <TagPill key={tag}>
                      <span>{tag}</span>
                      <CloseIcon onClick={() => handleRemoveTag(tag)}>
                        <IoClose />
                      </CloseIcon>
                    </TagPill>
                  ))}
                </TagsContainer>
              </InfoCard>

              <InfoCard>
                <TextContent>
                  <CardTitle>/PROCURE USUÁRIOS</CardTitle>
                  <TextBlock>
                    <CardBodyText>
                      Encontre outros participantes por nome de usuário, nome
                      completo, área de especialidade ou tags para expandir sua
                      rede.
                    </CardBodyText>
                    <CardBodyText secondary>
                      Clique no perfil para ver detalhes de contato!
                    </CardBodyText>
                  </TextBlock>
                </TextContent>
                <form onSubmit={handleSearchUsers} style={{ width: "100%" }}>
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
                      <UserCard
                        key={user.user_id}
                        onClick={() => openUserProfileModal(user.user_id)}
                      >
                        <UserAvatar
                          src={user.profile_picture_url || undefined}
                          alt={`Foto de perfil de ${user.user_name}`}
                        />
                        <UserDisplayName>{user.user_name}</UserDisplayName>
                        {user.full_name && (
                          <UserDetailText>{user.full_name}</UserDetailText>
                        )}
                        {user.area_of_expertise && (
                          <UserDetailText>
                            {user.area_of_expertise}
                          </UserDetailText>
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
              </InfoCard>
            </>
          )}
        </PageContent>
      </PerfilContainer>
      <Footer />

      {/* Modal de Perfil Público */}
      {selectedUser && (
        <ModalOverlay onClick={closeUserProfileModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseModalButton onClick={closeUserProfileModal}>
              <IoClose />
            </CloseModalButton>
            <PublicProfileHeader>
              <UserAvatar
                src={selectedUser.profile_picture_url || undefined}
                alt={`Foto de perfil de ${selectedUser.user_name}`}
              />
              <UserDisplayName>{selectedUser.user_name}</UserDisplayName>
              {selectedUser.full_name && (
                <UserDetailText>{selectedUser.full_name}</UserDetailText>
              )}
              {selectedUser.area_of_expertise && (
                <UserDetailText>
                  {selectedUser.area_of_expertise}
                </UserDetailText>
              )}
            </PublicProfileHeader>

            {selectedUser.tags && selectedUser.tags.length > 0 && (
              <PublicProfileInfoSection>
                <PublicProfileSectionTitle>
                  Tags de Interesse
                </PublicProfileSectionTitle>
                <UserTagsContainer>
                  {selectedUser.tags.map((tag) => (
                    <UserTagPill key={tag}>{tag}</UserTagPill>
                  ))}
                </UserTagsContainer>
              </PublicProfileInfoSection>
            )}

            <PublicProfileInfoSection>
              <PublicProfileSectionTitle>Contatos</PublicProfileSectionTitle>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0.8rem",
                }}
              >
                {selectedUser.linkedin_profile && (
                  <PublicProfileSocialLink
                    href={selectedUser.linkedin_profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <FaLinkedin /> LinkedIn{" "}
                    <FaExternalLinkAlt
                      size="0.8em"
                      style={{ marginLeft: "0.3em" }}
                    />
                  </PublicProfileSocialLink>
                )}
                {selectedUser.github_profile && (
                  <PublicProfileSocialLink
                    href={selectedUser.github_profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    <FaGithub /> GitHub{" "}
                    <FaExternalLinkAlt
                      size="0.8em"
                      style={{ marginLeft: "0.3em" }}
                    />
                  </PublicProfileSocialLink>
                )}
                {selectedUser.email /* Só mostra o email se o backend o enviou */ && (
                  <PublicProfileSocialLink
                    href={`mailto:${selectedUser.email}`}
                    className="email"
                  >
                    <FaEnvelope /> Email
                  </PublicProfileSocialLink>
                )}
                {!selectedUser.linkedin_profile &&
                  !selectedUser.github_profile &&
                  !selectedUser.email && (
                    <PublicProfileDetail>
                      Nenhum contato público disponível.
                    </PublicProfileDetail>
                  )}
              </div>
            </PublicProfileInfoSection>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default Profile;

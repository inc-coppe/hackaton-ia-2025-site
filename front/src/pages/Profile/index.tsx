import React, {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
} from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
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
  ConnectionsInfoContainer,
  ConnectionStat,
  ConnectionNumber,
  ConnectionLabel,
  EditButton,
  FormRow,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  ActionButtonsContainer,
  SaveButton,
  CancelButton,
  FormError,
} from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface UserProfileData {
  email: string;
  user_name: string;
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
  share_contacts: boolean;
  tags: string[];
  followers_count: number;
  following_count: number;
  form_completed?: boolean;
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
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

    const profileDataToUpdate: any = {
      ...editableProfile,
      tags,
    };

    // Log data being sent
    console.log("Data being sent to update profile:", profileDataToUpdate);

    delete profileDataToUpdate.email;
    delete profileDataToUpdate.user_profile_picture_url;
    delete profileDataToUpdate.education_level_display;
    delete profileDataToUpdate.followers_count;
    delete profileDataToUpdate.following_count;
    delete profileDataToUpdate.form_completed;
    delete profileDataToUpdate.created_at;
    delete profileDataToUpdate.updated_at;

    try {
      const response = await fetch("http://localhost:8000/api/profile/me/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileDataToUpdate),
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
    if (newTag && !tags.includes(newTag)) {
      const newTagsList = [...tags, newTag];
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
                  <CardTitle>/CONEXÕES</CardTitle>
                  <TextBlock>
                    <CardBodyText>
                      Use esta área para se conectar com outros participantes do
                      evento.
                    </CardBodyText>
                    <CardBodyText secondary>
                      Você pode visualizar perfis, trocar contatos e construir
                      sua rede com quem também está nessa jornada de inovação.
                    </CardBodyText>
                  </TextBlock>
                </TextContent>
                <ConnectionsInfoContainer>
                  <ConnectionStat>
                    <ConnectionNumber>
                      {userProfile.following_count}
                    </ConnectionNumber>
                    <ConnectionLabel>seguindo</ConnectionLabel>
                  </ConnectionStat>
                  <ConnectionStat>
                    <ConnectionNumber>
                      {userProfile.followers_count}
                    </ConnectionNumber>
                    <ConnectionLabel>seguidores</ConnectionLabel>
                  </ConnectionStat>
                </ConnectionsInfoContainer>
              </InfoCard>
            </>
          )}
        </PageContent>
      </PerfilContainer>
      <Footer />
    </>
  );
}

export default Profile;

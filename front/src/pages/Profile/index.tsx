import React, {
  useEffect,
  useState,
  ChangeEvent,
  KeyboardEvent,
  FormEvent,
  useRef,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FaLinkedin, FaGithub, FaEnvelope, FaCamera } from "react-icons/fa";
import { IoClose, IoPencil, IoLogOutOutline } from "react-icons/io5";
import {
  PerfilContainer,
  ProfileBanner,
  ProfileImage as StyledProfileImage,
  EditPhotoButton,
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
  ActionButtonsContainer,
  SaveButton,
  FormError,
  LogoutButton,
  ProfileImageWrapper,
  EditButtonWrapper,
} from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Upload, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import type { GetProp, UploadProps } from "antd";

interface UserProfileData {
  user_id?: number;
  email: string;
  user_name: string;
  user_profile_picture_url?: string;
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

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const ProfileImage: React.FC<{
  src?: string;
  alt: string;
  showEdit?: boolean;
  onEditClick?: () => void;
  uploading?: boolean;
}> = ({ src, alt, showEdit, onEditClick, uploading }) => {
  const [error, setError] = useState(false);
  const defaultAvatar = "/default-avatar.png";
  let imageUrl = src || defaultAvatar;
  if (error) imageUrl = defaultAvatar;
  return (
    <ProfileImageWrapper>
      <StyledProfileImage
        src={imageUrl}
        alt={alt}
        onError={() => setError(true)}
        style={{
          opacity: uploading ? 0.7 : 1,
          filter: uploading ? "blur(1px)" : "none",
        }}
      />
      {showEdit && (
        <EditPhotoButton
          type="button"
          onClick={onEditClick}
          aria-label="Mudar foto de perfil"
          title="Mudar foto de perfil"
        >
          {uploading ? <LoadingOutlined /> : <FaCamera />}
        </EditPhotoButton>
      )}
    </ProfileImageWrapper>
  );
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Você só pode enviar arquivos JPG/PNG!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("A imagem deve ter menos de 2MB!");
    return false;
  }
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      if (img.width < 200 || img.height < 200) {
        message.error("A imagem deve ter pelo menos 200x200 pixels!");
        reject(false);
      }
      resolve(true);
    };
    img.onerror = () => {
      URL.revokeObjectURL(img.src);
      reject(false);
    };
  });
};

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
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
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
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | undefined>();
  const uploadInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getMyId = (): number | null => {
      const token = localStorage.getItem("access_token");
      if (!token) return null;
      try {
        const decoded: { user_id: number } = jwtDecode(token);
        return decoded.user_id;
      } catch (e) {
        return null;
      }
    };
    const myId = getMyId();
    const viewingMyOwnProfile =
      !userId || (myId !== null && Number(userId) === myId);
    setIsMyProfile(viewingMyOwnProfile);

    const fetchUserProfile = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        navigate("/login");
        return;
      }
      setLoading(true);
      setError(null);
      const endpoint = viewingMyOwnProfile
        ? "/api/profile/me/"
        : `/api/users/${userId}/profile/`;
      try {
        const response = await fetch(endpoint, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data = await response.json();
          setUserProfile(data);
          setEditableProfile({ ...data });
          setTags(data.tags || []);
          setProfileImageUrl(data.user_profile_picture_url || undefined);
        } else {
          const errorData = await response.json();
          setError(errorData.detail || "Falha ao buscar dados do perfil.");
        }
      } catch (err) {
        setError("Ocorreu um erro de rede.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [userId, navigate]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    setEditableProfile((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    if (!userProfile || !token) return;
    const profileDataToUpdate: Partial<UserProfileData> = {
      ...editableProfile,
      tags,
    };
    if (editableProfile.user_name !== undefined) {
      profileDataToUpdate.user_name = editableProfile.user_name;
    }

    delete profileDataToUpdate.email;
    delete profileDataToUpdate.user_profile_picture_url;
    try {
      const response = await fetch("/api/profile/me/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileDataToUpdate),
      });
      const responseData = await response.json();
      if (response.ok) {
        setUserProfile(responseData);
        setEditableProfile({ ...responseData });
        setTags(responseData.tags || []);
        setProfileImageUrl(responseData.user_profile_picture_url || undefined);
        setIsEditing(false);
        message.success("Perfil atualizado com sucesso!");
      } else {
        message.error(
          `Falha ao atualizar: ${responseData.detail || JSON.stringify(responseData)}`,
        );
      }
    } catch (error) {
      message.error("Erro de rede ao atualizar o perfil.");
    }
  };

  const handleUpdateTagsOnly = async (newTagsList: string[]) => {
    const token = localStorage.getItem("access_token");
    if (!isMyProfile || !token) return;
    const originalTags = [...tags];
    setTags(newTagsList);
    try {
      const response = await fetch("/api/profile/me/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ tags: newTagsList }),
      });
      if (!response.ok) {
        setTags(originalTags);
        message.error("Não foi possível salvar suas tags.");
      } else {
        const data = await response.json();
        setUserProfile(data);
        setEditableProfile(data);
        message.success("Tags atualizadas com sucesso!");
      }
    } catch (error) {
      setTags(originalTags);
      message.error("Erro de rede ao atualizar as tags.");
    }
  };

  const handleAddTag = () => {
    const trimmedTag = newTag.trim();
    if (trimmedTag && !tags.includes(trimmedTag)) {
      handleUpdateTagsOnly([...tags, trimmedTag]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    handleUpdateTagsOnly(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTag();
    }
  };

  const toggleEditMode = () => {
    if (isEditing) {
      setEditableProfile({ ...userProfile! });
      setProfileImageUrl(userProfile!.user_profile_picture_url || undefined);
    }
    setIsEditing(!isEditing);
    setFormErrors({});
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  const handleEditPhotoClick = () => {
    uploadInputRef.current?.click();
  };

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const valid = await beforeUpload(file as FileType);
    if (!valid) return;
    setUploadingImage(true);
    try {
      const token = localStorage.getItem("access_token");
      const formData = new FormData();
      formData.append("profile_picture", file);
      const response = await fetch(
        "/api/profile/upload-picture/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );
      const data = await response.json();
      if (response.ok && data.profile_picture_url) {
        setProfileImageUrl(data.profile_picture_url);
        setUserProfile((prev) =>
          prev
            ? {
                ...prev,
                user_profile_picture_url: data.profile_picture_url,
              }
            : null,
        );
        message.success("Imagem de perfil atualizada com sucesso!");
        localStorage.setItem("profile_picture_updated", Date.now().toString());
      } else {
        message.error(data.detail || "Falha ao carregar imagem de perfil.");
      }
    } catch (error) {
      message.error("Erro ao enviar imagem de perfil.");
    } finally {
      setUploadingImage(false);
      if (uploadInputRef.current) {
        uploadInputRef.current.value = "";
      }
    }
  };

  if (loading) return <p>Carregando perfil...</p>;
  if (error || !userProfile) return <p>{error || "Perfil não encontrado."}</p>;

  const displayProfile = isEditing ? editableProfile : userProfile;

  return (
    <>
      <Header />
      <PerfilContainer>
        <ProfileBanner>
          <ProfileImage
            src={profileImageUrl}
            alt={
              isMyProfile && isEditing
                ? "Foto de Perfil"
                : `Foto de ${displayProfile.user_name}`
            }
            showEdit={isMyProfile && isEditing}
            onEditClick={handleEditPhotoClick}
            uploading={uploadingImage}
          />
          {isMyProfile && isEditing && (
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={uploadInputRef}
              onChange={handleFileInputChange}
              aria-label="Enviar nova foto de perfil"
            />
          )}
          <TitleContainer>
            <UserName>{displayProfile.user_name}</UserName>
            <ButtonsContainer>
              {isMyProfile && isEditing && (
                <EditButton onClick={toggleEditMode}>
                  Cancelar Edição
                </EditButton>
              )}
              {isMyProfile && !isEditing && (
                <EditButtonWrapper>
                  <EditButton onClick={toggleEditMode}>
                    <IoPencil style={{ marginRight: "0.5rem" }} /> Editar Perfil
                  </EditButton>
                  <LogoutButton onClick={handleLogout}>
                    <IoLogOutOutline style={{ marginRight: "0.5rem" }} /> Sair
                  </LogoutButton>
                </EditButtonWrapper>
              )}
              {displayProfile.linkedin_profile && (
                <SocialButton
                  href={displayProfile.linkedin_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin /> <span>LinkedIn</span>
                </SocialButton>
              )}
              {displayProfile.github_profile && (
                <SocialButton
                  href={displayProfile.github_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> <span>GitHub</span>
                </SocialButton>
              )}
              {displayProfile.email && (
                <SocialButton
                  as="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = `mailto:${displayProfile.email}`;
                  }}
                  >
                
                  <FaEnvelope /> <span>Email</span>
                </SocialButton>
              )}
            </ButtonsContainer>
          </TitleContainer>
        </ProfileBanner>
        <PageContent>
          {isMyProfile && isEditing ? (
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
              </FormRow>
              <ActionButtonsContainer>
                <SaveButton type="submit" disabled={uploadingImage}>
                  Salvar Alterações
                </SaveButton>
              </ActionButtonsContainer>
            </InfoCard>
          ) : (
            <InfoCard>
              <TextContent>
                <CardTitle>/INTERESSES</CardTitle>
                <TextBlock>
                  <CardBodyText>
                    Estes são os interesses e conhecimentos do usuário.
                  </CardBodyText>
                </TextBlock>
              </TextContent>
              {isMyProfile && (
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
              )}
              <TagsContainer>
                {tags.map((tag) => (
                  <TagPill key={tag}>
                    <span>{tag}</span>
                    {isMyProfile && (
                      <CloseIcon onClick={() => handleRemoveTag(tag)}>
                        <IoClose />
                      </CloseIcon>
                    )}
                  </TagPill>
                ))}
              </TagsContainer>
            </InfoCard>
          )}
        </PageContent>
      </PerfilContainer>
      <Footer />
    </>
  );
}

export default Profile;

import React, { useEffect, useState, ChangeEvent, KeyboardEvent } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import {
  PerfilContainer,
  ProfileBanner,
  ProfileImage,
  TitleContainer,
  UserName,
  ButtonsContainer,
  AddButton,
  SocialButton,
  PageContent,
  InfoCard,
  TextContent,
  CardTitle,
  TextBlock,
  CardBodyText,
  AddTagContainer,
  TagInput,
  TagsContainer,
  TagPill,
  CloseIcon,
} from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface UserData {
  name: string;
  email: string;
  profile_picture_url: string;
  linkedin_profile: string | null;
  github_profile: string | null;
  tags: string[];
}

function Profile() {
  const [user, setUser] = useState<UserData | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setError("Token de acesso não encontrado.");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch("http://localhost:8000/api/auth/user/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data: UserData = await response.json();
          setUser(data);
          setTags(data.tags || []);
        } else {
          setError("Falha ao buscar os dados do usuário.");
        }
      } catch (err) {
        setError("Ocorreu um erro de rede.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const updateTagsOnBackend = async (updatedTags: string[]) => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        "http://localhost:8000/api/profile/update/",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ tags: updatedTags }),
        },
      );
      if (!response.ok) {
        throw new Error("Falha ao salvar as tags no servidor.");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleUpdateTags = async (
    newTagsList: string[],
    originalTagsList: string[],
  ) => {
    setTags(newTagsList);
    try {
      await updateTagsOnBackend(newTagsList);
    } catch (error) {
      setTags(originalTagsList);
      alert("Não foi possível salvar suas tags. Tente novamente.");
    }
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      const originalTags = [...tags];
      const newTags = [...tags, newTag];
      setNewTag("");
      handleUpdateTags(newTags, originalTags);
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const originalTags = [...tags];
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    handleUpdateTags(newTags, originalTags);
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTag();
    }
  };

  if (loading) {
    return <p>Carregando perfil...</p>;
  }

  if (error || !user) {
    return <p>{error || "Não foi possível carregar o perfil."}</p>;
  }

  return (
    <>
      <Header />
      <PerfilContainer>
        <ProfileBanner>
          <ProfileImage
            src={user.profile_picture_url}
            alt={`Foto de perfil de ${user.name}`}
          />
          <TitleContainer>
            <UserName>{user.name}</UserName>
            <ButtonsContainer>
              {user.linkedin_profile && (
                <SocialButton
                  href={user.linkedin_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </SocialButton>
              )}
              {user.github_profile && (
                <SocialButton
                  href={user.github_profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </SocialButton>
              )}
              <SocialButton href={`mailto:${user.email}`}>
                <FaEnvelope />
                <span>Email</span>
              </SocialButton>
            </ButtonsContainer>
          </TitleContainer>
        </ProfileBanner>

        <PageContent>
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewTag(e.target.value)
                }
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
                  Você pode visualizar perfis, trocar contatos e construir sua
                  rede com quem também está nessa jornada de inovação.
                </CardBodyText>
              </TextBlock>
            </TextContent>
          </InfoCard>
        </PageContent>
      </PerfilContainer>
      <Footer />
    </>
  );
}

export default Profile;

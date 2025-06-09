import styled from "styled-components";

const pxToRem = (px: number) => `${px / 16}rem`;

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

export const ProfileBanner = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: ${pxToRem(146)} ${pxToRem(40)} ${pxToRem(40)};
  gap: ${pxToRem(40)};
  width: 100%;
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);

  @media (max-width: 48rem) {
    flex-direction: column;
    padding: ${pxToRem(146)} 1.5rem 0;
    align-items: flex-start;
    gap: ${pxToRem(24)};
    width: 100%;
  }
`;

export const ProfileImage = styled.img`
  width: ${pxToRem(200)};
  height: ${pxToRem(200)};
  border-radius: ${pxToRem(8)};
  object-fit: cover;

  @media (max-width: 48rem) {
    width: ${pxToRem(100)};
    height: ${pxToRem(100)};
    border-radius: ${pxToRem(4)};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${pxToRem(24)};
  width: ${pxToRem(896)};
  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const UserName = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${pxToRem(50)};
  line-height: ${pxToRem(61)};
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: ${pxToRem(32)};
    line-height: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${pxToRem(16)};

  @media (max-width: 48rem) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 3.75rem;
  }
`;

export const SocialButton = styled.a`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(12)};
  gap: ${pxToRem(8)};
  height: ${pxToRem(48)};
  border: ${pxToRem(2)} solid #ffffff;
  border-radius: ${pxToRem(2)};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(15)};
  line-height: ${pxToRem(15)};
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: #ffffff;
    color: #2e2989;
  }

  svg {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }
`;

export const PageContent = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: ${pxToRem(40)} 1rem ${pxToRem(120)};
  gap: ${pxToRem(40)};
  max-width: ${pxToRem(1200)};
  width: 100%;
  @media (max-width: 48rem) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${pxToRem(32)};
  gap: ${pxToRem(40)};
  flex-grow: 1;
  background: rgba(193, 208, 248, 0.2);
  border-radius: ${pxToRem(8)};
  width: ${pxToRem(
    580,
  )}; /* Based on Figma, may need adjustment with flex-grow */
  min-height: ${pxToRem(220)}; /* Minimum height for consistency */
  @media (max-width: 48rem) {
    flex-grow: 0;
    width: 100%;
    padding: ${pxToRem(32)} 1rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${pxToRem(24)};
  align-self: stretch;
`;

export const CardTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(24)};
  color: #0f0f21;
  margin: 0;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`;

export const CardBodyText = styled.p<{ secondary?: boolean }>`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(20)};
  margin: 0;
  color: ${({ secondary }) =>
    secondary ? "rgba(15, 15, 33, 0.6)" : "#0F0F21"};
`;

export const AddTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${pxToRem(8)};
  width: 100%;
`;

export const TagInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${pxToRem(4)} ${pxToRem(12)};
  height: ${pxToRem(42)};
  flex-grow: 1;
  background: #ffffff;
  border: ${pxToRem(1)} solid #c1d0f8;
  border-radius: ${pxToRem(4)};
  font-family: "Nunito Sans", sans-serif;
  font-size: ${pxToRem(16)};

  &:focus {
    outline: none;
    border-color: #3161e8;
  }

  @media (max-width: 48rem) {
    padding: ${pxToRem(4)} 0.5rem;
    width: 100%;
  }
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(8)} ${pxToRem(20)};
  gap: ${pxToRem(8)};
  height: ${pxToRem(42)}; /* Match TagInput height */
  border-radius: ${pxToRem(4)}; /* Match TagInput radius */
  background-color: #3161e8; /* Figma uses solid for action */
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(15)};
  text-transform: uppercase;
  color: #ffffff; /* Text color for solid button */

  &:hover {
    background-color: #2e2989;
  }

  @media (max-width: 48rem) {
    padding: ${pxToRem(8)} ${pxToRem(10)};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: ${pxToRem(16)};
  align-self: stretch;
  min-height: ${pxToRem(40)}; /* Ensure some space even if no tags */
`;

export const TagPill = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${pxToRem(8)} ${pxToRem(12)};
  gap: ${pxToRem(12)};
  height: ${pxToRem(38)}; /* Figma uses 38px or 40px */
  background: #2e2989;
  border-radius: ${pxToRem(4)};
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(16)};
`;

export const CloseIcon = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  svg {
    width: ${pxToRem(20)}; /* Adjusted for better visual balance */
    height: ${pxToRem(20)}; /* Adjusted for better visual balance */
  }
`;

export const ConnectionsInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around; /* Or space-between */
  gap: ${pxToRem(40)};
  width: 100%; /* Take full width of the card content area */
  margin-top: ${pxToRem(20)}; /* Add some space after text */
`;

export const ConnectionStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ConnectionNumber = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: ${pxToRem(50)};
  line-height: ${pxToRem(61)};
  color: #0f0f21;
`;

export const ConnectionLabel = styled.span`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(25)};
  color: #3161e8;
  text-transform: lowercase;
`;

export const EditButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(12)} ${pxToRem(20)};
  gap: ${pxToRem(8)};
  height: ${pxToRem(48)};
  background: #ffffff;
  border-radius: ${pxToRem(2)};
  border: ${pxToRem(2)} solid #2e2989; /* Or a different border */
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(15)};
  line-height: ${pxToRem(15)};
  text-transform: uppercase;
  color: #2e2989;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: #2e2989;
    color: #ffffff;
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
  width: 100%;
  margin-bottom: ${pxToRem(16)};
`;

export const FormLabel = styled.label`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: ${pxToRem(16)};
  color: #0f0f21;
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  padding: ${pxToRem(10)} ${pxToRem(12)};
  height: ${pxToRem(42)};
  width: 100%;
  background: #ffffff;
  border: ${pxToRem(1)} solid #c1d0f8;
  border-radius: ${pxToRem(4)};
  font-family: "Nunito Sans", sans-serif;
  font-size: ${pxToRem(16)};

  &:focus {
    outline: none;
    border-color: #3161e8;
  }
`;

export const FormSelect = styled.select`
  box-sizing: border-box;
  padding: ${pxToRem(10)} ${pxToRem(12)};
  height: ${pxToRem(42)};
  width: 100%;
  background: #ffffff;
  border: ${pxToRem(1)} solid #c1d0f8;
  border-radius: ${pxToRem(4)};
  font-family: "Nunito Sans", sans-serif;
  font-size: ${pxToRem(16)};

  &:focus {
    outline: none;
    border-color: #3161e8;
  }
`;

export const FormTextarea = styled.textarea`
  box-sizing: border-box;
  padding: ${pxToRem(10)} ${pxToRem(12)};
  width: 100%;
  min-height: ${pxToRem(80)};
  background: #ffffff;
  border: ${pxToRem(1)} solid #c1d0f8;
  border-radius: ${pxToRem(4)};
  font-family: "Nunito Sans", sans-serif;
  font-size: ${pxToRem(16)};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3161e8;
  }
`;

export const FormError = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: ${pxToRem(14)};
  color: red;
  margin-top: ${pxToRem(4)};
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* Alinha botões à esquerda */
  gap: ${pxToRem(16)};
  margin-top: ${pxToRem(24)};
  width: 100%;
`;

export const SaveButton = styled(AddButton)`
  /* Reutiliza estilo do AddButton */
  background-color: #3161e8;
  color: #ffffff;
  &:hover {
    background-color: #2e2989;
  }
`;

export const CancelButton = styled(AddButton)`
  /* Reutiliza estilo do AddButton */
  background-color: #transparent; /* Ou uma cor cinza clara */
  color: #3161e8;
  border: ${pxToRem(1)} solid #3161e8;
  &:hover {
    background-color: #e9ecef; /* Um cinza muito claro para hover */
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
`;

export const SearchField = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  flex-grow: 1;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

export const SearchButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    transform 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const UserResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  width: 100%;
`;

export const UserCard = styled(InfoCard)`
  // Reutilizando InfoCard para o estilo base
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  text-align: center;

  width: 32.25rem; // Contando com paddig que está no InfoCard, este é o tamanho que deve ser para não quebrar
  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const UserAvatar = styled(ProfileImage)`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

export const UserDisplayName = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const UserDetailText = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

export const UserTagsContainer = styled(TagsContainer)`
  justify-content: center;
  margin-top: 0.5rem;
`;

export const UserTagPill = styled(TagPill)`
  background-color: #e2f0ff;
  color: #007bff;
  border: 1px solid #007bff;
  cursor: default;
  font-size: 0.85rem;
  padding: 0.3rem 0.6rem;

  ${CloseIcon} {
    display: none; /* Não permite remover tags em perfis de outros usuários */
  }
`;

export const FollowButton = styled(AddButton)`
  // Reutilizando AddButton para o estilo base
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  background-color: ${(props) => (props.isFollowing ? "#dc3545" : "#28a745")};

  &:hover {
    background-color: ${(props) => (props.isFollowing ? "#c82333" : "#218838")};
  }
`;

export const NoResultsMessage = styled.p`
  text-align: center;
  color: #888;
  font-size: 1.1rem;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px dashed #e0e0e0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled(InfoCard)`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  max-width: 700px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 90vh; /* Limita a altura do modal */
  overflow-y: auto; /* Adiciona scroll se o conteúdo for muito grande */
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #555;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #333;
  }
`;

export const PublicProfileSocialLink = styled(SocialButton)`
  margin: 0.5rem;
  width: auto;
  min-width: 120px;
  background-color: #555; /* Cor padrão para links de contato */
  color: white;

  &:hover {
    background-color: #333;
  }

  &.linkedin {
    background-color: #0077b5;
    &:hover {
      background-color: #005f99;
    }
  }
  &.github {
    background-color: #333;
    &:hover {
      background-color: #222;
    }
  }
  &.email {
    background-color: #d44638;
    &:hover {
      background-color: #b3392c;
    }
  }
`;

export const PublicProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PublicProfileInfoSection = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: left;
`;

export const PublicProfileSectionTitle = styled.h4`
  font-size: 1.1rem;
  color: #007bff;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
`;

export const PublicProfileDetail = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

export const LogoutButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  height: 48px;
  background-color: transparent;
  border: 2px solid #ff4d4f;
  border-radius: 2px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  text-transform: uppercase;
  color: #ff4d4f;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ff4d4f;
    color: #ffffff;
  }
`;

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
`;

export const ProfileImage = styled.img`
  width: ${pxToRem(200)};
  height: ${pxToRem(200)};
  border-radius: ${pxToRem(8)};
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${pxToRem(24)};
  width: ${pxToRem(896)};
`;

export const UserName = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: ${pxToRem(50)};
  line-height: ${pxToRem(61)};
  color: #ffffff;
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${pxToRem(16)};
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
  padding: ${pxToRem(40)} 0rem ${pxToRem(120)};
  gap: ${pxToRem(40)};
  max-width: ${pxToRem(1200)};
  width: 100%;
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

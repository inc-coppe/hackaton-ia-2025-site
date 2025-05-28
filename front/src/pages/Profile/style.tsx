import styled from "styled-components";

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
  padding: 9.125rem 2.5rem 2.5rem;
  gap: 2.5rem;
  width: 100%;
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);
`;

export const ProfileImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 56rem;
`;

export const UserName = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  color: #ffffff;
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
`;

export const SocialButton = styled.a`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  gap: 0.5rem;
  height: 3rem;
  border: 0.125rem solid #ffffff;
  border-radius: 0.125rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 0.9375rem;
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
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const PageContent = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2.5rem 0rem 7.5rem;
  gap: 2.5rem;
  max-width: 75rem;
  width: 100%;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 2.5rem;
  flex-grow: 1;
  background: rgba(193, 208, 248, 0.2);
  border-radius: 0.5rem;
  width: 36.25rem;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
`;

export const CardTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 2rem;
  line-height: 2.4375rem;
  color: #0f0f21;
  margin: 0;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardBodyText = styled.p<{ secondary?: boolean }>`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin: 0;
  color: ${({ secondary }) =>
    secondary ? "rgba(15, 15, 33, 0.6)" : "#0F0F21"};
`;

export const AddTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const TagInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 0.75rem;
  height: 2.625rem;
  flex-grow: 1;
  background: #ffffff;
  border: 0.0625rem solid #c1d0f8;
  border-radius: 0.25rem;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;

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
  padding: 0.5rem 1.25rem;
  gap: 0.5rem;
  height: 2.625rem;
  border-radius: 0.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  text-transform: uppercase;
  color: #3161e8;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const TagPill = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0.75rem;
  gap: 0.75rem;
  height: 2.5625rem;
  background: #2e2989;
  border-radius: 0.25rem;
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
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
    width: 1.5rem;
    height: 1.5rem;
  }
`;

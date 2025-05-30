import styled from "styled-components";

// --- Contêiner Principal da Página ---
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #ffffff;
`;

// --- Seção de Destaque (Topo com Gradiente) ---
export const HighlightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 9.125rem 7.5rem 5rem; /* Desktop: 146px 120px 80px */
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);
  text-align: left;

  @media (max-width: 48rem) {
    margin-top: 4rem; /* Mobile: 64px */
    padding: 3.75rem 1.5rem; /* Mobile: 60px 24px */
  }
`;

export const HighlightTextWrapper = styled.div`
  width: 100%;
  max-width: 81rem; /* 1296px */
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Desktop: 32px (entre Title e Description) */
`;

export const HighlightTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
`;

export const HighlightPreamble = styled.h2`
  /* AQUECIMENTO! */
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  line-height: 1.5625rem; /* 25px */
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; /* Mobile: 16px */
    line-height: 1.375rem; /* Mobile: 22px */
  }
`;

export const HighlightTitle = styled.h1`
  /* TUDO O QUE É PRECISO... */
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem; /* 50px */
  line-height: 3.8125rem; /* 61px */
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2rem; /* Mobile: 32px */
    line-height: 2.4375rem; /* Mobile: 39px */
  }
`;

export const HighlightDescription = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem; /* 20px */
  line-height: 1.5rem; /* 24px */
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; /* Mobile: 16px */
    line-height: 1.25rem; /* Mobile: 20px */
  }
`;

// --- Seção de Conteúdo Principal (Abaixo do Highlight) ---
export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5rem 7.5rem 7.5rem; /* Desktop: 80px 120px 120px */
  gap: 2.5rem; /* Desktop: 40px (entre IntroText e MaterialsLayout) */

  @media (max-width: 48rem) {
    padding: 2.5rem 1.5rem 3.75rem; /* Mobile: 40px 24px 60px */
    gap: 2.5rem; /* Mobile: Adapatado, Figma indica 60px para o container 'Materiais', que inclui este e o próximo */
  }
`;

export const IntroText = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem; /* 20px */
  line-height: 1.5rem; /* 24px */
  color: #0f0f21;
  text-align: center; /* Figma parece centralizado para este texto */
  width: 100%;
  max-width: 81rem; /* 1296px */

  @media (max-width: 48rem) {
    font-size: 1rem; /* Mobile: 16px */
    line-height: 1.25rem; /* Mobile: 20px */
    max-width: 21.375rem; /* 342px */
  }
`;

// --- Layout da Seção de Materiais (Menu Lateral + Conteúdo) ---
export const MaterialsLayoutContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 81rem; /* Conteúdo total do Figma desktop é 274px (menu) + 64px (gap) + 958px (conteúdo) = 1296px */
  gap: 4rem; /* Desktop: 64px */

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 2.5rem; /* Mobile: adaptado, Figma indica 60px para o bloco "Materiais" que é pai disto */
    max-width: 21.375rem; /* Mobile: 342px */
  }
`;

export const SideMenu = styled.aside`
  position: sticky; /* o menu deve ficar fixo a 6 rem do topo*/
  top: 6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 1.5rem; /* Desktop: 24px (do Menu Figma) */
  gap: 1.5rem; /* Desktop: 24px */
  width: 17.125rem; /* Desktop: 274px */
  border-right: 0.125rem solid #c1d0f8; /* Desktop: 2px */
  flex-shrink: 0;

  @media (max-width: 48rem) {
    width: 100%;
    border-right: none;
    border-bottom: 0.125rem solid #c1d0f8;
    padding-right: 0;
    padding-bottom: 1.5rem;
    gap: 1rem;
  }
`;

export const MenuLink = styled.button<{ $active?: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem; /* 15px */
  line-height: 0.9375rem; /* 15px */
  color: ${({ $active }) => ($active ? "#3161E8" : "#0F0F21")};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0; /* Adiciona padding vertical para melhor clique */
  text-align: left;
  width: 100%;
  transition: color 0.2s ease;

  &:hover {
    color: #3161e8;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7.5rem; /* Desktop: 120px (gap entre ChapterSections) */
  flex-grow: 1;
  width: 100%; /* Para mobile */

  @media (max-width: 48rem) {
    gap: 3.75rem; /* Mobile: 60px */
  }
`;

export const ChapterSectionWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Padrão, vídeo pode ser centralizado se necessário */
  gap: 2rem; /* Desktop & Mobile: 32px */
  width: 100%;
`;

export const ChapterTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 2rem; /* 32px */
  line-height: 2.4375rem; /* 39px */
  color: #0f0f21;
  margin: 0;
`;

export const ChapterAuthor = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 0.75rem; /* 12px */
  line-height: 1.5rem; /* 24px */
  color: rgba(15, 15, 33, 0.6);
  margin: 0;
`;

export const ChapterParagraph = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem; /* Desktop: 20px */
  line-height: 1.5rem; /* Desktop: 24px */
  color: rgba(15, 15, 33, 0.6);
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; /* Mobile: 16px */
    line-height: 1.25rem; /* Mobile: 20px */
  }
`;

export const VideoPlaceholder = styled.div`
  width: 100%;
  max-width: 50rem; /* Desktop: 800px */
  aspect-ratio: 16 / 9; /* Mantém proporção 16:9 */
  background: #d9d9d9;
  border-radius: 0.5rem; /* 8px */

  @media (max-width: 48rem) {
    max-width: 100%; /* Mobile: 342px (ocupa toda a largura disponível) */
  }
`;

export const ChapterSubtitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 8px */
  width: 100%;
`;

export const ChapterSubtitleTitle = styled.h4`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem; /* Desktop: 18px */
  line-height: 1.5625rem; /* Desktop: 25px */
  color: #0f0f21;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; /* Mobile: 16px */
    line-height: 1.375rem; /* Mobile: 22px */
  }
`;

export const ChapterDescription = styled.p``;

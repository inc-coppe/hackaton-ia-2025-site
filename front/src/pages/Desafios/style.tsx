import styled from "styled-components";

export const DesafiosPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os blocos de conteúdo principais */
  background: #ffffff;
  width: 100%;
`;

export const DesafiosIntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o TextWrapper */
  justify-content: center;
  width: 100%;
  padding: 9.125rem 7.5rem 5rem; /* Desktop: 146px 120px 80px */
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);

  @media (max-width: 48rem) {
    margin-top: 4rem;
    padding: 3.75rem 1.5rem; /* Mobile: 60px 24px */
  }
`;

export const HighlightTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem; /* Desktop: 32px (entre Title e Description) */
  width: 100%;
  max-width: 81rem; /* Desktop: 1296px */

  @media (max-width: 48rem) {
    text-align: left; /* Mantém alinhamento à esquerda no mobile conforme Figma */
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
`;

export const IntroSubtitle = styled.h2`
  /* BORA RESOLVER PROBLEMAS DE VERDADE? */
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem; /* Desktop: 18px */
  line-height: 1.5625rem; /* Desktop: 25px */
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1.125rem; /* Mobile Figma usa 18px para o subtítulo "BORA RESOLVER..." */
    line-height: 1.5625rem; /* Mobile Figma usa 25px */
  }
`;

export const IntroTitle = styled.h1`
  /* ENCARANDO O QUE IMPORTA... */
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem; /* Desktop: 50px */
  line-height: 3.8125rem; /* Desktop: 61px */
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2rem; /* Mobile: 32px */
    line-height: 2.4375rem; /* Mobile: 39px */
  }
`;

export const IntroDescription = styled.p`
  /* Durante o evento, você pode encarar... */
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem; /* Desktop: 20px */
  line-height: 1.5rem; /* Desktop: 24px */
  color: #ffffff;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem; /* Mobile: 16px */
    line-height: 1.25rem; /* Mobile: 20px */
  }
`;

export const DesafiosBodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo */
  width: 100%;
  padding: 5rem 7.5rem 7.5rem; /* Desktop: 80px 120px 120px */
  gap: 2.5rem; /* Desktop: 40px (entre PreDivisionText e DesafiosBodyPrincipalContainer) */

  @media (max-width: 48rem) {
    padding: 2.5rem 1.5rem 3.75rem; /* Mobile: usa padding do bloco "Desafios" (60px 24px 60px), ajustado para top */
    /* O gap do Figma mobile é 60px, vamos usar 3.75rem */
    gap: 3.75rem;
  }
`;

export const PreDivisionText = styled.p`
  /* Abaixo, reunimos todas as sugestões... */
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem; /* Desktop: 20px */
  line-height: 1.5rem; /* Desktop: 24px */
  color: #0f0f21;
  text-align: left; /* Conforme Figma */
  width: 100%;
  max-width: 81rem; /* Desktop: 1296px */

  @media (max-width: 48rem) {
    font-size: 1rem; /* Mobile: 16px */
    line-height: 1.25rem; /* Mobile: 20px */
    max-width: 21.375rem; /* Mobile: 342px */
    text-align: center; /* Figma mobile parece centralizado para este texto */
  }
`;

export const DesafiosBodyPrincipalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 81rem; /* 1296px (274px menu + 64px gap + 958px content) */
  gap: 4rem; /* Desktop: 64px */

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 2.5rem; /* Ajustado para espaçamento mobile */
    max-width: 21.375rem;
  }
`;

export const MenuContainer = styled.aside`
  position: sticky;
  top: 6rem; /* Ajuste conforme a altura do seu Header + algum espaço */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.75rem 1.5rem 0.75rem 0; /* Desktop: 12px 24px 12px 0px */
  gap: 1rem; /* Desktop Figma sugere 24px, mas os itens são próximos. 1rem (16px) pode ser melhor */
  width: 17.125rem; /* Desktop: 274px */
  border-right: 0.125rem solid #c1d0f8; /* Desktop: 2px */
  flex-shrink: 0; /* Impede que o menu encolha */
  align-self: flex-start; /* Garante que comece do topo do flex container */
  max-height: calc(100vh - 8rem); /* Evita que seja maior que a tela */
  overflow-y: auto;

  @media (max-width: 48rem) {
    display: none; /* Menu lateral escondido no mobile conforme seu código e Figma */
  }
`;

export const MenuText = styled.button<{ $active?: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem; /* 15px */
  line-height: 1.25; /* Ajustado para melhor leitura */
  color: ${({ $active }) => ($active ? "#3161E8" : "#0F0F21")};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0; /* Espaçamento vertical para clique */
  text-align: left;
  width: 100%;
  transition: color 0.2s ease;
  border-right: ${({ $active }) =>
    $active ? "0.125rem solid #3161E8" : "0.125rem solid transparent"};
  margin-right: -0.125rem; /* Compensa a borda para manter o alinhamento do texto */

  &:hover {
    color: #3161e8;
  }
`;

export const ConteudoDesafiosContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Ocupa o espaço restante */
  gap: 7.5rem; /* Desktop: 120px (espaçamento entre seções de desafio) */

  @media (max-width: 48rem) {
    gap: 3.75rem; /* Mobile: 60px */
    width: 100%;
  }
`;

export const ChallengeItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Desktop & Mobile Figma: 24px (interno) ou 32px */
  width: 100%;
`;

export const ChallengeTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem; /* 4px */
`;

export const ChallengeAuthor = styled.p`
  /* NOME DE QUEM SUGERIU O DESAFIO */
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 0.75rem; /* 12px */
  line-height: 1.5rem; /* 24px */
  color: rgba(15, 15, 33, 0.6);
  margin: 0;
`;

export const ChallengeMainTitle = styled.h3`
  /* _TÍTULO DO DESAFIO */
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 2rem; /* 32px */
  line-height: 2.4375rem; /* 39px */
  color: #0f0f21;
  margin: 0;
`;

export const ChallengeParagraph = styled.p`
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

export const ChallengeMediaLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem; /* 32px */
  align-items: flex-start; /* Ou center, dependendo do efeito desejado */
  width: 100%;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const ImagemWrapper = styled.div`
  flex-shrink: 0;
  width: 50%; /* Ajustável */
  max-width: 31.625rem; /* Desktop: 506px */

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem; /* 8px */
    display: block;
  }

  @media (max-width: 48rem) {
    width: 100%;
    max-width: 21.375rem; /* Mobile: 342px */
    background: #d9d9d9; /* Placeholder se a imagem não carregar */
    aspect-ratio: 16/9; /* Para o placeholder no mobile */
    border-radius: 0.5rem; /* 8px */

    img {
      /* Caso a imagem carregue no mobile */
      width: 100%;
      height: 100%;
    }
  }
`;

export const TextNextToMedia = styled.div`
  flex-grow: 1;
`;


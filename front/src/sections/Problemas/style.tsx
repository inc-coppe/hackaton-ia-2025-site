import styled from "styled-components";

// Container principal da seção
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /*Trocado para ajustar a disposição dos textos - era center*/ 

  overflow-x: hidden;

  /* LINHA CORRIGIDA ABAIXO */
  padding: 7.5rem; /* Trocamos 'margin' por 'padding' */

  @media (max-width: 48rem) {
    /* A versão mobile já usa padding, o que está correto */
    padding: 2.5rem 1.5rem 3.75rem;
    gap: 2.5rem;
  }
`;

// Contêiner para toda a parte de texto
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  max-width: 81rem;
  margin-bottom: 4rem;

  @media (max-width: 48rem) {
    gap: 1.5rem;
    margin-bottom: -7rem;
  }
`;

// Contêiner para o subtítulo e título principal
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;
`;

// Subtítulo "BORA RESOLVER..."
export const SectionSubtitle = styled.h3`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #0f0f21;
  text-align: left;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

// Título principal "ENCARANDO O QUE IMPORTA..."
export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  text-align: left;
  color: #0f0f21;
  width: 100%;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2rem;
    line-height: 2.4375rem;
  }
`;

// Parágrafo de corpo do texto
export const Body = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: left;
  color: #0f0f21;
  width: 100%;
  max-width: 81rem;
  margin: 0;
  margin-top: 1rem;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-top: 0;
  }
`;

// Wrapper para o componente de carrossel
export const CustomCarouselWrapper = styled.div`
  width: 100%;
  max-width: 102rem;
`;

import styled from "styled-components";

// Função auxiliar para usar rem
const pxToRem = (size) => `${size / 16}rem`;

export const CarouselContainer = styled.div`
  @media (max-width: 28rem) {
    margin-top: ${pxToRem(24)};
  }`;

export const CardsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  padding-bottom: ${pxToRem(16)};

  width: 110%;

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }

  @media (max-width: 28rem) {
    width: 100%;

    flex-direction: column;
    overflow-x: visible;
    gap: ${pxToRem(22)};
  }
`;

export const CardItem = styled.div`
  min-width: ${pxToRem(600)};

  background-color: #0f0f21;
  border-radius: ${pxToRem(8)};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(18)};
  flex-shrink: 0;
  margin-right: ${pxToRem(32)};
  position: relative;

  @media (max-width: 28rem) {
    
    min-width: ${pxToRem(342)};
    height: auto; // <- Deixa a altura se ajustar naturalmente
    margin-right: 0; // Remove margem lateral se quiser centralizar
  
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Faz a imagem cobrir todo o espaço do card */
    user-select: none; /* Não permite selecionar a imagem */
    -webkit-user-drag: none; /* Impede o arrasto em navegadores Webkit */
    -moz-user-drag: none; /* Impede o arrasto em navegadores Firefox */
    user-drag: none; /* Impede o arrasto em navegadores mais modernos */
    border-radius: ${pxToRem(8)};
  
  }

`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${pxToRem(24)};
  @media (max-width: 28rem) {
    display: flex;
    justify-content: center;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    
  }
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(15)};
  text-transform: uppercase;
  color: #3161e8;
  cursor: pointer;
`;

export const PageControl = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: ${pxToRem(8)};
  margin-top: ${pxToRem(24)};

  @media (max-width: 28rem) {
    display: none;
  }
`;

export const Dot = styled.div`
  width: ${pxToRem(60)};
  height: ${pxToRem(8)};
  border-radius: ${pxToRem(5)};
  background-color: ${(props) =>
    props.active ? "#3161E8" : "rgba(49, 97, 232, 0.3)"};
`;

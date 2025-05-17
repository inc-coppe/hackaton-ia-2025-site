import styled from "styled-components";

// Função auxiliar para usar rem
const pxToRem = (size) => `${size / 16}rem`;

export const CarouselContainer = styled.div``;

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
    margin-top: 8rem;

    flex-direction: column;
    gap: ${pxToRem(22)};
    overflow-x: hidden;
    
  }
`;

export const CardItem = styled.div`
  width: 33.85vw;
  height: 32.44vh;

  background-color: #2e2989;
  border-radius: ${pxToRem(8)};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  padding: ${pxToRem(32)};
  gap: ${pxToRem(8)};

  flex-shrink: 0;
  margin-right: ${pxToRem(32)};

  transition:  background-color 0.3s ease;

  &:hover {
    background-color: #110249;
  }

  @media (max-width: 28rem) {
    height: auto;
    width: 100%;
    margin-right: 0;
    
    padding: ${pxToRem(16)};
    


  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${pxToRem(24)};
  justify-content: flex-end;
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


export const CardSugerido = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: ${pxToRem(12)};
  line-height: ${pxToRem(24)};
  letter-spacing: 0;
  color: rgba(255, 255, 255, 0.6);
  
  width: ${pxToRem(432)};
  height: ${pxToRem(24)};

  @media (max-width: 28rem) {
    margin-top: 1rem;   
  }

`;

export const SetaWrapper = styled.div`
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${pxToRem(8)}; /* ou o espaçamento que quiser da direita do "Sugerido" */
`;

export const SetaIcon = styled.img`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

`;


export const CardTitulo = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(25)};
  letter-spacing: 0;
  color: #FFFFFF;
  width: ${pxToRem(456)};
  height: ${pxToRem(25)};
  margin: 0;

  @media (max-width: 28rem) {
    margin-bottom: 0.35rem;   
  }
  
`;

export const CardDescricao = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(20)};
  letter-spacing: 0;
  color: white;
  width: 100%;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* número de linhas visíveis */
  -webkit-box-orient: vertical;

  @media (max-width: 28rem) {
    margin-bottom: 1rem;   
  }
`;

export const CardHeaderSeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

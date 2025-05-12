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

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`;

export const CardItem = styled.div`
  min-width: ${pxToRem(378.75)};
  height: ${pxToRem(251)};
  background-color: #2e2989;
  border-radius: ${pxToRem(8)};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(18)};
  flex-shrink: 0;
  margin-right: ${pxToRem(32)};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${pxToRem(24)};
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
`;

export const Dot = styled.div`
  width: ${pxToRem(60)};
  height: ${pxToRem(8)};
  border-radius: ${pxToRem(5)};
  background-color: ${(props) =>
    props.active ? "#3161E8" : "rgba(49, 97, 232, 0.3)"};
`;

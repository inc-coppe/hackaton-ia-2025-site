import styled from "styled-components";

const pxToRem = (size) => `${size / 16}rem`;

export const Container = styled.div`
  height: 120vh;
  margin: 7.5rem;

  /*display: flex;
  flex-direction: column;
  align-items: center;*/
  

  @media (max-width: 28rem) {
    margin: 0rem;
    padding: 0 1.75rem;
    align-items: center;
    padding-top: 7.5rem;
    height: 180vh;
    
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;

  @media (max-width: 28rem) {
    align-items: center;
    
  }
  
`;

export const SectionSubtitle = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.563rem; // 25px
  color: "#0F0F21";
  text-align: left;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.375rem; // 22px
    
  }
`;

export const Title = styled.h1`
  
  
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem; // 50px
  line-height: 3.8125rem; // 61px
  text-align: left;
  color: #0f0f21;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 28rem) {
    font-size: 2rem; // 32px
    line-height: 2.4375rem; // 39px
    width: 21.375rem; // 342px
    height: ${pxToRem(156)}; // 78px

    text-align: left;
  }
`;

export const Body = styled.p`
  width: 58rem;
  text-align: left;
  
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  text-align: left;
  color: #0f0f21;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
    width: 21.375rem; // 342px
    height: 6.25rem; // 100px

    
    text-align: left;
    
    margin-bottom: 2.4rem;
    margin-top: 1rem;   

  }
`;

export const Texts = styled.div`
  width: 65rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 28rem) {
    width: 19.375rem; // 310px
    height: 17.4375rem; // 279px
    gap: 1.5rem; // 24px
    align-self: stretch;
    padding: 0 10.75rem;
    
  }
`;

export const CustomCarouselWrapper = styled.div`
  width: 100%;
  padding: 0 0rem;
`;
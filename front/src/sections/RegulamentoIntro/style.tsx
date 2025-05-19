import styled from "styled-components";

export const RegulamentoIntroContainer = styled.div`
  position: relative;
  height: 19.75rem;
  padding-left: 10.5rem;
  padding-right: 10.5rem;
  padding-top: 10rem;

  background: linear-gradient(252.74deg, #2E2989 38.15%, #53167F 100%);

  @media (max-width: 28rem) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 7.875rem;
    
    height: 15.688rem;
  }
  
`;

export const Title = styled.div`
    font-family: Montserrat;
    font-size: 3.125rem;
    line-height: 100%;
    font-weight: 900;
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
    color: #FFFFFF;

  @media (max-width: 28rem) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.div`
    font-family: Nunito Sans;
    font-size: 1.125rem;
    line-height: 100%;
    font-weight: 700;
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
    color: #FFFFFF;

    padding-bottom: 1rem;

    @media (max-width: 28rem) {
      font-size: 1rem;
    } 

`;
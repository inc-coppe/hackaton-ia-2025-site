import styled from "styled-components";

export const DesafiosIntroContainer = styled.div`
  position: relative;
  height: 24.75rem;
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
    max-width: calc(25 * 0.7em); //o em é o referente ao tamanho da fonte, nesse caso 1em = 3.125 rem

    font-family: Montserrat;
    font-size: 3.125rem;
    line-height: 100%;
    font-weight: 900;
    letter-spacing: 0;
    text-align: left;
    text-transform: uppercase;
    color: #FFFFFF;

    
`;

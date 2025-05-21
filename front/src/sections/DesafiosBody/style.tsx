import styled from "styled-components";


export const DesafiosBodyContainer = styled.div`
  
  height: auto;
  padding-left: 10.5rem;
  padding-right: 10.5rem;
    padding-bottom: 10rem;

  @media (max-width: 28rem) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 7.875rem;
    
    height: 15.688rem;
  }
  
`;

export const ConteudoDesafiosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // ocupa o resto da largura
  padding-left: 4rem;
  gap: 7.5rem; // espaçamento entre desafios
`;


export const DesafiosBodyPrincipalContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
`;

export const MenuContainer = styled.div`
  position: sticky;
  top: 10rem;

  display: flex;
  flex-direction: column;

  width: 17.125rem;
  height: 41.75rem;

  

  gap: 0.438rem;
`;

export const ChallengesContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: auto;
    width: 100%; //59.875rem

    gap: 1.5rem; //7.5
    padding-left: 4rem;

`;

export const MenuText = styled.div`

  font-family: Montserrat;
  font-size: 0.938rem;
  line-height: 2rem; 
  font-weight: 700;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F21;

  &.active {
    border-right: 0.125rem solid #377DFF;
    
  }

`;

export const PreDivisionText = styled.div`
  max-width: calc(75 * 0.5em);

  font-family: Nunito Sans;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F21;

  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const ChallengesTitle = styled.div`

  font-family: Montserrat;
  font-size: 2rem;
  line-height: 100%;
  font-weight: 900;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F21;


`;

export const ChallengesSubTitle = styled.div`

  font-family: Montserrat;
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 800;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F2199;


`;

export const ChallengesBody = styled.div`

  font-family: Nunito Sans;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F2199;


`;

export const Paragraph = styled.div`
    font-family: Nunito Sans;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 500;
    letter-spacing: 0;
    text-align: left;
    color: #0F0F2199;

    padding-bottom: 0rem;

    @media (max-width: 28rem) {
        font-size: 1rem;
    }
`;

export const Titulo_info = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.5rem;

`;


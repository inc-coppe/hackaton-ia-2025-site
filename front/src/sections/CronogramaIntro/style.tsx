import styled from "styled-components";

export const CronogramaIntroContainer = styled.div`
  position: relative;
  height: 24.75rem;
  padding-left: 7.5rem;
  padding-right: 7.5rem;
  padding-top: 10rem;
  padding-bottom: 12.5rem;

  background: linear-gradient(252.74deg, #2E2989 38.15%, #53167F 100%);
  
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

`;

export const TitleBody = styled.div`
    font-family: Nunito Sans;
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 500;
    letter-spacing: 0;
    text-align: left;
    color: #FFFFFF;

  padding-top: 2rem;
`;

export const Gradient = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;

  @media (max-width: 28rem) {
    }
  
`;

export const PreDivisionText = styled.div`
  font-family: Nunito Sans;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F21;

  padding-top: 5rem;
`;

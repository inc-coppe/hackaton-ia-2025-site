import styled from "styled-components";

export const CronogramaBodyContainer = styled.div`
  position: relative;
  height: auto;
  padding-left: 7.5rem;
  padding-right: 7.5rem;
  padding-bottom: 7.5rem;
  
  @media (max-width: 28rem) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    //padding-top: 4rem;
    padding-bottom: 3.75rem;
  }
`;

export const CronogramaDayContainer = styled.div`
  position: relative;
  
  border-left: 0.125rem solid #377dff;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 28rem) {
    border-left: 0;
    gap: 2rem;
    
  }
`;

export const CronogramaTitle = styled.div`
  font-family: Montserrat;
  font-size: 2rem;
  line-height: 100%;
  font-weight: 900;
  letter-spacing: 0;
  text-align: left;
  color: #0f0f21;
  text-transform: uppercase;

  padding-top: 7.5rem;
  padding-bottom: 2.5rem;

  @media (max-width: 28rem) {
    padding-bottom: 2.5rem;
    padding-top: 3.75rem;
    
  }
`;

export const Circle = styled.div`
  position: absolute;

  left: -0.45rem; /* se alinha com a linha azul */
  top: 50%; /* centraliza verticalmente no título */
  transform: translateY(-50%); /* centraliza perfeitamente */

  width: 0.75rem;
  height: 0.75rem;

  background-color: white;
  border: 0.125rem solid #377dff; /* círculo azul */
  border-radius: 50%;

  @media (max-width: 28rem) {
    border: 0;
    
  }
`;

export const DataLugarText = styled.div`
  font-family: Montserrat;
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 800;
  letter-spacing: 0;
  text-align: left;
  color: #0f0f2199;
  text-transform: uppercase;

  padding-left: 1.5rem;

  @media (max-width: 28rem) {
    padding-left: 0;    
  }
`;

export const EventoTitle = styled.div`
  position: relative;

  font-family: Montserrat;
  font-size: 1.25rem;
  line-height: 100%;
  font-weight: 900;
  letter-spacing: 0;
  text-align: left;
  color: #0f0f21;

  padding-left: 1.5rem;

  @media (max-width: 28rem) {
    padding-left: 0;    
    font-size: 1.125rem;
  }
`;

export const EventoBody = styled.div`
  font-family: Nunito Sans;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  letter-spacing: 0;
  text-align: left;
  color: #0f0f2199;

  padding-left: 1.5rem;

  @media (max-width: 28rem) {
    padding-left: 0;
    font-size: 1rem;  
    line-height: 1.25rem;
  }
`;

export const EventoContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 28rem) {
    gap: 0.25rem;
  }

`;

export const InfoBodyContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
`;

export const CronogramaIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; /* Centraliza o TextWrapper */
  justify-content: left;
  width: 100%;
  padding: 9.125rem 7.5rem 5rem; /* Desktop: 146px 120px 80px */
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);

  @media (max-width: 48rem) {
    margin-top: 4rem;
    padding: 3.75rem 1.5rem; /* Mobile: 60px 24px */
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
  color: #ffffff;

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
  color: #ffffff;

  padding-bottom: 1rem;

  @media (max-width: 28rem) {
    font-size: 1rem;    
  }
`;

export const TitleBody = styled.div`
  font-family: Nunito Sans;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  letter-spacing: 0;
  text-align: left;
  color: #ffffff;

  padding-top: 2rem;

  @media (max-width: 28rem) {
    font-size: 1rem;
    line-height: 1.25rem;    
  }
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
  color: #0f0f21;

  padding-top: 5rem;

  @media (max-width: 28rem) {
    font-size: 1rem;  
    line-height: 1.25rem;
  }
`;

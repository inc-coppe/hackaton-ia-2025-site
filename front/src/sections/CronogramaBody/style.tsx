import styled, { css } from "styled-components";


export const CronogramaBodyContainer = styled.div`
  position: relative;
  height: auto;
  padding-left: 7.5rem;
  padding-right: 7.5rem;
  padding-bottom: 7.5rem;
  
`;

export const CronogramaDayContainer = styled.div`
  position: relative;
  border-left: 0.125rem solid #377DFF;
  
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const CronogramaTitle = styled.div`
  font-family: Montserrat;
  font-size: 2rem;
  line-height: 100%;
  font-weight: 900;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F21;
  text-transform: uppercase;

  padding-top: 5rem;
  padding-bottom: 4rem;
`;

export const Circle = styled.div`
  position: absolute;
  
  left: -0.450rem; /* se alinha com a linha azul */
  top: 50%; /* centraliza verticalmente no título */
  transform: translateY(-50%); /* centraliza perfeitamente */

  width: 0.75rem;
  height: 0.75rem;

  background-color: white;
  border: 0.125rem solid #377DFF; /* círculo azul */
  border-radius: 50%;
`;

export const DataLugarText = styled.div`
  font-family: Montserrat;
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 800;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F2199;
  text-transform: uppercase;

  padding-left: 1.5rem;

`;

export const EventoTitle = styled.div`
  position: relative;

  font-family: Montserrat;
  font-size: 1.25rem;
  line-height: 100%;
  font-weight: 900;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F21;

  padding-left: 1.5rem;

`;

export const EventoBody = styled.div`
  font-family: Nunito Sans;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  letter-spacing: 0;
  text-align: left;
  color: #0F0F2199;

  padding-left: 1.5rem;

`;

export const EventoContainer = styled.div`
  position: relative;
  
  
`;


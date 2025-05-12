import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Ensure content is spaced apart */
  background: linear-gradient(243.99deg, #2e2989 32.82%, #3161e8 100.02%);
  height: 140vh;
  padding: 60px 100px; /* Add padding for better spacing */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack content vertically on smaller screens */
    padding: 60px 20px; /* Reduce padding for smaller screens */
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: start;
  gap: 1rem; /* Vertical spacing between title and body */
  max-width: 50%; /* Limit width for better alignment */

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on smaller screens */
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 0.25rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionSubtitle = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 25px;
  color: #ffffff;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem; /* Corrected font size */
  line-height: 1.2; /* Adjust line height for better readability */
  color: #ffffff;
`;

export const Body = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffffff;
  text-align: left;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 50%; /* Limit width for better alignment */

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on smaller screens */
    align-items: flex-start; /* Align sections to the left on smaller screens */
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 2rem;
  border-radius: 2px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
`;

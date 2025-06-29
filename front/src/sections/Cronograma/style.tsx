import styled from "styled-components";

// Container for the section
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(58.59deg, #2e2989 41.91%, #53167f 100%);
  justify-content: center;
  position: relative; /* Ensure overlay is positioned relative to this container */
  height: auto; /* This should be enough to make space for the overlay */

  @media (max-width: 28rem) {
    /* min-height: 280vh;  essa linha fazia com que sempre ocupasse muito mais espaço que o necessário */
    height: auto;
    justify-content: flex-start;
    padding-top: 3.5rem;
    align-items: stretch;

    padding-bottom: 3.75rem;
  }
`;

// White overlay for the bottom of the section
export const WhiteOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%; /* Adjust the height to cover the desired portion - estava 29*/
  background-color: white;
  z-index: 0; /* Make sure it stays below the content but above the background */

  @media (max-width: 28rem) {
    height: 9%;
  }
`;

// Wrapper for margin around the content
export const Margin = styled.div`
  padding: 1rem 7.5rem 0;
  position: relative; /* Ensure content remains above the overlay */
  z-index: 1; /* Ensure content is above the white overlay */

  @media (max-width: 28rem) {
    margin: 0;
    padding: 0rem 1.5rem;
  }
`;

export const ContainerCarousel = styled.div`
  padding-bottom: 1rem;
  padding-left: 7.5rem;
  position: relative; /* Ensure content remains above the overlay */
  z-index: 1; /* Ensure content is above the white overlay */

  @media (max-width: 28rem) {
    margin: 0;
    padding: 0rem 1rem;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3rem;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;

  padding-top: 5rem;
  padding-bottom: 3.5rem;

  @media (max-width: 28rem) {
    padding-bottom: 0rem;
    padding-top: 0rem;
    font-size: 2rem;
    line-height: 2.438rem;
    width: 21.375rem;
    height: 6rem;
  }
`;

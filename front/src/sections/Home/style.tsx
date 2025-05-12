import styled from "styled-components";

// Container for the homepage
export const HomePageContainer = styled.div`
  position: relative;
  height: 100vh; /* Full viewport height */
  background-color: #110249;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0; /* Ensure it’s beneath the content */
`;

export const Gradient = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the gradient covers the entire area */
  z-index: -1; /* Place the gradient behind everything else */
`;

export const LogoContainer = styled.div`
  position: relative;
  z-index: 1; /* Ensures the logo stays above the gradient */
  display: flex;
  align-items: center;
  justify-content: center; /* Corrected typo */
  max-width: 80vw; /* Ensure the container doesn’t overflow */
  max-height: 80vh; /* Limit the size for responsiveness */
`;

export const HomeImage = styled.img`
  height: 30.563rem;
  width: 27.167rem;
`;

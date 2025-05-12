import styled from "styled-components";

// Container for the section
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(58.59deg, #2e2989 41.91%, #53167f 100%);
  justify-content: center;
  position: relative; /* Ensure overlay is positioned relative to this container */
  height: 160vh; /* This should be enough to make space for the overlay */
`;

// White overlay for the bottom of the section
export const WhiteOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 29%; /* Adjust the height to cover the desired portion */
  background-color: white;
  z-index: 0; /* Make sure it stays below the content but above the background */
`;

// Wrapper for margin around the content
export const Margin = styled.div`
  margin: 7.5rem;
  position: relative; /* Ensure content remains above the overlay */
  z-index: 1; /* Ensure content is above the white overlay */
`;

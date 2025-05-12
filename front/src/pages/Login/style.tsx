import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #11034a;
  padding: 2rem;
`;

export const LoginCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin: 0;
  max-width: 400px;
`;

export const ErrorMessage = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #ff4d4d;
  background-color: rgba(255, 77, 77, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 77, 77, 0.2);
  text-align: center;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const GoogleButtonWrapper = styled.div`
  transform: scale(1.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.22);
  }

  // Custom styles for Google button (override default styles)
  div {
    border-radius: 0.5rem !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2) !important;
  }
`;

export const Logo = styled.img`
  user-select: none;
`;

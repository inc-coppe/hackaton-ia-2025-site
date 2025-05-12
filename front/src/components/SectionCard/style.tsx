import styled from "styled-components";

export const SectionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.75rem;
  margin: 0.5rem;
  width: 40vw;
  height: 17vh;
  justify-content: center;

  background: #ffffff;
  border-radius: 0.5rem; /* 8px = 0.5rem */

  @media (max-width: 48rem) {
    /* 768px = 48rem */
    padding: 1rem; /* 16px = 1rem */
  }
`;

export const CardHeader = styled.div`
  display: flex;
  margin-top: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 0.75rem; /* 12px = 0.75rem */
  line-height: 1.5rem; /* 24px = 1.5rem */
  color: rgba(15, 15, 33, 0.6);

  @media (max-width: 48rem) {
    /* 768px = 48rem */
    font-size: 0.625rem; /* 10px = 0.625rem */
    line-height: 1.25rem; /* 20px = 1.25rem */
  }
`;

export const CardSubtitle = styled.h4`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; /* 18px = 1.125rem */
  line-height: 1.5625rem; /* 25px = 1.5625rem */
  color: #0f0f21;

  @media (max-width: 48rem) {
    /* 768px = 48rem */
    font-size: 1rem; /* 16px = 1rem */
    line-height: 1.375rem; /* 22px = 1.375rem */
  }
`;

export const CardDescription = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem; /* 16px = 1rem */
  line-height: 1.25rem; /* 20px = 1.25rem */
  color: #0f0f21;

  @media (max-width: 48rem) {
    /* 768px = 48rem */
    font-size: 0.875rem; /* 14px = 0.875rem */
    line-height: 1.125rem; /* 18px = 1.125rem */
  }
`;

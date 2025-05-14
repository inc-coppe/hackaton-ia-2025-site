import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 2rem 1.5rem;

  @media (max-width: 28rem) {
    width: 21.375rem; // 342px
    height: 13.25rem; // 212px
    padding: 1rem 2rem 1.5rem; // 16px 32px 24px
    gap: 2rem; // 32px
    align-self: stretch;
  }
`;

export const CardImage = styled.img`
  width: 6.25rem; // 100px
  height: 6.25rem; // 100px
  border-radius: 50%;
  object-fit: cover;
  border: 0.125rem solid #0f0f21; // 2px
  flex: none;
  order: 0;
  flex-grow: 0;

  @media (max-width: 28rem) {
    width: 6.25rem; // 100px
    height: 6.25rem; // 100px
  }
`;

export const CardText = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  text-align: center;
  color: #0f0f21;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 28rem) {
    font-size: 1rem; // 16px
    line-height: 1.25rem; // 20px
    width: 17.375rem; // 278px
    height: 2.5rem; // 40px
  }
`;

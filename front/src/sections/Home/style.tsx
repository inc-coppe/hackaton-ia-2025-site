import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  overflow: hidden;
  backdrop-filter: blur(0.625rem);

  @media (max-width: 28rem) {
    height: 4.2rem; // 70% of 6rem
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 2.5rem;
  position: absolute;
  left: 0;
  height: 100%;
  animation: scroll 40s linear infinite;
  align-items: center;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 28rem) {
    gap: 0.5rem; // Keep the same gap for consistency
  }
`;

export const CarouselItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    border-radius: 0.5rem;
  }

  @media (max-width: 28rem) {
    transform: scale(0.7);
  }
`;

export const HomePageContainer = styled.div`
  position: relative;
  height: 140vh;
  background-color: #110249;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  padding: 0 2rem;
  padding-bottom: 12.5rem;
  margin-top: 4rem;

  @media (max-width: 28rem) {
    height: 110vh; // Changed from fixed height
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    top: 0; // Remove top spacing
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;

  @media (max-width: 28rem) {
    margin-left: 1.5rem;
    margin-top: 1rem; // Reduced from 2.5rem
    gap: 1rem;
    width: calc(100% - 3rem);
    align-items: flex-start;
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
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;
  position: relative; // Add this
  z-index: 2; // Add this

  @media (max-width: 28rem) {
    max-width: 100%;
    width: 100%;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: left;
  color: #ffffff;
  margin: 0;
  position: relative; // Add this
  z-index: 2; // Add this
  width: auto;

  @media (max-width: 28rem) {
    font-size: 1.125rem;
    line-height: 1.375rem;
    margin-bottom: 0.25rem;
    display: block;
    position: relative;
    z-index: 2;
    width: auto;
  }
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: 0;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 0;

  @media (max-width: 28rem) {
    font-size: 2.8125rem;
    line-height: 2.8125rem;
    height: 2.8125rem;
    width: auto;
  }
`;

export const TitleNoBg = styled.h1`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: 0;
  text-align: left;
  text-transform: uppercase;
  color: #110249e5;
  text-shadow:
    -0.3125rem -0.3125rem 0 #ffffff,
    0.3125rem -0.3125rem 0 #ffffff,
    -0.3125rem 0.3125rem 0 #ffffff,
    0.3125rem 0.3125rem 0 #ffffff;
  margin-bottom: 0;

  @media (max-width: 28rem) {
    font-size: 2.8125rem;
    line-height: 2.8125rem;
    width: 2.9375rem;
    height: 2.8125rem;
    border: 0.25rem solid #ffffff;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 28rem) {
    margin: 0;
    position: absolute;
    width: 11.875rem;
    height: 13.4375rem;
    left: 6.25rem;
    top: 10rem; // Adjusted from 12rem
    z-index: 1;
  }
`;

export const HomeImage = styled.img`
  width: 38.625rem;
  height: 42.625rem;

  @media (max-width: 28rem) {
    width: 125%;
    height: 125%;
    mix-blend-mode: lighten;
  }
`;

export const SolidButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: #ffffff;
  color: #3161e8;
  border-radius: 0.125rem;
  padding: 0.75rem 2rem;
  border: none;
  cursor: pointer;
  margin-top: 5rem;
  transition: background-color 0.2s ease;
  width: fit-content;

  @media (max-width: 28rem) {
    position: absolute;
    width: 10.875rem;
    height: 2.4375rem;
    left: 6.75rem;
    top: 24rem; // Adjusted from 26.9375rem
    padding: 0.75rem 1.25rem;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    margin-top: 0;
  }
`;

export const PlaceContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  position: absolute;
  width: 25.8125rem;
  height: 3.0625rem;
  left: 3rem;
  bottom: 7rem;
  margin-bottom: 4rem;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 4.125rem;
    left: 1.5rem;
    top: 30rem; // Adjusted from 32.125rem
    bottom: auto;
  }
`;

export const PlaceContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
  position: absolute;
  width: 25.375rem;
  height: 3.0625rem;
  right: 3rem;
  bottom: 7rem;
  margin-bottom: 4rem;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 4.125rem;
    right: 1.5rem;
    top: 35rem; // Adjusted from 37.25rem
    bottom: auto;
    align-items: flex-end;
  }
`;

export const SubtitleLeft = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #ffffff;
  margin: 0;
  width: 25.8125rem;
  height: 1.5625rem;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 1.375rem;
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const SubtitleRight = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #ffffff;
  text-align: right;
  margin: 0;
  width: 25.375rem;
  height: 1.5625rem;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 1.375rem;
    font-size: 1rem;
    line-height: 1.375rem;
    text-align: right; // Keep right alignment
  }
`;

export const SmallerTitleLeft = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #ffffff;
  margin: 0;
  width: 25.8125rem;
  height: 1.5rem;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 2.75rem;
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
`;

export const SmallerTitleRight = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: right;
  color: #ffffff;
  margin: 0;
  width: 25.375rem;
  height: 1.5rem;

  @media (max-width: 28rem) {
    width: 21.375rem;
    height: 2.75rem;
    font-size: 1.125rem;
    line-height: 1.375rem;
    text-align: right; // Keep right alignment
  }
`;

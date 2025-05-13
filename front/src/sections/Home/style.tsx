import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  left: 0;
  height: 100%;
  animation: scroll 40s linear infinite;

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
`;

export const CarouselItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
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
  padding-bottom: 200px; /* Make space for the carousel */
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Space between text container and button */
  margin-left: 1rem; /* Left margin */
`;

export const Gradient = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  max-width: 50%;
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: left;
  color: #ffffff;
  margin-bottom: 0;
`;

export const Title = styled.h1`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 0;
`;

export const SmallerTitle = styled.h2`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 20px;
  line-height: 100%;
  color: #ffffff;
  letter-spacing: 0px;
  text-align: center;
`;

export const Subtitle = styled.h3`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  color: #ffffff;
`;

export const TitleNoBg = styled.h1`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 5rem;
  line-height: 5rem;
  letter-spacing: 0px;
  text-align: left;
  text-transform: uppercase;
  color: #110249e5;
  text-shadow:
    -5px -5px 0 #ffffff,
    5px -5px 0 #ffffff,
    -5px 5px 0 #ffffff,
    5px 5px 0 #ffffff;
  margin-bottom: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem; /* Right margin */
`;

export const HomeImage = styled.img`
  width: 38.625rem;
  height: 42.625rem;
`;

export const SolidButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  background-color: #ffffff;
  color: #3161e8;
  border-radius: 0.2rem;
  padding: 0.75rem 2rem;
  border: none;
  cursor: pointer;
  margin-top: 5rem; /* Space between text and button */
  transition: background-color 0.2s ease;
  width: fit-content; /* Button only as wide as its content */

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 1280px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
  }
`;

export const PlaceContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 413px;
  height: 49px;
  left: 3rem; /* 7.5rem margin-left */
  bottom: 7rem; /* Position it above the carousel */
`;

export const PlaceContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  position: absolute;
  width: 406px;
  height: 49px;
  right: 7.5rem; /* 7.5rem margin-right */
  bottom: 7rem; /* Position it above the carousel */
`;

export const SubtitleLeft = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  margin: 0;
  width: 413px;
  height: 25px;
`;

export const SmallerTitleLeft = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  width: 413px;
  height: 24px;
`;

export const SubtitleRight = styled.h3`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  text-align: right;
  margin: 0;
  width: 406px;
  height: 25px;
`;

export const SmallerTitleRight = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  width: 406px;
  height: 24px;
`;

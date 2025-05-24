import React from "react";
import styled, { keyframes, css } from "styled-components";

const move1 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  20% { transform: translate(70%, -80%) rotate(90deg) scale(1.2); }
  40% { transform: translate(-60%, 40%) rotate(180deg) scale(0.9); }
  60% { transform: translate(80%, 60%) rotate(270deg) scale(1.1); }
  80% { transform: translate(-50%, -60%) rotate(320deg) scale(0.8); }
  100% { transform: translate(0, 0) rotate(360deg) scale(1); }
`;

const move2 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(0.9); }
  20% { transform: translate(-80%, 70%) rotate(-90deg) scale(1.1); }
  40% { transform: translate(60%, -70%) rotate(-180deg) scale(1.2); }
  60% { transform: translate(-70%, -60%) rotate(-270deg) scale(0.8); }
  80% { transform: translate(50%, 80%) rotate(-320deg) scale(1); }
  100% { transform: translate(0, 0) rotate(-360deg) scale(0.9); }
`;

const BlobContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  filter: blur(80px);
  opacity: 0.7;
`;

interface BlobProps {
  color: string;
  top: string;
  left: string;
  size: string;
  isFirstAnimation: boolean;
  duration: number;
}

const Blob = styled.div<BlobProps>`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) => props.color};
  border-radius: 43% 57% 52% 48% / 45% 45% 55% 55%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation: ${(props) => css`
    ${props.isFirstAnimation
      ? move1
      : move2} ${props.duration}s infinite ease-in-out
  `};
  mix-blend-mode: screen;
  will-change: transform;

  @media (max-width: 28rem) {
    width: calc(${(props) => props.size} * 0.6);
    height: calc(${(props) => props.size} * 0.6);
  }
`;

const AnimatedBlobs = () => {
  return (
    <BlobContainer>
      <Blob
        color="#110249"
        top="-30%"
        left="-10%"
        size="900px"
        isFirstAnimation={true}
        duration={20} // Faster animation
      />
      <Blob
        color="#53167F"
        top="20%"
        left="80%"
        size="800px"
        isFirstAnimation={false}
        duration={25}
      />
      <Blob
        color="#2E2989"
        top="80%"
        left="-20%"
        size="850px"
        isFirstAnimation={true}
        duration={22}
      />
      <Blob
        color="#3161E8"
        top="-20%"
        left="40%"
        size="750px"
        isFirstAnimation={false}
        duration={18} // Fastest animation
      />
    </BlobContainer>
  );
};

export default AnimatedBlobs;

import styled from "styled-components";

export const MaterialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  isolation: isolate;
  position: relative;
  width: 100%;
  background: #ffffff;

  @media (max-width: 48rem) {
    // 768px
    width: 24.375rem; // 390px
    height: 284.6875rem; // 4555px
  }
`;

export const HighlightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.125rem 7.5rem 5rem; // 146px 120px 80px
  gap: 4rem; // 64px
  width: 100%;
  height: 28.5625rem; // 457px
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);

  @media (max-width: 48rem) {
    padding: 5rem 1.5rem; // 80px 24px
    height: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 2rem; // 32px
  width: 81rem; // 1296px
  height: 14.4375rem; // 231px
  border-radius: 0.5rem; // 8px

  @media (max-width: 48rem) {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem; // 4px
  width: 81rem; // 1296px
  height: 9.4375rem; // 151px

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 3.125rem; // 50px
  line-height: 3.8125rem; // 61px
  color: #ffffff;

  @media (max-width: 48rem) {
    width: 100%;
    height: auto;
    font-size: 2rem; // 32px
    line-height: 2.4375rem; // 39px
  }
`;

export const Subtitle = styled.h2`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.5625rem; // 25px
  color: #ffffff;
  margin: 0;
`;

export const Description = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  color: #ffffff;
  margin: 0;
  height: 3rem; // 48px
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 7.5rem 7.5rem; // 80px 120px 120px
  gap: 2.5rem; // 40px
  width: 96rem; // 1536px

  @media (max-width: 48rem) {
    width: 100%;
    padding: 2.5rem 1.5rem;
  }
`;

export const IntroText = styled.p`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  color: #0f0f21;
  width: 81rem; // 1296px

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

export const MaterialsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2.5rem 7.5rem 0; // 40px 120px 0
  gap: 4rem; // 64px
  width: 96rem; // 1536px

  @media (max-width: 48rem) {
    width: 100%;
    flex-direction: column;
    padding: 1.5rem;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.75rem 1.5rem 0.75rem 0; // 12px 24px 12px 0
  gap: 1.5rem; // 24px
  width: 17.125rem; // 274px
  border-right: 0.125rem solid #c1d0f8; // 2px

  @media (max-width: 48rem) {
    width: 100%;
    border-right: none;
    border-bottom: 0.125rem solid #c1d0f8;
    padding: 0 0 1.5rem;
  }
`;

export const MenuTitle = styled.button<{ active?: boolean }>`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9375rem; // 15px
  line-height: 0.9375rem; // 15px
  display: flex;
  align-items: center;
  color: ${(props) => (props.active ? "#3161E8" : "#0F0F21")};
  width: 15.625rem; // 250px
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;

  &:hover {
    color: #3161e8;
  }
`;

export const MenuSelected = styled.div`
  position: absolute;
  width: 0;
  height: 2.4375rem; // 39px
  border: 0.125rem solid #3161e8; // 2px
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7.5rem; // 120px
  width: 59.875rem; // 958px

  @media (max-width: 48rem) {
    width: 100%;
    gap: 3rem;
  }
`;

export const ChapterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 2rem; // 32px
  width: 59.875rem; // 958px
  height: auto;

  @media (max-width: 48rem) {
    width: 100%;
    gap: 1.5rem;
  }
`;

export const ChapterTitle = styled.h2`
  width: 100%;
  height: 2.4375rem; // 39px
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 2rem; // 32px
  line-height: 2.4375rem; // 39px
  color: #0f0f21;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }
`;

export const ChapterAuthor = styled.p`
  width: 100%;
  height: 1.5rem; // 24px
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 0.75rem; // 12px
  line-height: 1.5rem; // 24px
  color: rgba(15, 15, 33, 0.6);
  margin: 0;
`;

export const ChapterDescription = styled.p`
  width: 100%;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  color: rgba(15, 15, 33, 0.6);
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const VideoContainer = styled.div`
  width: 50rem; // 800px
  height: 28.125rem; // 450px
  background: #d9d9d9;
  border-radius: 0.5rem; // 8px

  @media (max-width: 48rem) {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; // 16:9 aspect ratio
  }
`;

export const SubtitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 0.5rem; // 8px
  width: 100%;
`;

export const SubtitleTitle = styled.h3`
  width: 100%;
  height: 1.5625rem; // 25px
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem; // 18px
  line-height: 1.5625rem; // 25px
  color: #0f0f21;
  margin: 0;
`;

export const SubtitleText = styled.p`
  width: 100%;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem; // 20px
  line-height: 1.5rem; // 24px
  color: rgba(15, 15, 33, 0.6);
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

// Additional utility components for responsive design
export const MobileOnly = styled.div`
  display: none;
  @media (max-width: 48rem) {
    display: block;
  }
`;

export const DesktopOnly = styled.div`
  display: block;
  @media (max-width: 48rem) {
    display: none;
  }
`;

// Animations for hover and active states
export const ContentTransition = styled.div`
  transition: all 0.3s ease-in-out;
`;

export const HoverEffect = styled.div`
  &:hover {
    transform: translateY(-0.125rem); // 2px
    transition: transform 0.2s ease-in-out;
  }
`;

// Container for the navigation between chapters
export const ChapterNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 0; // 32px 0
  margin-top: 2rem; // 32px

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NavigationButton = styled.button<{ direction: "prev" | "next" }>`
  display: flex;
  align-items: center;
  gap: 0.5rem; // 8px
  padding: 0.75rem 1.25rem; // 12px 20px
  background: transparent;
  border: 0.125rem solid #3161e8; // 2px
  border-radius: 0.125rem; // 2px
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 0.9375rem; // 15px
  color: #3161e8;

  ${(props) =>
    props.direction === "prev" &&
    `
    flex-direction: row-reverse;
  `}

  &:hover {
    background: rgba(49, 97, 232, 0.1);
  }

  @media (max-width: 48rem) {
    width: 100%;
    justify-content: center;
  }
`;

// Progress indicator for the current chapter
export const ProgressIndicator = styled.div`
  position: fixed;
  top: 4.125rem; // 66px
  left: 0;
  height: 0.25rem; // 4px
  background: #3161e8;
  transition: width 0.2s ease-in-out;
`;

// Container for chapter attachments and resources
export const ResourcesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // 16px
  width: 100%;
  margin-top: 2rem; // 32px
  padding: 1.5rem; // 24px
  background: rgba(193, 208, 248, 0.1);
  border-radius: 0.5rem; // 8px

  @media (max-width: 48rem) {
    padding: 1rem;
  }
`;

export const ResourceTitle = styled.h4`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 1rem; // 16px
  color: #0f0f21;
  margin: 0;
`;

export const ResourceLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem; // 8px
  font-family: "Nunito Sans";
  font-size: 1rem; // 16px
  color: #3161e8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

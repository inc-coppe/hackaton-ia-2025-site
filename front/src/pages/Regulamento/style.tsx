import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`;

export const HighlightSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 9.125rem 10.5rem 5rem;
  background: linear-gradient(252.74deg, #2e2989 38.15%, #53167f 100%);

  @media (max-width: 48rem) {
    padding: 9.125rem 10.5rem 5rem;
  }

  @media (max-width: 30rem) {
    margin-top: 4rem;
    margin-bottom: 3.75rem;
    padding: 3.75rem 1.5rem;
  }
`;

export const HighlightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;
  //max-width: 57.25rem;

  @media (max-width: 30rem) {
    max-width: 21.375rem;
  }
`;

export const HighlightSubtitle = styled.h2`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #ffffff;
  margin: 0;
  width: 100%;

  @media (max-width: 30rem) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const HighlightTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 3.125rem;
  line-height: 3.8125rem;
  color: #ffffff;
  margin: 0;
  width: 100%;

  @media (max-width: 30rem) {
    font-size: 2rem;
    line-height: 2.4375rem;
  }
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: left; /* Estava centralizado gernado desalinhamento */
  padding: 5rem 10.5rem 7.5rem;
  gap: 3.5rem;
  width: 100%;

  @media (max-width: 48rem) {
    padding: 2.5rem 1.5rem 3.75rem;
    gap: 2.5rem;
  }

  @media (max-width: 30rem) {
    padding: 0 1.5rem 3.75rem;
    gap: 3.75rem;
  }
`;

export const IntroParagraph = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #0f0f21;
  width: 100%;
  //max-width: 75rem;
  margin: 0;

  @media (max-width: 30rem) {
    font-size: 1rem;
    line-height: 1.25rem;
    max-width: 21.375rem;
  }
`;

export const ArticleSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  //max-width: 75rem;

  @media (max-width: 30rem) {
    max-width: 21.375rem;
  }
`;

export const ArticleTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #0f0f21;
  margin: 0;

  @media (max-width: 30rem) {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
`;

export const ArticleSubtitle = styled.h4`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #0f0f21;
  margin: 0;

  @media (max-width: 30rem) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const ArticleParagraph = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: rgba(15, 15, 33, 0.6);
  margin: 0;
  text-indent: 2em;

  @media (max-width: 30rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 2em;
`;

export const ListParagraph = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: rgba(15, 15, 33, 0.6);
  margin: 0;

  @media (max-width: 30rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const DestaqueParagraph = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 500;
  font-size: 1.35rem;
  line-height: 100%;
  color: rgba(15, 15, 33, 0.8);
  margin: 0;
  text-indent: 2em;
  padding-top: 1.5rem;

  @media (max-width: 30rem) {
    font-size: 1.15rem;
    line-height: 100%;
  }
`;


export const StyledImage = styled.img`
  display: block;
  margin: 0 auto;
  
  width: 100%;
  max-width: 37.5rem;
  height: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
`;
import React from 'react';
import styled from 'styled-components';

// Components
import {
  StyledTitle,
  StyledSubTitle,
  StyledParagraph,
  StyledEmphasisBtn,
} from '../LandingPage/ElementComponents';

const StyledTitleCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;
  max-width: 700px;
  min-height: 500px;
`;

interface StaticImageData {
  src: string;
  height: number;
  width: number;
};

interface ContentProps {
  readonly title: string;
  readonly subtitle: string;
  readonly paragraphsArr: string[];
  readonly imgSrc: StaticImageData;
  readonly repo: string;
};

interface ContentContProps {
  readonly className?: string;
  readonly data: ContentProps;
};

function ContentCont ({ className, data }: ContentContProps) {
  return (
    <div className={className}>
      <StyledContainer>
        <StyledTitleCont>
          <StyledTitle>{data.title}</StyledTitle>
          <StyledSubTitle light regular>{data.subtitle} </StyledSubTitle>
        </StyledTitleCont>
          {data.paragraphsArr.map((paragraph, index) => (
            <StyledParagraph key={index}>
              {paragraph}
            </StyledParagraph>
          ))}
        <StyledTextCont>
          <div>
            <a href={data.repo} target="_blank" rel="noreferrer">
              <StyledEmphasisBtn underline>Repository</StyledEmphasisBtn>
            </a>
          </div>
        </StyledTextCont>
      </StyledContainer>
    </div>
  )
}

const StyledContentCont = styled(ContentCont)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default StyledContentCont;

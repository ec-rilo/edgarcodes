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

interface ContentContProps {
  readonly className?: string;
};

function ContentCont ({ className }: ContentContProps) {
  return (
    <div className={className}>
      <StyledContainer>
        <StyledTitleCont>
          <StyledTitle>Rumble</StyledTitle>
          <StyledSubTitle light regular>Food ordering app, done Tinder style </StyledSubTitle>
        </StyledTitleCont>

        <StyledTextCont>
          <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </StyledParagraph>
          <div>
            <StyledEmphasisBtn underline>Repository</StyledEmphasisBtn>
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

import React from 'react';
import styled from 'styled-components';

// Assets
import viewport from '../../viewportSizes';

// Components
import {
  StyledEmphasisWord,
  StyledParagraph,
  StyledSection,
  StyledSubTitle,
  StyledTitle
} from './ElementComponents';

interface ContentContainerProps {
  readonly className?: string;
};

const ContentContainer = ({ className }: ContentContainerProps) => {
  return (
    <main className={className}>
      <div>
        <StyledSubTitle>Full Stack Engineer</StyledSubTitle>
        {/* <StyledDynamicTitleContainer /> */}
        <StyledTitle>Edgar Carrillo</StyledTitle>
      </div>
      <StyledSection>
        <StyledParagraph>
          Hey there! My name&apos;s Edgar. I&apos;m a Humboldt County, CA based{' '}
          <StyledEmphasisWord>Full Stack Engineer</StyledEmphasisWord>.
        </StyledParagraph>
        <StyledParagraph>
          I&apos;m a problem solver, dog lover, orange juice drinking Software Engineer! I&apos;m
          always interested in hearing about new project ideas and how I can help make them a reality.
        </StyledParagraph>
        <StyledParagraph>
          Have something for me? Feel free to email me directly or fill out the contact form below!
        </StyledParagraph>
      </StyledSection>
      <div>
        <StyledParagraph><StyledEmphasisWord light bold>CONTACT ME</StyledEmphasisWord></StyledParagraph>
        <StyledParagraph>ecarrillo046@gmail.com</StyledParagraph>
      </div>
    </main>
  );
};

const StyledContentContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 650px;

  @media (${viewport.sm}) {
    margin-left: 50px;
  }
`;

export default StyledContentContainer;

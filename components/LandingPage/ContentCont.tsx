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
        <StyledSubTitle>Intern at <StyledEmphasisWord>Expensify</StyledEmphasisWord></StyledSubTitle>
        {/* <StyledDynamicTitleContainer /> */}
        <StyledTitle>Edgar Carrillo</StyledTitle>
      </div>
      <StyledSection>
        <StyledParagraph>
          Hey there! My name is Edgar. I&apos;m a Humboldt County, CA based{' '}
          <StyledEmphasisWord>Full Stack Engineer</StyledEmphasisWord>.
        </StyledParagraph>
        <StyledParagraph>
          I&apos;ve had a passion for solving problems and design since I was young
          and when I started tinkering with html / css I was interested, once I
          jumped into the logic side I was hooked.
        </StyledParagraph>
      </StyledSection>
      <p>
        <StyledParagraph><StyledEmphasisWord light bold>CONTACT ME</StyledEmphasisWord></StyledParagraph>
        <StyledParagraph>ecarrillo046@gmail.com</StyledParagraph>
      </p>
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

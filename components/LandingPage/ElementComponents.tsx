import styled from 'styled-components';

// Assets
import viewport from '../../viewportSizes';

const StyledSubTitle = styled.p`
  color: var(--clr-gainsboro);
  margin-bottom: 10px;

  font-size: 1.5rem;

  @media (${viewport.md}) {
    font-size: 2rem;
  }

  @media (${viewport.xl}) {
    font-size: 2.5rem;
  }
`;

interface StyledEmphasisWordProps {
  readonly light?: boolean;
  readonly bold?: boolean;
};

const StyledEmphasisWord = styled.span<StyledEmphasisWordProps>`
  color: var(--clr-amber);
  ${ ({ light }) => light && `color: var(--clr-gainsboro);` }

  ${ ({ bold }) => bold && `font-family: var(--fnt-dark)` }
`;

const StyledParagraph = styled.p`
  font-family: var(--fnt-regular);
  color: var(--clr-gainsboro);
  font-size: 1.1rem;
`;

const StyledTitle = styled.h1`
  color: var(--clr-gainsboro);
  font-family: var(--fnt-bld);

  font-size: 3rem;

  @media (${viewport.md}) {
    font-size: 4rem;
  }

  @media (${viewport.xl}) {
    font-size: 5rem;
  }

  @media (${viewport['2xl']}) {
    font-size: 5.5rem;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1.5;
  font-size: 1rem;
`;

const StyledPageTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--clr-gainsboro);
  font-family: var(--fnt-bld);
  margin: 30px 0;

  @media (${viewport.xl}) {
    font-size: 3rem;
  }
`;

export {
  StyledEmphasisWord,
  StyledParagraph,
  StyledSection,
  StyledSubTitle,
  StyledTitle,
  StyledPageTitle,
}

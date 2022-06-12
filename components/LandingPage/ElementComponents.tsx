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
  line-height: 1.5rem;
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

interface PageTitleProps {
  readonly noMargin?: boolean;
}

const StyledPageTitle = styled.h2<PageTitleProps>`
  font-size: 2.5rem;
  color: var(--clr-gainsboro);
  font-family: var(--fnt-bld);
  margin: 30px 0;

  ${({ noMargin }) => noMargin && 'margin: 0;'}

  @media (${viewport.xl}) {
    font-size: 3rem;
  }
`;

const StyledEmphasisBtn = styled.p`
  display: inline-block;
  color: var(--clr-gainsboro);
  font-family: var(--fnt-dark);
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 250ms ease-in-out;

  &:after {
    display: block;
    content: ' ';
    padding-bottom: 5px;
    border-bottom: 2px solid var(--clr-gainsboro);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out, border 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    border-bottom: 2px solid var(--clr-amber);
  }

  &:hover {
    color: var(--clr-amber);
  }
`;

interface InputProps {
  readonly isDefault: boolean;
  readonly isValid: boolean;
}

const StyledInput = styled.input<InputProps>`
  background: transparent;
  height: 30px;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-bottom 0.3s;

  color: var(--clr-gainsboro);
  border-bottom: 1px solid var(--clr-gainsboro);

  ${({ isValid, isDefault }) => isValid && !isDefault && `
    border-bottom: 1px solid var(--clr-amber);
  `}

  ${({ isValid, isDefault }) => !isValid && !isDefault && `
    border-bottom: 1px solid var(--clr-salmon);
  `}
`;

interface FormProps {
  readonly isDefault: boolean;
  readonly isValid: boolean;
  readonly isActive: boolean;
}

const StyledLabel = styled.label<FormProps>`
  position: absolute;
  transition: top 0.3s, color 0.3s, font-size 0.3s;
  color: var(--clr-gainsboro);

  top: 8px;

  ${({ isActive }) => isActive && `
    top: -50%;
    font-size: .8rem;
  `}

  ${({ isValid, isDefault }) => isValid && !isDefault && `
    color: var(--clr-amber);
  `}

  ${({ isValid, isDefault }) => !isValid && !isDefault && `
    color: var(--clr-salmon);
  `}
`;

const StyledBorder = styled.div<FormProps>`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 0;
  background-color: var(--clr-gainsboro);
  transform: scaleX(0);
  transition: transform 0.3s, background-color 0.3s;

  ${({ isActive }) => isActive && `
    height: 3px;
    transform: scaleX(1);
  `}

  ${({ isValid, isDefault }) => isValid && !isDefault && `
    background-color: var(--clr-amber);
  `}

  ${({ isValid, isDefault }) => !isValid && !isDefault && `
    background-color: var(--clr-salmon);
  `}
`;

export {
  StyledEmphasisWord,
  StyledParagraph,
  StyledSection,
  StyledSubTitle,
  StyledTitle,
  StyledPageTitle,
  StyledEmphasisBtn,
  StyledInput,
  StyledLabel,
  StyledBorder,
};

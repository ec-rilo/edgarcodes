import styled from 'styled-components';

interface ContentProps {
  readonly name: string;
  readonly isActive: boolean;
};

interface AnimateProps {
  readonly content: ContentProps[];
  readonly index: number;
};

const StyledAnimateImg = styled.img`
  opacity: 1;
  transition: opacity 0.2s;
  cursor: pointer;
  ${({ content, index }: AnimateProps) => {
    if (content[index].isActive === false) {
      return `
      opacity: .2;
    `;
    }
  }}
`;

const StyledAnimateLi = styled.li`
  color: var(--clr-gainsboro);
  transition: color 0.2s;
  cursor: pointer;
  ${({ content, index }: AnimateProps) => {
    if (content[index].isActive === false) {
      return `
      color: var(--clr-gainsboro-light);
    `;
    }
  }}
`;

export { StyledAnimateImg, StyledAnimateLi };

import React from 'react';
import styled, { css } from 'styled-components';

const StyledTitle = styled.h3`
  color: var(--clr-gainsboro);
  font-family: var(--fnt-bld);
  font-size: 2rem;
`;

interface TitleContProps {
  readonly className?: string;
  readonly subTitle: string;
  readonly title: string;
}

const TitleCont = ({ className, subTitle, title }: TitleContProps) => {
  return (
    <div className={className}>
      <p style={{ color: 'var(--clr-amber)'}}>{subTitle}</p>
      <StyledTitle>{title}</StyledTitle>
    </div>
  );
};

const StyledTitleCont = styled(TitleCont)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default StyledTitleCont;

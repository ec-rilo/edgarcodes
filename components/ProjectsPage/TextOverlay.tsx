import React from 'react';
import styled from 'styled-components';

// Assets
import viewport from '../../viewportSizes';

const StyledSubTitle = styled.p`
  color: var(--clr-amber);
  font-family: var(--fnt-regular);
  font-size: 1rem;
`;

const StyledTitle = styled.p`
  color: var(--clr-gainsboro);
  font-family: var(--fnt-bld);
  font-size: 2rem;

  @media (${ viewport.lg }) {
    font-size: 2.5rem;
  }
`;

const StyledTextCont = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

interface TextOverlayProps {
  readonly className?: string;
  readonly title: string;
  readonly subTitle?: string;
};

const TextOverlay = ({ className, title, subTitle }: TextOverlayProps) => {
  return (
    <div className={className}>
      <StyledTextCont >
        <StyledSubTitle>{subTitle}</StyledSubTitle>
        <StyledTitle>{title}</StyledTitle>
      </StyledTextCont>
    </div>
  );
};

const StyledTextOverlay = styled(TextOverlay)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--clr-onyx-transparent);
`;

export default StyledTextOverlay;

import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import StyledRightArrow from '../Arrows/RightArrow';

interface OverlayProps {
  readonly isActive: boolean;
}

const DarkOverlay = styled.div<OverlayProps>`
  background-color: var(--clr-onyx);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 250ms ease-in-out;
  ${({ isActive }) => isActive && 'opacity: 1;'}
`;

const StyledText = styled.p`
  color: var(--clr-gainsboro);
  font-family: var(--fnt-regular);
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const StyledTextCont = styled.div<OverlayProps>`
  position: absolute;
  display: flex;
  gap: 30px;
  flex-direction: row;
  opacity: 0;
  transform: translateY(-400%);
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  ${({ isActive }) => isActive && `
    opacity: 1;
    transform: translateY(0);
  `}
`;

interface OverlayContProps {
  readonly className?: string;
}

const OverlayCont = ({ className }: OverlayContProps) => {
  const [isActive, setActive] = useState(false);

  return (
    <div
      className={className}
      onMouseEnter={() => setActive(!isActive)}
      onMouseLeave={() => setActive(!isActive)}
    >
      <DarkOverlay isActive={isActive} />
      <StyledTextCont isActive={isActive}>
        <StyledText>View Project</StyledText>
        <StyledRightArrow />
      </StyledTextCont>
    </div>
  );
};

const StyledOverlayCont = styled(OverlayCont)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default StyledOverlayCont;
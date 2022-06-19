import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  className?: string
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <p>E</p>
    </div>
  );
};

const StyledLogo = styled(Logo)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--fnt-regular);
  color: var(--clr-gainsboro);
  width: 40px;
  height: 40px;
  border: 1px solid white;
  cursor: pointer;
`;

export default StyledLogo;
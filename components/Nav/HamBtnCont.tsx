import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// assets
import viewport from '../../viewportSizes';

// Components
import StyledTextCont from './TextCont';
import StyledHamBtn from './HamBtn';

interface HamBtnContProps {
  className?: string;
  setHamIsActive: Function;
}

function HamBtnCont ({ className, setHamIsActive }: HamBtnContProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setHamIsActive(isActive);
  }, [isActive, setHamIsActive]);

  return (
    <div className={className} onClick={() => setIsActive(!isActive)}>
      <StyledTextCont isActive={isActive} />
      <StyledHamBtn isActive={isActive} />
    </div>
  );
};

const StyledHamBtnCont = styled(HamBtnCont)`
  display: flex;
  gap: 20px;
  color: var(--clr-gainsboro);
  align-items: center;
  cursor: pointer;
  height: 50px;

  @media (${viewport.lg}) {
    display: none;
  }
`;

export default StyledHamBtnCont;

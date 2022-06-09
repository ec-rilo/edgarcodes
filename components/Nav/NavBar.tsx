import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import StyledLogo from '../Logo';
import StyledHamBtnContainer from './HamBtnCont';

interface NavProps {
  className?: string,
  setHamIsActive: Function,
};

const Nav = ({ className, setHamIsActive }: NavProps) => {
  return (
    <nav className={className}>
      <StyledLogo />
      <StyledHamBtnContainer setHamIsActive={setHamIsActive} />
    </nav>
  );
};

const StyledNav = styled(Nav)`
  position: relative;
  display: flex;
  align-items: center;
  font-family: var(--fnt-regular);
  height: 100px;
  justify-content: space-between;
  background-color: var(--clr-onyx);
  z-index: auto;
`;

interface NavContProps {
  className?: string,
};

const NavCont = ({ className }: NavContProps) => {
  const [hamIsActive, setHamIsActive] = useState(false);

  return (
    <div className={className}>
      <StyledNav setHamIsActive={setHamIsActive} />
    </div>
  );
};

const StyledNavCont = styled(NavCont)`
  position: relative;
  display: block;
  background-color: red;
  width: 100%;
  z-index: 9999;
`;

export default StyledNavCont;

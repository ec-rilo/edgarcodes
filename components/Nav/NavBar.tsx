import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import { TextAnimateLi, useTextAnimate } from '../../assets/hooks/useTextAnimate';
import viewport from '../../viewportSizes';

// Components
import StyledLogo from '../Logo';
import StyledHamBtnContainer from './HamBtnCont';
import StyledDropDownMenu from './DropDown';


interface MenuContainerProps {
  readonly className?: string;
  menuItems: string[];
}

const MenuContainer = ({ className, menuItems }: MenuContainerProps) => {
  const data = useTextAnimate(menuItems.map((itemName) => {
    return { name: itemName, isActive: true};
  }));

  interface itemProps {
    name: string;
    isActive: boolean;
  }

  return (
    <ul className={className}>
      {data.content.map((item: itemProps, index: number) => {
        return (
          <TextAnimateLi
            key={index}
            onMouseEnter={() => data.setOneActive(item.name)}
            onMouseLeave={() => data.setAllActive()}
            content={data.content}
            index={index}
          >
            {item.name}
          </TextAnimateLi>
        );
      })}
    </ul>
  );
};

const StyledMenuContainer = styled(MenuContainer)`
  display: none;

  @media (${viewport.lg}) {
    display: flex;
    gap: 60px;
    color: var(--clr-gainsboro);
  }
`;

interface NavProps {
  className?: string;
  setHamIsActive: Function;
  menuItems: string[];
};

const Nav = ({ className, setHamIsActive, menuItems }: NavProps) => {
  return (
    <nav className={className}>
      <StyledLogo />
      <StyledMenuContainer menuItems={menuItems} />
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
  const [menuItems] = useState([
    'work',
    'about',
    'contact',
    'cv',
  ]);

  return (
    <div className={className}>
      <StyledNav setHamIsActive={setHamIsActive} menuItems={menuItems} />
      <StyledDropDownMenu hamIsActive={hamIsActive} menuItems={menuItems}/>
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

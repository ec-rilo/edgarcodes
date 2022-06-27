import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Assets
import useAnimate from '../../assets/hooks/useAnimate';
import viewport from '../../viewportSizes';

// Components
import StyledLogo from '../Logo';
import StyledHamBtnContainer from './HamBtnCont';
import StyledDropDownMenu from './DropDown';
import { StyledAnimateLi } from '../AnimateComponents';

interface MenuContainerProps {
  readonly className?: string;
  menuItems: MenuItem[];
};

const MenuContainer = ({ className, menuItems }: MenuContainerProps) => {
  const data = useAnimate(menuItems.map((item) => {
    return { name: item.name, isActive: true, link: item.link };
  }));

  interface itemProps {
    name: string;
    isActive: boolean;
    link: string;
  }

  return (
    <ul className={className}>
      {data.content.map((item: itemProps, index: number) => {
        return (
          <Link key={index} href={`${item.link}`}>
            <StyledAnimateLi
              onMouseEnter={() => data.setOneActive(index)}
              onMouseLeave={() => data.setAllActive()}
              content={data.content}
              index={index}
            >
              {item.name}
            </StyledAnimateLi>
          </Link>
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

interface MenuItem {
  name: string;
  link: string;
};

interface NavProps {
  className?: string;
  setHamIsActive: Function;
  menuItems: MenuItem[];
};

const Nav = ({ className, setHamIsActive, menuItems }: NavProps) => {
  return (
    <nav className={className}>
      <Link href="/">
        <div>
          <StyledLogo />
        </div>
      </Link>
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
    { name: 'work', link: '/#work' },
    { name: 'about', link: '/about' },
    { name: 'contact', link: '/#contact'},
    { name: 'resume', link: '#'},
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

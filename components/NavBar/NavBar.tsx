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
import { StyledAnimateP } from '../AnimateComponents';

interface MenuContainerProps {
  readonly className?: string;
  menuItems: MenuItem[];
};

const MenuContainer = ({ className, menuItems }: MenuContainerProps) => {
  const data = useAnimate(menuItems.map((item) => {
    let newItem = { isActive: true };
    return Object.assign(newItem, item);
  }));

  interface itemProps {
    readonly name: string;
    readonly isActive: boolean;
    readonly link: string;
    readonly externalLink?: string;
  };

  return (
    <ul className={className}>
      {data.content.map((item: itemProps, index: number) => {
        return (
          <li key={index}>
            {!item.externalLink
              ? <Link href={`${item.link}`}>
                  <StyledAnimateP
                    onMouseEnter={() => data.setOneActive(index)}
                    onMouseLeave={() => data.setAllActive()}
                    content={data.content}
                    index={index}
                  >
                    {item.name}
                  </StyledAnimateP>
                </Link>
              : <a href={item.externalLink} target="_blank" rel="noreferrer">
                  <StyledAnimateP
                    onMouseEnter={() => data.setOneActive(index)}
                    onMouseLeave={() => data.setAllActive()}
                    content={data.content}
                    index={index}
                  >
                    {item.name}
                  </StyledAnimateP>
                </a>
            }
          </li>
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
  readonly name: string;
  readonly link: string;
  readonly externalLink?: string;
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
  readonly className?: string,
};

const NavCont = ({ className }: NavContProps) => {
  const [hamIsActive, setHamIsActive] = useState(false);
  const [menuItems] = useState([
    { name: 'work', link: '/#work' },
    { name: 'about', link: '/about' },
    { name: 'contact', link: '/#contact' },
    {
      name: 'resume',
      link: '#',
      externalLink: 'https://drive.google.com/file/d/1XdFtzVUpkzrw57-RsMmtEN02vn1nVl2H/view',
    },
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

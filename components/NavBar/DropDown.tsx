import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// assets
import useAnimate from '../../assets/hooks/useAnimate';
import viewport from '../../viewportSizes';

// components
import { StyledAnimateP } from '../AnimateComponents';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: var(--clr-gainsboro);
  & > li {
    cursor: pointer;
  }
`;

interface MenuItem {
  readonly name: string;
  readonly link: string;
  readonly externalLink?: string;
};

interface DropDownMenuProps {
  className?: string;
  hamIsActive: boolean;
  menuItems: MenuItem[];
};

const DropDownMenu = ({ className, hamIsActive, menuItems }: DropDownMenuProps) => {
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
    <div className={className}>
      <StyledList>
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
      </StyledList>
    </div>
  );
};

const StyledDropDownMenu = styled(DropDownMenu)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding-bottom: 20px;
  top: 100%;
  z-index: -1;
  top: -100%;
  transition: top 0.3s ease-in-out;
  background-color: var(--clr-onyx);
  font-family: var(--fnt-regular);
  ${({ hamIsActive }) => {
    if (hamIsActive) {
      return `
      top: 100%;
    `;
    } else {
      return `
      top: -100%;
    `;
    }
  }}

  @media (${viewport.lg}) {
      display: none;
  }
`;

export default StyledDropDownMenu;

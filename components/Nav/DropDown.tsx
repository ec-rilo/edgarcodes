import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// assets
import useAnimate from '../../assets/hooks/useAnimate';
import viewport from '../../viewportSizes';

// components
import { StyledAnimateLi } from '../AnimateComponents';

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
  name: string;
  link: string;
}

interface DropDownMenuProps {
  className?: string;
  hamIsActive: boolean;
  menuItems: MenuItem[];
}

const DropDownMenu = ({ className, hamIsActive, menuItems }: DropDownMenuProps) => {
  const data = useAnimate(menuItems.map((item) => {
    return { name: item.name, isActive: true, link: item.link};
  }));

  interface itemProps {
    name: string;
    isActive: boolean;
    link: string;
  }

  return (
    <div className={className}>
      <StyledList>
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

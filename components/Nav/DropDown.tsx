import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// assets
import { TextAnimateLi, useTextAnimate } from '../../assets/hooks/useTextAnimate';
import viewport from '../../viewportSizes';

interface DropDownContentProps {
  className?: string;
}

const DropDownContent = ({ className }: DropDownContentProps) => {
  const data = useTextAnimate([
    { name: 'WORK', isActive: true },
    { name: 'ABOUT', isActive: true },
    { name: 'CONTACT', isActive: true },
    { name: 'CV', isActive: true },
  ]);

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

const StyledDropDownContent = styled(DropDownContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: var(--clr-gainsboro);
  & > li {
    cursor: pointer;
  }
`;

interface DropDownMenuProps {
  className?: string;
  hamIsActive: boolean;
}

const DropDownMenu = ({ className, hamIsActive }: DropDownMenuProps) => {
  return (
    <div className={className}>
      <StyledDropDownContent />
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
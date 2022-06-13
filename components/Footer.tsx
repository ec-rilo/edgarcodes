import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import useAnimate from '../assets/hooks/useAnimate';
import viewport from '../viewportSizes';

// Components
import StyledLogo from './Logo';
import { StyledParagraph } from './LandingPage/ElementComponents';
import { StyledAnimateLi } from './AnimateComponents';

interface FooterProps {
  className?: string;
};

const StyledCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledContUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  text-transform: uppercase;
`;

function Footer ({ className }: FooterProps) {
  const menuItemsAnimate = useAnimate([
    {
      name: 'Github',
      isActive: true,
      hyperLink: 'https://github.com/ec-rilo',
    },
    {
      name: 'Linkedin',
      isActive: true,
      hyperLink: 'https://www.linkedin.com/in/ecarrillo046/',
    },
    {
      name: 'dev.to',
      isActive: true,
      hyperLink: 'https://dev.to/ec_rilo',
    },
  ]);

  return (
    <footer className={className}>
      <StyledCont>
        <StyledLogo />
        <StyledParagraph regular>Edgar Carrillo</StyledParagraph>
      </StyledCont>

      <StyledContUl>
        {menuItemsAnimate.content.map((item, index) => (
          <StyledAnimateLi
            key={index}
            onMouseEnter={() => menuItemsAnimate.setOneActive(index)}
            onMouseLeave={() => menuItemsAnimate.setAllActive()}
            content={menuItemsAnimate.content}
            index={index}
          >
            <a href={item.hyperLink} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </StyledAnimateLi>
        ))}
      </StyledContUl>
    </footer>
  );
};

const StyledFooter = styled(Footer)`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: var(--fnt-regular);
  height: 100px;
  z-index: auto;
`;

export default StyledFooter;

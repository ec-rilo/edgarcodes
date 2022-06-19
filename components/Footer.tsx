import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Assets
import useAnimate from '../assets/hooks/useAnimate';
import viewport from '../viewportSizes';

// Components
import StyledLogo from './Logo';
import { StyledEmphasisWord, StyledParagraph } from './LandingPage/ElementComponents';
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
      <Link href="/">
        <StyledCont>
          <StyledLogo />
          <StyledEmphasisWord light bold>Edgar Carrillo</StyledEmphasisWord >
        </StyledCont>
      </Link>

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px 0 ;

  font-family: var(--fnt-regular);
  border-top: 1px solid var(--clr-gainsboro);

  @media (${viewport.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default StyledFooter;

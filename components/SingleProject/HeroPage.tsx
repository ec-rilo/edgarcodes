import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Assets
import imgSrc from '../../public/images/women-walking-img.jpeg';
import viewport from '../../viewportSizes';

// Components
import StyledContentCont from './ContentCont';

const StyledImgCont = styled.div`
  position: relative;
  height: 250px;
  width: 100%;

  @media (${viewport.xl}) {
    height: 300px;
  }

  @media (${viewport['2xl']}) {
    flex: 1;
    height: 100%;
  }
`;

interface HeroPageProps {
  readonly className?: string;
};

function HeroPage ({ className }: HeroPageProps) {
  return (
    <div className={className}>
      <StyledContentCont />

      <StyledImgCont>
        <Image src={imgSrc} alt="#" layout="fill" objectFit="cover" />
      </StyledImgCont>
    </div>
  )
}

const StyledHeroPage = styled(HeroPage)`
  display: flex;
  flex-direction: column;


  @media (${viewport['2xl']}) {
    flex-direction: row;
    height: 1000px;
  }
`;

export default StyledHeroPage;

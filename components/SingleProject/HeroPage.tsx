import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Assets
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

interface StaticImageData {
  src: string;
  height: number;
  width: number;
};

interface ContentProps {
  readonly title: string;
  readonly subtitle: string;
  readonly paragraphsArr: string[];
  readonly imgSrc: StaticImageData;
  readonly repo: string;
};

interface HeroPageProps {
  readonly className?: string;
  readonly data: ContentProps;
};

function HeroPage ({ className, data }: HeroPageProps) {
  return (
    <div className={className}>
      <StyledContentCont data={data} />

      <StyledImgCont>
        <Image src={data.imgSrc} alt="#" layout="fill" objectFit="cover" />
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

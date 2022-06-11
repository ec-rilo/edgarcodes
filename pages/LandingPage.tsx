import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Assets
import viewport from '../viewportSizes';
import imgSrc from '../public/images/women-walking-img.jpeg';

// Components
import StyledSocialBanner from  '../components/SocialBanner/SocialBanner';
import StyledContentContainer from '../components/LandingPage/ContentCont';

const StyledImgContainer = styled.div`
  position: relative;
  height: 250px;

  @media (${viewport.xl}) {
    height: 300px;
  }

  @media (${viewport['2xl']}) {
    flex: 1;
    height: 100%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 80px;
  gap: 40px;

  @media (${viewport.xl}) {
    padding-top: 60px;
  }

  @media (${viewport['2xl']}) {
    flex: 1;
    justify-content: center;
  }
`;

interface LandingPageProps {
  readonly className?: string;
};

function LandingPage ({ className }: LandingPageProps) {
  return (
    <div className={className}>
      <StyledContainer>
        <StyledSocialBanner />
        <StyledContentContainer />
      </StyledContainer>

      <StyledImgContainer>
        <Image src={imgSrc} alt="Women Walking in forest" layout="fill" objectFit="cover"/>
      </StyledImgContainer>
    </div>
  )
};

const StyledLandingPage = styled(LandingPage)`
  background-color: var(--clr-onyx);
  display: flex;
  flex-direction: column;

  @media (${viewport['2xl']}) {
    flex-direction: row;
    height: 800px;
  }
`;

export default StyledLandingPage;

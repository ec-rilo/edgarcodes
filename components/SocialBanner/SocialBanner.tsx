import React from 'react';
import styled from 'styled-components';

// Assets
import viewport from '../../viewportSizes';
import animations from '../../assets/animations';
import useAnimate from '../../assets/hooks/useAnimate';
import devIcon from '../../public/images/dev-badge-icon.svg';
import githubIcon from '../../public/images/github-logo-icon.svg';
import linkedinIcon from '../../public/images/linkedin-logo-icon.svg';

// Components
import StyledIconsCont from './IconContainer';

const StyledLine = styled.div`
  background-color: var(--clr-gainsboro);
  height: 1px;
  width: 100%;
  min-width: 80px;
`;

interface SocialBannerProps {
  readonly className?: string;
}

const SocialBanner = ({ className }: SocialBannerProps) => {
  const iconsAnimateData = useAnimate([
    {
      name: 'Github',
      isActive: true,
      hyperLink: 'https://github.com/ec-rilo',
      imgSrc: githubIcon,
    },
    {
      name: 'Linkedin',
      isActive: true,
      hyperLink: 'https://www.linkedin.com/in/ecarrillo046/',
      imgSrc: linkedinIcon,
    },
    {
      name: 'dev.to',
      isActive: true,
      hyperLink: 'https://dev.to/ec_rilo',
      imgSrc: devIcon,
    },
  ]);

  return (
    <div className={className}>
      <StyledLine />
      <StyledIconsCont iconsAnimateData={iconsAnimateData} />
    </div>
  );
};

const StyledSocialBanner = styled(SocialBanner)`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  max-width: 700px;
  animation: ${animations.fadeInFromLeft} 1s;
  gap: 30px;

  @media (${viewport.sm}) {
    gap: 50px;
  }
`;

export default StyledSocialBanner;
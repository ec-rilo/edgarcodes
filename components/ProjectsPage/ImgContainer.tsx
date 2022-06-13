import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Assets
import viewport from '../../viewportSizes';

// Components
import StyledOverlayCont from './DarkOverlay';
import StyledTextOverlay from './TextOverlay';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
};

interface ImgContProps {
  readonly className?: string;
  readonly src: string | StaticImageData;
  readonly alt: string;

  readonly overlay?: boolean;
  readonly title?: string;
  readonly subTitle?: string;
};

const ImgCont = ({
  className, src, alt, overlay, title, subTitle,
}: ImgContProps) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      {overlay &&
        <StyledTextOverlay title={title || ''} subTitle={subTitle} />
      }
      <StyledOverlayCont />
    </div>
  );
};

const StyledImgCont = styled(ImgCont)`
  position: relative;
  background-color: var(--clr-gainsboro);
  height: 250px;
  width: 100%;
  cursor: pointer;

  @media (${viewport.lg}){
    height: 400px;
  }
`;

export default StyledImgCont;

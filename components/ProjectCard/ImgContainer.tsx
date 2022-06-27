import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Assets
import viewport from '../../viewportSizes';

// Components
import StyledOverlayCont from '../ProjectsPage/DarkOverlay';
import StyledTextOverlay from '../ProjectsPage/TextOverlay';

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
  readonly cover?: boolean;
};

const ImgCont = ({
  className, src, alt, overlay, title, subTitle, cover,
}: ImgContProps) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} layout="fill" objectFit={cover ? "cover" : "contain"} />
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

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Assets
import viewport from '../../viewportSizes';

const StyledImgCont = styled.div`
  position: relative;
  height: 400px;
  width: 100%;

  @media (${viewport.xl}) {
    height: 500px;
  }

  @media (${viewport['2xl']}) {
    height: 800px;
  }
`;

interface StaticImageData {
  src: string;
  height: number;
  width: number;
};

interface ImgProps {
  readonly src: string | StaticImageData;
  readonly alt: string;
};

interface ImgsProps {
  readonly className?: string;
  readonly imgsArr: ImgProps[];
  readonly row?: boolean;
};

function Imgs ({ className, imgsArr }: ImgsProps) {
  return (
    <div className={className}>
      {imgsArr.map((imgData, index) => (
        <StyledImgCont key={index}>
          <Image src={imgData.src} alt={imgData.alt} layout="fill" objectFit="cover" />
        </StyledImgCont>
      ))}
    </div>
  )
}

const StyledImgs = styled(Imgs)`
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ row }) => row && `
    @media (${viewport.md}) {
      flex-direction: row;
      flex-wrap: wrap;
      & > div {
        flex: 40%;
      }
    }
  `}

  gap: 50px;
  margin: 12% 0;
`;

export default StyledImgs;

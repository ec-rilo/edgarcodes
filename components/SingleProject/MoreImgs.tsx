import React from 'react'
import styled from 'styled-components';

// Assets
import viewport from '../../viewportSizes';

// Components
import StyledImgCont from '../ProjectsPage/ImgContainer';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
};

interface ImgProps {
  readonly src: string | StaticImageData;
  readonly alt: string;
  readonly title: string;
  readonly subTitle: string;
};

interface MoreImgsProps {
  readonly className?: string;
  readonly imgsArr: ImgProps[];
};

function MoreImgs ({ className, imgsArr }: MoreImgsProps) {
  return (
    <div className={className}>
      {imgsArr.map((imgData, index) => (
        <StyledImgCont
          key={index}
          src={imgData.src}
          alt={imgData.alt}
          overlay
          title={imgData.title}
          subTitle={imgData.subTitle}
        />
      ))}
    </div>
  )
}

const StyledMoreImgs = styled(MoreImgs)`
  display: flex;
  gap: 50px;
  flex-direction: column;
  margin: 12% 0;

  @media (${ viewport.md }) {
    flex-direction: row;
    flex-wrap: wrap;
    & > div {
      flex: 40%;
    }
  }
`;

export default StyledMoreImgs;

import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

// Assets
import viewport from '../../viewportSizes';
import addHypens from '../../scripts/addHypens';

// Components
import StyledImgCont from '../ProjectCard/ImgContainer';

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
        <Link href={`./${addHypens(imgData.title.toLowerCase())}`} key={index}>
          <div>
            <StyledImgCont
              src={imgData.src}
              alt={imgData.alt}
              overlay
              title={imgData.title}
              subTitle={imgData.subTitle}
              cover
            />
          </div>
        </Link>
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

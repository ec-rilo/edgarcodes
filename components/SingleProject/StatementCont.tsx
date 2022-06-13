import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Assets
import viewport from '../../viewportSizes';

// Components
import {
  StyledPageTitle,
  StyledParagraph,
} from '../LandingPage/ElementComponents';

const StyledTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface ContentContProps {
  readonly centered?: boolean;
  readonly left?: boolean;
};

const StyledContentCont = styled.div<ContentContProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  ${({ centered }) => centered && 'text-align: center;'}
  ${({ left }) => left && `
    justify-content: flex-start;

    @media (${ viewport.lg }) {
      padding: 0 0 0 12%;
    }
  `}
`;

interface ImgContProps {
  readonly img?: boolean;
};

const StyledImgCont = styled.div<ImgContProps>`
  display: flex;
  ${({ img }) => !img && 'display: none;'}
  position: relative;
  justify-content: center;
  align-items: center;

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

const StyledImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 250px;
  width: 100%;

  @media (${viewport.lg}) {
    width: 80%;
    height: 300px;
  }

  @media (${viewport['2xl']}) {
    flex: 1;
    height: 50%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  max-width: 700px;
  min-height: 500px;
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

interface StatementContProps {
  readonly className?: string;
  readonly reverse?: boolean;
  readonly imgData?: ImgProps;
  readonly centered?: boolean;
  readonly title: string;
  readonly paragraphsArr: string[];
  readonly left?: boolean;
};

function StatementCont ({
  className, imgData, centered, title, paragraphsArr, left
}: StatementContProps) {
  const [isImage] = useState(Boolean(imgData));

  return (
    <div className={className}>
      <StyledContentCont centered={centered} left={left}>
        <StyledContainer>
          <StyledPageTitle>{title}</StyledPageTitle>

          <StyledTextCont>
            {paragraphsArr.map((paragraph, index) => (
              <StyledParagraph key={index}>{paragraph}</StyledParagraph>
            ))}
          </StyledTextCont>
        </StyledContainer>
      </StyledContentCont>

      {isImage &&
        <StyledImgCont img={isImage}>
          <StyledImg>
            <Image
              src={imgData?.src || ''}
              alt={imgData?.alt || ''}
              layout="fill"
              objectFit="cover"
            />
          </StyledImg>
        </StyledImgCont>
      }
    </div>
  )
}

const StyledStatementCont = styled(StatementCont)`
  display: flex;
  flex-direction: column;
  margin: 12% 0;

  @media (${viewport['2xl']}) {
    ${({ imgData }) => imgData?.src && `
      flex-direction: row;
      height: 800px;
      gap: 100px;
    `}

    ${({ reverse }) => reverse && `
      flex-direction: row-reverse;
    `}
  }
`;

export default StyledStatementCont;


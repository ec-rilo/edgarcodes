import React from 'react';
import styled from 'styled-components';

// Components
import {
  StyledParagraph,
  StyledPageTitle,
  StyledSection,
} from '../LandingPage/ElementComponents';
import StyledSkillsBanner from './SkillsBanner';

const StyledTextCont = styled(StyledSection)`
  gap: 30px;
  margin: 30px 0;
  max-width: 700px;
`;

interface SkillsComponentProps {
  readonly className?: string;
  readonly title: string;
  readonly skillsArr: string[];
  readonly paragraphsArr: string[];
  readonly noPadding?: boolean;
};

const SkillsComponent = ({
  className, title, skillsArr, paragraphsArr,
}: SkillsComponentProps) => (
    <div className={className}>
      <StyledPageTitle>{title}</StyledPageTitle>
      <StyledTextCont>
        {paragraphsArr.map((paragraph, index) => (
          <StyledParagraph key={index}>{paragraph}</StyledParagraph>
        ))}
      </StyledTextCont>
      <StyledSkillsBanner skillsArr={skillsArr} />
    </div>
);

const StyledSkillsComponent = styled(SkillsComponent)`
  padding: 12% 0%;
  ${({ noPadding }) => noPadding && 'padding: 0;'}
`;

export default StyledSkillsComponent;

import React from 'react';
import styled from 'styled-components';

// Components
import {
  StyledParagraph,
  StyledPageTitle,
  StyledSection,
} from '../components/LandingPage/ElementComponents';
import StyledSkillsBanner from '../components/SkillsBanner';

const StyledTextCont = styled(StyledSection)`
  gap: 30px;
  margin: 30px 0;
  max-width: 700px;
`;

interface SkillsPageProps {
  readonly className?: string;
  readonly title: string;
  readonly skillsArr: string[];
  readonly paragraphsArr: string[];
  readonly noPadding?: boolean;
};

const SkillsPage = ({
  className, title, skillsArr, paragraphsArr,
}: SkillsPageProps) => (
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

const StyledSkillsPage = styled(SkillsPage)`
  padding: 12% 0%;
  ${({ noPadding }) => noPadding && 'padding: 0;'}
`;

export default StyledSkillsPage;

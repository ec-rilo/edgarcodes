import React, { useState } from 'react';
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
};

const SkillsPage = ({ className }: SkillsPageProps) => {
  const [skillsArr] = useState([
    'JavaScript',
    'React',
    'Styled-Components',
    'PostgreSQL',
    'Styled-Components',
    'MongoDB',
    'Tailwind',
    'Express',
  ]);

  return (
    <div className={className}>
      <StyledPageTitle>My Skills</StyledPageTitle>

      <StyledTextCont>
        <StyledParagraph>
          I&apos;ve taken courses that had an emphasis on understanding web
          development technologies as well as the basics of computer science
          concepts. After having pair programmed with many different people
          and applied the web development concepts into many projects you can
          now see my skills reflected on all new projects I&apos;ve created.
        </StyledParagraph>
        <StyledParagraph>
          My favorite skill on this journey has been the endlesss learning.
          Have a job available with tech not shown below? I&apos;m ready.
        </StyledParagraph>
      </StyledTextCont>

      <StyledSkillsBanner skillsArr={skillsArr} />
    </div>
  );
};

const StyledSkillsPage = styled(SkillsPage)`
  padding: 12% 0%;
`;

export default StyledSkillsPage;

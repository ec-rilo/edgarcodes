import React from 'react';
import styled from 'styled-components';

// Assets
import viewport from '../viewportSizes';

interface ItemProps {
  readonly className?: string;
  readonly key?: number;
  readonly text: string;
};

const Item = ({ className, text }: ItemProps) => {
  return <li className={className}>○ {text}</li>;
};

const StyledItem = styled(Item)`
  color: var(--clr-gainsboro);
  font-family: var(--fnt-dark);
  font-size: 1rem;
  flex: 1 0 40%;

  @media (${viewport.sm}) {
    font-size: 1.3rem;
  }

  @media (${viewport.lg}) {
    flex: 1 0 21%;
  }
`;

interface SkillsBannerProps {
  readonly className?: string;
  readonly skillsArr: string[];
};

const SkillsBanner = ({ className, skillsArr }: SkillsBannerProps) => {
  return (
    <ul className={className}>
      {skillsArr.map((skillName: string, index: number) => {
        return <StyledItem key={index} text={skillName} />;
      })}
    </ul>
  );
};

const StyledSkillsBanner = styled(SkillsBanner)`
  display: flex;
  gap: 20px;

  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px 0;

  @media (${viewport.lg}) {
    flex-direction: row;
    margin: 100px 0;
    height: 100px;
  }
`;

export default StyledSkillsBanner;

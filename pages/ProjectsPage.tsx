import React from 'react';
import styled from 'styled-components';

// Components
import { StyledPageTitle, StyledParagraph } from '../components/LandingPage/ElementComponents';
import StyledProjectItem from '../components/ProjectCard/ProjectItem';

const StyledProjectsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
  margin: 50px 0;
`;

interface StaticImageData {
  src: string;
  height: number;
  width: number;
};

interface ProjectProps {
  readonly title: string;
  readonly category: string;
  readonly textContent: string;
  readonly src: string | StaticImageData;
  readonly alt: string;
  readonly isSelectable: boolean;
  readonly important: boolean;
}

interface ProjectsPageProps {
  readonly projectsArr: ProjectProps[];
}

const ProjectsPage = ({ projectsArr }: ProjectsPageProps) => {
  return (
    <section style={{ padding: '12% 0%' }} id="work">
      <div style={{ maxWidth: '600px' }}>
        <StyledPageTitle>What I&apos;ve been up to</StyledPageTitle>
        <StyledParagraph>
          I&apos;ve been called a busy body by people and I have to agree with them. I
          always have a project brewing in a repo or ideas firing off in my brain.
          Feel free to take a look at a few of the projects I&apos;ve created.
        </StyledParagraph>
      </div>

      <StyledProjectsContainer>
        {projectsArr.map((project, index) => {
          return (
            <StyledProjectItem key={index} data={project} isSelectable={project.isSelectable} />
          );
        })}
      </StyledProjectsContainer>
    </section>
  );
};

export default ProjectsPage;

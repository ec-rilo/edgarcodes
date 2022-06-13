import React, { useState } from 'react';
import Head from 'next/head'

// Assets
import rumbleData from '../assets/projectData/rumble';


// Components
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/Nav/NavBar';
import StyledHeroPage from '../components/SingleProject/HeroPage';
import StyledStatementCont from '../components/SingleProject/StatementCont';
import StyledSkillsPage from './SkillsPage';
import StyledImgs from '../components/SingleProject/Imgs';
import StyledMoreImgs from '../components/SingleProject/MoreImgs';
import StyledContactForm from './FormPage';
import StyledFooter from '../components/Footer';

function ProjectPage () {
  const projectData = useState(rumbleData);
  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Full Stack Developer</title>
        <meta name="Personal Portfolio" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledNavCont />
      <StyledHeroPage data={projectData[0].hero}/>
      <StyledStatementCont
        title="Purpose and Goal"
        reverse
        imgData={{
          src: projectData[0].purpose.imgSrc,
          alt: projectData[0].purpose.alt,
        }}
        paragraphsArr={projectData[0].purpose.paragraphsArr}
      />
      <StyledSkillsPage
        title="Tech Stack and Explanation"
        skillsArr={projectData[0].skills.skillsArr}
        paragraphsArr={projectData[0].skills.paragraphsArr}
      />
      <StyledStatementCont
        centered
        title="Problem Statement"
        paragraphsArr={projectData[0].problem.paragraphsArr}
      />
      <StyledImgs imgsArr={projectData[0].pictures.arr} row />
      <StyledStatementCont
        title="Lessons and Outcomes"
        paragraphsArr={projectData[0].lessons.paragraphsArr}
        left
      />
      <StyledImgs imgsArr={projectData[0].pictures2.arr} />
      <StyledStatementCont
        title="What's Next?"
        paragraphsArr={projectData[0].whatsNext.paragraphsArr}
        left
      />
      <StyledMoreImgs imgsArr={projectData[0].altProjects} />
      <StyledContactForm />
      <StyledFooter />
    </StyledContainer>
  )
}

export default ProjectPage;

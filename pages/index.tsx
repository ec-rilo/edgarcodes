import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/Nav/NavBar';
import StyledLandingPage from './LandingPage';
import StyledSkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import StyledContactForm from './FormPage';
import StyledFooter from '../components/Footer';

const Home: NextPage = () => {
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

  const [skillsParagraphs] = useState([
    `I've taken courses that had an emphasis on understanding web
    development technologies as well as the basics of computer science
    concepts. After having pair programmed with many different people
    and applied the web development concepts into many projects you can
    now see my skills reflected on all new projects I've created.`,
    `My favorite skill on this journey has been the endlesss learning.
    Have a job available with tech not shown below? I'm ready.`,
  ]);

  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Full Stack Developer</title>
        <meta name="Personal Portfolio" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledNavCont />
      <StyledLandingPage />
      <StyledSkillsPage
        title="My Skills"
        skillsArr={skillsArr}
        paragraphsArr={skillsParagraphs}
      />
      <ProjectsPage />
      <StyledContactForm />
      <StyledFooter />
    </StyledContainer>
  )
}

export default Home;

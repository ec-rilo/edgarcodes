import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

// Assets
import projectsArr from '../assets/homeData/projectsData';
import skillsData from '../assets/homeData/skillsData';

// Components
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/NavBar/NavBar';
import StyledLandingPage from './LandingPage';
import StyledSkillsPage from './SkillsPage';
import ProjectsPage from './work';
import StyledContactForm from '../components/Form/ContactForm';
import StyledFooter from '../components/Footer';

const Home: NextPage = () => {
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
        skillsArr={skillsData.skillsArr}
        paragraphsArr={skillsData.descriptionArr}
      />
      <ProjectsPage projectsArr={projectsArr} />
      <StyledContactForm />
      <StyledFooter />
    </StyledContainer>
  )
}

export default Home;

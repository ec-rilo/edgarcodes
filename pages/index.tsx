import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

// Assets
import skillsData from '../assets/homeData/skillsData';

// Components
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/NavBar/NavBar';
import StyledLandingPage from './LandingPage';
import StyledSkillsComponent from '../components/Skills/Skills';
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
      <StyledSkillsComponent
        title="My Skills"
        skillsArr={skillsData.skillsArr}
        paragraphsArr={skillsData.descriptionArr}
      />
      <ProjectsPage />
      <StyledContactForm />
      <StyledFooter />
    </StyledContainer>
  )
}

export default Home;

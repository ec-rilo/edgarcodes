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
  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Full Stack Developer</title>
        <meta name="Personal Portfolio" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledNavCont />
      <StyledLandingPage />
      <StyledSkillsPage />
      <ProjectsPage />
      <StyledContactForm />
      <StyledFooter />
    </StyledContainer>
  )
}

export default Home;

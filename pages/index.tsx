import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/Nav/NavBar';
import StyledLandingPage from './LandingPage';
import StyledSkillsPage from './SkillsPage';

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
    </StyledContainer>
  )
}

export default Home;

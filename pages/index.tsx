import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Components
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/Nav/NavBar';

const Home: NextPage = () => {
  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Full Stack Developer</title>
        <meta name="Personal Portfolio" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledNavCont />
    </StyledContainer>
  )
}

export default Home;

import React from 'react';
import styled from 'styled-components';
import Head from 'next/head'

// Components
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/Nav/NavBar';
import StyledHeroPage from '../components/SingleProject/HeroPage';

function ProjectPage () {
  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Full Stack Developer</title>
        <meta name="Personal Portfolio" content="#" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledNavCont />
      <StyledHeroPage />
    </StyledContainer>
  )
}

export default ProjectPage;

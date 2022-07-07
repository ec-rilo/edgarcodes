import React, { useState } from 'react';
import Head from 'next/head'

// Assets
import atelierData from '../../assets/projectData/atelier';

// Components
import StyledContainer from '../../components/Container';
import StyledNavCont from '../../components/NavBar/NavBar';
import StyledHeroPage from '../../components/SingleProject/HeroPage';
import StyledStatementCont from '../../components/SingleProject/StatementCont';
import StyledSkillsComponent from '../../components/Skills/Skills';
import StyledImgs from '../../components/SingleProject/Imgs';
import StyledMoreImgs from '../../components/SingleProject/MoreImgs';
import StyledContactForm from '../../components/Form/ContactForm';
import StyledFooter from '../../components/Footer';

function AtelierProjectPage () {
  const [data] = useState(atelierData);

  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Atelier</title>
        <meta name="description" content="Edgar Carrillo's personal portfolio, Hack Reactor Graduate in Humboldt County, CA." />
      </Head>
      <StyledNavCont />
      <StyledHeroPage data={data.hero}/>
      <StyledStatementCont
        title="Purpose and Goal"
        reverse
        imgData={{
          src: data.purpose.imgSrc,
          alt: data.purpose.alt,
        }}
        paragraphsArr={data.purpose.paragraphsArr}
        cover={data.purpose.cover}
      />
      <StyledSkillsComponent
        title="Tech Stack and Explanation"
        skillsArr={data.skills.skillsArr}
        paragraphsArr={data.skills.paragraphsArr}
      />
      <StyledStatementCont
        centered
        title="Problem Statement"
        paragraphsArr={data.problem.paragraphsArr}
      />
      <StyledImgs imgsArr={data.pictures.arr} row />
      <StyledStatementCont
        title="Lessons and Outcomes"
        paragraphsArr={data.lessons.paragraphsArr}
        left
      />
      <StyledImgs imgsArr={data.pictures2.arr} />
      <StyledMoreImgs imgsArr={data.altProjects} />
      <StyledContactForm />
      <StyledFooter />
    </StyledContainer>
  )
}

export default AtelierProjectPage;

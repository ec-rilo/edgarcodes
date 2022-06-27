import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

// Assets
import proj1Data from '../assets/projectData/rumble';
import proj2Data from '../assets/projectData/funWithGPT3';
import proj3Data from '../assets/projectData/atelier';
import proj4Data from '../assets/projectData/threads';
import defaultData from '../assets/projectData/default';

// Components
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/NavBar/NavBar';
import StyledHeroPage from '../components/SingleProject/HeroPage';
import StyledStatementCont from '../components/SingleProject/StatementCont';
import StyledSkillsPage from './SkillsPage';
import StyledImgs from '../components/SingleProject/Imgs';
import StyledMoreImgs from '../components/SingleProject/MoreImgs';
import StyledContactForm from './FormPage';
import StyledFooter from '../components/Footer';

function ProjectPage () {
  const router = useRouter();
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const projName = router.query.projectName;
    if (projName === 'Rumble') setData(proj1Data);
    if (projName === 'Fun with GPT-3') setData(proj2Data);
    if (projName === 'Atelier') setData(proj3Data);
    if (projName === 'Threads') setData(proj4Data);
  }, [router.query]);

  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Full Stack Developer</title>
        <meta name="Personal Portfolio" content="#" />
        <link rel="icon" href="/favicon.ico" />
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
      <StyledSkillsPage
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
      <StyledStatementCont
        title="What's Next?"
        paragraphsArr={data.whatsNext.paragraphsArr}
        left
      />
      <StyledMoreImgs imgsArr={data.altProjects} />
      <StyledContactForm />
      <StyledFooter />
    </StyledContainer>
  )
}

export default ProjectPage;

import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

// Assets
import imgSrc from '../public/images/edgar_photograph.jpg';

// Components
import {
  StyledTitle,
  StyledParagraph,
  StyledPageTitle,
  StyledArticleSubTitle,
  StyledEmphasisWord,
} from '../components/LandingPage/ElementComponents';
import StyledContainer from '../components/Container';
import StyledNavCont from '../components/NavBar/NavBar';
import StyledFooter from '../components/Footer';
import StyledImgs from '../components/SingleProject/Imgs';

const StyledAboutTitle = styled(StyledPageTitle)`
  margin-bottom: 50px;
`;

const StyledAboutSubTitle = styled(StyledArticleSubTitle)`
  margin-bottom: 30px;
`;

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12% 0%;
  text-align: center;
  line-height: 1.2;
  min-height: 70vh;
`;

const StyledCont = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
`;

const StyledTextCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function AboutPage() {
  return (
    <StyledContainer>
      <Head>
        <title>Edgar Carrillo | Full Stack Developer</title>
        <meta name="description" content="Edgar Carrillo's personal portfolio, Hack Reactor Graduate in Humboldt County, CA." />
      </Head>
      <StyledNavCont />
      <StyledHero>
        <StyledTitle>I build solutions<br></br>to complex problems</StyledTitle>
      </StyledHero>
      <StyledImgs imgsArr={[{ src: imgSrc, alt: '#' }]} />
      <StyledCont>
        <StyledArticle>
          <StyledAboutTitle noMargin>About me</StyledAboutTitle>
          <StyledAboutSubTitle light>
            Hi, I&apos;m Edgar. A full stack engineer with a passion for learning.
          </StyledAboutSubTitle>
          <StyledTextCont>
            <StyledParagraph>
              When I get interested in something I dig deep into it. I&apos;m not satisfied with just knowing I
              can solve the answer I actively look for solutions and implement them. Many people have described
              me as <StyledEmphasisWord>organized, autonomous, and driven</StyledEmphasisWord> and I&apos;d have to
              agree with them. I also believe feedback is important and I wouldn&apos;t be where I am today without it.
            </StyledParagraph>
            <StyledParagraph>
              I believe that anyone has the ability to learn new skills, but the want to learn those skills
              is essential. This is why I talk so much about loving learning. I embrace the challenges
              that come with encountering the unknown. I think that seeing challenges and getting through them
              is the path to improving oneself. I&apos;m a huge believer in the {' '}
              <StyledEmphasisWord as="a" href="https://www.mindsetworks.com/science/" target="_blank" rel="noreferrer">growth mindset</StyledEmphasisWord>.
            </StyledParagraph>
            <StyledParagraph>
              Fueled by challenges, learning, and juuuuuust enough caffeine, I work every day to be better than I
              was yesterday. You can usually find me deep in code on the regular and working towards joining the 1000 lb club.
              My passion and <StyledEmphasisWord as="a" href="https://www.16personalities.com/entj-personality" target="_blank" rel="noreferrer">inquisitive personality</StyledEmphasisWord>
              {' '} drive me towards becoming a better person and software engineer. I&apos;m always trying to figure out how something works.
            </StyledParagraph>
            <StyledParagraph>
              The need to figure out how something works trickled down into hobbies outside of coding. I taught myself to
              be a dog trainer that&apos;s worked with large and small dogs and a person that wanted change and went from ~220lbs
              and dropped down to 165 lbs through dieting and weightlifting. Now, I&apos;m a person who completed {' '}
              <StyledEmphasisWord as="a" href="https://www.hackreactor.com/" target="_blank" rel="noreferrer">Hack Reactor</StyledEmphasisWord>, a Software
              Engineering Immersive by working 12+ hour days, 6 days a week, for ~4 months.
            </StyledParagraph>

            <StyledParagraph>
              My energy and need to know how things work drive me to complete these goals. I&apos;m a <StyledEmphasisWord>quick learner</StyledEmphasisWord>
              {' '} who can pick up new skills and work autonomously alone or with a team of software engineers easily.
              I want to develop my skills in many different faucets.
            </StyledParagraph>
            <StyledParagraph>
              Now, I&apos;m looking for a place where I have the chance to work with familiar tech and learn new ones.
              Because I want to grow my skills as a Software Engineer across the Full-Stack to reach a point where I can
              comfortably say that I&apos;m a Senior developer.
            </StyledParagraph>
          </StyledTextCont>
        </StyledArticle>
      </StyledCont>
      <StyledFooter />
    </StyledContainer>
  )
}

export default AboutPage;

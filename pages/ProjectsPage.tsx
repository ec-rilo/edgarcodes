import React from 'react';
import styled from 'styled-components';

// Assets
import imgSrc from '../public/images/women-walking-img.jpeg';

// Components
import { StyledPageTitle, StyledParagraph } from '../components/LandingPage/ElementComponents';
import StyledProjectItem from '../components/ProjectsPage/ProjectItem';

const projects = [
  {
    title: 'Iron Motorcycles',
    category: 'Web Development',
    textContent:
      'An e-commerce mock of a fictional Harley Davidson Motorcycle retailer. Built with React, I makes use of react hooks such as the Context API to handle data across multiple components.',
    src: imgSrc,
    alt: 'Iron Motorcycles website displayed on a apple computer and iphone.',
    isSelectable: true,
    important: false,
  },
  {
    title: 'Movie Memory',
    category: 'Web Development',
    textContent:
      'A game designed to test your memory. Read about my journey on refreshing my use with API\'s, my new approach to tackling web projects with a "Plan first, code after" approach, and more.',
    src: imgSrc,
    alt: 'Movie Memory website displayed on a apple computer and iphone.',
    isSelectable: true,
    important: false,
  },
  {
    title: 'CV-Creator',
    category: 'Web Development',
    textContent:
      'An easy to use application that allows the user to create a beautiful CV. Take a look at how I pushed through learning the basics of React where I use Class and Functional components.',
    src: imgSrc,
    alt: 'CV-Creator website displayed on a apple computer.',
    isSelectable: true,
    important: false,
  },
  {
    title: 'Battleship',
    category: 'Web Development',
    textContent:
      'The classic game of Battleship! Checkout my Test Driven Development process used to make this game against a (not very intelligent) computer.',
    src: imgSrc,
    alt: 'Battleship website displayed on a apple computer and iphone.',
    isSelectable: true,
    important: false,
  },
  {
    title: "Where's (?)",
    category: 'Web Development',
    textContent:
      "A Where's Waldo inspired game that makes use of Firebase to store game scores from players across the world.",
    src: imgSrc,
    alt: "Where's (?) website displayed on a apple computer and iphone.",
    isSelectable: false,
    important: true,
  },
];

const StyledProjectsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 100px;
  margin: 50px 0;
`;

const ProjectsPage = () => {
  return (
    <section style={{ padding: '12% 0%' }}>
      <div style={{ maxWidth: '600px' }}>
        <StyledPageTitle>What I&apos;ve been up to</StyledPageTitle>
        <StyledParagraph>
          I&apos;ve been called a busy body by people and I have to agree with them. I
          always have a project brewing in a repo or ideas firing off in my brain.
          Feel free to take a look at a few of the projects I&apos;ve created.
        </StyledParagraph>
      </div>

      <StyledProjectsContainer>
        {projects.map((projectData, index) => {
          return (
            <StyledProjectItem key={index} data={projectData} isSelectable={projectData.isSelectable} />
          );
        })}
      </StyledProjectsContainer>
    </section>
  );
};

export default ProjectsPage;

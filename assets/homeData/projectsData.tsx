// Assets
import imgSrc from '../../public/images/women-walking-img.jpeg';

const projectsArr = [
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


export default projectsArr;

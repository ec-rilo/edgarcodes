// Assets
import imgSrc from '../../public/images/women-walking-img.jpeg';
import rumbleSrc from '../../public/images/projects/rumble/rumble-desktop-mobile.png';

const projectsArr = [
  {
    title: "Rumble",
    category: "Full Stack Engineer - UI Owner",
    textContent:
      "A food ordering app, done tinder-style, that allows users to swipe right or left on restaurants, alone or in a group. View dedicated Restaurant pages along with the menu, and much more!",
    src: rumbleSrc,
    alt: "",
    isSelectable: true,
    important: false,
  },
  {
    title: "Fun with GPT-3",
    category: "Full Stack Software Engineer",
    textContent:
      "Play around with AI and ask it anything! Whatever you ask will be projected LIVE to any user using the application! Your results will vary based on the engine you choose when asking a question.",
    src: imgSrc,
    alt: "",
    isSelectable: true,
    important: false,
  },
  {
    title: "Atelier",
    category: "Frontend Engineer",
    textContent:
      "Through timeblocking, using trello with my team, and following AGILE best practices - I was able to create a product details page with a RESTful Back End that surpassed client expectations.",
    src: imgSrc,
    alt: "",
    isSelectable: true,
    important: false,
  },
  {
    title: "Threads",
    category: "Backend Software Engineer",
    textContent:
      "A Back-End system redesign for the products module of a legacy e-commerce API with 5+ million database entries with average query times of 1000ms+ per request. Converting the Monolithic service into dedicated micro-services.",
    src: imgSrc,
    alt: "",
    isSelectable: true,
    important: false,
  },
  {
    title: "Rumble Remake",
    category: "Full Stack Engineer",
    textContent:
      "A full remake of Rumble that takes the foundation of the original product and extends it with Restaurants near the user, actual group swipe mode, and much more!",
    src: imgSrc,
    alt: "",
    isSelectable: false,
    important: true,
  },
];


export default projectsArr;

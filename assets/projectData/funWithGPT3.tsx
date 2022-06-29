import rumbleDecoImg1 from '../../public/images/projects/rumble/rumble-deco-img-1.png';
import decoImg1 from '../../public/images/projects/fun-with-gpt-3/deco-img-1.png';
import decoImg2 from '../../public/images/projects/fun-with-gpt-3/deco-img-2.png';
import decoImg3 from '../../public/images/projects/fun-with-gpt-3/deco-img-3.png';
import decoImg4 from '../../public/images/projects/fun-with-gpt-3/deco-img-4.png';
import decoImg5 from '../../public/images/projects/fun-with-gpt-3/deco-img-5.png';
import decoImg6 from '../../public/images/projects/fun-with-gpt-3/deco-img-6.png';



const hero = {

  title: 'Fun with GPT-3',
  subtitle: 'AI Chatroom connected to the world',
  paragraphsArr: [
    `
    Fun with GPT-3 is a project I built for the Shopify Frontend Developer Intern Challenge.
    The app allows users to chat with AI and get different responses depending on the engine of
    choice. Not only can you see your questions, but also quesions that people are asking
    that are active on the app - live! A demo version is also available if you don't want to
    make an account.
    `
  ],
  repo: 'https://github.com/ec-rilo/fun-with-gpt-3',
  imgSrc: decoImg1,
  cover: true,

};

const purpose = {

  paragraphsArr: [
    `
    I wanted to create an AI chat app that went beyond just data persistance locally on the client-side. So I created this full-stack application to have practice with exploring new
    technologies like Socket.io and refining my skills in component reusability and state
    management since I also needed to create a similiar version that was disconnected from other
    users.
    `
  ],
  imgSrc: decoImg2,
  alt: '',
  cover: false,

};

const skills = {

  skillsArr: [
    'PostgreSQL',
    'AWS: EC2',
    'Express',
    'Styled-Components',
    'Firebase',
    'Socket.io',
    'Node.js',
    'React',
  ],
  paragraphsArr: [
    `
    Postgres is perfect for structured data that rarely if ever changes in structure. And with all the data that was added to the database following a strict schema structure, going with a SQL database made sense.
    `,
    `
    I used Styled-Components since it closely mimics raw CSS while also being easy to maintain since it is CSS in JS. Then I used Firebase for authentication and AWS for ease of scaling down the line as more users used the app. And finally Socket.io was the perfect choice for
    the live chat feature.
    `
  ],

};

const problem = {

  paragraphsArr: [
    `
    One problem was the decision to filter server-side vs client-side. I'm
    targeting users who have good internet so taking advantage of the quick query speeds
    server side was the better choice over creating filters client side.
    `,
    `
    Another issue I noticed was that the chat room switch logic made it so that when users switched chat rooms, it applied to all users on the server instead of one. I realized the
    bug was that the chat room was being changed server side, so I refactored the server side logic out and implemented it on the client side so when the user changed rooms on the client side it queries the server for only that user and not the server.
    `
  ],

};

const pictures = {

  arr: [
    { src: decoImg5, alt: "#"},
    { src: decoImg3, alt: "#"},
    { src: decoImg6, alt: "#"},
  ]

};

const pictures2 = {

  arr: [
    { src: decoImg4, alt: "#"},
  ]

};

const whatsNext = {

  paragraphsArr: [
    `
    Down the road I'd like to add a limit to how many posts are viewable at a time on the page
    so it'll be easier for the user to navigate through the posts and I can speed up query times
    by only loading a set amount of data depending on the page they are on.
    `
  ],

};

const lessons = {

  paragraphsArr: [
    `
    This app helped me get some practice with quickly picking up new technologies like Socket.io
    and also system design thought processes on when it's better to implement features one way or
    another (such as filtering server or client side). I also had some great experiences working
    with the OpenAI API implementing it into this project.
    `
  ],

};

const altProjects = [

  {
    title: 'Rumble',
    subTitle: 'Full Stack Engineer - UI Owner',
    src: rumbleDecoImg1,
    alt: '',
  },
  {
    title: 'Threads',
    subTitle: 'Web Development',
    src: decoImg1,
    alt: '',
  },

];

const rumbleData = {
  hero,
  purpose,
  skills,
  problem,
  pictures,
  lessons,
  whatsNext,
  altProjects,
  pictures2,
};

export default rumbleData;
